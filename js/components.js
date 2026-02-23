/* ============================================================
   COMPONENTS.JS — Navbar, Footer, Sidebar, Article renderer
   ============================================================ */

(function () {
  'use strict';

  /* ====================== NAVBAR ====================== */
  function renderNavbar() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const nav = SITE_DATA.nav;

    const navHTML = `
    <nav class="navbar" id="navbar">
      <div class="navbar__inner">
        <a href="index.html" class="navbar__logo">By<span>Vitor</span></a>
        <div class="navbar__links">
          ${nav.map(n => `<a href="${n.href}" class="navbar__link${currentPage === n.href ? ' active' : ''}">${n.label}</a>`).join('')}
        </div>
        <div class="navbar__hamburger" id="hamburger" aria-label="Menu">
          <span></span><span></span><span></span>
        </div>
      </div>
      <div class="navbar__mobile" id="mobile-menu">
        ${nav.map(n => `<a href="${n.href}" class="navbar__link${currentPage === n.href ? ' active' : ''}">${n.label}</a>`).join('')}
      </div>
    </nav>`;

    document.body.insertAdjacentHTML('afterbegin', navHTML);

    // Scroll behavior
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 30);
      lastScroll = window.scrollY;
    }, { passive: true });

    // Hamburger
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
    });

    // Close mobile menu on link click
    mobileMenu.querySelectorAll('.navbar__link').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
      });
    });
  }

  /* ====================== FOOTER ====================== */
  const renderFooter = () => {
    const currentYear = new Date().getFullYear();
    const footerHTML = `
    <footer class="footer">
      <div class="footer__glitter-container">
        <div id="footer-wave-container"></div>
      </div>
      <div class="container overflow-hidden">
        <div class="footer__grid">
          <div class="footer__brand-side">
            <div class="footer__logo-container">
              <a href="index.html" class="footer__logo">By<span>Vitor</span></a>
              <span class="footer__logo-separator">x</span>
              <img src="images/logos/gemini.png" alt="Gemini" class="footer__logo-gemini-img">
            </div>
            <p class="footer__tagline">
              Engenharia de software focada em performance e escala. Construindo hoje os sistemas que aguentam o amanhã.
            </p>
            <p class="footer__disclaimer">
            Este site não é afiliado à Microsoft ou à Mojang AB.<br>Minecraft é uma marca registrada da Mojang Synergies AB.</p>
          </div>

          <div class="footer__nav-group">
            <h4 class="footer__title">Navegação</h4>
            <ul class="footer__links">
              ${SITE_DATA.nav.map(n => `<li><a href="${n.href}" class="footer__link">${n.label}</a></li>`).join('')}
            </ul>
          </div>

          <div class="footer__social-group">
            <h4 class="footer__title">Fale Comigo</h4>
            <div class="footer__socials">
            <a href="#" target="_blank" class="footer__link">
                <i class="fa-brands fa-instagram"></i> Instagram
              </a>
              <a href="#" target="_blank" class="footer__link">
                <i class="fa-brands fa-threads"></i> Threads
              </a>
              <a href="https://github.com/SoldadoHumano" target="_blank" class="footer__link">
                <i class="fa-brands fa-github"></i> GitHub
              </a>
              <a href="https://twitch.tv/soldadohmbr" target="_blank" class="footer__link">
                <i class="fa-brands fa-twitch"></i> Twitch
              </a> 
              <a href="https://www.youtube.com/@vitor1227_OP" target="_blank" class="footer__link">
                <i class="fa-brands fa-youtube"></i> YouTube
              </a>
              <a href="https://discord.gg/fTJuVaYmQG" target="_blank" class="footer__link">
                <i class="fa-brands fa-discord"></i> Discord
              </a>
            </div>
          </div>
        </div>
        <div class="footer__branding-huge-wrapper">
        <div class="footer__branding-huge" style="color: #b3b3b375;">&lt;ByVitor/&gt;</div>
      </div>
    </div>

    <div class="footer__bottom">
      <div class="container text-center">
        <p class="footer__copy" style="color: #ffffffbb;">
          &copy; 2024 - ${currentYear} ByVitor. Todos os direitos reservados.
        </p>
      </div>
    </div>
    </footer>`;

    const existingFooter = document.querySelector('footer');
    if (existingFooter) existingFooter.remove();
    document.body.insertAdjacentHTML('beforeend', footerHTML);

    // Force wave initialization after footer is in DOM
    if (window.initFooterWave) {
      window.initFooterWave();
    }
  };


  /* ====================== LEARN SIDEBAR ====================== */
  window.initLearnPage = function () {
    const sidebar = document.getElementById('learn-sidebar');
    const content = document.getElementById('learn-content');
    if (!sidebar || !content) return;

    // --- MARKED CONFIGURATION (The "Secret Sauce") ---
    // This custom renderer ensures your markdown code blocks use your CSS classes
    const renderer = new marked.Renderer();
    renderer.code = function (codeContent, language) {
      const code = typeof codeContent === 'object' ? codeContent.text : codeContent;
      const langClass = language ? `language-${language}` : '';
      const langLabel = language || 'Code';

      return `
            <div class="code-block">
                <div class="code-block__header">
                    <span>${langLabel}</span>
                    <button class="code-block__copy" onclick="copyCode(this)">Copy</button>
                </div>
                <pre><code class="${langClass}">${code}</code></pre>
            </div>
        `;
    };
    marked.setOptions({ renderer: renderer });

    const learn = SITE_DATA.learn;
    const allTopics = [];

    // --- BUILD SIDEBAR ---
    let sidebarHTML = '';
    Object.entries(learn).forEach(([cat, data], catIdx) => {
      sidebarHTML += `
            <div class="learn-sidebar__cat">
                <button class="learn-sidebar__cat-btn${catIdx === 0 ? ' open' : ''}" data-cat="${cat}">
                    <span>${data.icon} ${cat}</span>
                    <span class="learn-sidebar__chevron">▶</span>
                </button>
                <div class="learn-sidebar__topics${catIdx === 0 ? ' open' : ''}">`;

      Object.entries(data.topics).forEach(([slug, topic]) => {
        allTopics.push({ slug, topic, cat });
        sidebarHTML += `<a class="learn-sidebar__topic" data-slug="${slug}">${topic.title}</a>`;
      });

      sidebarHTML += `</div></div>`;
    });

    sidebar.innerHTML = sidebarHTML;

    // --- CATEGORY TOGGLE ---
    sidebar.querySelectorAll('.learn-sidebar__cat-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        btn.classList.toggle('open');
        btn.nextElementSibling.classList.toggle('open');
      });
    });

    // --- LOAD TOPIC FUNCTION (ASYNCHRONOUS) ---
    async function loadTopic(slug) {
      let found = null, idx = -1;
      allTopics.forEach((t, i) => { if (t.slug === slug) { found = t; idx = i; } });
      if (!found) return;

      // Update active state in sidebar
      sidebar.querySelectorAll('.learn-sidebar__topic').forEach(t => t.classList.remove('active'));
      const activeItem = sidebar.querySelector(`[data-slug="${slug}"]`);
      if (activeItem) activeItem.classList.add('active');

      // Build navigation HTML
      const prev = idx > 0 ? allTopics[idx - 1] : null;
      const next = idx < allTopics.length - 1 ? allTopics[idx + 1] : null;

      let navHTML = '<div class="learn-nav">';
      navHTML += prev ? `<a class="learn-nav__btn" data-slug="${prev.slug}"><div class="learn-nav__label">← Anterior</div><div class="learn-nav__title">${prev.topic.title}</div></a>` : '<div></div>';
      navHTML += next ? `<a class="learn-nav__btn" data-slug="${next.slug}"><div class="learn-nav__label">Próximo →</div><div class="learn-nav__title">${next.topic.title}</div></a>` : '<div></div>';
      navHTML += '</div>';

      // Content Animation: Fade Out
      content.style.opacity = '0';
      content.style.transform = 'translateY(10px)';

      try {
        // Fetch the Markdown file
        const response = await fetch(found.topic.contentPath);
        if (!response.ok) throw new Error('File not found');
        const markdownText = await response.text();

        // Convert Markdown to HTML
        const htmlContent = marked.parse(markdownText);

        setTimeout(() => {
          content.innerHTML = `
                    <h1>${found.topic.title}</h1>
                    ${htmlContent}
                    ${navHTML}
                `;

          // --- HIGHLIGHT CODE ---
          // Apply syntax coloring to the newly injected code blocks
          content.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightElement(block);
          });

          // Content Animation: Fade In
          content.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
          content.style.opacity = '1';
          content.style.transform = 'translateY(0)';

          // Bind navigation button clicks
          content.querySelectorAll('.learn-nav__btn').forEach(btn => {
            btn.addEventListener('click', () => loadTopic(btn.dataset.slug));
          });

          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 200);

      } catch (error) {
        console.error('Error loading markdown:', error);
        content.innerHTML = `<h1>Erro</h1><p>Não foi possível carregar o arquivo .md em: ${found.topic.contentPath}</p>`;
        content.style.opacity = '1';
      }
    }

    // --- TOPIC CLICK EVENTS ---
    sidebar.querySelectorAll('.learn-sidebar__topic').forEach(t => {
      t.addEventListener('click', (e) => {
        e.preventDefault();
        loadTopic(t.dataset.slug);
      });
    });

    // --- INITIAL LOAD ---
    if (allTopics.length > 0) {
      loadTopic(allTopics[0].slug);
    }
  };


  /* ====================== PROJECTS PAGE ====================== */
  window.initProjectsPage = function () {
    const grid = document.getElementById('projects-grid');
    const filterBar = document.getElementById('project-filters');
    if (!grid) return;

    const projects = SITE_DATA.projects;
    const allTags = [...new Set(projects.flatMap(p => p.tags))];

    // Build filters
    let filterHTML = `<button class="filter-btn active" data-tag="all">Todos</button>`;
    allTags.forEach(t => {
      filterHTML += `<button class="filter-btn" data-tag="${t}">${t}</button>`;
    });
    if (filterBar) filterBar.innerHTML = filterHTML;

    function renderProjects(tag) {
      const filtered = tag === 'all' ? projects : projects.filter(p => p.tags.includes(tag));

      if (filterBar) {
        filterBar.querySelectorAll('.filter-btn').forEach(b => {
          b.classList.toggle('active', b.dataset.tag === tag);
        });
      }

      grid.innerHTML = filtered.map((p, i) => `
        <div class="card hover-lift hover-shine" style="animation: fadeInUp 0.5s ease ${i * 0.08}s both;">
          <div class="card__icon">${p.icon}</div>
          <h3 class="card__title">${p.title}</h3>
          <p class="card__desc">${p.desc}</p>
          <div class="card__tags">
            ${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}
          </div>
          <div style="margin-top: var(--space-lg); display: flex; gap: var(--space-sm);">
            <a href="${p.github}" class="btn btn--sm btn--secondary">GitHub</a>
            <a href="${p.live}" class="btn btn--sm btn--ghost">Demo →</a>
          </div>
        </div>
      `).join('');
    }

    if (filterBar) {
      filterBar.addEventListener('click', (e) => {
        const btn = e.target.closest('.filter-btn');
        if (btn) renderProjects(btn.dataset.tag);
      });
    }

    renderProjects('all');
  };

  /* ====================== COMMUNITY PAGE ====================== */
  window.initCommunityPage = function () {
    // Community page is mostly static HTML — just add dynamic behavior
    const joinBtns = document.querySelectorAll('.community-join-btn');
    joinBtns.forEach(btn => {
      btn.addEventListener('mouseenter', () => {
        btn.style.transform = 'scale(1.02)';
      });
      btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'scale(1)';
      });
    });
  };
  /* ====================== INDEX PAGE (sponsors, timeline) ====================== */
  window.initIndexPage = function () {
    // Render sponsors with PNG logos and links (no names)
    const track = document.getElementById('sponsors-track');
    if (track) {
      const sponsors = SITE_DATA.sponsors;
      if (sponsors.length === 0) return;

      // Render base items
      const renderItems = (items) => items.map(s =>
        `<a href="${s.url}" target="_blank" class="sponsors__item" title="${s.name}">
            <div class="sponsors__logo">
               <img src="${s.img}" alt="${s.name}" loading="lazy">
            </div>
         </a>`
      ).join('');

      // Fill track with enough items to cover the screen width + buffer
      // and then clone for the loop
      track.innerHTML = renderItems(sponsors);

      // We need to wait for layout to calculate widths correctly
      // or just clone enough times to be safe.
      // A better approach for "any number of items" is to clone the set
      // until the total width is at least 2x container width.

      const setupMarquee = () => {
        const containerWidth = track.parentElement.offsetWidth;
        let trackContent = renderItems(sponsors);
        track.innerHTML = trackContent;

        let currentWidth = track.scrollWidth;

        // Ensure we have enough items to fill the screen and loop
        while (currentWidth < containerWidth * 2 || track.children.length < sponsors.length * 2) {
          trackContent += renderItems(sponsors);
          track.innerHTML = trackContent;
          currentWidth = track.scrollWidth;
          if (track.children.length > 100) break; // Safety break
        }

        // Set dynamic animation speed based on total width
        // Speed: 50px per second (adjust as needed)
        const speed = 50;
        const duration = currentWidth / speed;
        track.style.animationDuration = `${duration}s`;
      };

      // Initial setup
      setupMarquee();

      // Re-setup on resize
      window.addEventListener('resize', setupMarquee);
    }

    // Render timeline (mantido sem alterações)
    const timeline = document.getElementById('timeline');
    if (timeline) {
      timeline.innerHTML = SITE_DATA.timeline.map(t => `
        <div class="timeline__item reveal">
          <div class="timeline__dot"></div>
          <div class="timeline__year">${t.year}</div>
          <div class="timeline__title">${t.title}</div>
          <p class="timeline__desc">${t.desc}</p>
        </div>
      `).join('');

      if (window.observeNewReveals) {
        window.observeNewReveals(timeline);
      }
    }
  };

  async function loadMarkdownContent(path) {
    const container = document.getElementById('learn-content');

    // Subtle animation: start fade out
    container.style.opacity = '0';
    container.style.transition = 'opacity 0.3s ease';

    try {
      const response = await fetch(path);
      if (!response.ok) throw new Error('Failed to load content');

      const markdown = await response.text();

      // Using marked.js to parse the markdown
      // The 'marked' object is available globally after adding the CDN script
      const htmlOutput = marked.parse(markdown);

      // Wait for fade out to finish before changing content
      setTimeout(() => {
        container.innerHTML = htmlOutput;
        container.style.opacity = '1';

        // Re-initialize any code-copy buttons or animations
        // initAnimations(); 
      }, 300);

    } catch (error) {
      console.error('Error:', error);
      container.innerHTML = '<p>Error loading content. Please try again.</p>';
      container.style.opacity = '1';
    }
  }

  /* ====================== HELPERS ====================== */
  function formatDate(dateStr) {
    const d = new Date(dateStr + 'T00:00:00');
    const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
    return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
  }

  /* ====================== BACKGROUND ====================== */
  function renderBackground() {
    if (!document.querySelector('.bg-grid-animated')) {
      document.body.insertAdjacentHTML('afterbegin', '<div class="bg-grid-animated"></div>');
    }
  }

  /* ====================== PAGE INIT ====================== */
  function init() {
    renderBackground();
    renderNavbar();
    renderFooter();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();