// Array com endereços de imagens
const imageArray = [
    "./img/R.jpeg",
    "./img/R1.jpeg",
    "./img/R2.jpeg",
    "./img/R3.jpg",
    "./img/R4.jpg",
    "./img/R5.jpg",
    "./img/R6.jpg",
    "./img/R7.jpg",
    "./img/R8.jpg",
    "./img/R9.jpeg",
    "./img/R10.jpg",
    "./img/R11.png",
    "./img/R12.jpg",
    "./img/R13.jpeg",
    "./img/R14.jpeg",
    "./img/R15.jpg",
 ];

 // Função para escolher randomicamente uma imagem do array
 function getRandomImage() {
     const randomIndex = Math.floor(Math.random() * imageArray.length);
     return imageArray[randomIndex];
 }

 // Função para carregar imagens
 function loadImages() {
     const imageContainer = document.getElementById('imageContainer');

     // Carrega imagens até que o container esteja cheio
     while (imageContainer.clientHeight < window.innerHeight) {
         const img = document.createElement('img');
         img.src = getRandomImage();
         imageContainer.appendChild(img);
     }

     
 }

 // Carrega imagens quando a página é carregada
 window.addEventListener('load', loadImages);

// Carrega mais imagens quando o usuário rolar até o final da página
window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        const imageContainer = document.getElementById('imageContainer');
        const img = document.createElement('img');
        img.src = getRandomImage();
        imageContainer.appendChild(img);
    }
});

