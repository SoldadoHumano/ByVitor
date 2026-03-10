/* ============================================================
   ANIMATIONS.JS — Scroll reveal, parallax (lerp), tilt, smooth scroll
   ============================================================ */

(function () {
    'use strict';

    /* ====================== SCROLL REVEAL ====================== */
    let revealObserver = null;

    function initScrollReveal() {
        revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                }
            });
        }, { threshold: 0.10, rootMargin: '0px 0px -30px 0px' });

        document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
    }

    // Global function to observe new dynamically added .reveal elements
    window.observeNewReveals = function (container) {
        if (!revealObserver) return;
        const els = container ? container.querySelectorAll('.reveal') : document.querySelectorAll('.reveal:not(.revealed)');
        els.forEach(el => revealObserver.observe(el));
    };

    /* ====================== PARALLAX (Hero — lerp-smoothed) ====================== */
    function initParallax() {
        const hero = document.querySelector('.hero__bg');
        if (!hero) return;

        let currentY = 0;
        let targetY = 0;
        let currentOpacity = 1;
        let targetOpacity = 1;
        let rafId = null;

        function updateParallax() {
            // Lerp for buttery-smooth movement
            currentY += (targetY - currentY) * 0.08;
            currentOpacity += (targetOpacity - currentOpacity) * 0.08;

            hero.style.transform = `translateY(${currentY}px)`;
            hero.style.opacity = currentOpacity;

            // Keep animating until values settle
            if (Math.abs(targetY - currentY) > 0.1 || Math.abs(targetOpacity - currentOpacity) > 0.001) {
                rafId = requestAnimationFrame(updateParallax);
            } else {
                rafId = null;
            }
        }

        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            if (scrolled < window.innerHeight) {
                targetY = scrolled * 0.3;
                targetOpacity = 1 - (scrolled / (window.innerHeight * 1.2));
            }
            if (!rafId) {
                rafId = requestAnimationFrame(updateParallax);
            }
        }, { passive: true });
    }


    /* ====================== SMOOTH SCROLL (anchor links) ====================== */
    function initSmoothScroll() {
        document.addEventListener('click', (e) => {
            const link = e.target.closest('a[href^="#"]');
            if (!link) return;
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    }

    /* ====================== BUTTON RIPPLE ====================== */
    function initRipple() {
        document.addEventListener('click', (e) => {
            const btn = e.target.closest('.btn');
            if (!btn) return;

            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            const rect = btn.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
            ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
            btn.appendChild(ripple);
            ripple.addEventListener('animationend', () => ripple.remove());
        });
    }

    /* ====================== COPY CODE BUTTON ====================== */
    window.copyCode = function (btn) {
        const pre = btn.closest('.code-block').querySelector('pre');
        const text = pre.textContent;
        navigator.clipboard.writeText(text).then(() => {
            btn.textContent = 'Copiado!';
            btn.classList.add('copied');
            setTimeout(() => {
                btn.textContent = 'Copiar';
                btn.classList.remove('copied');
            }, 2000);
        });
    };


    /* ====================== 3D TILT ON CARDS ====================== */
    function initTiltCards() {
        const cards = document.querySelectorAll('.card, .article-card, .community-card');
        if (!cards.length) return;

        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = ((y - centerY) / centerY) * -4;
                const rotateY = ((x - centerX) / centerX) * 4;

                card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = '';
                card.style.transition = 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)';
                setTimeout(() => { card.style.transition = ''; }, 500);
            });
        });
    }

    /* ====================== FOOTER WAVE DIVIDER (Moved to wave.js) ====================== */
    // window.initFooterWave is now handled in js/wave.js

    /* ====================== INIT ALL ====================== */
    function init() {
        initScrollReveal();
        initParallax();
        initSmoothScroll();
        initRipple();
        // initTiltCards();
        window.initFooterGlitter();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();