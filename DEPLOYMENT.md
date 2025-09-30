# Grove and Vine Landing Page - Deployment Guide

## Quick Start

This landing page is designed to be deployed to **try.groveandvine.com** using GitHub Pages.

---

## Table of Contents

1. [GitHub Setup](#github-setup)
2. [Domain Configuration](#domain-configuration)
3. [Deploying Updates](#deploying-updates)
4. [A/B Testing Configuration](#ab-testing-configuration)
5. [Meta Pixel Setup](#meta-pixel-setup)
6. [Testing the Site](#testing-the-site)

---

## GitHub Setup

### 1. Initialize Git Repository

```bash
cd /Users/timothyshea/Projects/gv_lp
git init
git add .
git commit -m "Initial commit: Grove and Vine landing page"
```

### 2. Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it something like `gv-landing-page`
3. **Do NOT** initialize with README (we already have files)

### 3. Push to GitHub

```bash
git remote add origin https://github.com/YOUR_USERNAME/gv-landing-page.git
git branch -M main
git push -u origin main
```

### 4. Enable GitHub Pages

1. Go to repository **Settings** → **Pages**
2. Under **Source**, select branch: `main`
3. Select folder: `/ (root)`
4. Click **Save**
5. GitHub will deploy your site automatically

---

## Domain Configuration

### Setting up try.groveandvine.com

#### Option A: Using DNS Provider (Recommended)

1. **Go to your DNS provider** (where groveandvine.com is hosted)

2. **Add a CNAME record**:
   - **Type**: CNAME
   - **Name**: `try`
   - **Value**: `YOUR_USERNAME.github.io`
   - **TTL**: 3600 (or default)

3. **Wait for DNS propagation** (can take up to 48 hours, usually 15-30 minutes)

4. **Verify in GitHub**:
   - Go to repository **Settings** → **Pages**
   - Your custom domain should show: `try.groveandvine.com`
   - Enable **Enforce HTTPS** (recommended)

#### Option B: Using Netlify (Alternative, Easier)

If GitHub Pages is too complex, use Netlify instead:

1. **Sign up at [Netlify](https://netlify.com)**

2. **Deploy via GitHub**:
   - Click "New site from Git"
   - Connect your GitHub repository
   - Deploy settings: Leave default (no build command needed)

3. **Configure Custom Domain**:
   - Go to **Domain settings** → **Add custom domain**
   - Enter: `try.groveandvine.com`
   - Follow Netlify's DNS instructions

4. **Benefits of Netlify**:
   - Automatic HTTPS
   - Instant deployments
   - Deploy previews for branches
   - Form handling (if you add forms later)

---

## Deploying Updates

### Making Changes

1. **Edit files locally** (e.g., change headline in `config.js`)

2. **Test locally**:
   ```bash
   # Simple local server (Python 3)
   python3 -m http.server 8000

   # Or Node.js
   npx http-server

   # Open browser to: http://localhost:8000
   ```

3. **Commit and push**:
   ```bash
   git add .
   git commit -m "Update headline for variant B test"
   git push
   ```

4. **Wait 1-2 minutes** for GitHub Pages to rebuild

5. **Clear cache** and test at try.groveandvine.com

### Quick Deploy Script

Create a file `deploy.sh`:

```bash
#!/bin/bash
git add .
echo "Enter commit message:"
read message
git commit -m "$message"
git push
echo "Deployed! Site will update in 1-2 minutes."
```

Make it executable:
```bash
chmod +x deploy.sh
```

Run it:
```bash
./deploy.sh
```

---

## A/B Testing Configuration

### Quick Variant Switch

Edit `config.js` and change line 11:

```javascript
activeVariant: 'A',  // Change to 'B' or 'C'
```

**Available variants:**
- **Variant A**: "Finally, Olive Oil That's Actually Fresh"
- **Variant B**: "Your Olive Oil Is Probably Rancid"
- **Variant C**: "Discover What Real Olive Oil Tastes Like"

### Testing Different Variants via URL

You can test variants without deploying by using URL parameters:

- `try.groveandvine.com?variant=A`
- `try.groveandvine.com?variant=B`
- `try.groveandvine.com?variant=C`

### Creating New Variants

Add to `config.js`:

```javascript
variants: {
    A: { /* existing */ },
    B: { /* existing */ },
    C: { /* existing */ },
    D: {
        heroHeadline: "Your Custom Headline Here",
        heroSubheadline: "Your custom subheadline...",
        ctaText: "Your CTA Text →"
    }
}
```

### Split Testing with Facebook Ads

#### Method 1: Multiple Landing Pages (Recommended)

1. **Create separate HTML files**:
   ```bash
   cp index.html variant-a.html
   cp index.html variant-b.html
   ```

2. **Edit each file** to hardcode the variant

3. **Use different URLs in ads**:
   - Ad Set 1: `try.groveandvine.com/variant-a.html`
   - Ad Set 2: `try.groveandvine.com/variant-b.html`

#### Method 2: URL Parameters

Point your ads to:
- Ad Set 1: `try.groveandvine.com?variant=A&utm_content=headline_fresh`
- Ad Set 2: `try.groveandvine.com?variant=B&utm_content=headline_rancid`

Track performance in Facebook Ads Manager using UTM parameters.

---

## Meta Pixel Setup

### 1. Get Your Pixel ID

1. Go to [Facebook Events Manager](https://business.facebook.com/events_manager)
2. Copy your Pixel ID (looks like: `1234567890123456`)

### 2. Update config.js

```javascript
tracking: {
    metaPixelId: '1234567890123456',  // Replace with actual ID
    ...
}
```

### 3. Update index.html

Find line 25 and replace:
```javascript
fbq('init', 'YOUR_PIXEL_ID');
```

With:
```javascript
fbq('init', '1234567890123456');
```

Also line 40 (noscript tag).

### 4. Test Pixel

1. Install [Facebook Pixel Helper](https://chrome.google.com/webstore/detail/facebook-pixel-helper/) Chrome extension
2. Visit your landing page
3. Click the extension icon
4. Should show:
   - **PageView** event
   - **ViewContent** event
   - **AddToCart** when CTA is clicked

---

## Testing the Site

### Pre-Launch Checklist

- [ ] Meta Pixel ID updated in both files
- [ ] Discount code works: `FRESH15`
- [ ] All images load correctly
- [ ] Mobile responsive (test on phone)
- [ ] All CTAs link to correct checkout URL
- [ ] Countdown timer works
- [ ] Press logos display correctly
- [ ] Testimonial carousel scrolls smoothly
- [ ] Forms/links go to correct destinations

### Browser Testing

Test in:
- Chrome (desktop & mobile)
- Safari (desktop & mobile)
- Firefox
- Edge

### Performance Testing

1. **Google PageSpeed Insights**:
   - Visit: https://pagespeed.web.dev/
   - Enter: try.groveandvine.com
   - Target: 90+ mobile score

2. **Facebook Debugger**:
   - Visit: https://developers.facebook.com/tools/debug/
   - Enter: try.groveandvine.com
   - Check meta tags display correctly

### Mobile Testing

1. **Open on phone**: `try.groveandvine.com`
2. **Check**:
   - Sticky header appears on scroll
   - Sticky footer appears on scroll
   - All buttons are easy to tap (44px minimum)
   - Text is readable without zooming
   - Images don't overflow

---

## Troubleshooting

### Site Not Updating

1. **Clear browser cache**: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)
2. **Check GitHub Actions**: Repository → Actions tab
3. **Wait**: Can take 1-2 minutes for GitHub Pages to rebuild

### Custom Domain Not Working

1. **Check DNS propagation**: https://dnschecker.org/
2. **Verify CNAME file**: Should contain only `try.groveandvine.com`
3. **Check GitHub Pages settings**: Settings → Pages

### Images Not Loading

1. **Check file paths**: All paths are relative (no leading `/`)
2. **Check file names**: Case-sensitive on Linux servers
3. **Check .gitignore**: Make sure images aren't ignored

### Meta Pixel Not Firing

1. **Check Pixel ID**: Must be correct in both `config.js` and `index.html`
2. **Check browser console**: Look for errors
3. **Disable ad blockers**: They may block Facebook Pixel

---

## Advanced: Netlify Deployment

If you prefer Netlify over GitHub Pages:

### 1. Create netlify.toml

```toml
[build]
  publish = "."

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
```

### 2. Deploy

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod
```

### 3. Configure Domain

Follow Netlify's domain setup wizard.

---

## Support & Maintenance

### Weekly Tasks

- [ ] Check conversion rates in Facebook Ads Manager
- [ ] Test new A/B variants based on data
- [ ] Update scarcity counter (bottles remaining)
- [ ] Verify Meta Pixel is still firing

### Monthly Tasks

- [ ] Run PageSpeed Insights audit
- [ ] Review and optimize slow-loading images
- [ ] Update testimonials/reviews
- [ ] Check for broken links

### Contact

For technical issues, contact your development team or refer to:
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Netlify Documentation](https://docs.netlify.com/)
- [Meta Pixel Documentation](https://developers.facebook.com/docs/meta-pixel)

---

## Next Steps

1. **Deploy to GitHub** (follow GitHub Setup above)
2. **Configure Domain** (follow Domain Configuration above)
3. **Set up Meta Pixel** (follow Meta Pixel Setup above)
4. **Test thoroughly** (follow Testing checklist above)
5. **Launch ads** pointing to try.groveandvine.com
6. **Monitor performance** and iterate with A/B tests

Good luck with your campaign! 🫒
