/* ============================================================
   NAVBAR TOGGLE (Mobile Menu)
============================================================ */
const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links a'); // all nav links

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');      // show/hide menu
    menuIcon.classList.toggle('active');      // animate hamburger
});

// Close menu when clicking a link (mobile only)
navLinksItems.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {      // mobile only
            navLinks.classList.remove('active');
            menuIcon.classList.remove('active');
        }
    });
});

/* ============================================================
   REVEAL ELEMENTS ON SCROLL
============================================================ */
const reveals = document.querySelectorAll('.reveal-on-scroll');

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;

    reveals.forEach(el => {
        // Only check elements that are not visible yet
        if (!el.classList.contains('visible')) {
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < windowHeight - 100) {
                el.classList.add('visible');
            }
        }
    });
};

/* ============================================================
   FAQ TOGGLE (Accordion)
============================================================ */
const faqItems = document.querySelectorAll('.faq-question');

faqItems.forEach(item => {
    // Add click listener to each FAQ question
    item.addEventListener('click', () => {
        const answer = item.nextElementSibling;
        const isActive = answer.classList.contains('show');

        // Close all answers
        faqItems.forEach(i => {
            i.nextElementSibling.classList.remove('show');
            i.classList.remove('active');
            i.setAttribute('aria-expanded', 'false'); // Accessibility
        });

        // Open clicked answer if it was closed
        if (!isActive) {
            answer.classList.add('show');
            item.classList.add('active');
            item.setAttribute('aria-expanded', 'true');
        }
    });
});

/* ============================================================
   LOADER
============================================================ */
const loaderOverlay = document.getElementById('loader-overlay');

window.addEventListener('load', () => {
    loaderOverlay.classList.add('hide');

    setTimeout(() => {
        loaderOverlay.style.display = 'none';
    }, 800); // match CSS duration
});


/* ============================================================
   OPTIONAL: Navbar Shadow on Scroll
============================================================ */
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Keep revealing elements while scrolling
    revealOnScroll();
});
menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuIcon.classList.toggle('active'); // triggers the animation
});
