# The Daily Brief — News Blogging Website

A fast, ad-ready news website built with plain **HTML/CSS/JS** that you can host **anywhere** for free. It ships with ad slots, SEO tags, and a newsletter form so you can monetize from day one.

## What's inside

```
blog/
├── index.html       # Home page: hero, trending, latest grid, ads, sidebar
├── article.html     # Article page template (with in-article ads)
├── css/style.css    # Responsive, ad-friendly design
├── js/
│   ├── data.js      # ← EDIT THIS: your news articles live here
│   └── main.js      # Renders cards, mobile menu, newsletter form
├── assets/          # Replace placeholder images with real photos
├── ads.txt          # Ad network verification file
├── robots.txt       # Search engine instructions
├── sitemap.xml      # Helps Google index you faster
└── README.md
```

## How to publish your first post

Open `js/data.js` and add/edit articles in the `NEWS` array:

```js
{
  id: 7,
  title: "Your Story Headline",
  excerpt: "A short 1–2 sentence summary shown on the card.",
  category: "Politics",        // or Business, Tech, Science, etc.
  author: "Your Name",
  date: "3 hours ago",
  readTime: "4 min",
  image: "assets/your-image.jpg",
}
```

Put the corresponding image in `assets/`. That's it — the home page updates automatically.

## Deploy free on GitHub Pages (3 steps)

Since you already have GitHub:

1. **Create a new repo** on GitHub named exactly `YOURUSERNAME.github.io` (replace YOURUSERNAME with your GitHub username).
2. **Upload** the `blog/` folder contents into the repo root.
3. Go to **Settings → Pages**, choose `Deploy from a branch` → `main`, and save.

Your site goes live at `https://YOURUSERNAME.github.io/` within a minute or two.

**Then replace every `YOURUSERNAME.github.io/YOURREPO/`** in `index.html`, `article.html`, `robots.txt`, and `sitemap.xml` with your real URL.

> Alternate free hosts: **Netlify** and **Vercel** (drag-and-drop the `blog/` folder), or **Cloudflare Pages**.

---

## Making money (passive income path)

The ad slots are already built into the pages. Here's the realistic ladder:

### 1. Google AdSense (start here) — $50–$300/mo at low traffic
- Best first network for a new site. Payouts start small but scale with traffic.
- Apply at **adsense.google.com** once you have ~20+ published articles.
- When approved, paste your ad code into each `<div class="ad-placeholder">` block in the HTML. Then add your publisher line to `ads.txt`.

### 2. Adsterra / Ezoic (alternative) — get approved sooner
- If AdSense rejects you early on, **Ezoic** and **Adsterra** accept smaller/younger sites. Lower revenue per visitor but easier entry.

### 3. Mediavine / Raptive (the big payouts) — $15–$50 RPM
- Once you reach ~50,000 sessions/month, apply for **Mediavine** or **Raptive**. These pay **2–5× more** per visitor than AdSense. This is where news sites actually make real money.

### 4. Affiliate links (add-on)
- Add Amazon Associates / partner links inside articles (e.g., product roundups, "best of" lists). News drives traffic; affiliate links monetize it.

### Realistic expectation
- News advertising revenue depends heavily on **traffic**. ~10k visitors/mo with AdSense ≈ $30–$100/mo. At 100k+ visitors/mo with Mediavine ≈ $1,000–$3,000/mo.
- **The bottleneck is content + SEO**, not the ads. Publish daily, target search-friendly topics, and the ad money follows.

---

## Newsletter (email list = long-term value)
The subscribe forms are wired to a success toast. Connect a free **Mailchimp** or **Buttondown** account and point the form's submit handler at your list to start building an audience you own (email subscribers are worth far more than ad views over time).

## SEO checklist
- [ ] Replace all `YOURUSERNAME.github.io/YOURREPO` URLs
- [ ] Write a unique `<title>` + `<meta name="description">` per article
- [ ] Replace placeholder images with original, compressed photos
- [ ] Set up Google **Search Console** and submit your sitemap
- [ ] Add a Privacy Policy page (required by AdSense and consent-based ad tools)
- [ ] Post to Google News once you have ~5 consistent articles (drive real news traffic)

---

## License
Use it for your own project. Replace the name, content, and images as you like.