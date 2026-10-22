# Triple Smoke website

A responsive, dark-themed static website for `triplesmoke.shop`, designed for GitHub Pages.

## Files
- `index.html` — page content
- `styles.css` — styling and responsive layout
- `script.js` — mobile navigation and basic age notice behavior
- `CNAME` — custom domain for GitHub Pages
- `favicon.svg` — browser icon

## Customize before publishing
Search `index.html` for:
- `ADD YOUR STORE ADDRESS`
- `ADD YOUR BUSINESS HOURS`
- `hello@triplesmoke.shop` (replace if needed)
- the `href="#"` social and phone links (replace with real URLs)
- product/service copy and legal notice as appropriate for your business

The age notice is present in the HTML but hidden by default. In `script.js`, uncomment the line that opens it on a first visit if you want the basic prompt displayed. This is not verified age assurance and may not satisfy local legal requirements. Review your applicable rules before publishing.

## Publish using GitHub Pages
1. Sign in to GitHub and create a **public** repository named `triple-smoke-website` (GitHub Free supports Pages for public repositories).
2. Upload the contents of this folder to the repository root. Upload the files themselves, not the containing folder.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, select branch `main` and folder `/(root)`, then click **Save**.
5. Under **Custom domain**, enter `triplesmoke.shop` and click **Save**. GitHub may add/commit a `CNAME` file; this package already includes one.
6. In a separate tab, open GoDaddy → your domain → **DNS / Manage DNS**.
7. Add the DNS records listed below. Before adding them, remove conflicting `A` records for `@` and any conflicting `CNAME` record for `www`; do not delete unrelated records such as email/MX records.
8. Wait for DNS to update, then return to GitHub **Settings → Pages** and enable **Enforce HTTPS** when the option becomes available.

## GoDaddy DNS records
Add four `A` records:
| Type | Name | Value | TTL |
|---|---|---|---|
| A | @ | 185.199.108.153 | Default |
| A | @ | 185.199.109.153 | Default |
| A | @ | 185.199.110.153 | Default |
| A | @ | 185.199.111.153 | Default |

Add a `CNAME` record:
| Type | Name | Value | TTL |
|---|---|---|---|
| CNAME | www | YOUR-GITHUB-USERNAME.github.io | Default |

Replace `YOUR-GITHUB-USERNAME` with your exact GitHub username. The CNAME points to the account's GitHub Pages hostname, not the repository name.

Do not add duplicate/conflicting records. If you use other services (especially email) on the domain, preserve their DNS records. DNS changes can take up to 24 hours to propagate.

Official instructions:
- https://docs.github.com/en/pages/getting-started-with-github-pages
- https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
- GoDaddy Help: https://www.godaddy.com/help
