/* =========================================================
   The Daily Brief — Main Script
   Renders cards from data.js, powers the mobile menu,
   sets dates, and handles the newsletter form.
   ========================================================= */

(function () {
  'use strict';

  /* ---------- Set today's date ---------- */
  const todayEl = document.getElementById('dateToday');
  if (todayEl) {
    const d = new Date();
    todayEl.textContent = d.toLocaleDateString('en-US', {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    });
  }

  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Mobile nav toggle ---------- */
  const menuToggle = document.getElementById('menuToggle');
  const siteNav = document.getElementById('siteNav');
  if (menuToggle && siteNav) {
    menuToggle.addEventListener('click', () => siteNav.classList.toggle('open'));
  }

  /* ---------- Build article card HTML ---------- */
  function cardHTML(a) {
    const url = a.url || 'article.html';
    return `
      <a href="${url}" class="card">
        <div class="card-img" style="background-image:url('${a.image}')"></div>
        <div class="card-body">
          <span class="tag">${a.category}</span>
          <h3>${a.title}</h3>
          <p>${a.excerpt}</p>
          <div class="card-meta">${a.author} · ${a.date} · ${a.readTime} read</div>
        </div>
      </a>`;
  }

  /* ---------- News grid ---------- */
  const grid = document.getElementById('newsGrid');
  if (grid && typeof NEWS !== 'undefined') {
    grid.innerHTML = NEWS.map(cardHTML).join('');
  }

  /* ---------- Editor's picks ---------- */
  const picksEl = document.getElementById('picksList');
  if (picksEl && typeof PICKS !== 'undefined') {
    picksEl.innerHTML = PICKS.map(a => `
      <a href="article.html" class="pick">
        <div class="thumb" style="background-image:url('${a.image}')"></div>
        <div>
          <span class="tag">${a.category}</span>
          <h3>${a.title}</h3>
          <div class="pick-meta">${a.author} · ${a.readTime} read</div>
        </div>
      </a>`).join('');
  }

  /* ---------- Most Read ---------- */
  const mostReadEls = document.querySelectorAll('#mostRead');
  if (mostReadEls.length && typeof MOST_READ !== 'undefined') {
    const html = MOST_READ.map((a, i) =>
      `<li><a href="article.html">${a.title}</a></li>`
    ).join('');
    mostReadEls.forEach(el => el.innerHTML = html);
  }

  /* ---------- Related (article page) ---------- */
  const relatedEl = document.getElementById('relatedList');
  if (relatedEl && typeof NEWS !== 'undefined') {
    relatedEl.innerHTML = NEWS.slice(0, 4).map(a =>
      `<li><a href="article.html">${a.title}</a></li>`
    ).join('');
  }

  /* ---------- Newsletter form ---------- */
  function showToast(msg) {
    let toast = document.querySelector('.toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'toast';
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
  }

  document.querySelectorAll('#newsletterForm').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = form.querySelector('input[type="email"]').value;
      // TODO: connect to your email service (Mailchimp, ConvertKit, etc.)
      showToast('Thanks! Check your inbox to confirm your subscription.');
      form.reset();
    });
  });
})();