/**
 * Miilaano Fine Dine — Digital Menu Engine
 * Features: Live instant search, category filtering, veg/non-veg dietary toggle, empty states
 */

document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('menuSearchInput');
  const searchClearBtn = document.getElementById('menuSearchClear');
  const categoryTabsContainer = document.getElementById('menuTabsContainer');
  const menuItemsContainer = document.getElementById('menuItemsGrid');
  const dietFilterBtns = document.querySelectorAll('.diet-btn');
  const menuCountEl = document.getElementById('menuItemCount');

  if (!menuItemsContainer) return;

  let currentCategory = 'all';
  let currentDiet = 'all'; // 'all', 'veg', 'non-veg'
  let searchQuery = '';

  // Initialize Category Tabs
  function initCategoryTabs() {
    if (!categoryTabsContainer) return;
    
    categoryTabsContainer.innerHTML = '';
    MENU_CATEGORIES.forEach(cat => {
      const btn = document.createElement('button');
      btn.className = `category-tab-btn ${cat.id === currentCategory ? 'active' : ''}`;
      btn.setAttribute('data-category', cat.id);
      btn.innerHTML = `<span>${cat.icon}</span> ${cat.name}`;
      
      btn.addEventListener('click', () => {
        document.querySelectorAll('.category-tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCategory = cat.id;
        renderMenuItems();
      });
      
      categoryTabsContainer.appendChild(btn);
    });
  }

  // Filter & Render Menu Items
  function renderMenuItems() {
    let filtered = FULL_MENU_ITEMS.filter(item => {
      // Category check
      if (currentCategory !== 'all') {
        if (currentCategory === 'signatures') {
          if (!item.isSignature) return false;
        } else if (item.category !== currentCategory) {
          return false;
        }
      }

      // Diet check
      if (currentDiet === 'veg' && item.type !== 'veg') return false;
      if (currentDiet === 'non-veg' && item.type !== 'non-veg') return false;

      // Search Query
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchName = item.name.toLowerCase().includes(query);
        const matchDesc = item.description.toLowerCase().includes(query);
        const matchCat = item.category.toLowerCase().includes(query);
        if (!matchName && !matchDesc && !matchCat) return false;
      }

      return true;
    });

    if (menuCountEl) {
      menuCountEl.textContent = `Showing ${filtered.length} dishes`;
    }

    if (filtered.length === 0) {
      menuItemsContainer.innerHTML = `
        <div class="menu-empty-state">
          <div style="font-size: 3rem; margin-bottom: 0.5rem;">🔍</div>
          <h3 style="font-family: var(--font-serif); font-size: 1.5rem; color: var(--color-burgundy-dark); margin-bottom: 0.35rem;">No dishes found</h3>
          <p style="color: var(--color-charcoal-muted); font-size: 0.9375rem;">We couldn't find any dishes matching "${searchQuery}". Try searching for 'Biryani', 'Paneer', 'Seyal Pav', or 'Chicken'.</p>
          <button class="btn btn-burgundy" style="margin-top: 1.25rem; font-size: 0.8125rem; padding: 0.6rem 1.2rem;" id="resetFilterBtn">Reset All Filters</button>
        </div>
      `;
      const resetBtn = document.getElementById('resetFilterBtn');
      if (resetBtn) {
        resetBtn.addEventListener('click', resetFilters);
      }
      return;
    }

    menuItemsContainer.innerHTML = filtered.map(item => `
      <div class="menu-item-row" data-id="${item.id}">
        <span class="diet-badge ${item.type === 'veg' ? 'veg' : 'non-veg'}" title="${item.type === 'veg' ? 'Pure Vegetarian' : 'Non-Vegetarian'}"></span>
        <div class="menu-item-details">
          <div class="menu-item-top">
            <h4 class="menu-item-name">${item.name}</h4>
            <span class="menu-item-price">${item.price}</span>
          </div>
          <p class="menu-item-desc">${item.description}</p>
          ${item.isSignature ? `<span style="display:inline-block; font-size:0.7rem; font-weight:700; color:var(--color-gold-dark); text-transform:uppercase; letter-spacing:0.06em; margin-top:0.35rem;">★ Chef's Special</span>` : ''}
        </div>
      </div>
    `).join('');
  }

  function resetFilters() {
    currentCategory = 'all';
    currentDiet = 'all';
    searchQuery = '';
    if (searchInput) searchInput.value = '';
    if (searchClearBtn) searchClearBtn.style.display = 'none';

    document.querySelectorAll('.category-tab-btn').forEach(b => {
      b.classList.toggle('active', b.getAttribute('data-category') === 'all');
    });

    dietFilterBtns.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-diet') === 'all');
      btn.classList.remove('veg-active', 'nonveg-active');
    });

    renderMenuItems();
  }

  // Event Listeners for Search
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      if (searchClearBtn) {
        searchClearBtn.style.display = searchQuery.length > 0 ? 'flex' : 'none';
      }
      renderMenuItems();
    });
  }

  if (searchClearBtn) {
    searchClearBtn.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      searchQuery = '';
      searchClearBtn.style.display = 'none';
      renderMenuItems();
    });
  }

  // Event Listeners for Dietary Filter
  dietFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const diet = btn.getAttribute('data-diet');
      dietFilterBtns.forEach(b => {
        b.classList.remove('active', 'veg-active', 'nonveg-active');
      });
      btn.classList.add('active');
      if (diet === 'veg') btn.classList.add('veg-active');
      if (diet === 'non-veg') btn.classList.add('nonveg-active');
      
      currentDiet = diet;
      renderMenuItems();
    });
  });

  // Init
  initCategoryTabs();
  renderMenuItems();
});
