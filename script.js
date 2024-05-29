document.addEventListener('DOMContentLoaded', () => {
    const menuLinks = document.querySelectorAll('#menu a');

    menuLinks.forEach(link => {
        link.addEventListener('click', event => {
            const currentActive = document.querySelector('#menu .active');
            if (currentActive) {
                currentActive.classList.remove('active');
            }
            event.target.classList.add('active');
        });
    });
});