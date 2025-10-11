// Go to top functionality
document.addEventListener('DOMContentLoaded', function() {
    const goToTopBtn = document.getElementById('go-to-top-btn');
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            goToTopBtn.classList.add('show');
        } else {
            goToTopBtn.classList.remove('show');
        }
    });
    
    // Smooth scroll to top when button is clicked
    goToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});