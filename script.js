const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');

    const isOpen = navLinks.classList.contains('active');

    hamburger.setAttribute('aria-expanded', isOpen);
    hamburger.setAttribute(
        'aria-label',
        isOpen ? 'Zamknij menu' : 'Otwórz menu'
    );

    hamburger.textContent = isOpen ? '✕' : '☰';
});

document.addEventListener('DOMContentLoaded', () => {
    const animatedElements =  document.querySelectorAll('.js-scroll-animate')
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.2,
    };

    const observerCallback = (entries,observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting)
            {
                entry.target.classList.add('js-animate-active');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    animatedElements.forEach(el => observer.observe(el));
});