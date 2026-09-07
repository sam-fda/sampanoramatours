# Deploying the tour to GitHub Pages

GitHub Pages serves this folder as a normal website — free, HTTPS, no server needed. It's a
good fit because every path in the app is already relative, so it works under any URL.

There are two ways to get the files up: the **website (no tools)** or **git**. Pick one.

---

## Before you start — get the tour ready

1. In **`admin.html`**, load your Enscape exports and set your view limits.
2. Run **Optimise for web** → puts light `panos/<id>.jpg` files in your Downloads. Move them
   into the **`panos/`** folder here. **Do not upload the raw multi-hundred-MB PNGs** — the
   `.gitignore` already excludes `panos/Enscape_*.png` for you.
3. Decide your final web address now, because the **QR codes must contain it** (step further
   down). It will be one of:
   - **Project URL:** `https://<account>.github.io/<repo>/`  (e.g. `https://spaceandmatter.github.io/tours/`)
   - **Custom domain:** `https://tours.spaceandmatter.nl/`  (optional, see the end)

---

## Preview the built tour locally first (optional)

Double-clicking `viewer.html` will **not** show the panoramas — browsers block local-file
images from WebGL for security. That's normal and only affects the `file://` preview; it works
fine once hosted. To preview locally, serve the folder over http from inside it:

```bash
python -m http.server 8000
```
then open <http://localhost:8000>. (`admin.html` is the exception — it works by double-click,
because dropped files load a different, allowed way.)

---

## Option A — Upload via the GitHub website (no tools)

1. Sign in at **github.com** → click **＋ → New repository**.
2. Name it (e.g. `panorama-tours`), choose **Public** (Pages is free on public repos; private
   repos need a paid GitHub plan), leave everything else default → **Create repository**.
3. On the new repo page click **“uploading an existing file”**.
4. Open this folder on your computer, select **everything inside it** (including the `panos`
   folder and the hidden `.nojekyll` file) and **drag it onto the GitHub page**. Wait for the
   files to finish, then **Commit changes**.
5. Go to **Settings → Pages**. Under **Build and deployment → Source** choose **Deploy from a
   branch**, set **Branch = `main`**, **Folder = `/ (root)`** → **Save**.
6. Wait ~1 minute, refresh the Pages settings page — it shows **“Your site is live at
   https://<account>.github.io/<repo>/”**. Open it: the tour should load.

## Option B — Upload via git (command line)

From inside this folder:

```bash
git init
git add .
git commit -m "Space & Matter panorama tour"
git branch -M main
git remote add origin https://github.com/<account>/<repo>.git
git push -u origin main
```

Then do **Settings → Pages** exactly as in Option A, steps 5–6.
(You can also use **GitHub Desktop** if you prefer clicking to typing.)

---

## Make the QR codes (do this once you know the live URL)

1. Open **`admin.html`**, rebuild the same tour (or keep it open from before).
2. Put your live URL in **Hosted base URL**, e.g. `https://<account>.github.io/<repo>/`
   (include the trailing slash).
3. **Download config.js** and **Generate QR codes**.
4. Replace `config.js` in the folder with the new one, commit/upload it again (Option A step 3–4,
   or `git add config.js && git commit -m "config" && git push`).
5. Print / place the QR codes. Each opens the tour at one panorama; guests move between the
   rest from the bottom slider.

> The QR encodes `…/viewer.html?start=<scene-id>`. If you ever rename scenes, regenerate the
> QR codes.

---

## Optional — put it on your own domain (tours.spaceandmatter.nl)

Nicer for clients, and keeps it on the S&M brand.

1. In the repo, **Settings → Pages → Custom domain**, type `tours.spaceandmatter.nl` → **Save**
   (this adds a `CNAME` file to the repo).
2. At whoever manages **spaceandmatter.nl DNS**, add a **CNAME record**:
   `tours` → `<account>.github.io`
3. Back in **Settings → Pages**, wait for the check to pass, then tick **Enforce HTTPS**.
4. Set the admin **Hosted base URL** to `https://tours.spaceandmatter.nl/` and regenerate the
   QR codes so they use the branded address.

This is independent of your main Webflow site — Webflow keeps serving `spaceandmatter.nl`,
GitHub serves the `tours.` subdomain. (If you'd rather embed the tour inside a Webflow project
page, add an `<iframe src="https://tours.spaceandmatter.nl/viewer.html?start=…">` there.)

---

## Multiple tours in one folder

You don't need a separate folder per project. One folder can hold many tours:

- In **admin.html**, set a **Tour ID** (e.g. `margriettoren`) before exporting. You get a
  config file named after it — `margriettoren.js` — instead of `config.js`.
- Do the same for the next project → `zeist.js`, etc. Put them all next to `viewer.html`.
- Each tour's QR opens its own via `?tour=`:
  `…/viewer.html?tour=margriettoren` or `…/viewer.html?tour=zeist&start=view-2`
- Leave the **Tour ID** blank for a single tour — that's the default `config.js`
  (opened by a plain `…/viewer.html`).

So: **don't combine unrelated projects into one config** — give each its own `<id>.js` and
its own QR. They share the same `viewer.html` and `panos/` folder.

**Let guests switch between projects.** In admin.html → **Projects menu**, list every tour
(`id | Name`, one per line) and download **`tours.js`** into the folder. The viewer then shows
a Projects button (the grid icon) that switches between them. A project with a single panorama
has no bottom scene-slider (nothing to slide to) but is still reachable from this menu.
`tours.js` is optional — omit it and there's simply no switcher.

## Updating a tour later

Change `config.js` or the images, then upload/commit again — Pages redeploys in about a minute.
No need to touch the QR codes unless scene ids changed.

## What to upload (and what not to)

**Upload:** `index.html`, `viewer.html`, `marzipano.js`, `config.js`, `panos/` (optimised JPGs),
`.nojekyll`.
**Optional:** `admin.html`, `qrcode.min.js` — only needed for authoring; harmless if present,
but you can leave them out of the public repo.
**Never upload:** the raw Enscape PNGs (huge; already git-ignored).
