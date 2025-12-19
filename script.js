/* =========================================
   JS CODE - Copy this to script.js
   =========================================
*/

// Toggle Mobile Menu with Animation
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
    // Add a simple animation class for smooth slide-in
    if (navLinks.classList.contains('active')) {
        navLinks.style.animation = 'slideIn 0.5s ease forwards';
    } else {
        navLinks.style.animation = 'slideOut 0.5s ease forwards';
    }
}

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Close menu if open on mobile
        const navLinks = document.getElementById('navLinks');
        navLinks.classList.remove('active');
        navLinks.style.animation = ''; // Reset animation

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Enhanced Navbar Background change on scroll with animation
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
        header.style.transform = 'translateY(-2px)'; // Slight lift animation
        header.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        header.style.transform = 'translateY(0)';
        header.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
    }
});

// Scroll-triggered Fade-in Animation for Sections
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply to sections with class 'section-padding'
document.querySelectorAll('.section-padding').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Add CSS for Menu Animations (to be added to style.css if not present)
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(-100%); }
        to { transform: translateX(0); }
    }
    @keyframes slideOut {
        from { transform: translateX(0); }
        to { transform: translateX(-100%); }
    }
`;
document.head.appendChild(style);

// Toggle Mobile Menu
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Close menu if open on mobile
        document.getElementById('navLinks').classList.remove('active');

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Simple Navbar Background change on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
});
// For About Section - See More
const aboutText = document.querySelector('.company-bio');
const aboutBtn = document.querySelector('#about .see-more-btn');

aboutBtn.addEventListener('click', () => {
  aboutText.classList.toggle('expanded');
  aboutBtn.textContent = aboutText.classList.contains('expanded') ? 'Read Less' : 'Read More';
});

document.querySelectorAll('.member-card').forEach(function (card) {
  const bio = card.querySelector('.member-bio');
  const btn = card.querySelector('.see-more-btn');

  btn.addEventListener('click', function () {
    bio.classList.toggle('expanded');
    btn.textContent = bio.classList.contains('expanded') ? 'Read Less' : 'Read More';
  });
});

/* =========================================
   DISCOVER GALLERY CUBE ANIMATION JS
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Elements ko select karein
    const discoverLink = document.querySelector('a[href="#discover"]');
    const galleryItems = document.querySelectorAll('#gallery-container .gallery-item');
    
    // Ek flag taaki animation baar-baar trigger na ho agar user jaldi-jaldi click kare
    let animationHasRun = false;

    // Agar discover link aur images maujood hain tabhi code chale
    if (discoverLink && galleryItems.length > 0) {

        discoverLink.addEventListener('click', function(e) {
            // Note: Hum default scroll behavior ko nahi rok rahe (e.preventDefault nahi lagaya),
            // taaki aapka purana smooth scroll code bhi chalta rahe.

            // Agar animation pehle chal chuka hai, to wapas mat chalao
            if (animationHasRun) return;
            
            animationHasRun = true; // Set flag to true

            // Har ek gallery item par loop chalayen
            galleryItems.forEach((item, index) => {
                // 2. Staggered Delay (Har image ke liye alag time)
                // 'index' ka use karke har image ko pichli image se thoda late shuru karenge.
                // Yahan 100ms ka gap hai har image ke beech.
                setTimeout(() => {
                    // 3. Animation wali CSS class add karein
                    item.classList.add('animate-falling-cube');
                    // Make sure opacity is set to 1 by the animation final state
                    item.style.opacity = '1'; 
                }, index * 100); // 100ms delay * item number
            });
        });
    }
});

