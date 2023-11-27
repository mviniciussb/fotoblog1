const thumbnails = document.querySelectorAll('.thumbnail');

const lightbox = document.querySelector('.lightbox');
const lightboxImage = document.querySelector('.lightbox-content');


thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', () => {
    
    lightbox.style.display = 'flex';
  
    lightboxImage.src = thumbnail.src;
  });
});

const closeButton = document.querySelector('.close');
closeButton.addEventListener('click', () => {
  lightbox.style.display = 'none';
});