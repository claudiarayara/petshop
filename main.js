// Este bloco de código é executado quando o DOM estiver completamente carregado
document.addEventListener('DOMContentLoaded', function () {
    // Configuração do carrossel usando o Swiper
    const carrossel1 = new Swiper('#carrossel', {
        spaceBetween: 0,
        slidesPerView: 1,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '#carrossel .swiper-pagination', // Elemento onde a paginação do carrossel será exibida
            clickable: true, // Permite clicar nos pontos de paginação para navegar pelos slides
        },
        navigation: {
            nextEl: '#carrossel1 .swiper-button-next', // Elemento do botão "Próximo" do carrossel
            prevEl: '#carrossel1 .swiper-button-prev', // Elemento do botão "Anterior" do carrossel
        },
    });
});

// Função para redirecionar para a página de login
function redirecionarParaPaginaLogin() {
    window.location.href = "login.html"; // Redireciona para a página login.html
}

// Este bloco de código também é executado quando o DOM estiver completamente carregado
document.addEventListener('DOMContentLoaded', function () {
    // Seleciona o botão de login pelo ID
    const loginButton = document.getElementById('loginButton');

    // Adiciona um ouvinte de eventos para o clique no botão de login
    loginButton.addEventListener('click', function () {
        // Redireciona para a página home.html quando o botão de login é clicado
        window.location.href = 'home.html';
    });
});
