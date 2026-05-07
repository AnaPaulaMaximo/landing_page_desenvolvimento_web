document.addEventListener('DOMContentLoaded', () => {
    // Pegando os elementos do HTML 
    const botaoMenu = document.getElementById('botaoMenu');
    const linksNavegacao = document.getElementById('linksNavegacao');

    // Alterna a classe 'ativo' para abrir/fechar o menu no celular
    botaoMenu.addEventListener('click', () => {
        linksNavegacao.classList.toggle('ativo');
    });

    // Fecha o menu ao clicar em um link
    const links = linksNavegacao.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 900) {
                linksNavegacao.classList.remove('ativo');
            }
        });
    });
});