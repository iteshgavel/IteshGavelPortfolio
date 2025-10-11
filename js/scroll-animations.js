// Scroll Animations
document.addEventListener('DOMContentLoaded', function() {
    // Remove no-js class
    document.documentElement.classList.remove('no-js');
    
    // Create intersection observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);
    
    // Add animation classes to sections, but ensure they're visible initially
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        // Don't animate the first section (home banner)
        if (index > 0) {
            section.classList.add('animate-on-scroll');
            observer.observe(section);
        }
    });
    
    // Ensure home banner is always visible
    const homeBanner = document.querySelector('.home_banner_area');
    if (homeBanner) {
        homeBanner.style.opacity = '1';
        homeBanner.style.transform = 'none';
    }
    
    // Parallax effect for banner (reduced intensity)
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const banner = document.querySelector('.home_banner_area');
        if (banner && scrolled < window.innerHeight) {
            const rate = scrolled * -0.2; // Reduced from -0.5 to -0.2
            banner.style.transform = `translateY(${rate}px)`;
        }
    });
});