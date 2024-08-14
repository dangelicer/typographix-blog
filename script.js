function checkScroll () {
    const navbar = document.getElementById('nav-bar');
    const logo = document.getElementById('logo');
    let scrollPosition = window.scrollY;

    // Add/remove scroll class based on position
    if (scrollPosition > 20) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    //Calc new fontsize based on scroll position
    let newSize = 3 - (scrollPosition * 0.03);

    // Clamping fontsize 1.5rem - 3rem
    newSize = Math.max(1.5, newSize);
    newSize = Math.min(3, newSize);

    logo.style.fontSize = newSize + 'rem';
}

window.addEventListener('scroll', checkScroll);