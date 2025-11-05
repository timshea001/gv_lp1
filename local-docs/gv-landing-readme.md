# Grove and Vine Landing Page Implementation Guide
## Meta Ads Campaign - Olive Oil Interests Audience

---

## PROJECT OVERVIEW

This landing page is designed for Meta Ads traffic targeting the "Olive Oil Interests" audience. The primary goal is membership conversions with single bottle purchases as a trial mechanism.

**Campaign Parameters:**
- **Discount:** 15% auto-applied via platform link feature
- **Primary KPI:** Membership conversion rate
- **Secondary KPI:** Single bottle to membership upgrade rate
- **Traffic Source:** Facebook/Instagram Ads

---

## DESIGN SYSTEM - MATCH GROVEANDVINE.COM

### Typography
- **Headlines:** Use the serif font from current site (appears to be a classic serif like Playfair Display or similar)
- **Body Copy:** Clean sans-serif matching current site (appears to be system fonts or Open Sans family)
- **Font Sizes:** Follow existing hierarchy from groveandvine.com
- **Line Height:** Generous spacing as seen on current site (1.6-1.8 for body)

### Color Palette (Extract from current site)
- **Primary Black:** #000000 or very dark gray for main text
- **Warm White/Cream:** Off-white background (#FAFAF8 or similar)
- **Olive Green:** For accents and CTAs (pull from current site buttons)
- **Gold Accents:** For premium touches and hover states
- **Muted Grays:** For secondary text and borders

### Visual Style
- **Photography:** Documentary-style, authentic shots (not stock photos)
  - Olive groves in natural light
  - Behind-scenes harvest/production shots
  - Dark glass bottles on light backgrounds
  - Hand-typed scrolls and packaging details
- **Product Shots:** Dark glass bottles at slight angle showing labels
- **Icons:** Simple line icons, minimal style
- **Borders/Dividers:** Thin, elegant lines (1px max)
- **Shadows:** Subtle only (no harsh drop shadows)

### Component Styling
- **Buttons:** 
  - Rounded corners (4-6px)
  - Solid fill for primary CTAs
  - Ghost/outline style for secondary
  - Generous padding (match current site)
- **Cards/Sections:** 
  - Minimal or no borders
  - Use white space for separation
  - Subtle background color changes acceptable
- **Forms:** 
  - Clean, minimal styling
  - Clear focus states
  - Match current checkout experience

### Layout Principles
- **White Space:** Generous, premium feel (don't crowd elements)
- **Grid:** Clean, aligned, symmetrical
- **Max Width:** Content should have max-width (1200-1400px) centered
- **Padding:** Consistent spacing system (likely 8px base unit)

---

## COPYWRITING GUIDELINES

### Voice & Tone
- **Education Level:** Sophisticated but accessible (college-educated audience)
- **Emotion Mix:** 60% rational (facts, process, credentials), 40% emotional (frustration, discovery)
- **Authority:** Expert confidence without condescension
- **Enthusiasm:** Passionate about olive oil without being precious

### Messaging Hierarchy
1. **Problem Awareness:** Your olive oil is probably rancid
2. **Unique Solution:** Hemispheric harvest chasing for ultimate freshness
3. **Credibility:** Oleologist expertise + media validation
4. **Value Demonstration:** Membership economics make it obvious choice
5. **Urgency:** Real scarcity from limited batches

### Key Phrases to Include
- "Within months of harvest" (not years like grocery stores)
- "Personally selected by Nicholas Coleman"
- "Chasing harvests across both hemispheres"
- "Museum-quality olive oil"
- "Single-estate transparency"
- "Never more than 6 months from tree to table"

### Phrases to Avoid
- Overly technical jargon without explanation
- Negative competitors directly by name
- "Luxury" or "exclusive" (focus on quality/freshness instead)
- Medical claims beyond general Mediterranean diet benefits

---

## TECHNICAL REQUIREMENTS

### Performance Targets
- **LCP:** < 2.5 seconds
- **FID:** < 100ms
- **CLS:** < 0.1
- **Mobile Score:** 90+ on PageSpeed Insights

### Browser Support
- Chrome/Edge (last 2 versions)
- Safari (last 2 versions)
- Firefox (last 2 versions)
- Mobile Safari iOS 14+
- Chrome Mobile Android 10+

### Responsive Breakpoints
- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px+
- Large Desktop: 1440px+

### Meta Pixel Implementation
```javascript
// Required Events
fbq('track', 'PageView');
fbq('track', 'ViewContent', {
  content_name: 'Olive Oil Landing Page',
  content_category: 'Landing Page',
  value: 49.00,
  currency: 'USD'
});
fbq('track', 'AddToCart', {
  content_name: 'Grove and Vine Olive Oil',
  content_type: 'product',
  value: 41.65, // With discount
  currency: 'USD'
});
fbq('track', 'InitiateCheckout');
fbq('track', 'Purchase', {
  value: 41.65,
  currency: 'USD'
});

// Custom Events
fbq('trackCustom', 'ScrollDepth', {depth: '25%'});
fbq('trackCustom', 'TimeOnPage', {seconds: 30});
fbq('trackCustom', 'VideoPlay'); // If applicable
```

### URL Parameters to Track
- `utm_source=facebook`
- `utm_medium=paid`
- `utm_campaign={campaign_name}`
- `utm_content={ad_variant}`
- `utm_term={audience_segment}`

---

## A/B TESTING PLAN

### Test Priority Order
1. **Hero Headline** (3 variants)
   - "Finally, Olive Oil That's Actually Fresh"
   - "Your Olive Oil Is Probably Rancid"
   - "Discover What Real Olive Oil Tastes Like"

2. **CTA Button Copy**
   - "Get 15% Off Your First Bottle"
   - "Claim Your Fresh Oil"
   - "Shop Now & Save 15%"

3. **Membership Section Placement**
   - After UGC testimonials
   - After product education
   - As popup after 30 seconds

4. **Social Proof Type**
   - Instagram UGC carousel
   - Traditional text testimonials
   - Mix of both

5. **Urgency Messaging**
   - Bottles remaining counter
   - Shipping countdown
   - No urgency (control)

### Success Metrics
- Primary: Conversion rate (purchases/visitors)
- Secondary: Add to cart rate
- Tertiary: Membership upgrade rate
- Behavioral: Time on page, scroll depth, bounce rate

---

## MOBILE-SPECIFIC REQUIREMENTS

### Touch Targets
- Minimum 44x44px for all interactive elements
- 8px minimum spacing between targets

### Sticky Elements
- **Header:** Appears after 100px scroll
  - Logo + CTA button only
  - Transparent to solid background transition
- **Footer:** Price + Add to Cart (mobile only)
  - Appears after hero section
  - Remains fixed at bottom

### Mobile Optimizations
- Single column layout below 768px
- Swipeable carousels for testimonials
- Accordion/tabs for complex comparisons
- Lazy load all images below fold
- Reduced font sizes (but maintain readability)

---

## ACCESSIBILITY REQUIREMENTS

### WCAG 2.1 Level AA Compliance
- Color contrast ratios: 4.5:1 minimum
- Focus indicators on all interactive elements
- Proper heading hierarchy (h1 → h2 → h3)
- Alt text on all images
- ARIA labels where needed
- Keyboard navigation support

### Screen Reader Optimization
- Semantic HTML5 elements
- Proper form labels
- Skip navigation link
- Descriptive link text (not "click here")

---

## QA CHECKLIST

### Pre-Launch
- [ ] 15% discount auto-applies correctly
- [ ] All tracking pixels fire correctly
- [ ] Mobile responsive across all breakpoints
- [ ] Forms submit to correct endpoints
- [ ] Page loads under 3 seconds on 3G
- [ ] All links tested and working
- [ ] Cross-browser testing complete
- [ ] Accessibility audit passed

### Post-Launch Monitoring
- [ ] Meta Pixel receiving data
- [ ] Conversion tracking accurate
- [ ] No JavaScript errors in console
- [ ] Server response times acceptable
- [ ] A/B tests configured correctly
- [ ] Heat mapping tool installed
- [ ] Customer service briefed on offer

---

## ASSET REQUIREMENTS

### From Grove and Vine Team
- High-res product photography (2000px+ width)
- Press logos (vector or high-res PNG)
- Instagram UGC testimonial images (9:16 ratio)
- Nicholas Coleman photography
- Harvest/grove photography
- Artist label artwork samples

### To Be Created
- Optimized hero images (multiple sizes)
- Icon set matching brand style
- Comparison table graphics
- Mobile-specific assets
- Social proof badges

---

## INTEGRATION NOTES

### Platform Considerations
- Ensure checkout platform supports discount links
- Confirm inventory tracking for scarcity display
- Set up abandoned cart email triggers
- Configure customer service chat widget
- Connect to email marketing for follow-up

### Third-Party Scripts (Load Order)
1. Critical CSS (inline)
2. Meta Pixel (head)
3. Core JavaScript
4. Web fonts
5. Chat widget (defer)
6. Analytics (defer)
7. A/B testing tool (defer)

---

## LAUNCH TIMELINE

### Phase 1: Development (5-7 days)
- Wire up frontend
- Implement tracking
- Mobile optimization
- Cross-browser testing

### Phase 2: QA & Optimization (2-3 days)
- Performance optimization
- Accessibility audit
- UAT with stakeholders
- Final content review

### Phase 3: Launch & Monitor (Ongoing)
- Soft launch to 10% traffic
- Monitor metrics for 24 hours
- Full launch if metrics acceptable
- Daily optimization based on data

---

## CONTACT & SUPPORT

**Project Manager:** [Name]  
**Developer Lead:** [Name]  
**Design Lead:** [Name]  
**Copy Lead:** [Name]  
**Analytics:** [Name]  

**Emergency Contacts:**
- Server issues: [Contact]
- Tracking problems: [Contact]
- Platform/discount issues: [Contact]

---

## VERSION HISTORY

- v1.0 - Initial landing page launch
- v1.1 - TBD based on A/B test results
- v1.2 - TBD based on conversion optimization