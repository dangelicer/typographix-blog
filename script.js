// Skeleton screen ---------------------------------------------------
setTimeout(() => {
    document.querySelectorAll('.skeleton').forEach(el => el.style.display = 'none');
    document.querySelectorAll('.hidden').forEach(el => el.style.display = 'block');
}, 3000)

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

//Dark & Light Modes -----------------------------------------------------
const themeSwitcher = document.getElementById('theme-switcher');

// Update Icon
function updateThemeIcon (isDarkMode) {
    themeSwitcher.children[0].classList.replace(isDarkMode ? 'fa-sun' : 'fa-moon', isDarkMode ? 'fa-moon' : 'fa-sun');
}

// Determine if dark mode is preffered
function prefersDarkMode () {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}

// Set theme based on preferance
function setThemeOnPreference () {
    const isDarkMode = prefersDarkMode()
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    updateThemeIcon(isDarkMode);
}

function switchTheme () {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme === 'dark');
}

// Check Local Storage
function initializeTheme () {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        updateThemeIcon(savedTheme === 'dark');
    } else {
        setThemeOnPreference();
    }
}

// Listen for theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', setThemeOnPreference)
themeSwitcher.addEventListener('click', switchTheme);

// Initialize theme when script loads
initializeTheme();