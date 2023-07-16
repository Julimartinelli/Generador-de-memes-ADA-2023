









//FILTROS
const barraBrillo = document.getElementById('barra-brillo');
const barraOpacidad = document.getElementById('barra-opacidad');
const barraContraste = document.getElementById('barra-contraste')
const barraDesenfoque = document.getElementById('barra-desenfoque')
const barraEscalaGrises = document.getElementById('barra-escala-grises');
const barraSepia = document.getElementById('barra-sepia');
const barraHue = document.getElementById('barra-hue');
const barraSaturado = document.getElementById('barra-saturado')
const barraNegativo = document.getElementById('barra-negativo')

const filtros = (e) => { 
    imagenMeme.style.filter = `brightness(${barraBrillo.value}) opacity(${barraOpacidad.value}) blur(${barraDesenfoque.value}px) contrast(${barraContraste.value}%) grayscale(${barraEscalaGrises.value}%) hue-rotate(${barraHue.value}deg) sepia(${barraSepia.value}%) saturate(${barraSaturado.value}%) invert(${barraNegativo.value})`}


barraBrillo.addEventListener('input', (e)=> filtros(e))












//IMAGEN
const urlInput = document.getElementById('url-input');
const imagenMeme = document.getElementById('imagen-meme');

urlInput.addEventListener('input', (e)=> changeBackground(e))

const changeBackground = (e) =>{
    console.log(e)
    imagenMeme.style.backgroundImage = `url ('${e.target.value}')`
    imagenMeme.style.backgroundSize = 'cover';
    imagenMeme.style.backgroundRepeat = 'no-repeat'
    imagenMeme.style.backgroundPosition = 'center'
}
