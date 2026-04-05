/**
 * main.js - Application initialisation and behaviour
 *
 * Responsibilities:
 *  1. Render dynamic sections (via components.js)
 *  2. Mobile navigation toggle (hamburger menu)
 *  3. Active nav link highlight on scroll (IntersectionObserver)
 *  4. Back-to-top button
 *  5. Dark mode toggle hook (Phase 2 - wired up, just needs a button)
 *
 * No frameworks. No dependencies. Vanilla JS only.
 */

'use strict';

/* ── DOM Ready ──────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  renderAllSections();
  initNav();
  initActiveNavOnScroll();
  initBackToTop();
  initDarkModeHook();
});

/* ── 1. Render Dynamic Sections ─────────────────────────────── */
// Delegated to components.js → renderAllSections()
// Kept here for clarity: this is the entry point.

/* ── 2. Mobile Navigation ───────────────────────────────────── */
function initNav() {
  const toggle  = document.querySelector('.nav-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (!toggle || !navMenu) return;

  toggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.setAttribute(
      'aria-label',
      isOpen ? 'Close navigation menu' : 'Open navigation menu'
    );
  });

  // Close menu when a nav link is clicked (single-page scroll)
  navMenu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open navigation menu');
    });
  });

  // Close menu on outside click
  document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !toggle.contains(e.target)) {
      navMenu.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });

  // Close menu on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('is-open')) {
      navMenu.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.focus();
    }
  });
}

/* ── 3. Active Nav Link on Scroll ───────────────────────────── */
function initActiveNavOnScroll() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links .nav-link');

  if (!sections.length || !navLinks.length) return;

  /**
   * Build a map of section id → nav link for O(1) lookup.
   */
  const linkMap = {};
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href && href.startsWith('#')) {
      linkMap[href.slice(1)] = link;
    }
  });

  /**
   * Use IntersectionObserver: mark a nav link active when its
   * section is ≥ 30% visible in the viewport.
   */
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        const link = linkMap[entry.target.id];
        if (!link) return;

        if (entry.isIntersecting) {
          // Remove active from all, set on current
          Object.values(linkMap).forEach(l => l.classList.remove('is-active'));
          link.classList.add('is-active');
        }
      });
    },
    {
      rootMargin: `-${64}px 0px -50% 0px`, // offset for fixed nav height
      threshold:  0.1
    }
  );

  sections.forEach(section => observer.observe(section));
}

/* ── 4. Back to Top ─────────────────────────────────────────── */
function initBackToTop() {
  const btn = document.querySelector('.back-to-top');
  if (!btn) return;

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ── 5. Dark Mode Hook (Phase 2) ────────────────────────────── */
/**
 * Checks localStorage for a saved theme preference and applies it.
 * Wire up a toggle button in Phase 2 by calling toggleDarkMode().
 *
 * Example Phase 2 button:
 *   <button id="theme-toggle" aria-label="Toggle dark mode">🌙</button>
 *
 * Then in this function:
 *   document.getElementById('theme-toggle')?.addEventListener('click', toggleDarkMode);
 */
function initDarkModeHook() {
  const savedTheme = localStorage.getItem('portfolio-theme');
  if (savedTheme === 'dark') {
    document.documentElement.dataset.theme = 'dark';
  }

  // Phase 2: wire this to a button
  // document.getElementById('theme-toggle')?.addEventListener('click', toggleDarkMode);
}

function toggleDarkMode() {
  const isDark = document.documentElement.dataset.theme === 'dark';
  document.documentElement.dataset.theme = isDark ? 'light' : 'dark';
  localStorage.setItem('portfolio-theme', isDark ? 'light' : 'dark');
}

// Expose for Phase 2 use
window.toggleDarkMode = toggleDarkMode;
