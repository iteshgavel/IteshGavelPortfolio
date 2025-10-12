// Enhanced Navigation Features
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links and brand text
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    const brandText = document.querySelector('.brand-text');
    const sections = document.querySelectorAll('section[id]');
    
    // Add smooth scroll to brand text (Home button)
    if (brandText) {
        brandText.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Smooth scroll function for nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70; // Account for fixed header
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Active navigation highlighting
    function updateActiveNav() {
        let current = '';
        const scrollPosition = window.pageYOffset;
        
        // Check if we're at the top (home section)
        if (scrollPosition < 100) {
            current = 'home';
        } else {
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 100;
                const sectionHeight = section.offsetHeight;
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    current = section.getAttribute('id');
                }
            });
        }
        
        // Update brand text active state (home)
        if (brandText) {
            if (current === 'home') {
                brandText.classList.add('active');
            } else {
                brandText.classList.remove('active');
            }
        }
        
        // Update nav links active state
        navLinks.forEach(link => {
            link.parentElement.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.parentElement.classList.add('active');
            }
        });
    }
    
    // Update active nav on scroll
    window.addEventListener('scroll', updateActiveNav);
    
    // Initial call
    updateActiveNav();
});