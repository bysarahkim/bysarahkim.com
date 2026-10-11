(async () => {
  const message = document.getElementById('editor-message');
  try {
    const [configResponse, authResponse] = await Promise.all([
      fetch('/admin/config.json', {cache:'no-store'}),
      fetch('/admin/auth.json', {cache:'no-store'})
    ]);
    if (!configResponse.ok || !authResponse.ok) throw new Error('Configuration could not be loaded.');
    const config = await configResponse.json();
    const auth = await authResponse.json();
    if (!auth.base_url) {
      message.textContent = 'GitHub sign-in needs its one-time connection. The public website is available; publishing from this editor will be enabled after the owner connects the authentication service.';
      return;
    }
    const authUrl = new URL(auth.base_url);
    if (authUrl.protocol !== 'https:' || authUrl.username || authUrl.password || authUrl.search || authUrl.hash) throw new Error('The sign-in service URL is invalid.');
    config.backend.base_url = authUrl.origin;
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/decap-cms@3.16.3/dist/decap-cms.js';
    script.onload = () => {
      try {
        const init = window.initCMS || window.CMS?.init;
        if (!init) throw new Error('The editor library did not initialize.');
        init({config:{...config,load_config_file:false}});
        document.getElementById('editor-status').hidden = true;
      } catch {
        message.textContent = 'The editor could not start. Refresh the page or contact the site owner.';
      }
    };
    script.onerror = () => { message.textContent = 'The editor could not be loaded. Please refresh the page.'; };
    document.head.append(script);
  } catch {
    message.textContent = 'The editor configuration could not be loaded. Please refresh the page or contact the site owner.';
  }
})();
