// ============================================================
// AMAZOLAR — shared partials (header/footer) + site behaviors
// Each page includes:
//   <div id="site-header"></div> ... <div id="site-footer"></div>
//   <script src="main.js" defer></script>
// and sets <body data-page="home|about|programs|get-involved|contact|sponsorship">
// ============================================================

const DONATE_URL = 'https://educationequalshope-bloom.kindful.com/?campaign=1417034';
const CONTACT_EMAIL = 'belairec@amazolar.org';

// ── SVG icons ────────────────────────────────────────────────
const ICONS = {
  facebook: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.45 2.91h-2.33V22c4.78-.76 8.44-4.92 8.44-9.94Z"/></svg>',
  youtube:  '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 6.19C0 8.07 0 12 0 12s0 3.93.5 5.81a3.02 3.02 0 0 0 2.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14C24 15.93 24 12 24 12s0-3.93-.5-5.81ZM9.55 15.57V8.43L15.82 12l-6.27 3.57Z"/></svg>',
  instagram:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 0 1-1.38-.9 3.72 3.72 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a5.88 5.88 0 0 0-2.13 1.38A5.88 5.88 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.8.72 1.47 1.38 2.13a5.88 5.88 0 0 0 2.13 1.38c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.88 5.88 0 0 0 2.13-1.38 5.88 5.88 0 0 0 1.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.88 5.88 0 0 0-1.38-2.13A5.88 5.88 0 0 0 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0Zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84Zm0 10.16A4 4 0 1 1 16 12a4 4 0 0 1-4 4Zm6.4-11.85a1.44 1.44 0 1 0 1.44 1.44 1.44 1.44 0 0 0-1.44-1.44Z"/></svg>',
  email:    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z"/></svg>',
};

const socialLinks = `
  <a href="#" aria-label="Facebook">${ICONS.facebook}</a>
  <a href="#" aria-label="YouTube">${ICONS.youtube}</a>
  <a href="#" aria-label="Instagram">${ICONS.instagram}</a>`;

// ── Header partial ───────────────────────────────────────────
const headerHTML = `
<div class="utility-bar">
  <div class="container">
    <div class="utility-social">${socialLinks}</div>
    <nav class="utility-links" aria-label="Utility">
      <a href="contact.html#newsletter">Subscribe to Newsletter</a>
      <a href="contact.html">Get In Touch</a>
    </nav>
  </div>
</div>
<header class="site-header">
  <div class="container">
    <a class="logo" href="index.html">Ama<span>zolar</span></a>
    <button class="nav-burger" aria-label="Toggle navigation" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
    <nav class="main-nav" aria-label="Main">
      <ul>
        <li data-nav="home"><a class="home-link" href="index.html">Home</a></li>
        <li data-nav="about" class="has-dropdown">
          <button class="nav-toggle-sub" type="button" aria-expanded="false">About
            <svg class="caret" viewBox="0 0 10 6" aria-hidden="true"><path d="M0 0l5 6 5-6z"/></svg>
          </button>
          <ul class="dropdown">
            <li><a href="about.html#mission">Our Mission</a></li>
            <li><a href="about.html#team">Our Team</a></li>
          </ul>
        </li>
        <li data-nav="programs"><a href="programs.html">Programs</a></li>
        <li data-nav="get-involved" class="has-dropdown">
          <button class="nav-toggle-sub" type="button" aria-expanded="false">Get Involved
            <svg class="caret" viewBox="0 0 10 6" aria-hidden="true"><path d="M0 0l5 6 5-6z"/></svg>
          </button>
          <ul class="dropdown">
            <li><a href="get-involved.html#partner">Partner with Us</a></li>
            <li><a href="get-involved.html#volunteering">Volunteering</a></li>
            <li><a href="get-involved.html#donor">Join as a Donor</a></li>
          </ul>
        </li>
        <li data-nav="contact"><a href="contact.html">Contact Us</a></li>
        <li class="nav-donate">
          <a class="btn btn--primary" href="${DONATE_URL}" target="_blank" rel="noopener">Donate</a>
        </li>
      </ul>
    </nav>
  </div>
</header>`;

// ── Footer partial ───────────────────────────────────────────
const footerHTML = `
<footer class="site-footer">
  <div class="container">
    <div class="footer-grid">
      <div>
        <a class="footer-logo" href="index.html">Ama<span>zolar</span></a>
        <address>
          Quito, Ecuador&nbsp;|&nbsp;United States<br>
          +1 (000) 000-0000 <em>[PLACEHOLDER]</em><br>
          <a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a>
        </address>
        <div class="icon-row">
          ${socialLinks}
          <a href="mailto:${CONTACT_EMAIL}" aria-label="Email">${ICONS.email}</a>
        </div>
      </div>
      <div>
        <h4>Explore</h4>
        <ul class="footer-links">
          <li><a href="about.html">About Us</a></li>
          <li><a href="programs.html">Programs</a></li>
          <li><a href="sponsorship.html">Sponsorship</a></li>
          <li><a href="get-involved.html">Get Involved</a></li>
          <li><a href="contact.html">Contact Us</a></li>
        </ul>
      </div>
      <div>
        <h4>Take Action</h4>
        <ul class="footer-links">
          <li><a href="${DONATE_URL}" target="_blank" rel="noopener">Donate</a></li>
          <li><a href="get-involved.html#volunteering">Volunteer</a></li>
          <li><a href="get-involved.html#partner">Partner with Us</a></li>
          <li><a href="sponsorship.html">Sponsor a Student</a></li>
        </ul>
      </div>
      <div>
        <h4>Stay Updated</h4>
        <p style="margin-bottom:16px;">Stay updated on our progress in Quito.</p>
        <form class="newsletter-form" data-newsletter>
          <input type="email" name="email" placeholder="Your email address" required aria-label="Email address">
          <button class="btn btn--gold" type="submit">Sign Up</button>
        </form>
        <span class="footer-partner-badge">In partnership with Education&nbsp;=&nbsp;Hope</span>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <div class="container">
      <span>Amazolar operates under the fiscal sponsorship of Education Equals Hope (E=H), a registered nonprofit.</span>
      <span>&copy; ${new Date().getFullYear()} Amazolar. All rights reserved.</span>
    </div>
  </div>
</footer>`;

// ── Inject partials ──────────────────────────────────────────
const headerMount = document.getElementById('site-header');
const footerMount = document.getElementById('site-footer');
if (headerMount) headerMount.innerHTML = headerHTML;
if (footerMount) footerMount.innerHTML = footerHTML;

// Highlight active nav item
const page = document.body.dataset.page;
if (page) {
  const active = document.querySelector(`.main-nav [data-nav="${page}"]`);
  if (active) active.classList.add('active');
}

// ── Mobile nav ───────────────────────────────────────────────
const burger = document.querySelector('.nav-burger');
if (burger) {
  burger.addEventListener('click', () => {
    const open = document.body.classList.toggle('nav-open');
    burger.setAttribute('aria-expanded', open);
  });
}

// Dropdown toggles (click for touch/mobile; hover handled by CSS on desktop)
document.querySelectorAll('.nav-toggle-sub').forEach((btn) => {
  btn.addEventListener('click', () => {
    const li = btn.parentElement;
    const open = li.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
  });
});

// Close mobile nav when a link is chosen
document.querySelectorAll('.main-nav a').forEach((link) => {
  link.addEventListener('click', () => document.body.classList.remove('nav-open'));
});

// ── Hero background rotation (home) ──────────────────────────
const slides = document.querySelectorAll('.hero-slide');
if (slides.length > 1) {
  let current = 0;
  setInterval(() => {
    slides[current].classList.remove('is-active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('is-active');
  }, 6000);
}

// ── Newsletter forms (no backend yet — opens a pre-filled email) ──
document.querySelectorAll('[data-newsletter]').forEach((form) => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = form.querySelector('input[name="email"]').value;
    window.location.href =
      `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Newsletter signup')}` +
      `&body=${encodeURIComponent(`Please subscribe ${email} to the Amazolar newsletter.`)}`;
  });
});
