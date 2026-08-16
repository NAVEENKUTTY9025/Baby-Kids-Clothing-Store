const fs = require('fs');
const path = require('path');

const filePath = 'e:/GROWW projects/Baby & Kids Clothing Store/index.html';
let content = fs.readFileSync(filePath, 'utf8');

// 1. Add Cart Icon to Navbar
const navButtonsRegex = /(<div class="nav-buttons">\s*<a href="login\.html")/i;
const cartIconHtml = `
        <a href="#" class="icon-btn" title="Cart" style="position: relative; text-decoration: none;">
          <i class="fas fa-shopping-cart"></i>
          <span style="position:absolute; top:-4px; right:-4px; background:var(--accent-dark); color:#fff; font-size:10px; font-weight:700; width:16px; height:16px; border-radius:50%; display:flex; align-items:center; justify-content:center; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">2</span>
        </a>
`;
content = content.replace(navButtonsRegex, cartIconHtml.trim() + '\n        $1');

// 1b. Add Cart Icon to Mobile Nav
const mobileNavRegex = /(<div class="mobile-theme-rtl">)/i;
const mobileCartHtml = `<div class="mobile-nav-item"><a href="#" class="mobile-nav-link"><i class="fas fa-shopping-cart"></i> Cart (2)</a></div>\n      `;
content = content.replace(mobileNavRegex, mobileCartHtml + '$1');

// 2. Update Hero CTA
content = content.replace(/<a href="#" class="btn-primary"><i class="fas fa-shopping-bag"><\/i> Shop New Arrivals<\/a>/, '<a href="#products" class="btn-primary"><i class="fas fa-shopping-bag"></i> Shop Now</a>');
content = content.replace(/<a href="#services" class="btn-outline">/, '<a href="#categories" class="btn-outline">');

// 3. Replace Sections 2-6 with Shopping Flow
const sectionsStart = content.indexOf('<!-- ===== SECTION 2: SHOP CATEGORIES (HD images) ===== -->');
const sectionsEnd = content.indexOf('<!-- ===== FOOTER ===== -->');

const newSections = `<!-- ===== SECTION 2: SHOP BY CATEGORY ===== -->
<section id="categories" style="background: var(--bg-secondary);">
  <div class="container">
    <h2 class="section-title">Shop by <span class="text-accent">Category</span></h2>
    <div class="accent-divider"></div>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 2rem;">
      <a href="#products" style="text-decoration: none; display: block; group; position: relative; overflow: hidden; border-radius: var(--card-radius); border: 1px solid rgba(0,0,0,0.04);">
        <img src="assets/baby_onesie.jpg" alt="Baby 0-24M" style="width: 100%; height: 260px; object-fit: cover; transition: transform 0.5s;" class="hover-zoom">
        <div style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(to top, rgba(0,0,0,0.7), transparent); padding: 1.5rem; color: #fff;">
          <h3 style="font-family:'Lato', sans-serif; font-weight:700; font-size: 1.4rem;">Baby (0-24M)</h3>
        </div>
      </a>
      <a href="#products" style="text-decoration: none; display: block; group; position: relative; overflow: hidden; border-radius: var(--card-radius); border: 1px solid rgba(0,0,0,0.04);">
        <img src="assets/toddler_outfit.jpg" alt="Toddler 2-5Y" style="width: 100%; height: 260px; object-fit: cover; transition: transform 0.5s;" class="hover-zoom">
        <div style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(to top, rgba(0,0,0,0.7), transparent); padding: 1.5rem; color: #fff;">
          <h3 style="font-family:'Lato', sans-serif; font-weight:700; font-size: 1.4rem;">Toddler (2-5Y)</h3>
        </div>
      </a>
      <a href="#products" style="text-decoration: none; display: block; group; position: relative; overflow: hidden; border-radius: var(--card-radius); border: 1px solid rgba(0,0,0,0.04);">
        <img src="assets/baby_accessories.jpg" alt="Accessories" style="width: 100%; height: 260px; object-fit: cover; transition: transform 0.5s;" class="hover-zoom">
        <div style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(to top, rgba(0,0,0,0.7), transparent); padding: 1.5rem; color: #fff;">
          <h3 style="font-family:'Lato', sans-serif; font-weight:700; font-size: 1.4rem;">Accessories</h3>
        </div>
      </a>
      <a href="#products" style="text-decoration: none; display: block; group; position: relative; overflow: hidden; border-radius: var(--card-radius); border: 1px solid rgba(0,0,0,0.04);">
        <img src="assets/gift_box.png" alt="Gifts & Toys" style="width: 100%; height: 260px; object-fit: cover; transition: transform 0.5s;" class="hover-zoom">
        <div style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(to top, rgba(0,0,0,0.7), transparent); padding: 1.5rem; color: #fff;">
          <h3 style="font-family:'Lato', sans-serif; font-weight:700; font-size: 1.4rem;">Gifts & Toys</h3>
        </div>
      </a>
    </div>
  </div>
</section>

<!-- ===== SECTION 3: FEATURED PRODUCTS ===== -->
<section id="products">
  <div class="container">
    <div style="display:flex; justify-content:space-between; align-items:flex-end; margin-bottom: 2rem; flex-wrap:wrap; gap: 1rem;">
      <div>
        <h2 class="section-title" style="text-align:left; margin-bottom:0;">Featured <span class="text-accent">Products</span></h2>
        <div class="accent-divider" style="margin: 0.6rem 0 0 0;"></div>
      </div>
      <a href="#" class="btn-outline" style="padding: 0.6rem 1.5rem; border-radius: 40px; font-size: 0.9rem;">View All</a>
    </div>
    
    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 2rem;">
      
      <!-- Product 1 -->
      <div class="product-card" style="background: var(--bg-card); border: 1px solid rgba(0,0,0,0.04); border-radius: 24px; padding: 1.2rem; transition: 0.3s;">
        <div style="position: relative; border-radius: 16px; overflow: hidden; margin-bottom: 1rem;">
          <img src="assets/b1.avif" alt="Product" style="width: 100%; aspect-ratio: 4/5; object-fit: cover; transition: 0.3s;" class="p-img">
          <span style="position:absolute; top:12px; left:12px; background: #111; color: #fff; font-size: 0.75rem; padding: 0.2rem 0.6rem; border-radius: 20px; font-weight: 600;">NEW</span>
        </div>
        <div style="color: var(--text-muted); font-size: 0.8rem; font-family: 'Open Sans', sans-serif;">Baby Clothing</div>
        <h3 style="font-family: 'Lato', sans-serif; font-weight: 700; font-size: 1.1rem; margin: 0.3rem 0; color: var(--text-primary);">Organic Cotton Sleepsuit</h3>
        <div style="display: flex; gap: 4px; color: var(--accent); font-size: 0.8rem; margin-bottom: 0.8rem;">
          <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i>
          <span style="color: var(--text-muted); margin-left:4px;">(42)</span>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <div style="font-weight: 700; font-size: 1.2rem; color: var(--text-primary);">$32.00</div>
          <button class="add-to-cart-btn" style="background: var(--bg-secondary); border: 1px solid var(--accent); color: var(--text-primary); width: 40px; height: 40px; border-radius: 50%; cursor: pointer; transition: 0.2s;"><i class="fas fa-plus text-accent"></i></button>
        </div>
      </div>

      <!-- Product 2 -->
      <div class="product-card" style="background: var(--bg-card); border: 1px solid rgba(0,0,0,0.04); border-radius: 24px; padding: 1.2rem; transition: 0.3s;">
        <div style="position: relative; border-radius: 16px; overflow: hidden; margin-bottom: 1rem;">
          <img src="assets/b2.avif" alt="Product" style="width: 100%; aspect-ratio: 4/5; object-fit: cover; transition: 0.3s;" class="p-img">
        </div>
        <div style="color: var(--text-muted); font-size: 0.8rem; font-family: 'Open Sans', sans-serif;">Toddler</div>
        <h3 style="font-family: 'Lato', sans-serif; font-weight: 700; font-size: 1.1rem; margin: 0.3rem 0; color: var(--text-primary);">Knitted Summer Romper</h3>
        <div style="display: flex; gap: 4px; color: var(--accent); font-size: 0.8rem; margin-bottom: 0.8rem;">
          <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
          <span style="color: var(--text-muted); margin-left:4px;">(18)</span>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <div style="font-weight: 700; font-size: 1.2rem; color: var(--text-primary);">$28.00</div>
          <button class="add-to-cart-btn" style="background: var(--bg-secondary); border: 1px solid var(--accent); color: var(--text-primary); width: 40px; height: 40px; border-radius: 50%; cursor: pointer; transition: 0.2s;"><i class="fas fa-plus text-accent"></i></button>
        </div>
      </div>

      <!-- Product 3 -->
      <div class="product-card" style="background: var(--bg-card); border: 1px solid rgba(0,0,0,0.04); border-radius: 24px; padding: 1.2rem; transition: 0.3s;">
        <div style="position: relative; border-radius: 16px; overflow: hidden; margin-bottom: 1rem;">
          <img src="assets/b3.avif" alt="Product" style="width: 100%; aspect-ratio: 4/5; object-fit: cover; transition: 0.3s;" class="p-img">
          <span style="position:absolute; top:12px; left:12px; background: #FF4D4F; color: #fff; font-size: 0.75rem; padding: 0.2rem 0.6rem; border-radius: 20px; font-weight: 600;">-15%</span>
        </div>
        <div style="color: var(--text-muted); font-size: 0.8rem; font-family: 'Open Sans', sans-serif;">Accessories</div>
        <h3 style="font-family: 'Lato', sans-serif; font-weight: 700; font-size: 1.1rem; margin: 0.3rem 0; color: var(--text-primary);">Cotton Sun Hat</h3>
        <div style="display: flex; gap: 4px; color: var(--accent); font-size: 0.8rem; margin-bottom: 0.8rem;">
          <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i>
          <span style="color: var(--text-muted); margin-left:4px;">(24)</span>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <div style="font-weight: 700; font-size: 1.2rem; color: var(--text-primary);"><span style="text-decoration:line-through; color:var(--text-muted); font-size:0.9rem; font-weight:400; margin-right:6px;">$18.00</span>$15.30</div>
          <button class="add-to-cart-btn" style="background: var(--bg-secondary); border: 1px solid var(--accent); color: var(--text-primary); width: 40px; height: 40px; border-radius: 50%; cursor: pointer; transition: 0.2s;"><i class="fas fa-plus text-accent"></i></button>
        </div>
      </div>

      <!-- Product 4 -->
      <div class="product-card" style="background: var(--bg-card); border: 1px solid rgba(0,0,0,0.04); border-radius: 24px; padding: 1.2rem; transition: 0.3s;">
        <div style="position: relative; border-radius: 16px; overflow: hidden; margin-bottom: 1rem;">
          <img src="assets/b4.avif" alt="Product" style="width: 100%; aspect-ratio: 4/5; object-fit: cover; transition: 0.3s;" class="p-img">
        </div>
        <div style="color: var(--text-muted); font-size: 0.8rem; font-family: 'Open Sans', sans-serif;">Toddler</div>
        <h3 style="font-family: 'Lato', sans-serif; font-weight: 700; font-size: 1.1rem; margin: 0.3rem 0; color: var(--text-primary);">Linen Play Set</h3>
        <div style="display: flex; gap: 4px; color: var(--accent); font-size: 0.8rem; margin-bottom: 0.8rem;">
          <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
          <span style="color: var(--text-muted); margin-left:4px;">(56)</span>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <div style="font-weight: 700; font-size: 1.2rem; color: var(--text-primary);">$45.00</div>
          <button class="add-to-cart-btn" style="background: var(--bg-secondary); border: 1px solid var(--accent); color: var(--text-primary); width: 40px; height: 40px; border-radius: 50%; cursor: pointer; transition: 0.2s;"><i class="fas fa-plus text-accent"></i></button>
        </div>
      </div>
      
      <!-- Product 5 -->
      <div class="product-card" style="background: var(--bg-card); border: 1px solid rgba(0,0,0,0.04); border-radius: 24px; padding: 1.2rem; transition: 0.3s;">
        <div style="position: relative; border-radius: 16px; overflow: hidden; margin-bottom: 1rem;">
          <img src="assets/b5.avif" alt="Product" style="width: 100%; aspect-ratio: 4/5; object-fit: cover; transition: 0.3s;" class="p-img">
        </div>
        <div style="color: var(--text-muted); font-size: 0.8rem; font-family: 'Open Sans', sans-serif;">Baby Clothing</div>
        <h3 style="font-family: 'Lato', sans-serif; font-weight: 700; font-size: 1.1rem; margin: 0.3rem 0; color: var(--text-primary);">Ribbed Body Suit</h3>
        <div style="display: flex; gap: 4px; color: var(--accent); font-size: 0.8rem; margin-bottom: 0.8rem;">
          <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i>
          <span style="color: var(--text-muted); margin-left:4px;">(31)</span>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <div style="font-weight: 700; font-size: 1.2rem; color: var(--text-primary);">$22.00</div>
          <button class="add-to-cart-btn" style="background: var(--bg-secondary); border: 1px solid var(--accent); color: var(--text-primary); width: 40px; height: 40px; border-radius: 50%; cursor: pointer; transition: 0.2s;"><i class="fas fa-plus text-accent"></i></button>
        </div>
      </div>

      <!-- Product 6 -->
      <div class="product-card" style="background: var(--bg-card); border: 1px solid rgba(0,0,0,0.04); border-radius: 24px; padding: 1.2rem; transition: 0.3s;">
        <div style="position: relative; border-radius: 16px; overflow: hidden; margin-bottom: 1rem;">
          <img src="assets/b6.avif" alt="Product" style="width: 100%; aspect-ratio: 4/5; object-fit: cover; transition: 0.3s;" class="p-img">
          <span style="position:absolute; top:12px; left:12px; background: #111; color: #fff; font-size: 0.75rem; padding: 0.2rem 0.6rem; border-radius: 20px; font-weight: 600;">BEST SELLER</span>
        </div>
        <div style="color: var(--text-muted); font-size: 0.8rem; font-family: 'Open Sans', sans-serif;">Gifts & Toys</div>
        <h3 style="font-family: 'Lato', sans-serif; font-weight: 700; font-size: 1.1rem; margin: 0.3rem 0; color: var(--text-primary);">Wooden Stacking Rings</h3>
        <div style="display: flex; gap: 4px; color: var(--accent); font-size: 0.8rem; margin-bottom: 0.8rem;">
          <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
          <span style="color: var(--text-muted); margin-left:4px;">(89)</span>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <div style="font-weight: 700; font-size: 1.2rem; color: var(--text-primary);">$19.99</div>
          <button class="add-to-cart-btn" style="background: var(--bg-secondary); border: 1px solid var(--accent); color: var(--text-primary); width: 40px; height: 40px; border-radius: 50%; cursor: pointer; transition: 0.2s;"><i class="fas fa-plus text-accent"></i></button>
        </div>
      </div>

      <!-- Product 7 -->
      <div class="product-card" style="background: var(--bg-card); border: 1px solid rgba(0,0,0,0.04); border-radius: 24px; padding: 1.2rem; transition: 0.3s;">
        <div style="position: relative; border-radius: 16px; overflow: hidden; margin-bottom: 1rem;">
          <img src="assets/b7.webp" alt="Product" style="width: 100%; aspect-ratio: 4/5; object-fit: cover; transition: 0.3s;" class="p-img">
        </div>
        <div style="color: var(--text-muted); font-size: 0.8rem; font-family: 'Open Sans', sans-serif;">Toddler</div>
        <h3 style="font-family: 'Lato', sans-serif; font-weight: 700; font-size: 1.1rem; margin: 0.3rem 0; color: var(--text-primary);">Floral Ruffle Dress</h3>
        <div style="display: flex; gap: 4px; color: var(--accent); font-size: 0.8rem; margin-bottom: 0.8rem;">
          <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i>
          <span style="color: var(--text-muted); margin-left:4px;">(15)</span>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <div style="font-weight: 700; font-size: 1.2rem; color: var(--text-primary);">$36.00</div>
          <button class="add-to-cart-btn" style="background: var(--bg-secondary); border: 1px solid var(--accent); color: var(--text-primary); width: 40px; height: 40px; border-radius: 50%; cursor: pointer; transition: 0.2s;"><i class="fas fa-plus text-accent"></i></button>
        </div>
      </div>

      <!-- Product 8 -->
      <div class="product-card" style="background: var(--bg-card); border: 1px solid rgba(0,0,0,0.04); border-radius: 24px; padding: 1.2rem; transition: 0.3s;">
        <div style="position: relative; border-radius: 16px; overflow: hidden; margin-bottom: 1rem;">
          <img src="assets/baby_accessories.png" alt="Product" style="width: 100%; aspect-ratio: 4/5; object-fit: cover; transition: 0.3s;" class="p-img">
        </div>
        <div style="color: var(--text-muted); font-size: 0.8rem; font-family: 'Open Sans', sans-serif;">Accessories</div>
        <h3 style="font-family: 'Lato', sans-serif; font-weight: 700; font-size: 1.1rem; margin: 0.3rem 0; color: var(--text-primary);">Cozy Knit Beanie</h3>
        <div style="display: flex; gap: 4px; color: var(--accent); font-size: 0.8rem; margin-bottom: 0.8rem;">
          <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
          <span style="color: var(--text-muted); margin-left:4px;">(77)</span>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <div style="font-weight: 700; font-size: 1.2rem; color: var(--text-primary);">$14.00</div>
          <button class="add-to-cart-btn" style="background: var(--bg-secondary); border: 1px solid var(--accent); color: var(--text-primary); width: 40px; height: 40px; border-radius: 50%; cursor: pointer; transition: 0.2s;"><i class="fas fa-plus text-accent"></i></button>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- ===== SECTION 4: CTA BANNER ===== -->
<section style="background: var(--bg-secondary); padding-top: 60px; padding-bottom: 60px;">
  <div class="container">
    <div class="cta-banner" style="margin-top: 0;">
      <h3 style="font-size: clamp(1.8rem, 5vw, 2.5rem);">Subscribe & get <span class="text-accent">15% off</span></h3>
      <p style="margin:0.8rem 0 1.5rem; color: var(--text-secondary); font-family:'Open Sans', sans-serif; font-size: 1.1rem;">Join our newsletter for style tips, new drops, and exclusive deals.</p>
      <div style="display: flex; max-width: 500px; margin: 0 auto; gap: 0.5rem; flex-wrap: wrap; justify-content: center;">
        <input type="email" placeholder="Enter your email" style="padding: 0.9rem 1.5rem; border-radius: 60px; border: 1px solid var(--border-color); flex: 1; min-width: 250px; font-family: 'Inter', sans-serif; outline: none;">
        <button class="btn-primary" style="white-space: nowrap;"><i class="fas fa-envelope"></i> Subscribe</button>
      </div>
    </div>
  </div>
</section>

`;

content = content.substring(0, sectionsStart) + newSections + content.substring(sectionsEnd);

// Add CSS for hover zoom and product cards
const cssInsertPoint = content.indexOf('/* ===== HERO ===== */');
const newCss = `
    /* ===== SHOPPING FLOW STYLES ===== */
    .hover-zoom:hover {
      transform: scale(1.05);
    }
    .product-card:hover {
      border-color: var(--accent) !important;
      transform: translateY(-5px);
      box-shadow: var(--shadow);
    }
    .product-card:hover .p-img {
      transform: scale(1.05);
    }
    .add-to-cart-btn:hover {
      background: var(--accent) !important;
      color: #fff !important;
    }
    .add-to-cart-btn:hover i {
      color: #fff !important;
    }
    
`;
content = content.substring(0, cssInsertPoint) + newCss + content.substring(cssInsertPoint);

fs.writeFileSync(filePath, content, 'utf8');
console.log('index.html updated successfully.');
