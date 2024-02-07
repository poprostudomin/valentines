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
    'ezgif-5-0ae35058f1.gif',
    '1.gif',
    '2.gif',
    '3.gif',
    '4.gif',
    '5.gif',

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