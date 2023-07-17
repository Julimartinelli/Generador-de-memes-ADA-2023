//MODOS CLARO / OSCURO
changeMode = () => {
    asideTexto.classList.toggle('modo-oscuro');
    contenedorPrincipalClaro.classList.toggle('contenedor-principal-claro');
    asideImagen.classList.toggle('aside-imagen')
}

//BOTONES ASIDE
const botónTexto = document.getElementById("botón-texto");
const botónImagen = document.getElementById("botón-imagen")
const contenedorPrincipalClaro = document.getElementById("contenedor-principal-claro");

//botónTexto.addEventListener("click", (e) => hideAsideTexto)
//botónImagen.addEventListener("click", (e) => hideAsideImagen)


//INPUT COLOR
const colorPicker = document.getElementById("color-picker");
const colorMeme = document.getElementById("color-meme");
console.log(colorMeme)

const cambioFondoMeme = () => {
    let selecciónColor = colorPicker.value;
    colorMeme.innerHTML = `${colorPicker.value}`
}

colorPicker.addEventListener('input', () => cambioFondoMeme)


//FILTROS
const barraBrillo = document.getElementById('barra-brillo');
console.log(barraBrillo)
const barraOpacidad = document.getElementById('barra-opacidad');
console.log(barraOpacidad)
const barraContraste = document.getElementById('barra-contraste');
const barraDesenfoque = document.getElementById('barra-desenfoque');
const barraEscalaGrises = document.getElementById('barra-escala-grises');
const barraSepia = document.getElementById('barra-sepia');
const barraHue = document.getElementById('barra-hue');
const barraSaturado = document.getElementById('barra-saturado');
const barraNegativo = document.getElementById('barra-negativo');

const filtros = (e) => { 
    console.log(e)
    imagenMeme.style.filter = `brightness(${barraBrillo.value}) opacity(${barraOpacidad.value}) blur(${barraDesenfoque.value}px) contrast(${barraContraste.value}%) grayscale(${barraEscalaGrises.value}%) hue-rotate(${barraHue.value}deg) sepia(${barraSepia.value}%) saturate(${barraSaturado.value}%) invert(${barraNegativo.value})`}


barraBrillo.addEventListener('input', (e)=> filtros(e));
barraOpacidad.addEventListener('input', (e)=> filtros(e));
barraContraste.addEventListener('input', (e)=> filtros(e));
barraDesenfoque.addEventListener('input', (e)=> filtros(e));
barraEscalaGrises.addEventListener('input', (e)=> filtros(e));
barraSepia.addEventListener('input', (e)=> filtros(e));
barraHue.addEventListener('input', (e)=> filtros (e));
barraSaturado.addEventListener('input', (e)=> filtros (e));
barraNegativo.addEventListener('input', (e)=> filtros(e));


//IMAGEN
const urlInput = document.getElementById('url-input');
const imagenMeme = document.getElementById('imagen-meme');
console.log(urlInput)
urlInput.addEventListener('input', (e)=> changeBackground(e))

const changeBackground = (e) =>{
    console.log(e)
    imagenMeme.style.backgroundImage = `url('${e.target.value}')`
    imagenMeme.style.backgroundSize = 'cover';
    imagenMeme.style.backgroundRepeat = 'no-repeat'
    imagenMeme.style.backgroundPosition = 'center'
}
