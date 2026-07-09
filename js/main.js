/**
 * main.js — Portfolio SPA di Federico Sgroi
 * 
 * Gestisce:
 * 1. Menu hamburger (mobile)
 * 2. Navbar scroll effects
 * 3. Active nav link tracking
 * 4. Reveal-on-scroll animations (IntersectionObserver)
 * 5. Anno dinamico nel footer
 * 6. Smooth scroll con offset per la navbar fissa
 */

document.addEventListener('DOMContentLoaded', () => {
    // ─── Cache DOM ───────────────────────────────────────────
    const hamburger   = document.getElementById('hamburger');
    const navMenu     = document.getElementById('navMenu');
    const navbar      = document.getElementById('navbar');
    const navLinks    = document.querySelectorAll('.nav-link');
    const yearSpan    = document.getElementById('year');
    const sections    = document.querySelectorAll('.section');

    // ─── 1. Menu Mobile (Hamburger) ─────────────────────────
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            const isOpen = hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            hamburger.setAttribute('aria-expanded', isOpen);
            // Previeni scroll del body quando il menu è aperto
            document.body.style.overflow = isOpen ? 'hidden' : '';
        });

        // Chiudi il menu al click su un link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            });
        });
    }

    // ─── 2. Navbar Scroll Effect ────────────────────────────
    let lastScroll = 0;
    const SCROLL_THRESHOLD = 50;

    function handleNavbarScroll() {
        const currentScroll = window.scrollY;
        if (currentScroll > SCROLL_THRESHOLD) {
            navbar.classList.add('navbar--scrolled');
        } else {
            navbar.classList.remove('navbar--scrolled');
        }
        lastScroll = currentScroll;
    }

    // Throttle scroll con requestAnimationFrame
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                handleNavbarScroll();
                updateActiveNavLink();
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });

    // ─── 3. Active Nav Link Tracking ────────────────────────
    function updateActiveNavLink() {
        const scrollPos = window.scrollY + 120; // Offset per la navbar
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('nav-link--active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('nav-link--active');
                    }
                });
            }
        });
    }

    // ─── 4. Reveal on Scroll (IntersectionObserver) ─────────
    const revealElements = document.querySelectorAll('.reveal, .reveal-stagger');

    if ('IntersectionObserver' in window) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); // Anima solo una volta
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -40px 0px'
        });

        revealElements.forEach(el => revealObserver.observe(el));
    } else {
        // Fallback: mostra tutto se IntersectionObserver non è supportato
        revealElements.forEach(el => el.classList.add('visible'));
    }

    // ─── 5. Anno Dinamico ───────────────────────────────────
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // ─── 6. Smooth Scroll con Offset ────────────────────────
    // Gestisce il click sui link interni tenendo conto dell'header fisso
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return; // Ignora i link vuoti "#"
            
            const targetEl = document.querySelector(targetId);
            if (targetEl) {
                e.preventDefault();
                const navHeight = navbar ? navbar.offsetHeight : 0;
                const targetPosition = targetEl.getBoundingClientRect().top + window.scrollY - navHeight - 16;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ─── Stato iniziale ─────────────────────────────────────
    handleNavbarScroll();
    updateActiveNavLink();
});
