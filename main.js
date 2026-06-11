// script.js

// Mensagem de boas-vindas
window.onload = function () {
    alert("Bem-vindo ao Agro Forte - Futuro Sustentável!");
};

// Efeito suave ao clicar no menu
const links = document.querySelectorAll('nav a');

links.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const id = this.getAttribute('href');
        const section = document.querySelector(id);

        section.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Efeito nos cards
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = "scale(1.05)";
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = "scale(1)";
    });
});