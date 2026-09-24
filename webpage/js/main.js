/**
 * Miilaano Fine Dine — Main Site Scripts
 * UI interactions, Lightbox, Mobile Navigation, Dynamic Reviews & Signatures
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Header Sticky Effect
  const header = document.querySelector('.header-main');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });

  // 2. Mobile Navigation Toggle
  const mobileToggle = document.querySelector('.mobile-nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const isOpen = navLinks.classList.contains('open');
      mobileToggle.innerHTML = isOpen ? '✕' : '☰';
      mobileToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close mobile nav when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        mobileToggle.innerHTML = '☰';
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 3. Render Signature Dishes (if container exists)
  const signaturesGrid = document.getElementById('signaturesGrid');
  if (signaturesGrid && typeof SIGNATURE_DISHES !== 'undefined') {
    signaturesGrid.innerHTML = SIGNATURE_DISHES.map(dish => `
      <div class="dish-card" data-category="${dish.category}">
        <div class="dish-media">
          <img src="${dish.image}" alt="${dish.alt}" loading="lazy">
          <span class="dish-tag-badge">${dish.tag}</span>
          <div class="dish-diet-tag">
            <span class="diet-badge ${dish.type === 'veg' ? 'veg' : 'non-veg'}" title="${dish.type === 'veg' ? 'Pure Vegetarian' : 'Non-Vegetarian'}"></span>
          </div>
        </div>
        <div class="dish-body">
          <div class="dish-header-row">
            <h3 class="dish-title">${dish.name}</h3>
            <span class="dish-price">${dish.price}</span>
          </div>
          <p class="dish-desc">${dish.description}</p>
          <div class="dish-footer-row">
            <span class="dish-category-label">${dish.kitchen === 'veg' ? '🌿 Veg Kitchen' : '🍗 Non-Veg Kitchen'}</span>
            <a href="#digital-menu" class="dish-explore-link" onclick="window.filterMenuCategory && window.filterMenuCategory('${dish.category}')">
              Explore Dish →
            </a>
          </div>
        </div>
      </div>
    `).join('');
  }

  // 4. Render Google Reviews (if container exists)
  const reviewsGrid = document.getElementById('reviewsGrid');
  if (reviewsGrid && typeof GOOGLE_REVIEWS !== 'undefined') {
    reviewsGrid.innerHTML = GOOGLE_REVIEWS.map(rev => `
      <div class="review-card">
        <div class="review-header">
          <div class="review-avatar">${rev.avatar}</div>
          <div class="review-author-info">
            <h4>${rev.author}</h4>
            <span class="review-date">${rev.date} • Google Verified</span>
          </div>
        </div>
        <div class="review-stars">
          ${'★'.repeat(rev.rating)}
        </div>
        <p class="review-text">"${rev.text}"</p>
      </div>
    `).join('');
  }

  // 5. Gallery Filter & Lightbox
  const galleryGrid = document.getElementById('galleryGrid');
  const galleryTabBtns = document.querySelectorAll('.gallery-tab-btn');
  const lightbox = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImage');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxClose = document.getElementById('lightboxClose');

  const GALLERY_DATA = [
    { src: 'assets/images/hero/miilaano-fine-dine-hero-interior.jpg', title: 'Grand Dining Hall', cat: 'ambience', desc: 'Warm chandeliers, velvet booths & sophisticated fine dining aura' },
    { src: 'assets/images/food/chicken-dum-biryani-miilaano-ulhasnagar.jpg', title: 'Royal Chicken Dum Biryani', cat: 'signatures', desc: 'Slow cooked in royal copper handi with saffron & whole spices' },
    { src: 'assets/images/food/sindhi-cheese-seyal-pav-miilaano.jpg', title: 'Sindhi Special Cheese Seyal Pav', cat: 'signatures', desc: 'Our signature Sindhi delicacy loaded with melting cheese' },
    { src: 'assets/images/food/paneer-tikka-tandoor-miilaano.jpg', title: 'Charcoal Grilled Paneer Tikka', cat: 'tandoor', desc: 'Smoky skewered paneer cubes with mint chutney & peppers' },
    { src: 'assets/images/food/chicken-tandoori-kebab-miilaano.jpg', title: 'Sizzling Chicken Tandoori', cat: 'tandoor', desc: 'Whole roast leg with lemon and authentic tandoori spices' },
    { src: 'assets/images/food/butter-chicken-gravy-miilaano.jpg', title: 'Butter Chicken & Garlic Naan', cat: 'indian', desc: 'Rich makhani gravy with freshly baked tandoor naan' },
    { src: 'assets/images/food/chicken-tikka-pizza-miilaano.jpg', title: 'Artisanal Chicken Tikka Pizza', cat: 'signatures', desc: 'Stone-baked pizza with tandoori toppings & mozzarella' },
    { src: 'assets/images/food/chinese-schezwan-noodles-miilaano.jpg', title: 'Indo-Chinese Schezwan Special', cat: 'chinese', desc: 'Wok tossed Hakka noodles and fiery chilli chicken' },
    { src: 'assets/images/food/royal-mocktails-miilaano-fine-dine.jpg', title: 'Signature Handcrafted Mocktails', cat: 'signatures', desc: 'Blue Lagoon, Mint Mojito and Tropical Sunrise' },
    { src: 'assets/images/ambience/miilaano-fine-dine-restaurant-ambience.jpg', title: 'Luxury Wine & Table Setup', cat: 'ambience', desc: 'Exquisite setting for family celebrations & memorable dinners' }
  ];

  function renderGallery(filter = 'all') {
    if (!galleryGrid) return;
    const filtered = filter === 'all' ? GALLERY_DATA : GALLERY_DATA.filter(item => item.cat === filter);

    galleryGrid.innerHTML = filtered.map((item, index) => `
      <div class="gallery-item" data-index="${index}" data-src="${item.src}" data-title="${item.title}" data-desc="${item.desc}">
        <img src="${item.src}" alt="${item.title} at Miilaano Fine Dine Ulhasnagar" loading="lazy">
        <div class="gallery-overlay">
          <h4>${item.title}</h4>
          <p>${item.desc}</p>
        </div>
      </div>
    `).join('');

    // Attach click for lightbox
    document.querySelectorAll('.gallery-item').forEach(item => {
      item.addEventListener('click', () => {
        const src = item.getAttribute('data-src');
        const title = item.getAttribute('data-title');
        const desc = item.getAttribute('data-desc');

        if (lightbox && lightboxImg && lightboxCaption) {
          lightboxImg.src = src;
          lightboxImg.alt = title;
          lightboxCaption.innerHTML = `<strong>${title}</strong><br><span style="font-size:0.9rem; color:#E0D6CE;">${desc}</span>`;
          lightbox.classList.add('active');
          document.body.style.overflow = 'hidden';
        }
      });
    });
  }

  // Gallery Tabs click
  galleryTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      galleryTabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-gallery-filter');
      renderGallery(filter);
    });
  });

  // Lightbox Close
  if (lightboxClose && lightbox) {
    lightboxClose.addEventListener('click', () => {
      lightbox.classList.remove('active');
      document.body.style.overflow = 'auto';
    });

    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
      }
    });
  }

  // Initial gallery render
  renderGallery('all');

  // Helper for cross-section category jump
  window.filterMenuCategory = function(catId) {
    const tabBtn = document.querySelector(`.category-tab-btn[data-category="${catId}"]`);
    if (tabBtn) {
      tabBtn.click();
    }
  };
});
