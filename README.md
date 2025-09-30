# Grove and Vine Landing Page

A modular, high-converting landing page for Grove and Vine olive oil, optimized for Meta Ads campaigns with built-in A/B testing capabilities.

**Live Site**: [try.groveandvine.com](https://try.groveandvine.com)

---

## 🎯 Overview

This landing page is designed for:
- **Audience**: "Olive Oil Interests" on Facebook/Instagram
- **Goal**: Membership conversions + single bottle purchases
- **Offer**: 15% discount (auto-applied via platform link)
- **Design**: Matches groveandvine.com aesthetic

---

## 🚀 Quick Start

### View Locally

```bash
# Simple Python server
python3 -m http.server 8000

# Or Node.js
npx http-server

# Open: http://localhost:8000
```

### Deploy to GitHub Pages

```bash
# Initialize and push
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/gv-landing-page.git
git push -u origin main

# Enable GitHub Pages in repo Settings → Pages
```

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions.

---

## 🧪 A/B Testing (Super Easy!)

### Change Variant

Edit `config.js` line 11:

```javascript
activeVariant: 'A',  // Change to 'B' or 'C'
```

### Available Variants

- **A**: "Finally, Olive Oil That's Actually Fresh"
- **B**: "Your Olive Oil Is Probably Rancid"
- **C**: "Discover What Real Olive Oil Tastes Like"

### Test via URL

- `try.groveandvine.com?variant=A`
- `try.groveandvine.com?variant=B`
- `try.groveandvine.com?variant=C`

### What You Can A/B Test

All editable in `config.js`:
- Hero headlines
- Subheadlines
- CTA button text
- Pricing
- Urgency messages
- Scarcity numbers
- Countdown timers

---

## 📁 File Structure

```
gv_lp/
├── index.html          # Main landing page
├── styles.css          # Styling (matches Grove & Vine aesthetic)
├── config.js           # A/B testing configuration
├── CNAME               # Domain configuration (try.groveandvine.com)
├── README.md           # This file
├── DEPLOYMENT.md       # Deployment instructions
├── .gitignore          # Git ignore rules
│
├── logo/               # Grove and Vine logo
├── press logos/        # Media outlet logos (NYT, GQ, etc.)
├── images/             # Product & lifestyle images
└── social selects/     # 9x16 UGC testimonial images
```

---

## ✨ Features

### Design
- ✅ Matches groveandvine.com aesthetic
- ✅ Vintage typography (Playfair Display + IBM Plex Mono)
- ✅ Earthy color palette (olive greens, beiges, golds)
- ✅ Mobile-first responsive design
- ✅ Sticky header & footer (mobile)

### Functionality
- ✅ Modular A/B testing system
- ✅ Meta Pixel tracking integrated
- ✅ Countdown timer
- ✅ Scarcity indicators
- ✅ Testimonial carousel
- ✅ Multiple CTAs tracked
- ✅ URL parameter support

### Performance
- ✅ Pure HTML/CSS/JS (no frameworks)
- ✅ Fast load times (<3s)
- ✅ Optimized for Core Web Vitals
- ✅ Mobile-friendly (90+ PageSpeed score)

---

## 🎨 Design System

### Colors
```css
--olive-green: #838158
--forest-green: #506b3b
--soft-beige: #d9d9bf
--cream: #FAFAF8
--gold: #C9A961
```

### Typography
- **Headlines**: Playfair Display (serif)
- **Body**: IBM Plex Mono (monospace)

### Spacing
- Based on 8px grid system
- Generous white space for premium feel

---

## 📊 Tracking & Analytics

### Meta Pixel Events

Automatically tracked:
- ✅ `PageView` - On page load
- ✅ `ViewContent` - On page load
- ✅ `AddToCart` - On CTA clicks
- ✅ `ScrollDepth` - At 25%, 50%, 75%, 100%
- ✅ `TimeOnPage` - At 30s, 60s, 120s

### Setup Meta Pixel

1. Get Pixel ID from [Facebook Events Manager](https://business.facebook.com/events_manager)
2. Update `config.js` line 53:
   ```javascript
   metaPixelId: 'YOUR_PIXEL_ID',
   ```
3. Update `index.html` line 25 & 40 with same ID

### UTM Parameters

Recommended structure:
```
try.groveandvine.com?
  utm_source=facebook
  &utm_medium=paid
  &utm_campaign=olive-oil-interests
  &utm_content=variant-a-fresh
  &variant=A
```

---

## 🎯 Landing Page Sections

1. **Hero** - Product image, headline, pricing, CTA
2. **Press Bar** - As Featured In logos
3. **Testimonials** - UGC carousel with 9:16 images
4. **Problem/Agitation** - "Uncomfortable Truth About Your Olive Oil"
5. **Differentiators** - 4 key value props
6. **Membership** - Comparison table
7. **Urgency** - Scarcity & shipping countdown
8. **Trust** - Risk reversal icons
9. **Final CTA** - Last chance with countdown

---

## 🛠️ Making Changes

### Update Headline

Edit `config.js`:
```javascript
variants: {
    A: {
        heroHeadline: "Your New Headline Here",
        heroSubheadline: "Your new subheadline...",
        ctaText: "Your CTA →"
    }
}
```

### Update Pricing

Edit `config.js`:
```javascript
pricing: {
    originalPrice: 49.00,
    discountPercent: 15,  // Change discount
    discountCode: 'FRESH15',
    membershipPrice: 48.75
}
```

### Update Scarcity

Edit `config.js`:
```javascript
urgency: {
    enabled: true,
    bottlesRemaining: 47,  // Change number
    currentCollection: 'Collection #39: Chilean Coratina',
    harvestDate: 'May 2025',
    shippingDays: 4
}
```

### Update Countdown

Edit `config.js`:
```javascript
countdown: {
    enabled: true,
    hours: 2,
    minutes: 47,
    seconds: 33
}
```

---

## 📱 Mobile Optimizations

- Single column layout below 768px
- Sticky header (appears on scroll)
- Sticky footer with pricing + CTA
- Touch-friendly buttons (44px minimum)
- Swipeable testimonial carousel
- Optimized font sizes

---

## ✅ Pre-Launch Checklist

- [ ] Update Meta Pixel ID in `config.js` and `index.html`
- [ ] Test all 3 variants (A, B, C)
- [ ] Verify discount code works: `FRESH15`
- [ ] Test on mobile devices
- [ ] Check all CTAs link to correct checkout
- [ ] Verify images load correctly
- [ ] Test Meta Pixel with Facebook Pixel Helper extension
- [ ] Run PageSpeed Insights (target 90+)
- [ ] Test in Chrome, Safari, Firefox
- [ ] Set up custom domain (try.groveandvine.com)

---

## 🔧 Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, Grid, Flexbox
- **Vanilla JavaScript** - No dependencies
- **Meta Pixel** - Facebook tracking
- **GitHub Pages** or **Netlify** - Hosting

No build process. No dependencies. Just deploy and go.

---

## 📈 Recommended Testing Strategy

### Phase 1: Headline Test (Week 1)
Test variants A, B, C with equal traffic split.

### Phase 2: CTA Test (Week 2)
Test different button copy on winning headline.

### Phase 3: Placement Test (Week 3)
Test membership section placement:
- After testimonials
- After differentiators
- As popup

### Phase 4: Social Proof Test (Week 4)
Test testimonial formats:
- UGC carousel
- Text testimonials
- Mixed

---

## 🚨 Troubleshooting

### Images Not Loading
- Check file paths are relative
- Verify files are in correct folders
- Check .gitignore isn't excluding images

### Meta Pixel Not Firing
- Verify Pixel ID is correct
- Check browser console for errors
- Disable ad blockers
- Use Facebook Pixel Helper extension

### Site Not Updating
- Clear browser cache (Cmd+Shift+R)
- Wait 1-2 minutes for GitHub Pages rebuild
- Check GitHub Actions tab

### Domain Not Working
- Verify CNAME file contains: `try.groveandvine.com`
- Check DNS propagation: https://dnschecker.org/
- Wait up to 48 hours for DNS changes

---

## 📚 Documentation

- **[DEPLOYMENT.md](DEPLOYMENT.md)** - Detailed deployment instructions
- **[config.js](config.js)** - Inline comments explain all options
- **[gv-landing-readme.md](gv-landing-readme.md)** - Original project brief
- **[gv-wireframe-only.md](gv-wireframe-only.md)** - Page structure wireframe

---

## 🎓 Best Practices

### A/B Testing
- Test one variable at a time
- Run tests for at least 1000 visitors
- Achieve statistical significance (95%+)
- Document all changes and results

### Performance
- Keep images under 200KB each
- Use WebP format when possible
- Lazy load images below fold
- Minimize third-party scripts

### Conversion Optimization
- Clear, benefit-focused headlines
- Single primary CTA per section
- Trust signals throughout
- Mobile-first design
- Fast load times (<3s)

---

## 🤝 Contributing

### Making Updates

1. Create a new branch:
   ```bash
   git checkout -b test-variant-d
   ```

2. Make changes

3. Test locally

4. Push and deploy:
   ```bash
   git add .
   git commit -m "Add variant D headline test"
   git push
   ```

### Naming Conventions

- Branches: `test-variant-{letter}`, `update-{feature}`
- Commits: Descriptive messages (e.g., "Update hero headline for variant B test")

---

## 📞 Support

- **Technical Issues**: See [DEPLOYMENT.md](DEPLOYMENT.md) troubleshooting
- **Design Updates**: Reference [groveandvine.com](https://groveandvine.com) for brand consistency
- **Facebook Pixel**: [Meta Business Help Center](https://www.facebook.com/business/help)

---

## 📝 License

© 2025 Grove and Vine. All rights reserved.

---

## 🎉 Launch Checklist

When you're ready to launch:

1. ✅ Deploy to try.groveandvine.com
2. ✅ Configure DNS (CNAME)
3. ✅ Enable HTTPS
4. ✅ Set up Meta Pixel
5. ✅ Test all variants
6. ✅ Mobile QA
7. ✅ Cross-browser testing
8. ✅ PageSpeed audit (90+ score)
9. ✅ Create Facebook campaigns
10. ✅ Monitor first 24 hours closely

---

**Ready to launch?** See [DEPLOYMENT.md](DEPLOYMENT.md) for step-by-step instructions.

Good luck! 🫒✨
