/* ============================================================
   NAVBAR TOGGLE (Mobile Menu)
============================================================ */
const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
// Close menu when clicking a link (mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
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
// PARTICLES EFFECT
const canvas = document.getElementById('particles-canvas');
const ctx = canvas.getContext('2d');
let particlesArray = [];

function randomColor() {
    const colors = ['#00ff99', '#ffffff', '#000000']; // green, white, black
    return colors[Math.floor(Math.random() * colors.length)];
}

function initParticles() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    particlesArray = [];
    for (let i = 0; i < 80; i++) {
        particlesArray.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 4 + 1,
            speedX: (Math.random() - 0.5) * 1.5,
            speedY: (Math.random() - 0.5) * 1.5,
            color: randomColor()
        });
    }
}

function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particlesArray.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
    });
}

function updateParticles() {
    particlesArray.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
    });
}

function animateParticles() {
    drawParticles();
    updateParticles();
    requestAnimationFrame(animateParticles);
}

window.addEventListener('resize', initParticles);

initParticles();
animateParticles();

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuIcon.classList.toggle('active'); // animate icon
});

// Close menu when clicking a link (mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuIcon.classList.remove('active');
    });
});
