/* ============================================================
   KING JEWELS — shopify.js
   Shopify Buy Button Integration
   ============================================================

   HOW TO SET UP:
   1. Store domain: jrsjr0-f0.myshopify.com ✅
   2. Storefront Access Token: set ✅
   3. Product IDs: mapped ✅ (2 chain + 4 ring slots = COMING SOON until products added)
   ============================================================ */

window.KJ_SHOPIFY = {

  /* ─── YOUR STORE CONFIG ─── */
  domain: 'jrsjr0-f0.myshopify.com',
  token:  '0cfb74ace76237faed10fe801c985bcd',

  /* ─── PRODUCT IDS ─── */
  /* Get IDs from: Shopify Admin → Products → click product → URL shows number */
  products: {

    /* ── HOME PAGE (index.html) ── */
    'featured-cuban-chain':   '8536542740679',   // 8mm Cuban Link Chain | VVS
    'featured-bracelet':      '8543550668999',   // 8mm Cuban Bracelet | VVS
    'featured-rope-chain':    '8537257279687',   // 16mm Miami Cuban Chain | VVS
    'featured-earrings':      '8559239299271',   // Iced Out Hoop Earrings | VVS
    'featured-signet-ring':   '8563296633031',   // Pave Ring | VVS
    'featured-pendant':       '8564487946439',   // Promise Heart Necklace | VVS

    /* ── CHAINS PAGE (chains.html) ── */
    'chain-cuban':            '8536542740679',   // 8mm Cuban Link Chain | VVS
    'chain-rope':             '8537257279687',   // 16mm Miami Cuban Chain | VVS
    'chain-franco':           '8632000905415',   // Baguette Square Chain | VVS
    'chain-tennis':           '8562769461447',   // 2mm Tennis Chain | VVS
    'chain-box':              '8562732794055',   // 5mm Tennis Necklace | VVS
    'chain-figaro':           '8564487946439',   // Promise Heart Necklace | VVS
    'chain-wheat':            'YOUR_PRODUCT_ID', // no match yet — shows COMING SOON
    'chain-iced-cuban':       'YOUR_PRODUCT_ID', // no match yet — shows COMING SOON

    /* ── BRACELETS PAGE (bracelets.html) ── */
    'bracelet-cuban':         '8543550668999',   // 8mm Cuban Bracelet | VVS
    'bracelet-tennis':        '8563310166215',   // 5mm Tennis Bracelet | VVS
    'bracelet-bangle':        '8631952900295',   // Baguette Square Bracelet | VVS
    'bracelet-rope':          '8563298599111',   // 2mm Tennis Bracelet | VVS
    'bracelet-iced':          '8593502503111',   // 16mm Clover Bracelet | VVS
    'bracelet-franco':        '8587874271431',   // 10mm Cross Clover Bracelet | VVS

    /* ── EARRINGS PAGE (earrings.html) ── */
    'earring-studs':          '8563331596487',   // Stud Earrings | Multiple Sizes | VVS
    'earring-hoops':          '8559239299271',   // Iced Out Hoop Earrings | VVS
    'earring-drops':          '8563342475463',   // 10mm BIG Cluster Stud Earrings | Gold | VVS
    'earring-iced-studs':     '8562841747655',   // 8mm Square Iced Out Gold Studs | VVS
    'earring-huggies':        '8563324551367',   // Clover Cluster Earring | Screwback | VVS
    'earring-crown':          '8554163339463',   // Cluster Dome Studs | VVS

    /* ── RINGS PAGE (rings.html) ── */
    'ring-signet':            '8563296633031',   // Pave Ring | VVS
    'ring-iced-band':         '8536574787783',   // Prong Dome Ring | VVS
    'ring-crown':             'YOUR_PRODUCT_ID', // no match yet — shows COMING SOON
    'ring-pinky':             'YOUR_PRODUCT_ID', // no match yet — shows COMING SOON
    'ring-cuban':             'YOUR_PRODUCT_ID', // no match yet — shows COMING SOON
    'ring-diamond':           'YOUR_PRODUCT_ID', // no match yet — shows COMING SOON
  }
};

/* ─── BUTTON + CART STYLING ─── */
/* Matches King Jewels brand: #081031 navy, white text, Montserrat font */
KJ_SHOPIFY.styles = {
  product: {
    styles: {
      button: {
        'background-color': '#081031',
        'color':            '#ffffff',
        'font-family':      '"Montserrat", sans-serif',
        'font-weight':      '600',
        'font-size':        '0.72rem',
        'letter-spacing':   '0.12em',
        'padding-top':      '13px',
        'padding-bottom':   '13px',
        'padding-left':     '12px',
        'padding-right':    '12px',
        'width':            '100%',
        'border-radius':    '3px',
        'transition':       'background 0.2s ease',
        ':hover': {
          'background-color': '#293152',
        },
        ':focus': {
          'background-color': '#293152',
        },
      },
    },
    /* Hide everything Shopify renders — our HTML already shows it */
    contents: {
      img:         false,
      title:       false,
      price:       false,
      description: false,
    },
    text: {
      button: '+ ADD TO CART',
    },
    buttonDestination: 'cart',
  },
  cart: {
    styles: {
      button: {
        'background-color': '#ffffff',
        'color':            '#081031',
        'font-family':      '"Montserrat", sans-serif',
        'font-weight':      '700',
        'font-size':        '0.8rem',
        'letter-spacing':   '0.15em',
        'border-radius':    '3px',
        ':hover': {
          'background-color': '#f4f5f8',
        },
      },
      title: {
        'color': '#ffffff',
        'font-family': '"Montserrat", sans-serif',
      },
      subtotalText: {
        'color': 'rgba(255,255,255,0.7)',
        'font-family': '"Poppins", sans-serif',
      },
      subtotal: {
        'color': '#ffffff',
        'font-family': '"Montserrat", sans-serif',
        'font-weight': '700',
      },
      footer: {
        'background-color': '#081031',
      },
      header: {
        'color': '#ffffff',
        'font-family': '"Montserrat", sans-serif',
        'background-color': '#060c24',
      },
    },
    text: {
      total:  'Subtotal',
      button: 'CHECKOUT →',
    },
    popup: false,
  },
  toggle: {
    styles: {
      toggle: {
        'background-color': '#081031',
        ':hover': {
          'background-color': '#293152',
        },
        ':focus': {
          'background-color': '#293152',
        },
      },
      count: {
        'color': '#ffffff',
        'font-family': '"Montserrat", sans-serif',
        'font-weight': '700',
      },
    },
  },
};

/* ─── INITIALIZATION ─── */
/* Called automatically once the Shopify SDK loads */
KJ_SHOPIFY.init = function() {
  if (typeof ShopifyBuy === 'undefined') {
    console.warn('King Jewels: Shopify Buy SDK not loaded yet.');
    return;
  }

  /* Build client */
  var client = ShopifyBuy.buildClient({
    domain:               KJ_SHOPIFY.domain,
    storefrontAccessToken: KJ_SHOPIFY.token,
  });

  /* Init UI */
  ShopifyBuy.UI.onReady(client).then(function(ui) {
    KJ_SHOPIFY.ui = ui;

    /* Find all buy button placeholders on this page */
    var btns = document.querySelectorAll('[data-shopify-product]');
    btns.forEach(function(node) {
      var handle = node.getAttribute('data-shopify-product');
      var productId = KJ_SHOPIFY.products[handle];

      if (!productId || productId === 'YOUR_PRODUCT_ID') {
        /* Product ID not set yet — show placeholder button */
        node.innerHTML = '<button class="quick-add kj-placeholder-btn" disabled title="Add product ID in shopify.js">+ COMING SOON</button>';
        return;
      }

      ui.createComponent('product', {
        id:   productId,
        node: node,
        options: KJ_SHOPIFY.styles,
      });
    });

    /* Hide Shopify's floating cart toggle (we use our own cart icon in header) */
    setTimeout(function() {
      var toggles = document.querySelectorAll('.shopify-buy-cart-wrapper');
      toggles.forEach(function(t) { t.style.display = 'none'; });
    }, 2000);
  });
};

/* ─── AUTO-INIT WHEN SDK READY ─── */
/* The SDK script in <head> calls onload automatically */
document.addEventListener('DOMContentLoaded', function() {
  if (typeof ShopifyBuy !== 'undefined') {
    KJ_SHOPIFY.init();
  }
  /* Otherwise the SDK's own onload handler will call init */
});
