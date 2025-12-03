// main.js

// LOADING SCREEN REMOVAL
window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loader-overlay');

    // Fade out the loading screen
    loadingScreen.style.opacity = '0';

    // After fading out, hide the loading screen completely
    setTimeout(() => {
        loadingScreen.style.display = 'none'; // Hides the loading screen
        document.getElementById('content').style.display = 'block'; // Show your main content
    }, 1000); // Wait for the fade-out animation to finish (1 second)
});

// NAVBAR MOBILE TOGGLE
const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');

// Toggle mobile navigation menu
menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Smooth Scroll
const smoothScrollLinks = document.querySelectorAll('.nav-links a');

smoothScrollLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href').substring(1); // Remove the # symbol
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 80, // Offset for fixed navbar
            behavior: 'smooth'
        });
    });
});

// Reveal Elements on Scroll
const revealElements = document.querySelectorAll('.reveal-on-scroll');
window.addEventListener('scroll', () => {
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < window.innerHeight - 100) {
            element.classList.add('visible');
        }
    });
});

// Reveal Elements on Scroll (Debounced)
const revealOnScroll = () => {
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < window.innerHeight - 100) {
            element.classList.add('visible');
        }
    });
};

// Debounced Scroll Event to improve performance
let scrollTimeout;
window.addEventListener('scroll', () => {
    if (scrollTimeout) clearTimeout(scrollTimeout);
    
    scrollTimeout = setTimeout(() => {
        revealOnScroll();
    }, 50); // Adjust the debounce delay (50ms is a good balance)
});
