document.addEventListener('click', function(event) {
    const navToggle = document.getElementById('nav-toggle');
    const nav = document.getElementById('nav');
    const hamburger = document.querySelector('.hamburger');
    
    if (navToggle && navToggle.checked) {
        // If click is outside nav and outside hamburger, close the menu
        if (!nav.contains(event.target) && !hamburger.contains(event.target)) {
            navToggle.checked = false;
        }
    }
});