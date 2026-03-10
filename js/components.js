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
            <a href="https://www.instagram.com/vitor1227_op/" target="_blank" class="footer__link">
                <i class="fa-brands fa-instagram"></i> Instagram
              </a>
              <a href="https://www.threads.com/@vitor1227_op" target="_blank" class="footer__link">
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
    const sidebarNav = document.getElementById('learn-sidebar-nav');
    const content = document.getElementById('learn-content');
    const closeBtn = document.getElementById('sidebar-close-btn');
    const fab = document.getElementById('learn-fab');
    const overlay = document.getElementById('learn-sidebar-overlay');
    const contentWrapper = document.getElementById('learn-content-wrapper');
    if (!sidebar || !sidebarNav || !content) return;

    // --- State & Initial State ---
    const openCats = new Set(); // tracks which categories are open by name
    let sidebarVisible = true;

    // Mobile starts hidden, PC starts visible
    if (window.innerWidth <= 768) {
      sidebarVisible = false;
      sidebar.classList.add('hidden');
    } else {
      sidebar.classList.remove('hidden');
    }

    // --- MARKED CONFIGURATION ---
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
      const isOpen = catIdx === 0;
      if (isOpen) openCats.add(cat);
      sidebarHTML += `
            <div class="learn-sidebar__cat">
                <button class="learn-sidebar__cat-btn${isOpen ? ' open' : ''}" data-cat="${cat}">
                    <span>${data.icon} ${cat}</span>
                    <span class="learn-sidebar__chevron">▶</span>
                </button>
                <div class="learn-sidebar__topics${isOpen ? ' open' : ''}">`;

      Object.entries(data.topics).forEach(([slug, topic]) => {
        allTopics.push({ slug, topic, cat });
        sidebarHTML += `<a class="learn-sidebar__topic" data-slug="${slug}">${topic.title}</a>`;
      });

      sidebarHTML += `</div></div>`;
    });

    sidebarNav.innerHTML = sidebarHTML;

    // --- CATEGORY TOGGLE ---
    sidebarNav.querySelectorAll('.learn-sidebar__cat-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const cat = btn.dataset.cat;
        const isNowOpen = btn.classList.toggle('open');
        btn.nextElementSibling.classList.toggle('open');
        if (isNowOpen) {
          openCats.add(cat);
        } else {
          openCats.delete(cat);
        }
      });
    });

    // =========================================================
    //  SIDEBAR CLOSE — Animated: close cats first, then slide out
    // =========================================================
    function closeSidebar() {
      if (!sidebarVisible) return;
      sidebarVisible = false;

      // Step 1: Close all open category sections with stagger
      const openBtns = sidebarNav.querySelectorAll('.learn-sidebar__cat-btn.open');
      const totalCats = openBtns.length;
      const staggerDelay = 60; // ms per cat
      const catAnimTime = totalCats * staggerDelay + 200; // total time for cats to close

      openBtns.forEach((btn, i) => {
        setTimeout(() => {
          btn.classList.remove('open');
          btn.nextElementSibling.classList.remove('open');
        }, i * staggerDelay);
      });

      // Step 2: After cats close, slide sidebar out
      setTimeout(() => {
        sidebar.classList.add('hidden');
        // Mobile: close overlay
        if (overlay) overlay.classList.remove('visible');
        document.body.style.overflow = '';
      }, catAnimTime);
    }

    // =========================================================
    //  SIDEBAR OPEN — Animated: slide in, then restore cats
    // =========================================================
    function openSidebar() {
      if (sidebarVisible) return;
      sidebarVisible = true;

      // Mobile: show overlay
      if (window.innerWidth <= 768 && overlay) {
        overlay.classList.add('visible');
        document.body.style.overflow = 'hidden';
      }

      // Step 1: Slide sidebar in
      sidebar.classList.remove('hidden');

      // Step 2: After sidebar slides in, restore previously opened cats
      setTimeout(() => {
        sidebarNav.querySelectorAll('.learn-sidebar__cat-btn').forEach(btn => {
          const cat = btn.dataset.cat;
          if (openCats.has(cat)) {
            btn.classList.add('open');
            btn.nextElementSibling.classList.add('open');
          }
        });
      }, 250); // wait for slide-in animation
    }

    // --- Close button (inside sidebar header) ---
    if (closeBtn) {
      closeBtn.addEventListener('click', closeSidebar);
    }

    // --- FAB: opens sidebar ---
    if (fab) {
      fab.addEventListener('click', openSidebar);
    }

    // --- Overlay click: close ---
    if (overlay) {
      overlay.addEventListener('click', closeSidebar);
    }

    // --- LOAD TOPIC ---
    async function loadTopic(slug) {
      let found = null, idx = -1;
      allTopics.forEach((t, i) => { if (t.slug === slug) { found = t; idx = i; } });
      if (!found) return;

      // Update active state
      sidebarNav.querySelectorAll('.learn-sidebar__topic').forEach(t => t.classList.remove('active'));
      const activeItem = sidebarNav.querySelector(`[data-slug="${slug}"]`);
      if (activeItem) activeItem.classList.add('active');

      // Ensure parent category is open
      const parentCat = activeItem?.closest('.learn-sidebar__cat');
      if (parentCat) {
        const catBtn = parentCat.querySelector('.learn-sidebar__cat-btn');
        const catTopics = parentCat.querySelector('.learn-sidebar__topics');
        const cat = catBtn.dataset.cat;
        if (!catBtn.classList.contains('open')) {
          catBtn.classList.add('open');
          catTopics.classList.add('open');
          openCats.add(cat);
        }
      }

      // Mobile: close sidebar after selecting a topic
      if (window.innerWidth <= 768 && sidebarVisible) {
        closeSidebar();
      }

      // Navigation
      const prev = idx > 0 ? allTopics[idx - 1] : null;
      const next = idx < allTopics.length - 1 ? allTopics[idx + 1] : null;

      let navHTML = '<div class="learn-nav">';
      navHTML += prev ? `<a class="learn-nav__btn" data-slug="${prev.slug}"><div class="learn-nav__label">← Anterior</div><div class="learn-nav__title">${prev.topic.title}</div></a>` : '<div></div>';
      navHTML += next ? `<a class="learn-nav__btn" data-slug="${next.slug}"><div class="learn-nav__label">Próximo →</div><div class="learn-nav__title">${next.topic.title}</div></a>` : '<div></div>';
      navHTML += '</div>';

      // Fade out
      content.style.opacity = '0';
      content.style.transform = 'translateY(15px)';
      content.style.filter = 'blur(4px)';

      try {
        const response = await fetch(found.topic.contentPath);
        if (!response.ok) throw new Error('File not found');
        const markdownText = await response.text();
        const htmlContent = marked.parse(markdownText);

        setTimeout(() => {
          content.innerHTML = `
                    <h1>${found.topic.title}</h1>
                    ${htmlContent}
                    ${navHTML}
                `;

          content.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightElement(block);
          });

          // Reset opacity/transform for content container but let typewriter handle internal elements
          content.style.transition = 'opacity 0.6s var(--ease-smooth), transform 0.6s var(--ease-smooth)';
          content.style.opacity = '1';
          content.style.transform = 'translateY(0)';
          content.style.filter = 'blur(0)';

          // --- APPLY TYPEWRITER ---
          applyTypewriterEffect(content);

          content.querySelectorAll('.learn-nav__btn').forEach(btn => {
            btn.addEventListener('click', () => loadTopic(btn.dataset.slug));
          });

          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 250);

      } catch (error) {
        console.error('Error loading markdown:', error);
        content.innerHTML = `<h1>Erro</h1><p>Não foi possível carregar o arquivo .md em: ${found.topic.contentPath}</p>`;
        content.style.opacity = '1';
        content.style.filter = 'blur(0)';
      }
    }

    // --- TOPIC CLICK ---
    sidebarNav.querySelectorAll('.learn-sidebar__topic').forEach(t => {
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
    const partnersContainer = document.getElementById('partners-container');
    if (partnersContainer) {
      const partners = SITE_DATA.partners;
      partnersContainer.innerHTML = partners.map(p => {
        const linksHTML = [];
        if (p.links.twitch) linksHTML.push(`<a href="${p.links.twitch}" target="_blank" class="partner-link" title="Twitch"><i class="fa-brands fa-twitch"></i> <span>Twitch</span></a>`);
        if (p.links.youtube) linksHTML.push(`<a href="${p.links.youtube}" target="_blank" class="partner-link" title="YouTube"><i class="fa-brands fa-youtube"></i> <span>YouTube</span></a>`);
        if (p.links.kick) linksHTML.push(`<a href="${p.links.kick}" target="_blank" class="partner-link" title="Kick"><i class="fa-solid fa-k"></i> <span>Kick</span></a>`);

        return `
          <div class="partner-card reveal reveal--down">
            <div class="partner-card__avatar">
              <div class="partner-card__avatar-inner">
                <img src="${p.img}" alt="${p.name}">
              </div>
            </div>
            <div class="partner-card__name">${p.name}</div>
            <div class="partner-card__tag">${p.tag}</div>
            <div class="partner-card__links">
              ${linksHTML.join('')}
            </div>
          </div>
        `;
      }).join('');

      // Observe new reveals for the dynamic cards
      if (window.observeNewReveals) {
        window.observeNewReveals(partnersContainer);
      }
    }

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

  // --- SEQUENTIAL TYPEWRITER EFFECT ---
  let typingQueue = [];
  let isCurrentlyTyping = false;

  function applyTypewriterEffect(container) {
    const elements = Array.from(container.querySelectorAll('h1, h2, h3, h4, p, li, blockquote'));

    // Config
    const observerOptions = {
      root: null,
      threshold: 0.05,
      rootMargin: '0px 0px -20% 0px' // only triggers if 20% from the bottom to allow scrolling space
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          if (!el.classList.contains('typed-ready') && !el.classList.contains('typed-done')) {
            el.classList.add('typed-ready');
            checkQueue();
          }
          observer.unobserve(el);
        }
      });
    }, observerOptions);

    elements.forEach(el => {
      if (el.closest('.code-block') || el.closest('.learn-nav')) {
        el.style.opacity = '1';
        return;
      }

      const originalHTML = el.innerHTML;
      el.setAttribute('data-original-html', originalHTML);
      el.style.opacity = '0';
      el.style.transform = 'translateY(5px)';
      el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      observer.observe(el);
    });

    async function checkQueue() {
      if (isCurrentlyTyping) return;

      // Get all ready elements that aren't done, sorted by DOM position
      const readyElements = Array.from(document.querySelectorAll('.typed-ready:not(.typed-done)'))
        .sort((a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top);

      if (readyElements.length === 0) return;

      isCurrentlyTyping = true;
      const el = readyElements[0];
      await startTyping(el);
      isCurrentlyTyping = false;

      // Continue to next one in queue
      checkQueue();
    }

    function startTyping(el) {
      return new Promise(async (resolve) => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
        const html = el.getAttribute('data-original-html');
        el.innerHTML = '';

        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = html;
        const nodes = Array.from(tempDiv.childNodes);

        const typeNode = (target, node) => {
          return new Promise(resolveNode => {
            if (node.nodeType === Node.TEXT_NODE) {
              const text = node.textContent;
              let charIndex = 0;
              const charsPerFrame = 10;

              const step = () => {
                const end = Math.min(charIndex + charsPerFrame, text.length);
                const chunk = text.substring(charIndex, end);
                target.appendChild(document.createTextNode(chunk));
                charIndex = end;

                if (charIndex < text.length) {
                  requestAnimationFrame(step);
                } else {
                  resolveNode();
                }
              };
              requestAnimationFrame(step);
            } else {
              const newNode = node.cloneNode(false);
              target.appendChild(newNode);
              const childNodes = Array.from(node.childNodes);

              async function processChildren() {
                for (const child of childNodes) {
                  await typeNode(newNode, child);
                }
                resolveNode();
              }
              processChildren();
            }
          });
        };

        for (const node of nodes) {
          await typeNode(el, node);
        }

        el.classList.add('typed-done');
        el.classList.remove('typed-ready');
        resolve();
      });
    }
  }

  // --- External Code Copy ---
  window.copyCode = function (btn) {
    const pre = btn.closest('.code-block').querySelector('pre');
    const code = pre.innerText;
    navigator.clipboard.writeText(code).then(() => {
      const originalText = btn.innerText;
      btn.innerText = 'Copiado!';
      btn.classList.add('success');
      setTimeout(() => {
        btn.innerText = originalText;
        btn.classList.remove('success');
      }, 2000);
    });
  };

  /* ====================== PAGE INIT ====================== */
  function init() {
    renderNavbar();
    renderFooter();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();