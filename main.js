document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('[data-nav-toggle]');
    const navLinks = document.querySelector('.top-nav__links');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            const isOpen = navLinks.classList.toggle('top-nav__links--open');
            navToggle.setAttribute('aria-expanded', String(isOpen));
        });

        navLinks.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('top-nav__links--open')) {
                    navLinks.classList.remove('top-nav__links--open');
                    navToggle.setAttribute('aria-expanded', 'false');
                }
            });
        });
    }

    const yearTarget = document.querySelector('[data-year]');
    if (yearTarget) {
        yearTarget.textContent = new Date().getFullYear();
    }
});
