// main.js

document.addEventListener('DOMContentLoaded', () => {
    // 1. Menu Mobile (Hamburger)
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Chiude il menu quando si clicca un link su mobile
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // 2. Anno dinamico nel footer
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 3. Animazioni Fade-In allo scroll utilizzando IntersectionObserver
    // L'effetto aggiunge una classe '.visible' quando l'elemento entra nella viewport
    const fadeElements = document.querySelectorAll('.fade-in');

    const appearOptions = {
        threshold: 0.15, // Scatta quando il 15% dell'elemento è visibile
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Ferma l'osservazione per animare solo una volta
            }
        });
    }, appearOptions);

    fadeElements.forEach(el => {
        appearOnScroll.observe(el);
    });

    // 4. Cambia stile Navbar allo scroll (Effetto ombra per evidenziarla)
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.08)";
            navbar.style.background = "rgba(255, 255, 255, 0.95)";
        } else {
            navbar.style.boxShadow = "none";
            navbar.style.background = "rgba(255, 255, 255, 0.85)";
        }
    });
});
