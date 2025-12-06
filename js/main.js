/* FILE: js/main.js */

document.addEventListener('DOMContentLoaded', () => {
    console.log("CareerSync JS Loaded.");

    // --- 1. NAVBAR SCROLL EFFECT ---
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) navbar.classList.add('scrolled');
            else navbar.classList.remove('scrolled');
        });
    }

    // --- 2. MOBILE MENU ---
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            const icon = mobileBtn.querySelector('i');
            if (icon) {
                if (mobileMenu.classList.contains('active')) {
                    icon.classList.remove('ph-list'); 
                    icon.classList.add('ph-x');
                } else {
                    icon.classList.remove('ph-x'); 
                    icon.classList.add('ph-list');
                }
            }
        });

        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                const icon = mobileBtn.querySelector('i');
                icon.classList.remove('ph-x');
                icon.classList.add('ph-list');
            });
        });
    }

    // --- 3. POSTER SLIDER (Hero Section) ---
    const posterImg = document.getElementById('hero-poster');
    const posters = ['assets/PosterMockup1.png', 'assets/PosterMockup2.png'];
    let currentPoster = 0;

    if (posterImg) {
        setInterval(() => {
            posterImg.style.opacity = 0; 
            setTimeout(() => {
                currentPoster = (currentPoster + 1) % posters.length;
                posterImg.src = posters[currentPoster];
                posterImg.onload = () => { posterImg.style.opacity = 1; }; 
            }, 300);
        }, 4000); 
    }

    // --- 4. APP SHOWCASE SLIDER (Manual) ---
    const uiSlider = document.getElementById('ui-slider');
    const indicator = document.getElementById('slide-indicator');
    const uiFrames = [
        'assets/UIFrame1.png', 'assets/UIFrame2.png', 'assets/UIFrame3.png',
        'assets/UIFrame4.png', 'assets/UIFrame5.png', 'assets/UIFrame6.png'
    ];
    let currentUI = 0;

    window.nextSlide = function() {
        currentUI = (currentUI + 1) % uiFrames.length;
        updateUISlider();
    };

    window.prevSlide = function() {
        currentUI = (currentUI - 1 + uiFrames.length) % uiFrames.length;
        updateUISlider();
    };

    function updateUISlider() {
        if (uiSlider && indicator) {
            uiSlider.src = uiFrames[currentUI];
            indicator.innerText = `${currentUI + 1} / ${uiFrames.length}`;
        }
    }
});

// --- 5. ACCORDION LOGIC ---
window.toggleAccordion = function(element) {
    const item = element.parentElement;
    const allItems = document.querySelectorAll('.accordion-item');
    
    allItems.forEach(otherItem => {
        if (otherItem !== item) {
            otherItem.classList.remove('active');
        }
    });

    item.classList.toggle('active');
};