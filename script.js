document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menuBtn');
    const navLinks = document.getElementById('navLinks');

    // Alterna a visibilidade do menu no mobile
    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Fecha o menu ao clicar em um link (opcional, melhora a UX no mobile)
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 900) {
                navLinks.classList.remove('active');
            }
        });
    });
});