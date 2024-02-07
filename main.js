const button = document.getElementById('but2');
const otherButton = document.getElementById('but1');
let scale = 1;

button.addEventListener('click', () => {
    scale += 0.1; 
    otherButton.style.transform = `scale(${scale})`;
});

const buttonn = document.getElementById('but2');
const gifContainer = document.getElementById('gifContainer');
const gifs = [
    'https://im4.ezgif.com/tmp/ezgif-4-9f6f0918b2.gif',
    'https://im4.ezgif.com/tmp/ezgif-4-7561817a05.gif',
    'https://im4.ezgif.com/tmp/ezgif-4-7c1ca3b683.gif',
    'https://im4.ezgif.com/tmp/ezgif-4-23fccb2f94.gif',
    'https://im4.ezgif.com/tmp/ezgif-4-3935ace1ec.gif',
    'https://im4.ezgif.com/tmp/ezgif-4-bd7c76e198.gif',
    'https://im7.ezgif.com/tmp/ezgif-7-521bd061b6.gif'

];
let currentGifIndex = 0;

button.addEventListener('click', () => {
    const gifUrl = gifs[currentGifIndex];
    const gifElement = document.createElement('img');
    gifElement.src = gifUrl;
    gifContainer.innerHTML = ''; 
    gifContainer.appendChild(gifElement);


    currentGifIndex = (currentGifIndex + 1) % gifs.length;
});