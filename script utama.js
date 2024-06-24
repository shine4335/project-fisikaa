document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            link.style.transform = 'scale(1.1)';
        });

        link.addEventListener('mouseleave', function() {
            link.style.transform = 'scale(1)';
        });
    });
});
