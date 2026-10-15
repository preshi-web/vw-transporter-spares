const STORAGE_KEYS = {
  config: 'vwTransporterConfig',
  products: 'vwTransporterProducts',
  enquiries: 'vwTransporterEnquiries',
  orders: 'vwTransporterOrders',
  admin: 'vwTransporterAdminAuth',
  legal: 'vwTransporterLegal'
};

const DEFAULT_CONFIG = {
  businessName: 'VW Transporter Spares',
  email: 'info@yourbusiness.com',
  phone: '+447447482927',
  whatsapp: '+447447482927',
  whatsappLink: 'https://wa.me/447447482927',
  facebookLink: 'https://www.facebook.com/share/1F7JLyW7Tc/',
  address: 'Your business address',
  openingHours: 'Mon-Sat 09:00 - 17:00',
  currency: 'GBP'
};

const DEFAULT_LEGAL = {
  privacy: `# Privacy Policy\n\nWe respect your privacy and handle personal information only when required to provide our services, respond to enquiries, process orders, or comply with business obligations. This information may include your name, contact details, order information, and vehicle fitment details. We do not sell your personal data. Data is stored securely and only used for the purposes of running the website, responding to customer questions, processing orders, and maintaining lawful business records.\n\nWe may use cookies or local storage to improve site functionality and remember basic preferences. We may also disclose information to trusted service providers where required for email, order fulfilment, hosting, or support.\n\nIf you have any questions about how your information is handled, please contact the business using the contact section on this website.`,
  terms: `# Terms and Conditions\n\nBy using this website, you agree to the business terms for browsing, making enquiries, and placing parts orders. We may update product availability, pricing and fitment information without notice. Product listings are for guidance and should be checked against the exact vehicle specification before purchase.\n\nAll prices are listed in GBP and exclude any applicable delivery charges unless specifically stated. Orders are subject to stock availability, vehicle compatibility confirmation, and our normal returns and shipping policy. We aim to provide accurate information but cannot guarantee that every listing is appropriate for every vehicle variant.\n\nWe reserve the right to refuse or cancel an order where the part is incorrect, unsuitable, out of stock, or if there is a risk of error or fraud.`,
  shipping: `# Delivery and Shipping Policy\n\nWe dispatch stock products from our warehouse as quickly as possible. Delivery times vary depending on product type, stock availability and the selected shipping method. We aim to keep dispatch times realistic, accurate and transparent.\n\nOrders may be subject to courier costs and delivery estimates depending on the destination and order value. Customers are responsible for providing the correct delivery address and contact information. If a parcel is delayed or undeliverable, we will contact the customer using the details supplied.\n\nWhere an item is out of stock or requires a special order, we will provide an estimate and keep the customer informed of progress.`,
  returns: `# Returns and Refunds Policy\n\nIf you receive a part that is incorrect, damaged, or unsuitable, please contact us as soon as possible. We will assess the issue and arrange a return, exchange or refund where appropriate.\n\nReturns may be accepted for unused and resalable items within a reasonable period, subject to condition and original packaging where applicable. Products that have been fitted, used, damaged, or misused may not be eligible for refund.\n\nRefunds will normally be processed once the returned item has been checked and the return has been accepted. Any delivery costs associated with the original shipment may not be refundable unless the reason for return is due to an error on our part.`,
  warranty: `# Warranty Information\n\nWarranty terms vary by product type and supplier. In general, items supplied by us are covered only where the supplier offers a warranty or where an item has a manufacturing defect. We do not guarantee compatibility beyond the vehicle information supplied at the time of sale.\n\nIf a product arrives faulty or fails prematurely due to a defect, please contact us with proof of purchase and the issue details. We will assess the claim under the supplier warranty or the business return policy and provide the appropriate next steps.`,
  contact: `# Contact Us\n\nYou can contact us by phone, WhatsApp or email using the details shown on the website. We are happy to advise on vehicle fitment, stock availability, delivery, and general enquiries about parts for VW Transporter vehicles.\n\nPlease include as much detail as possible about your vehicle model and the part you need so we can provide the most accurate advice.`,
  cookies: `# Cookie Policy\n\nThis website may use cookies or local browser storage to improve the user experience, remember site preferences, and maintain basic functionality such as shopping baskets and saved website settings.\n\nCookies are used to help the site function, support product filtering, and deliver a smoother browsing experience. You can disable cookies in your browser, but doing so may limit some website features.\n\nWe do not use cookies to track personal behaviour for advertising or unrelated marketing purposes.`
};

const DEMO_PRODUCTS = [
  {
    id: 'p1',
    name: 'Air Filter Kit',
    category: 'Engine & Cooling',
    vehicle: 'T5',
    price: 39.99,
    stock: 18,
    image: generatePlaceholderSvg('Air Filter', '#2b6cb0')
  },
  {
    id: 'p2',
    name: 'Water Pump Assembly',
    category: 'Engine & Cooling',
    vehicle: 'T6',
    price: 129.99,
    stock: 6,
    image: generatePlaceholderSvg('Water Pump', '#1d4ed8')
  },
  {
    id: 'p3',
    name: 'Headlamp Unit',
    category: 'Electrical',
    vehicle: 'T4',
    price: 109.95,
    stock: 9,
    image: generatePlaceholderSvg('Headlamp', '#f59e0b')
  },
  {
    id: 'p4',
    name: 'Front Suspension Arm',
    category: 'Suspension & Steering',
    vehicle: 'T6.1',
    price: 82.5,
    stock: 12,
    image: generatePlaceholderSvg('Suspension', '#fb7185')
  },
  {
    id: 'p5',
    name: 'Driver Seat Upholstery',
    category: 'Interior',
    vehicle: 'T5',
    price: 64,
    stock: 14,
    image: generatePlaceholderSvg('Seat', '#10b981')
  },
  {
    id: 'p6',
    name: 'Brake Disc Set',
    category: 'Brakes & Driveline',
    vehicle: 'T6',
    price: 144,
    stock: 7,
    image: generatePlaceholderSvg('Brake Disc', '#ef4444')
  }
];

function generatePlaceholderSvg(label, color) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="560" viewBox="0 0 800 560">
      <defs>
        <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stop-color="${color}"/>
          <stop offset="100%" stop-color="#0b1220"/>
        </linearGradient>
      </defs>
      <rect width="800" height="560" fill="url(#g)"/>
      <rect x="50" y="50" width="700" height="460" rx="28" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.22)"/>
      <text x="400" y="295" text-anchor="middle" fill="#ffffff" font-family="Arial, sans-serif" font-size="40" font-weight="700">${label}</text>
    </svg>
  `;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function parseCurrency(value) {
  const num = Number(value) || 0;
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 2
  }).format(num);
}

function saveJSON(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function readJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function ensureData() {
  if (!readJSON(STORAGE_KEYS.config, null)) {
    saveJSON(STORAGE_KEYS.config, DEFAULT_CONFIG);
  }

  if (!readJSON(STORAGE_KEYS.products, null)) {
    saveJSON(STORAGE_KEYS.products, DEMO_PRODUCTS);
  }

  if (!readJSON(STORAGE_KEYS.enquiries, null)) {
    saveJSON(STORAGE_KEYS.enquiries, []);
  }

  if (!readJSON(STORAGE_KEYS.orders, null)) {
    saveJSON(STORAGE_KEYS.orders, []);
  }

  if (!readJSON(STORAGE_KEYS.legal, null)) {
    saveJSON(STORAGE_KEYS.legal, DEFAULT_LEGAL);
  }

  if (!readJSON(STORAGE_KEYS.admin, null)) {
    saveJSON(STORAGE_KEYS.admin, { email: 'admin@vwspares.com', password: 'admin123' });
  }
}

function getConfig() {
  return readJSON(STORAGE_KEYS.config, DEFAULT_CONFIG);
}

function updateConfigUI() {
  const config = getConfig();

  document.querySelectorAll('#businessName, #businessNameFooter').forEach((el) => {
    if (el) el.textContent = config.businessName;
  });

  const phoneLink = document.getElementById('phoneLink');
  const phoneLinkDetailed = document.getElementById('phoneLinkDetailed');
  if (phoneLink) phoneLink.href = `tel:${config.phone.replace(/\s+/g, '')}`;
  if (phoneLinkDetailed) phoneLinkDetailed.href = `tel:${config.phone.replace(/\s+/g, '')}`;

  const whatsappUrl = config.whatsappLink || `https://wa.me/${config.whatsapp.replace(/\D/g, '')}`;
  const whatsappLink = document.getElementById('whatsappLink');
  const whatsappLinkDetailed = document.getElementById('whatsappLinkDetailed');
  if (whatsappLink) {
    whatsappLink.href = whatsappUrl;
    whatsappLink.textContent = 'WhatsApp';
  }
  if (whatsappLinkDetailed) whatsappLinkDetailed.href = whatsappUrl;

  const facebookLink = document.getElementById('facebookLink');
  const facebookLinkDetailed = document.getElementById('facebookLinkDetailed');
  if (facebookLink) facebookLink.href = config.facebookLink;
  if (facebookLinkDetailed) facebookLinkDetailed.href = config.facebookLink;

  const businessName = document.getElementById('legalBrandName');
  if (businessName) businessName.textContent = config.businessName;
}

function getProducts() {
  return readJSON(STORAGE_KEYS.products, DEMO_PRODUCTS);
}

function renderPublicProducts() {
  const grid = document.getElementById('productGrid');
  const resultCount = document.getElementById('resultCount');
  if (!grid) return;

  const search = document.getElementById('searchInput')?.value?.toLowerCase() || '';
  const vehicleFilter = document.getElementById('vehicleFilter')?.value || 'all';
  const categoryFilter = document.getElementById('categoryFilter')?.value || 'all';

  const filtered = getProducts().filter((product) => {
    const matchesSearch = !search || `${product.name} ${product.vehicle} ${product.category}`.toLowerCase().includes(search);
    const matchesVehicle = vehicleFilter === 'all' || product.vehicle === vehicleFilter;
    const matchesCategory = categoryFilter === 'all' || product.category === categoryFilter;
    return matchesSearch && matchesVehicle && matchesCategory;
  });

  resultCount.textContent = `${filtered.length} item${filtered.length === 1 ? '' : 's'}`;

  if (!filtered.length) {
    grid.innerHTML = '<div class="empty-state">No parts match your filters right now.</div>';
    return;
  }

  grid.innerHTML = filtered.map((product) => `
    <article class="product-card">
      <img class="product-image" src="${product.image || generatePlaceholderSvg(product.name, '#1b6df2')}" alt="${product.name}" />
      <div class="product-body">
        <div class="product-top">
          <h4 class="product-name">${product.name}</h4>
          <span class="product-category">${product.category}</span>
        </div>

        <div class="product-meta">
          <span>${product.stock > 0 ? 'In stock' : 'Back order'}</span>
          <strong class="price-tag">${parseCurrency(product.price)}</strong>
        </div>

        <div class="product-footer">
          <span class="fitment-pill">${product.vehicle}</span>
          <span class="stock-badge">${product.stock} left</span>
        </div>

        <div class="product-footer">
          <button class="btn btn-primary" data-add-to-cart="${product.id}">Add to basket</button>
        </div>
      </div>
    </article>
  `).join('');
}

function getCart() {
  return readJSON('vwTransporterCart', []);
}

function saveCart(cart) {
  saveJSON('vwTransporterCart', cart);
}

function renderCart() {
  const cartItems = document.getElementById('cartItems');
  const cartCount = document.getElementById('cartCount');
  const cartTotal = document.getElementById('cartTotal');
  if (!cartItems) return;

  const cart = getCart();
  cartCount.textContent = String(cart.length);

  if (!cart.length) {
    cartItems.innerHTML = '<p class="empty-cart">Your basket is empty.</p>';
    cartTotal.textContent = parseCurrency(0);
    return;
  }

  const products = getProducts();
  const rows = cart.map((entry) => {
    const product = products.find((item) => item.id === entry.id);
    if (!product) return null;

    return `
      <div class="cart-item">
        <div>
          <h5>${product.name}</h5>
          <small>${entry.qty} × ${parseCurrency(product.price)}</small>
        </div>
        <button class="item-remove" data-remove-cart="${product.id}" aria-label="Remove ${product.name}">Remove</button>
      </div>
    `;
  }).filter(Boolean).join('');

  const total = cart.reduce((sum, entry) => {
    const product = products.find((item) => item.id === entry.id);
    return sum + (product ? Number(product.price) * Number(entry.qty) : 0);
  }, 0);

  cartItems.innerHTML = rows;
  cartTotal.textContent = parseCurrency(total);
}

function addToCart(productId) {
  const cart = getCart();
  const itemIndex = cart.findIndex((entry) => entry.id === productId);

  if (itemIndex >= 0) {
    cart[itemIndex].qty += 1;
  } else {
    cart.push({ id: productId, qty: 1 });
  }

  saveCart(cart);
  renderCart();
}

function removeFromCart(productId) {
  const next = getCart().filter((entry) => entry.id !== productId);
  saveCart(next);
  renderCart();
}

function placeOrder() {
  const cart = getCart();
  if (!cart.length) {
    alert('Your basket is empty.');
    return;
  }

  const customerName = window.prompt('Customer name for this order:', 'Walk-in customer');
  if (customerName === null) return;

  const products = getProducts();
  const total = cart.reduce((sum, entry) => {
    const product = products.find((item) => item.id === entry.id);
    return sum + (product ? Number(product.price) * Number(entry.qty) : 0);
  }, 0);

  const order = {
    id: `ORD-${Date.now()}`,
    customerName: customerName.trim() || 'Walk-in customer',
    items: cart,
    total,
    status: 'Pending',
    createdAt: new Date().toISOString()
  };

  const orders = readJSON(STORAGE_KEYS.orders, []);
  orders.unshift(order);
  saveJSON(STORAGE_KEYS.orders, orders);

  cart.forEach((entry) => {
    const product = products.find((item) => item.id === entry.id);
    if (product) {
      product.stock = Math.max(0, Number(product.stock) - Number(entry.qty));
    }
  });
  saveJSON(STORAGE_KEYS.products, products);

  saveCart([]);
  renderCart();
  renderPublicProducts();

  if (typeof renderAdminViews === 'function') {
    renderAdminViews();
  }

  alert(`Order ${order.id} placed successfully. Total: ${parseCurrency(total)}`);
}

function submitEnquiry(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const payload = Object.fromEntries(new FormData(form).entries());

  const enquiries = readJSON(STORAGE_KEYS.enquiries, []);
  enquiries.unshift({
    id: Date.now(),
    ...payload,
    createdAt: new Date().toISOString()
  });
  saveJSON(STORAGE_KEYS.enquiries, enquiries);

  form.reset();
  alert('Your enquiry has been saved. We will contact you shortly.');

  if (typeof renderAdminViews === 'function') {
    renderAdminViews();
  }
}

function initHomePage() {
  ensureData();
  updateConfigUI();
  renderPublicProducts();
  renderCart();

  document.getElementById('searchInput')?.addEventListener('input', renderPublicProducts);
  document.getElementById('vehicleFilter')?.addEventListener('change', renderPublicProducts);
  document.getElementById('categoryFilter')?.addEventListener('change', renderPublicProducts);

  document.body.addEventListener('click', (event) => {
    const addButton = event.target.closest('[data-add-to-cart]');
    if (addButton) {
      addToCart(addButton.getAttribute('data-add-to-cart'));
    }

    const removeButton = event.target.closest('[data-remove-cart]');
    if (removeButton) {
      removeFromCart(removeButton.getAttribute('data-remove-cart'));
    }
  });

  document.getElementById('checkoutBtn')?.addEventListener('click', placeOrder);
  document.getElementById('enquiryForm')?.addEventListener('submit', submitEnquiry);
}

function getAdminCredentials() {
  return readJSON(STORAGE_KEYS.admin, { email: 'admin@vwspares.com', password: 'admin123' });
}

function renderProductTable() {
  const tbody = document.getElementById('productTableBody');
  if (!tbody) return;

  const products = getProducts();
  tbody.innerHTML = products.map((product) => `
    <tr>
      <td>${product.name}</td>
      <td>${product.category}</td>
      <td>${product.vehicle}</td>
      <td>${parseCurrency(product.price)}</td>
      <td>${product.stock}</td>
      <td>
        <div class="action-group">
          <button class="small-btn edit" data-edit-product="${product.id}">Edit</button>
          <button class="small-btn delete" data-delete-product="${product.id}">Delete</button>
        </div>
      </td>
    </tr>
  `).join('');
}

function renderEnquiriesTable() {
  const tbody = document.getElementById('enquiriesTableBody');
  if (!tbody) return;

  const enquiries = readJSON(STORAGE_KEYS.enquiries, []);
  tbody.innerHTML = enquiries.length ? enquiries.map((entry) => `
    <tr>
      <td>${entry.name}</td>
      <td>${entry.email}</td>
      <td>${entry.vehicle}</td>
      <td>${entry.message}</td>
    </tr>
  `).join('') : '<tr><td colspan="4">No enquiries yet.</td></tr>';
}

function renderOrdersTable() {
  const tbody = document.getElementById('ordersTableBody');
  if (!tbody) return;

  const orders = readJSON(STORAGE_KEYS.orders, []);
  tbody.innerHTML = orders.length ? orders.map((order) => `
    <tr>
      <td>${order.id}</td>
      <td>${order.customerName}</td>
      <td>${order.items.reduce((sum, item) => sum + item.qty, 0)}</td>
      <td>${parseCurrency(order.total)}</td>
      <td>${order.status}</td>
    </tr>
  `).join('') : '<tr><td colspan="5">No orders yet.</td></tr>';
}

function populateConfigForm() {
  const config = getConfig();
  document.getElementById('configBusinessName').value = config.businessName || '';
  document.getElementById('configEmail').value = config.email || '';
  document.getElementById('configPhone').value = config.phone || '';
  document.getElementById('configWhatsApp').value = config.whatsapp || '';
  document.getElementById('configFacebook').value = config.facebookLink || '';
  document.getElementById('configAddress').value = config.address || '';
  document.getElementById('configHours').value = config.openingHours || '';
}

function renderLegalPageEditor() {
  const select = document.getElementById('legalPageSelect');
  const editor = document.getElementById('legalPageEditor');
  if (!select || !editor) return;

  const legal = readJSON(STORAGE_KEYS.legal, DEFAULT_LEGAL);
  const page = select.value;
  editor.value = legal[page] || '';
}

function renderAdminViews() {
  renderProductTable();
  renderEnquiriesTable();
  renderOrdersTable();
  populateConfigForm();
  renderLegalPageEditor();
  updateConfigUI();
}

function saveProduct(event) {
  event.preventDefault();

  const id = document.getElementById('productId').value;
  const name = document.getElementById('productName').value.trim();
  const category = document.getElementById('productCategory').value;
  const vehicle = document.getElementById('productVehicle').value;
  const price = Number(document.getElementById('productPrice').value);
  const stock = Number(document.getElementById('productStock').value);
  const imageInput = document.getElementById('productImage');

  const products = getProducts();

  const uploadImage = async () => {
    if (imageInput && imageInput.files && imageInput.files[0]) {
      const file = imageInput.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        const product = {
          id: id || `p-${Date.now()}`,
          name,
          category,
          vehicle,
          price,
          stock,
          image: reader.result || generatePlaceholderSvg(name, '#1b6df2')
        };

        const nextProducts = id ? products.map((item) => item.id === id ? product : item) : [product, ...products];
        saveJSON(STORAGE_KEYS.products, nextProducts);
        document.getElementById('productForm').reset();
        renderAdminViews();
        renderPublicProducts();
      };
      reader.readAsDataURL(file);
      return;
    }

    const product = {
      id: id || `p-${Date.now()}`,
      name,
      category,
      vehicle,
      price,
      stock,
      image: (products.find((item) => item.id === id)?.image) || generatePlaceholderSvg(name, '#1b6df2')
    };

    const nextProducts = id ? products.map((item) => item.id === id ? product : item) : [product, ...products];
    saveJSON(STORAGE_KEYS.products, nextProducts);
    document.getElementById('productForm').reset();
    renderAdminViews();
    renderPublicProducts();
  };

  uploadImage();
}

function resetProductForm() {
  document.getElementById('productForm').reset();
  document.getElementById('productId').value = '';
}

function editProduct(productId) {
  const product = getProducts().find((item) => item.id === productId);
  if (!product) return;

  document.getElementById('productId').value = product.id;
  document.getElementById('productName').value = product.name;
  document.getElementById('productCategory').value = product.category;
  document.getElementById('productVehicle').value = product.vehicle;
  document.getElementById('productPrice').value = product.price;
  document.getElementById('productStock').value = product.stock;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function deleteProduct(productId) {
  const products = getProducts().filter((item) => item.id !== productId);
  saveJSON(STORAGE_KEYS.products, products);
  renderAdminViews();
  renderPublicProducts();
}

function saveWebsiteConfig(event) {
  event.preventDefault();
  const config = getConfig();
  const nextConfig = {
    ...config,
    businessName: document.getElementById('configBusinessName').value.trim() || config.businessName,
    email: document.getElementById('configEmail').value.trim() || config.email,
    phone: document.getElementById('configPhone').value.trim() || config.phone,
    whatsapp: document.getElementById('configWhatsApp').value.trim() || config.whatsapp,
    whatsappLink: document.getElementById('configWhatsApp').value.trim() ? `https://wa.me/${document.getElementById('configWhatsApp').value.replace(/\D/g, '')}` : config.whatsappLink,
    facebookLink: document.getElementById('configFacebook').value.trim() || config.facebookLink,
    address: document.getElementById('configAddress').value.trim() || config.address,
    openingHours: document.getElementById('configHours').value.trim() || config.openingHours
  };

  saveJSON(STORAGE_KEYS.config, nextConfig);
  updateConfigUI();
  alert('Website settings saved.');
}

function saveLegalPage() {
  const select = document.getElementById('legalPageSelect');
  const editor = document.getElementById('legalPageEditor');
  if (!select || !editor) return;

  const legal = readJSON(STORAGE_KEYS.legal, DEFAULT_LEGAL);
  legal[select.value] = editor.value;
  saveJSON(STORAGE_KEYS.legal, legal);
  renderLegalContent();
  alert('Legal page saved.');
}

function populateAdminPage() {
  ensureData();
  updateConfigUI();
  renderAdminViews();

  document.getElementById('productForm')?.addEventListener('submit', saveProduct);
  document.getElementById('resetProductForm')?.addEventListener('click', resetProductForm);
  document.body.addEventListener('click', (event) => {
    const editBtn = event.target.closest('[data-edit-product]');
    if (editBtn) {
      editProduct(editBtn.getAttribute('data-edit-product'));
    }

    const deleteBtn = event.target.closest('[data-delete-product]');
    if (deleteBtn) {
      deleteProduct(deleteBtn.getAttribute('data-delete-product'));
    }
  });

  document.getElementById('configForm')?.addEventListener('submit', saveWebsiteConfig);
  document.getElementById('legalPageSelect')?.addEventListener('change', renderLegalPageEditor);
  document.getElementById('saveLegalPage')?.addEventListener('click', saveLegalPage);

  document.getElementById('logoutBtn')?.addEventListener('click', () => {
    localStorage.removeItem(STORAGE_KEYS.admin + '_auth');
    window.location.href = 'admin.html';
  });
}

function renderLegalContent() {
  const container = document.getElementById('legalContent');
  if (!container) return;

  const legal = readJSON(STORAGE_KEYS.legal, DEFAULT_LEGAL);
  const pageOrder = ['privacy', 'terms', 'shipping', 'returns', 'warranty', 'contact', 'cookies'];

  container.innerHTML = pageOrder.map((key) => {
    const title = {
      privacy: 'Privacy Policy',
      terms: 'Terms and Conditions',
      shipping: 'Delivery and Shipping Policy',
      returns: 'Returns and Refunds Policy',
      warranty: 'Warranty Information',
      contact: 'Contact Us',
      cookies: 'Cookie Policy'
    }[key];

    const sectionId = key === 'terms' ? 'terms' : key === 'shipping' ? 'shipping' : key === 'returns' ? 'returns' : key === 'warranty' ? 'warranty' : key === 'contact' ? 'contact' : key === 'cookies' ? 'cookies' : 'privacy';

    return `
      <section id="${sectionId}">
        <h2>${title}</h2>
        ${legal[key]
          .replace(/^#\s+/gm, '')
          .split('\n\n')
          .map((paragraph) => paragraph.startsWith('- ') ? `<ul><li>${paragraph.replace(/^-\s*/, '')}</li></ul>` : `<p>${paragraph}</p>`)
          .join('')}
      </section>
    `;
  }).join('');
}

function initLegalPage() {
  ensureData();
  updateConfigUI();
  renderLegalContent();
}

function initAdminPage() {
  ensureData();
  const loginScreen = document.getElementById('loginScreen');
  const adminDashboard = document.getElementById('adminDashboard');
  const credentials = getAdminCredentials();

  const isAuthenticated = localStorage.getItem(STORAGE_KEYS.admin + '_auth') === 'true';
  if (isAuthenticated) {
    loginScreen.classList.add('hidden');
    adminDashboard.classList.remove('hidden');
    populateAdminPage();
    return;
  }

  const loginForm = document.getElementById('loginForm');
  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = document.getElementById('adminEmail').value.trim();
    const password = document.getElementById('adminPassword').value;

    if (email === credentials.email && password === credentials.password) {
      localStorage.setItem(STORAGE_KEYS.admin + '_auth', 'true');
      loginScreen.classList.add('hidden');
      adminDashboard.classList.remove('hidden');
      populateAdminPage();
    } else {
      alert('Invalid login details.');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  ensureData();
  const page = document.body.dataset.page;
  if (page === 'home') initHomePage();
  if (page === 'legal') initLegalPage();
  if (page === 'admin') initAdminPage();
});
