/**
 * components.js - Reusable HTML component renderers
 *
 * Each function takes a data object and returns an HTML string.
 * Call renderSection() to inject rendered components into a container.
 *
 * Phase 2 migration path:
 *   - Replace innerHTML with React components (1:1 mapping)
 *   - Data shape stays identical - only the render layer changes
 *
 * Naming convention:
 *   create*()      → returns an HTML string for a single item
 *   render*()      → orchestrates creation + DOM injection
 */

'use strict';

/* ── Utility ────────────────────────────────────────────────── */

/**
 * Escape HTML to prevent XSS when inserting data into innerHTML.
 * All user-facing strings from data.js pass through this.
 */
function escHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Inject rendered HTML into a container by ID.
 * Logs a warning if the container doesn't exist (safe for partial pages).
 */
function renderSection(containerId, items, renderFn) {
  const container = document.getElementById(containerId);
  if (!container) {
    console.warn(`[components.js] Container #${containerId} not found.`);
    return;
  }
  if (!items || items.length === 0) {
    container.innerHTML = '<p class="placeholder-note">No items to display.</p>';
    return;
  }
  container.innerHTML = items.map(renderFn).join('');
}

/* ── Skill Card ─────────────────────────────────────────────── */

/**
 * Maps a skill category's colorClass to a CSS tag modifier class.
 */
const TAG_COLOR_MAP = {
  default: '',
  green:   'tag-green',
  purple:  'tag-purple',
  orange:  'tag-orange'
};

/**
 * @param {Object} skill
 * @param {string} skill.title      - Card heading (may include emoji)
 * @param {string} skill.colorClass - 'default' | 'green' | 'purple' | 'orange'
 * @param {string[]} skill.tags     - Array of skill label strings
 * @returns {string} HTML string
 */
function createSkillCard(skill) {
  const tagClass = TAG_COLOR_MAP[skill.colorClass] || '';
  const tagsHtml = skill.tags
    .map(t => `<span class="tag ${tagClass}">${escHtml(t)}</span>`)
    .join('');

  return `
    <article class="skill-card" aria-label="${escHtml(skill.title)} skills">
      <h3 class="skill-card-title">${escHtml(skill.title)}</h3>
      <div class="skill-tags" role="list" aria-label="Skills">
        ${tagsHtml}
      </div>
    </article>`;
}

/* ── Project Card ───────────────────────────────────────────── */

/**
 * @param {Object} project
 * @param {boolean} project.flagship   - Spans full grid width + special styling
 * @param {Object}  project.badge      - { label, cssClass }
 * @param {string}  project.status     - "In Progress" | "Complete"
 * @param {string}  project.title
 * @param {string}  project.repo       - Repo slug (e.g. 'the-migration-arc')
 * @param {string}  project.repoUrl    - Full GitHub URL
 * @param {string}  project.description
 * @param {string}  project.architecture - Pipeline flow string
 * @param {string}  project.problem    - Problem statement text
 * @param {string[]} project.stack     - Array of tech label strings
 * @returns {string} HTML string
 */
function createProjectCard(project) {
  const flagshipClass = project.flagship ? 'flagship' : '';
  const githubUser   = 'imrajankumar95';

  const stackTagsHtml = project.stack
    .map(t => `<span class="stack-tag">${escHtml(t)}</span>`)
    .join('');

  return `
    <article class="project-card ${flagshipClass}" aria-label="${escHtml(project.title)} project">
      <div class="project-badges">
        <span class="project-badge ${escHtml(project.badge.cssClass)}">${escHtml(project.badge.label)}</span>
        <span class="badge-status" aria-label="Status: ${escHtml(project.status)}">${escHtml(project.status)}</span>
      </div>

      <h3 class="project-title">${escHtml(project.title)}</h3>
      <p class="project-repo" aria-label="Repository">github.com/${githubUser}/${escHtml(project.repo)}</p>

      <p class="project-desc">${escHtml(project.description)}</p>

      <div class="project-arch" aria-label="Architecture pipeline">
        ${escHtml(project.architecture)}
      </div>

      <p class="project-problem">
        <strong>Problem Statement:</strong> ${escHtml(project.problem)}
      </p>

      <div class="project-stack" role="list" aria-label="Tech stack">
        ${stackTagsHtml}
      </div>

      <a
        href="${escHtml(project.repoUrl)}"
        target="_blank"
        rel="noopener noreferrer"
        class="project-link"
        aria-label="View ${escHtml(project.title)} on GitHub"
      >
        View Repository →
      </a>
    </article>`;
}

/* ── Education Card ─────────────────────────────────────────── */

/**
 * @param {Object}   item
 * @param {boolean}  item.fullWidth   - Spans full grid width
 * @param {string}   item.icon        - Emoji icon
 * @param {string}   item.title
 * @param {string}   item.institution
 * @param {string}   item.date
 * @param {string|null} item.description
 * @param {string[]|null} item.certs  - Optional checklist items
 * @param {string}   item.placeholder - Italic note about pending docs
 * @returns {string} HTML string
 */
function createEduCard(item) {
  const fullWidthClass = item.fullWidth ? 'full-width' : '';

  const descHtml = item.description
    ? `<p class="edu-desc">${escHtml(item.description)}</p>`
    : '';

  const certsHtml = item.certs && item.certs.length > 0
    ? `<ul class="cert-list" role="list">
        ${item.certs.map(c => `<li>${escHtml(c)}</li>`).join('')}
       </ul>`
    : '';

  const placeholderHtml = item.placeholder
    ? `<p class="placeholder-note">${escHtml(item.placeholder)}</p>`
    : '';

  return `
    <article class="edu-card ${fullWidthClass}" aria-label="${escHtml(item.title)}">
      <div class="edu-icon" aria-hidden="true">${escHtml(item.icon)}</div>
      <h3 class="edu-title">${escHtml(item.title)}</h3>
      <p class="edu-inst">${escHtml(item.institution)}</p>
      ${item.date ? `<p class="edu-date">${escHtml(item.date)}</p>` : ''}
      ${descHtml}
      ${certsHtml}
      ${placeholderHtml}
    </article>`;
}

/* ── Public render API ──────────────────────────────────────── */

/**
 * Render all dynamic sections from PORTFOLIO_DATA.
 * Called by main.js after DOM is ready.
 */
function renderAllSections() {
  renderSection('skills-grid',      PORTFOLIO_DATA.skills,       createSkillCard);
  renderSection('competencies-grid', PORTFOLIO_DATA.competencies, createSkillCard);
  renderSection('projects-grid',    PORTFOLIO_DATA.projects,     createProjectCard);
  renderSection('edu-grid',         PORTFOLIO_DATA.education,    createEduCard);
}
