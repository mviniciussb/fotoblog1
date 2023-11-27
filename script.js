const thumbnails = document.querySelectorAll('.thumbnail');

// Seleciona o lightbox e a imagem dentro dele
const lightbox = document.querySelector('.lightbox');
const lightboxImage = document.querySelector('.lightbox-content');

// Adiciona evento de clique a cada miniatura
thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', () => {
    // Exibe o lightbox
    lightbox.style.display = 'flex';
    // Define a imagem no lightbox com o SRC da miniatura clicada
    lightboxImage.src = thumbnail.src;
  });
});

// Fecha o lightbox ao clicar no botão de fechar
const closeButton = document.querySelector('.close');
closeButton.addEventListener('click', () => {
  lightbox.style.display = 'none';
});