# King Jewels — Go-Live Setup Guide
## GitHub Pages + Shopify Buy Button

This guide takes you from zero to a live store at `shopkingjewels.com` in about 30 minutes.

---

## OVERVIEW

```
Your HTML site  →  GitHub Pages (free hosting)
                        ↕
Shopify Starter ($5/mo) →  Real checkout, payments, inventory
```

Visitors see your beautiful site. When they click **+ ADD TO CART**, Shopify handles everything: cart, checkout, payment, order email, inventory.

---

## PART 1 — Shopify Setup

### Step 1 · Get Your Storefront Access Token

1. Log in to **Shopify Admin** → `admin.shopify.com`
2. Go to **Settings** (bottom-left) → **Apps and sales channels**
3. Click **Develop apps** (top-right)
4. Click **Create an app** → Name it `King Jewels Buy Button`
5. Click **Configure Storefront API scopes**
6. Check ✅ `unauthenticated_read_product_listings`
7. Click **Save** → then **Install app**
8. Copy the **Storefront API access token** — save it somewhere safe

### Step 2 · Add Your Products in Shopify

Go to **Products → Add product** and create one product for each item:

| Handle to use in shopify.js | Product Name |
|---|---|
| `featured-cuban-chain` | Cuban Link Chain |
| `featured-bracelet` | Diamond Bracelet |
| `featured-rope-chain` | Rope Chain Necklace |
| `featured-earrings` | Gold Hoop Earrings |
| `featured-signet-ring` | Signet Ring |
| `featured-pendant` | King Crown Pendant |
| `chain-cuban` | Cuban Link Chain |
| `chain-rope` | Rope Chain Necklace |
| `chain-franco` | Franco Chain |
| `chain-tennis` | VVS Tennis Chain |
| `chain-box` | Box Chain |
| `chain-figaro` | Figaro Chain |
| `chain-wheat` | Wheat Chain |
| `chain-iced-cuban` | Iced Cuban Link |
| `bracelet-cuban` | Cuban Link Bracelet |
| `bracelet-tennis` | VVS Tennis Bracelet |
| `bracelet-bangle` | Gold Bangle |
| `bracelet-rope` | Rope Bracelet |
| `bracelet-iced` | Iced Cuban Bracelet |
| `bracelet-franco` | Franco Bracelet |
| `earring-studs` | VVS Diamond Studs |
| `earring-hoops` | Gold Hoop Earrings |
| `earring-drops` | Chandelier Drops |
| `earring-iced-studs` | Iced Out Studs |
| `earring-huggies` | Huggie Hoops |
| `earring-crown` | Crown Studs |
| `ring-signet` | Gold Signet Ring |
| `ring-iced-band` | Iced Band Ring |
| `ring-crown` | King Crown Ring |
| `ring-pinky` | Pinky Ring |
| `ring-cuban` | Cuban Link Ring |
| `ring-diamond` | VVS Diamond Ring |

### Step 3 · Find Each Product's ID

After saving a product, look at the browser URL bar:

```
https://admin.shopify.com/store/YOUR-STORE/products/8472910283830
                                                    ↑
                                            This is the Product ID
```

Copy that number for each product.

---

## PART 2 — Fill In shopify.js

Open `/Users/kingjulian/Desktop/KINGJEWELS/Website/shopify.js`

### Line 21 — Store Domain
```js
domain: 'YOUR-STORE.myshopify.com',   // ← change to e.g. kingjewelstx.myshopify.com
```

### Line 22 — Access Token
```js
token:  'YOUR-STOREFRONT-ACCESS-TOKEN',  // ← paste the token from Step 1
```

### Lines 29–68 — Product IDs
Replace each `'YOUR_PRODUCT_ID'` with the number you copied from the URL:
```js
'featured-cuban-chain': '8472910283830',   // ← real ID here
'featured-bracelet':    '8472910283831',
// ... etc for all 32 products
```

> **Tip:** Any product with `'YOUR_PRODUCT_ID'` still in place will show a
> **"+ COMING SOON"** disabled button — so you can go live with partial products.

---

## PART 3 — GitHub Setup

### Step 4 · Create a GitHub Repository

1. Go to **github.com** and log in
2. Click the **+** icon (top-right) → **New repository**
3. Repository name: `kingjewels-website`
4. Set to **Public** ← required for free GitHub Pages
5. Click **Create repository**

### Step 5 · Upload Your Files

On the empty repo page, click **uploading an existing file**

Drag and drop ALL these files from `/Users/kingjulian/Desktop/KINGJEWELS/Website/`:
- `index.html`
- `chains.html`
- `bracelets.html`
- `earrings.html`
- `rings.html`
- `custom.html`
- `contact.html`
- `styles.css`
- `script.js`
- `shopify.js`

Click **Commit changes** (green button at the bottom)

### Step 6 · Enable GitHub Pages

1. In your repo, click **Settings** (top tab)
2. Click **Pages** (left sidebar)
3. Under **Source**, select **Deploy from a branch**
4. Branch: **main** / folder: **/ (root)**
5. Click **Save**

After ~2 minutes, your site will be live at:
```
https://[your-github-username].github.io/kingjewels-website
```

---

## PART 4 — Custom Domain (shopkingjewels.com)

### Step 7 · Add Domain in GitHub Pages

1. In **Settings → Pages**, find **Custom domain**
2. Type: `shopkingjewels.com`
3. Click **Save**

### Step 8 · Update DNS at Your Registrar

Log in to where you bought `shopkingjewels.com` (GoDaddy, Namecheap, Google Domains, etc.)

**Option A — WWW subdomain (easiest):**

Add a `CNAME` record:
| Type | Name | Value |
|---|---|---|
| CNAME | www | `[your-github-username].github.io` |

Then set your root domain to redirect to `www.shopkingjewels.com`.

**Option B — Apex domain (no www):**

Add these 4 `A` records:
| Type | Name | Value |
|---|---|---|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |

DNS changes take 10 minutes to 48 hours to propagate.

### Step 9 · Enable HTTPS

Once the domain shows **"DNS check successful"** in GitHub Pages settings:
- Check ✅ **Enforce HTTPS**

Your site will have a free SSL certificate automatically.

---

## PART 5 — Test Everything

Go through this checklist before sharing the link:

- [ ] Homepage loads at `shopkingjewels.com`
- [ ] Navigation links work: Chains, Bracelets, Earrings, Rings pages
- [ ] Click **+ ADD TO CART** on a product — Shopify cart slides in
- [ ] Cart shows the correct product, name, price
- [ ] Click **CHECKOUT →** — goes to Shopify's secure checkout page
- [ ] Custom domain has the green 🔒 HTTPS padlock
- [ ] Mobile menu opens and closes
- [ ] Site looks good on phone (use Chrome → DevTools → toggle device toolbar)

---

## PART 6 — Managing Orders

Everything order-related lives in **Shopify Admin**:

| Task | Where |
|---|---|
| View orders | Orders → All orders |
| Update inventory | Products → click product → Inventory |
| Issue refunds | Orders → click order → Refund |
| View customers | Customers |
| Connect payment processor | Settings → Payments |
| Set up shipping rates | Settings → Shipping and delivery |
| View analytics | Analytics → Dashboard |

---

## Quick Reference

| Thing | Location |
|---|---|
| Site files | GitHub → `kingjewels-website` repo |
| Product IDs | `shopify.js` lines 29–68 |
| Store domain + token | `shopify.js` lines 21–22 |
| Shopify Admin | `admin.shopify.com` |
| GitHub Pages settings | GitHub → repo → Settings → Pages |

---

## Troubleshooting

**Buttons show "COMING SOON"**
→ Open `shopify.js` and replace `'YOUR_PRODUCT_ID'` with the real Shopify product ID for that product.

**"Shopify Buy SDK not loaded" in console**
→ Check that the `<script src="...buy-button-storefront.min.js">` tag is in the `<head>` of your HTML file.

**Cart opens but is empty after clicking Add to Cart**
→ Make sure the product ID in `shopify.js` is the numeric ID from the URL (e.g. `8472910283830`), not the product handle or slug.

**Domain not resolving**
→ DNS propagation can take up to 48 hours. Check progress at `dnschecker.org`.

**HTTPS not working**
→ Wait for DNS to fully propagate first, then check the "Enforce HTTPS" box in GitHub Pages settings.
