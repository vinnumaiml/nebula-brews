/**
 * Nebula-Brews Luxury Hotel & Craft Lounge
 * Main Application Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Components
  initNavigation();
  initHeroDates();
  renderSuites('all');
  renderBrews('beer');
  renderFaqs();
  initBookingModal();
  initContactForm();
  initNewsletter();
  initBackToTop();
  updateLiveSkyForecast();
});

/* ==========================================================================
   Navigation & Scroll Effects
   ========================================================================== */
function initNavigation() {
  const navbar = document.querySelector('.navbar');
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');
  const navLinkItems = document.querySelectorAll('.nav-link');

  // Sticky Navbar on Scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Mobile Menu Toggle
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const isExpanded = navLinks.classList.contains('active');
      mobileToggle.setAttribute('aria-expanded', isExpanded);
    });

    // Close menu on link click
    navLinkItems.forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }

  // Active link highlighter on scroll
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const navItem = document.querySelector(`.nav-link[href*="${sectionId}"]`);
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinkItems.forEach(item => item.classList.remove('active'));
        if (navItem) navItem.classList.add('active');
      }
    });
  });
}

/* ==========================================================================
   Hero Date Auto-Populator
   ========================================================================== */
function initHeroDates() {
  const checkinInput = document.getElementById('hero-checkin');
  const checkoutInput = document.getElementById('hero-checkout');
  if (!checkinInput || !checkoutInput) return;

  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 2);

  const formatDate = (date) => date.toISOString().split('T')[0];

  checkinInput.value = formatDate(today);
  checkinInput.min = formatDate(today);
  checkoutInput.value = formatDate(tomorrow);
  checkoutInput.min = formatDate(tomorrow);

  checkinInput.addEventListener('change', () => {
    const newCheckin = new Date(checkinInput.value);
    const minCheckout = new Date(newCheckin);
    minCheckout.setDate(newCheckin.getDate() + 1);
    checkoutInput.min = formatDate(minCheckout);
    if (new Date(checkoutInput.value) <= newCheckin) {
      checkoutInput.value = formatDate(minCheckout);
    }
  });

  const heroSearchBtn = document.getElementById('hero-search-btn');
  if (heroSearchBtn) {
    heroSearchBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const suiteSelect = document.getElementById('hero-suite');
      const selectedCategory = suiteSelect ? suiteSelect.value : 'all';
      
      // Scroll to suites section
      const suitesSection = document.getElementById('suites');
      if (suitesSection) {
        suitesSection.scrollIntoView({ behavior: 'smooth' });
      }

      // Filter suites
      renderSuites(selectedCategory);
      
      // Update filter tab active state
      const tabs = document.querySelectorAll('#suite-tabs .tab-btn');
      tabs.forEach(tab => {
        if (tab.dataset.filter === selectedCategory) {
          tab.classList.add('active');
        } else {
          tab.classList.remove('active');
        }
      });

      showToast(`Showing available suites for your selected dates!`);
    });
  }
}

/* ==========================================================================
   Render Suites & Accommodations
   ========================================================================== */
function renderSuites(filterCategory = 'all') {
  const container = document.getElementById('suites-container');
  if (!container) return;

  const filtered = filterCategory === 'all' 
    ? hotelData.suites 
    : hotelData.suites.filter(s => s.category === filterCategory);

  container.innerHTML = filtered.map(suite => `
    <article class="suite-card" data-id="${suite.id}">
      <div class="suite-image-wrap">
        <img src="${suite.image}" alt="${suite.name}" loading="lazy">
        <span class="suite-badge">${suite.badge}</span>
        <div class="suite-specs-ribbon">
          <span class="suite-spec-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
            ${suite.size}
          </span>
          <span class="suite-spec-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg>
            ${suite.guests}
          </span>
        </div>
      </div>
      <div class="suite-body">
        <h3 class="suite-title">${suite.name}</h3>
        <p class="suite-tagline">${suite.tagline}</p>
        
        <div class="suite-amenities-pills">
          ${suite.amenities.slice(0, 3).map(a => `<span class="amenity-pill">${a}</span>`).join('')}
        </div>

        <div class="suite-footer">
          <div class="suite-price-wrap">
            <div class="suite-price">$${suite.price} <span>/ night</span></div>
          </div>
          <div class="suite-actions">
            <button class="btn btn-outline btn-sm view-suite-btn" onclick="openSuiteDetails('${suite.id}')">
              Details
            </button>
            <button class="btn btn-primary btn-sm book-suite-btn" onclick="openBookingModal('${suite.id}')">
              Reserve
            </button>
          </div>
        </div>
      </div>
    </article>
  `).join('');
}

// Suites Category Tab Click Event
document.addEventListener('click', (e) => {
  const tabBtn = e.target.closest('#suite-tabs .tab-btn');
  if (tabBtn) {
    document.querySelectorAll('#suite-tabs .tab-btn').forEach(btn => btn.classList.remove('active'));
    tabBtn.classList.add('active');
    const filter = tabBtn.dataset.filter;
    renderSuites(filter);
  }
});

/* ==========================================================================
   Render Brews, Coffee & Gastronomy
   ========================================================================== */
function renderBrews(category = 'beer') {
  const container = document.getElementById('brews-container');
  if (!container) return;

  const items = hotelData.brewsAndDining.items.filter(item => item.category === category);

  container.innerHTML = items.map(item => `
    <div class="brew-card">
      <div class="brew-thumb">
        <img src="${item.image}" alt="${item.name}" loading="lazy">
        <span class="brew-price-badge">${item.price}</span>
      </div>
      <div class="brew-content">
        <h4 class="brew-name">${item.name}</h4>
        <div class="brew-specs">${item.specs}</div>
        <p class="brew-desc">${item.desc}</p>
        <div class="brew-tags">
          ${item.tags.map(t => `<span class="brew-tag">${t}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

// Brews Category Tab Click Event
document.addEventListener('click', (e) => {
  const brewTab = e.target.closest('#brew-tabs .tab-btn');
  if (brewTab) {
    document.querySelectorAll('#brew-tabs .tab-btn').forEach(btn => btn.classList.remove('active'));
    brewTab.classList.add('active');
    renderBrews(brewTab.dataset.category);
  }
});

/* ==========================================================================
   Render FAQs Accordion
   ========================================================================== */
function renderFaqs() {
  const container = document.getElementById('faq-accordion');
  if (!container) return;

  container.innerHTML = hotelData.faqs.map((faq, index) => `
    <div class="faq-item ${index === 0 ? 'active' : ''}">
      <button class="faq-trigger" onclick="toggleFaq(this)">
        <span>${faq.q}</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </button>
      <div class="faq-content">
        <p>${faq.a}</p>
      </div>
    </div>
  `).join('');
}

function toggleFaq(btn) {
  const currentItem = btn.parentElement;
  const allItems = document.querySelectorAll('.faq-item');
  
  allItems.forEach(item => {
    if (item !== currentItem) {
      item.classList.remove('active');
    }
  });

  currentItem.classList.toggle('active');
}

/* ==========================================================================
   Live Sky Forecast Simulation
   ========================================================================== */
function updateLiveSkyForecast() {
  const clarityElem = document.getElementById('sky-clarity');
  const moonElem = document.getElementById('sky-moon');
  const seeingElem = document.getElementById('sky-seeing');
  const targetElem = document.getElementById('sky-target');

  if (!clarityElem) return;

  const now = new Date();
  const hours = now.getHours();
  
  clarityElem.textContent = "98% (Pristine)";
  moonElem.textContent = "Waxing Crescent (18%)";
  seeingElem.textContent = "0.74 Arcseconds (Optimal)";
  targetElem.textContent = "Saturn's Rings & Orion Nebula";
}

/* ==========================================================================
   Suite Details & Booking Modals
   ========================================================================== */
let currentSelectedSuite = null;

function initBookingModal() {
  const modalOverlay = document.getElementById('suite-modal');
  const closeBtn = document.getElementById('modal-close');
  
  if (closeBtn && modalOverlay) {
    closeBtn.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  // Keyboard escape closes modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

function closeModal() {
  const modalOverlay = document.getElementById('suite-modal');
  if (modalOverlay) {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
}

function openSuiteDetails(suiteId) {
  const suite = hotelData.suites.find(s => s.id === suiteId);
  if (!suite) return;

  currentSelectedSuite = suite;
  const modalBody = document.getElementById('modal-body-content');
  const modalOverlay = document.getElementById('suite-modal');

  modalBody.innerHTML = `
    <div style="display: grid; grid-template-columns: 1fr; gap: 1.5rem;">
      <div style="position: relative; border-radius: var(--radius-md); overflow: hidden; height: 320px;">
        <img src="${suite.image}" alt="${suite.name}" style="width: 100%; height: 100%; object-fit: cover;">
        <div style="position: absolute; top: 1rem; left: 1rem;" class="suite-badge">${suite.badge}</div>
      </div>
      <div>
        <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 1rem;">
          <div>
            <h2 style="font-size: 1.8rem; margin-bottom: 0.3rem;">${suite.name}</h2>
            <p style="color: var(--gold-light); font-weight: 500;">${suite.tagline}</p>
          </div>
          <div style="text-align: right;">
            <div style="font-size: 2rem; color: var(--gold-primary); font-weight: 700; font-family: var(--font-heading);">$${suite.price}</div>
            <span style="font-size: 0.85rem; color: var(--text-secondary);">per night + tax</span>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin: 1.5rem 0; padding: 1rem; background: rgba(255,255,255,0.03); border-radius: var(--radius-sm); border: 1px solid var(--border-light);">
          <div>
            <div style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase;">Room Size</div>
            <div style="font-weight: 600; color: #fff;">${suite.size}</div>
          </div>
          <div>
            <div style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase;">Bed Type</div>
            <div style="font-weight: 600; color: #fff;">${suite.bed}</div>
          </div>
          <div>
            <div style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase;">View</div>
            <div style="font-weight: 600; color: #fff;">${suite.view}</div>
          </div>
        </div>

        <p style="font-size: 0.95rem; line-height: 1.7; margin-bottom: 1.5rem; color: #cbd5e1;">${suite.description}</p>

        <h4 style="font-size: 1.05rem; margin-bottom: 0.75rem; color: var(--gold-light);">Signature Amenities & Privileges</h4>
        <ul style="list-style: none; display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.6rem; margin-bottom: 2rem;">
          ${suite.amenities.map(a => `
            <li style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.88rem; color: #cbd5e1;">
              <span style="color: var(--gold-primary);">✦</span> ${a}
            </li>
          `).join('')}
        </ul>

        <div style="display: flex; gap: 1rem; justify-content: flex-end;">
          <button class="btn btn-secondary" onclick="closeModal()">Close</button>
          <button class="btn btn-primary" onclick="openBookingModal('${suite.id}')">
            Proceed to Reservation
          </button>
        </div>
      </div>
    </div>
  `;

  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function openBookingModal(suiteId) {
  const suite = hotelData.suites.find(s => s.id === suiteId) || hotelData.suites[0];
  currentSelectedSuite = suite;
  
  const modalBody = document.getElementById('modal-body-content');
  const modalOverlay = document.getElementById('suite-modal');

  const todayStr = new Date().toISOString().split('T')[0];
  const nextDate = new Date();
  nextDate.setDate(nextDate.getDate() + 2);
  const nextDateStr = nextDate.toISOString().split('T')[0];

  modalBody.innerHTML = `
    <div>
      <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem; border-bottom: 1px solid var(--border-light); padding-bottom: 1rem;">
        <img src="${suite.image}" alt="${suite.name}" style="width: 80px; height: 80px; border-radius: var(--radius-sm); object-fit: cover; border: 1px solid var(--border-gold);">
        <div>
          <span style="font-size: 0.75rem; text-transform: uppercase; color: var(--gold-light); letter-spacing: 0.1em;">Reservation Desk</span>
          <h2 style="font-size: 1.45rem;">${suite.name}</h2>
          <span style="font-size: 0.9rem; color: var(--gold-primary); font-weight: 600;">$${suite.price} USD / night</span>
        </div>
      </div>

      <form id="reservation-form" onsubmit="handleReservationSubmit(event)">
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; margin-bottom: 1rem;">
          <div class="form-group">
            <label class="form-label">Check-In Date</label>
            <input type="date" id="book-checkin" class="form-control" value="${todayStr}" min="${todayStr}" required onchange="calculateBookingTotal()">
          </div>
          <div class="form-group">
            <label class="form-label">Check-Out Date</label>
            <input type="date" id="book-checkout" class="form-control" value="${nextDateStr}" min="${nextDateStr}" required onchange="calculateBookingTotal()">
          </div>
        </div>

        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; margin-bottom: 1rem;">
          <div class="form-group">
            <label class="form-label">Number of Guests</label>
            <select id="book-guests" class="form-control" onchange="calculateBookingTotal()">
              <option value="1">1 Guest</option>
              <option value="2" selected>2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Selected Suite</label>
            <select id="book-suite-select" class="form-control" onchange="switchBookingSuite(this.value)">
              ${hotelData.suites.map(s => `
                <option value="${s.id}" ${s.id === suite.id ? 'selected' : ''}>${s.name} ($${s.price}/night)</option>
              `).join('')}
            </select>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; margin-bottom: 1rem;">
          <div class="form-group">
            <label class="form-label">Full Name</label>
            <input type="text" id="book-name" class="form-control" placeholder="e.g. Elena Rostova" required>
          </div>
          <div class="form-group">
            <label class="form-label">Contact Email</label>
            <input type="email" id="book-email" class="form-control" placeholder="e.g. elena@example.com" required>
          </div>
        </div>

        <div class="form-group" style="margin-bottom: 1.25rem;">
          <label class="form-label">Phone Number</label>
          <input type="tel" id="book-phone" class="form-control" placeholder="+1 (555) 000-0000" required>
        </div>

        <!-- Add-on Celestial Experiences -->
        <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-light); border-radius: var(--radius-md); padding: 1.25rem; margin-bottom: 1.5rem;">
          <h5 style="font-size: 0.9rem; color: var(--gold-light); margin-bottom: 0.75rem; text-transform: uppercase;">Enhance Your Celestial Stay</h5>
          <label style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.6rem; cursor: pointer; font-size: 0.88rem; color: #cbd5e1;">
            <input type="checkbox" id="addon-tasting" onchange="calculateBookingTotal()" checked>
            <span>VIP Rooftop Craft Beer & Wine Flight Tasting (+$45)</span>
          </label>
          <label style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.6rem; cursor: pointer; font-size: 0.88rem; color: #cbd5e1;">
            <input type="checkbox" id="addon-stargaze" onchange="calculateBookingTotal()">
            <span>Private Stargazing Session with Astrophotographer (+$95)</span>
          </label>
          <label style="display: flex; align-items: center; gap: 0.75rem; cursor: pointer; font-size: 0.88rem; color: #cbd5e1;">
            <input type="checkbox" id="addon-shuttle" onchange="calculateBookingTotal()">
            <span>Roundtrip Luxury Tesla Airport Transfer (+$80)</span>
          </label>
        </div>

        <!-- Price Summary Box -->
        <div id="booking-price-breakdown" style="background: rgba(14, 18, 34, 0.9); border: 1px solid var(--border-gold); border-radius: var(--radius-md); padding: 1.25rem; margin-bottom: 1.5rem;">
          <!-- Dynamically populated -->
        </div>

        <div style="display: flex; gap: 1rem; justify-content: flex-end;">
          <button type="button" class="btn btn-secondary" onclick="closeModal()">Cancel</button>
          <button type="submit" class="btn btn-primary" id="confirm-booking-btn">
            Confirm & Reserve Suite
          </button>
        </div>
      </form>
    </div>
  `;

  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
  calculateBookingTotal();
}

function switchBookingSuite(newSuiteId) {
  const suite = hotelData.suites.find(s => s.id === newSuiteId);
  if (suite) {
    currentSelectedSuite = suite;
    calculateBookingTotal();
  }
}

function calculateBookingTotal() {
  if (!currentSelectedSuite) return;

  const checkinVal = document.getElementById('book-checkin').value;
  const checkoutVal = document.getElementById('book-checkout').value;
  const addonTasting = document.getElementById('addon-tasting')?.checked ? 45 : 0;
  const addonStargaze = document.getElementById('addon-stargaze')?.checked ? 95 : 0;
  const addonShuttle = document.getElementById('addon-shuttle')?.checked ? 80 : 0;

  const date1 = new Date(checkinVal);
  const date2 = new Date(checkoutVal);
  const diffTime = Math.abs(date2 - date1);
  let nights = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  if (isNaN(nights) || nights < 1) nights = 1;

  const roomSubtotal = currentSelectedSuite.price * nights;
  const addonsTotal = addonTasting + addonStargaze + addonShuttle;
  const taxes = Math.round((roomSubtotal + addonsTotal) * 0.12);
  const total = roomSubtotal + addonsTotal + taxes;

  const breakdownElem = document.getElementById('booking-price-breakdown');
  if (breakdownElem) {
    breakdownElem.innerHTML = `
      <div style="display: flex; justify-content: space-between; font-size: 0.9rem; margin-bottom: 0.35rem; color: var(--text-secondary);">
        <span>${currentSelectedSuite.name} (${nights} night${nights > 1 ? 's' : ''} @ $${currentSelectedSuite.price})</span>
        <span>$${roomSubtotal.toLocaleString()}</span>
      </div>
      ${addonsTotal > 0 ? `
        <div style="display: flex; justify-content: space-between; font-size: 0.9rem; margin-bottom: 0.35rem; color: var(--text-secondary);">
          <span>Selected Experiences & Add-ons</span>
          <span>$${addonsTotal}</span>
        </div>
      ` : ''}
      <div style="display: flex; justify-content: space-between; font-size: 0.9rem; margin-bottom: 0.5rem; color: var(--text-secondary);">
        <span>Occupancy Taxes & Resort Amenities Fee (12%)</span>
        <span>$${taxes}</span>
      </div>
      <div style="display: flex; justify-content: space-between; font-size: 1.25rem; font-weight: 700; color: #ffffff; border-top: 1px solid var(--border-light); padding-top: 0.6rem; margin-top: 0.4rem;">
        <span style="font-family: var(--font-heading);">Total Estimated Due:</span>
        <span style="color: var(--gold-primary); font-family: var(--font-heading);">$${total.toLocaleString()} USD</span>
      </div>
      <div style="font-size: 0.75rem; color: #10b981; margin-top: 0.4rem; display: flex; align-items: center; gap: 0.3rem;">
        ✓ Free cancellation up to 48 hours before check-in. Direct booking price guarantee.
      </div>
    `;
  }
}

function handleReservationSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('book-name').value;
  const email = document.getElementById('book-email').value;
  const checkin = document.getElementById('book-checkin').value;
  const checkout = document.getElementById('book-checkout').value;
  const reservationCode = 'NB-' + Math.floor(100000 + Math.random() * 900000);

  const modalBody = document.getElementById('modal-body-content');
  modalBody.innerHTML = `
    <div style="text-align: center; padding: 2rem 1rem;">
      <div style="width: 70px; height: 70px; background: rgba(16, 185, 129, 0.15); border: 2px solid #10b981; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem; color: #10b981;">
        <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
      </div>
      <h2 style="font-size: 1.8rem; margin-bottom: 0.5rem;">Reservation Confirmed!</h2>
      <p style="color: var(--gold-light); font-size: 1rem; margin-bottom: 1.5rem;">
        Welcome to Nebula-Brews, ${name}. Your celestial getaway awaits.
      </p>

      <div style="background: rgba(255, 255, 255, 0.04); border: 1px solid var(--border-gold); border-radius: var(--radius-md); padding: 1.5rem; max-width: 480px; margin: 0 auto 2rem; text-align: left;">
        <div style="display: flex; justify-content: space-between; margin-bottom: 0.75rem; border-bottom: 1px solid var(--border-light); padding-bottom: 0.5rem;">
          <span style="color: var(--text-secondary); font-size: 0.85rem;">Booking Reference:</span>
          <strong style="color: var(--gold-primary); font-size: 1.05rem;">${reservationCode}</strong>
        </div>
        <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
          <span style="color: var(--text-secondary); font-size: 0.85rem;">Suite:</span>
          <span style="color: #fff; font-size: 0.9rem;">${currentSelectedSuite.name}</span>
        </div>
        <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
          <span style="color: var(--text-secondary); font-size: 0.85rem;">Dates:</span>
          <span style="color: #fff; font-size: 0.9rem;">${checkin} to ${checkout}</span>
        </div>
        <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
          <span style="color: var(--text-secondary); font-size: 0.85rem;">Confirmation Sent To:</span>
          <span style="color: #fff; font-size: 0.9rem;">${email}</span>
        </div>
        <div style="display: flex; justify-content: space-between;">
          <span style="color: var(--text-secondary); font-size: 0.85rem;">Concierge Desk:</span>
          <span style="color: var(--gold-light); font-size: 0.9rem;">+1 (800) 592-NEBULA</span>
        </div>
      </div>

      <div style="display: flex; justify-content: center; gap: 1rem;">
        <button class="btn btn-secondary" onclick="window.print()">Print Voucher</button>
        <button class="btn btn-primary" onclick="closeModal()">Done</button>
      </div>
    </div>
  `;

  showToast(`Booking ${reservationCode} confirmed! A copy was sent to ${email}`);
}

/* ==========================================================================
   Contact Form Submission
   ========================================================================== */
function initContactForm() {
  const contactForm = document.getElementById('hotel-contact-form');
  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const subject = document.getElementById('contact-subject').value;
    const submitBtn = contactForm.querySelector('button[type="submit"]');

    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = `<span>Transmitting Message...</span>`;
    submitBtn.disabled = true;

    setTimeout(() => {
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
      contactForm.reset();
      showToast(`Thank you, ${name}! Your inquiry regarding "${subject}" has been received. Our concierge team will reach out at ${email}.`);
    }, 1000);
  });
}

/* ==========================================================================
   Newsletter Subscription
   ========================================================================== */
function initNewsletter() {
  const form = document.getElementById('newsletter-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailInput = document.getElementById('newsletter-email');
    const email = emailInput.value;
    if (email) {
      emailInput.value = '';
      showToast(`Welcome to the Nebula Inner Circle! Use code CELESTIAL15 for 15% off your next booking.`);
    }
  });
}

/* ==========================================================================
   Back To Top Floating Button
   ========================================================================== */
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ==========================================================================
   Toast Notification System
   ========================================================================== */
function showToast(message) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <div class="toast-icon">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 14"></polyline></svg>
    </div>
    <div class="toast-text">${message}</div>
  `;

  container.appendChild(toast);
  setTimeout(() => toast.classList.add('show'), 100);

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 4500);
}
