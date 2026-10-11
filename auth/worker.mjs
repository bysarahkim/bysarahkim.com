const cookieName = '__Host-cms-state';
const headers = {
  'Cache-Control': 'no-store',
  'Referrer-Policy': 'no-referrer',
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
};
const cookie = (value, age=600) => `${cookieName}=${value}; Max-Age=${age}; Path=/; Secure; HttpOnly; SameSite=Lax`;
const fail = (message, status) => new Response(message, {status,headers:{...headers,'Set-Cookie':cookie('',0)}});
const random = () => [...crypto.getRandomValues(new Uint8Array(32))].map(b=>b.toString(16).padStart(2,'0')).join('');
const jsonForScript = value => JSON.stringify(value).replaceAll('<','\\u003c');

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (request.method !== 'GET') return fail('Method not allowed.',405);
    if (url.pathname === '/health') return Response.json({ready:!!(env.GITHUB_CLIENT_ID && env.GITHUB_CLIENT_SECRET)}, {headers});
    if (!['/auth','/callback'].includes(url.pathname)) return fail('Not found.',404);
    if (!env.GITHUB_CLIENT_ID || !env.GITHUB_CLIENT_SECRET) return fail('GitHub sign-in has not been connected yet.',503);
    if (env.SITE_ORIGIN !== 'https://bysarahkim.com' || env.GITHUB_OWNER !== 'bysarahkim' || env.GITHUB_REPO !== 'bysarahkim.com') return fail('Invalid owner configuration.',503);
    const callback = `${url.origin}/callback`;
    if (url.pathname === '/auth') {
      const provider = url.searchParams.get('provider');
      if (provider && provider !== 'github') return fail('Unsupported provider.',400);
      const state = random();
      const authorize = new URL('https://github.com/login/oauth/authorize');
      authorize.search = new URLSearchParams({client_id:env.GITHUB_CLIENT_ID,redirect_uri:callback,scope:'public_repo',state,allow_signup:'false'}).toString();
      return new Response(null,{status:302,headers:{...headers,Location:authorize.href,'Set-Cookie':cookie(state)}});
    }
    const state = url.searchParams.get('state');
    const stored = request.headers.get('Cookie')?.split(';').map(s=>s.trim()).find(s=>s.startsWith(`${cookieName}=`))?.slice(cookieName.length+1);
    if (!state || !/^[a-f0-9]{64}$/.test(state) || state !== stored) return fail('Sign-in expired or was not started here. Close this window and try again.',400);
    if (url.searchParams.has('error')) return fail('GitHub sign-in was cancelled. You may close this window.',400);
    const code = url.searchParams.get('code');
    if (!code) return fail('Missing authorization code.',400);
    try {
      const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
        method:'POST',headers:{Accept:'application/json','Content-Type':'application/json'},
        body:JSON.stringify({client_id:env.GITHUB_CLIENT_ID,client_secret:env.GITHUB_CLIENT_SECRET,code,redirect_uri:callback})
      });
      const token = await tokenResponse.json();
      if (!tokenResponse.ok || !token.access_token) return fail('GitHub sign-in failed. Please try again.',502);
      const apiHeaders = {Authorization:`Bearer ${token.access_token}`,Accept:'application/vnd.github+json','User-Agent':'bysarahkim-cms-auth','X-GitHub-Api-Version':'2022-11-28'};
      const userResponse = await fetch('https://api.github.com/user',{headers:apiHeaders});
      const user = await userResponse.json();
      if (!userResponse.ok || user.login?.toLowerCase() !== env.GITHUB_OWNER.toLowerCase()) return fail('Only the website owner may edit this site.',403);
      const repoResponse = await fetch(`https://api.github.com/repos/${env.GITHUB_OWNER}/${env.GITHUB_REPO}`,{headers:apiHeaders});
      const repo = await repoResponse.json();
      if (!repoResponse.ok || !repo.permissions?.push) return fail('This account does not have permission to publish this website.',403);
      const nonce = random();
      const success = `authorization:github:success:${JSON.stringify({token:token.access_token,provider:'github'})}`;
      const html = `<!doctype html><html lang="en"><meta charset="utf-8"><meta name="referrer" content="no-referrer"><title>GitHub sign-in</title><p>Sign-in complete. Returning to the editor…</p><script nonce="${nonce}">
        const origin = ${jsonForScript(env.SITE_ORIGIN)};
        const opener = window.opener;
        if (opener) {
          const receive = event => {
            if (event.origin !== origin || event.source !== opener || event.data !== 'authorizing:github') return;
            window.removeEventListener('message', receive);
            opener.postMessage(${jsonForScript(success)}, origin);
            window.close();
          };
          window.addEventListener('message', receive);
          opener.postMessage('authorizing:github', origin);
        }
      </script></html>`;
      return new Response(html,{headers:{...headers,'Content-Type':'text/html; charset=utf-8','Set-Cookie':cookie('',0),'Content-Security-Policy':`default-src 'none'; script-src 'nonce-${nonce}'; frame-ancestors 'none'; base-uri 'none'`}});
    } catch {
      return fail('The sign-in service could not reach GitHub. Please try again.',502);
    }
  }
};
