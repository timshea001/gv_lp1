/**
 * Grove and Vine Landing Page A/B Testing Configuration
 *
 * This file contains all the variables you can easily swap for A/B testing.
 * Simply change the values here and the page will update automatically.
 */

window.abTestConfig = {
    // ===================================
    // VARIANT SELECTION
    // ===================================
    // Change this to test different variants: 'A', 'B', or 'C'
    activeVariant: 'A',

    // ===================================
    // HERO SECTION VARIANTS
    // ===================================
    variants: {
        A: {
            heroHeadline: "Finally, Olive Oil That's Actually Fresh",
            heroSubheadline: "Shipped within 3 months of harvest—not the 2+ year old oils on grocery shelves. Taste the difference real freshness makes.",
            ctaText: "Get 15% Off Your First Bottle →"
        },
        B: {
            heroHeadline: "Your Olive Oil Is Probably Rancid",
            heroSubheadline: "Most grocery store olive oil is 18-24 months old before you buy it. Discover what real, fresh olive oil tastes like—shipped within 3 months of harvest.",
            ctaText: "Claim Your Fresh Oil →"
        },
        C: {
            heroHeadline: "Discover What Real Olive Oil Tastes Like",
            heroSubheadline: "Museum-quality olive oil, personally selected and shipped within months of harvest. Experience the freshness difference that transforms every dish.",
            ctaText: "Shop Now & Save 15% →"
        }
    },

    // ===================================
    // PRICING & DISCOUNT
    // ===================================
    pricing: {
        originalPrice: 49.00,
        discountPercent: 15,
        discountCode: 'FRESH15',
        membershipPrice: 48.75
    },

    // ===================================
    // URGENCY/SCARCITY
    // ===================================
    urgency: {
        enabled: true,
        bottlesRemaining: 47,
        currentCollection: 'Collection #39: Chilean Coratina',
        harvestDate: 'May 2025',
        shippingDays: 4,
        nextCollection: 'Collection #40',
        nextShipmentDate: 'August'
    },

    // ===================================
    // COUNTDOWN TIMER
    // ===================================
    countdown: {
        enabled: true,
        hours: 2,
        minutes: 47,
        seconds: 33
    },

    // ===================================
    // TRACKING
    // ===================================
    tracking: {
        metaPixelId: 'YOUR_PIXEL_ID',
        utmSource: 'facebook',
        utmMedium: 'paid',
        utmCampaign: 'olive-oil-interests',
        checkoutUrl: 'https://groveandvine.com/products/current-collection'
    }
};

// Apply the selected variant
(function() {
    const config = window.abTestConfig;
    const variant = config.variants[config.activeVariant];

    // Store variant in config for easy access
    config.heroHeadline = variant.heroHeadline;
    config.heroSubheadline = variant.heroSubheadline;
    config.ctaText = variant.ctaText;

    // Calculate sale price
    config.salePrice = (config.pricing.originalPrice * (1 - config.pricing.discountPercent / 100)).toFixed(2);

    // Log active variant for debugging
    console.log('Active A/B Test Variant:', config.activeVariant);
    console.log('Hero Headline:', config.heroHeadline);
})();

/**
 * HOW TO USE THIS FILE FOR A/B TESTING:
 *
 * 1. QUICK VARIANT SWITCH:
 *    Change `activeVariant` at the top to 'A', 'B', or 'C'
 *
 * 2. CREATE NEW VARIANTS:
 *    Add a new variant (D, E, etc.) to the variants object:
 *    D: {
 *        heroHeadline: "Your Custom Headline",
 *        heroSubheadline: "Your custom subheadline copy...",
 *        ctaText: "Your CTA Text →"
 *    }
 *
 * 3. TEST PRICING:
 *    Adjust values in the pricing object
 *
 * 4. TOGGLE URGENCY:
 *    Set urgency.enabled to true/false
 *    Adjust bottlesRemaining, dates, etc.
 *
 * 5. TRACKING:
 *    Update metaPixelId with your actual Facebook Pixel ID
 *    Adjust UTM parameters for each campaign
 *
 * 6. SPLIT TESTING SETUP:
 *    For actual A/B tests, you can:
 *    - Use query parameters: ?variant=A or ?variant=B
 *    - Use a random selector to split traffic
 *    - Integrate with tools like Google Optimize, VWO, or Optimizely
 */

// Optional: Auto-select variant based on URL parameter
(function() {
    const urlParams = new URLSearchParams(window.location.search);
    const variantParam = urlParams.get('variant');

    if (variantParam && window.abTestConfig.variants[variantParam.toUpperCase()]) {
        window.abTestConfig.activeVariant = variantParam.toUpperCase();
        console.log('Variant set from URL parameter:', window.abTestConfig.activeVariant);
    }
})();

// Optional: Random variant selection (50/50 split between A and B)
// Uncomment to enable random split testing:
/*
(function() {
    const randomVariants = ['A', 'B'];
    const randomVariant = randomVariants[Math.floor(Math.random() * randomVariants.length)];
    window.abTestConfig.activeVariant = randomVariant;
    console.log('Randomly selected variant:', randomVariant);
})();
*/
