# Website editor authentication

The editor at `https://bysarahkim.com/admin/` uses Decap CMS with GitHub as its content backend. A small Cloudflare Worker completes the GitHub OAuth handshake and permits only the `bysarahkim` GitHub account with push access to this repository.

## One-time connection

1. Sign in to Cloudflare with Wrangler and deploy this directory.
2. Create a GitHub OAuth App with:
   - Homepage URL: `https://bysarahkim.com/admin/`
   - Authorization callback URL: `https://<worker-host>/callback`
3. Store the OAuth app values as Cloudflare Worker secrets named `GITHUB_CLIENT_ID` and `GITHUB_CLIENT_SECRET`. Never commit either value.
4. Set `public/admin/auth.json` to `{ "base_url": "https://<worker-host>" }`.
5. Publish the site and confirm that `/health` returns `{ "ready": true }` before using the editor.

The Worker requests GitHub's `public_repo` scope and refuses access unless the signed-in username matches `bysarahkim` and the account has push permission to `bysarahkim/bysarahkim.com`.
