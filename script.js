//PANELES
const botonImagen = document.getElementById("imagen-boton");
const botonTexto = document.getElementById("texto-boton");

const asideImagen = document.getElementById("aside-imagen");
const asideTexto = document.getElementById("aside-texto");

botonImagen.addEventListener("click", () => hideAsideImagen());
console.log(asideImagen);
botonTexto.addEventListener("click", () => hideAsideTexto());

const hideAsideImagen = () => {
    asideTexto.classList.add("hidden");
    asideImagen.classList.remove("hidden");
};

const hideAsideTexto = () => {
    asideImagen.classList.add("hidden");
    asideTexto.classList.remove("hidden");
};

const ocultarPanel = () => {
    $("panel").classList.add("hidden");
};
const mostrarPanel = () => {
    $("panel").classList.remove("hidden");
};
const mostrarPanelImagen = () => {
    $(`aside-texto`).classList.add("hidden");
    $(`aside-imagen`).classList.remove("hidden");
};
const mostrarPanelTexto = () => {
    $(`aside-imagen`).classList.add("hidden");
    $(`aside-texto`).classList.remove("hidden");
};

//CAMBIOS ASIDE IMAGEN
//FILTROS
const barraBrillo = document.getElementById("barra-brillo");
console.log(barraBrillo);
const barraOpacidad = document.getElementById("barra-opacidad");
console.log(barraOpacidad);
const barraContraste = document.getElementById("barra-contraste");
const barraDesenfoque = document.getElementById("barra-desenfoque");
const barraEscalaGrises = document.getElementById("barra-escala-grises");
const barraSepia = document.getElementById("barra-sepia");
const barraHue = document.getElementById("barra-hue");
const barraSaturado = document.getElementById("barra-saturado");
const barraNegativo = document.getElementById("barra-negativo");

const filtros = (e) => {
    console.log(e);
    imagenMeme.style.filter = `brightness(${barraBrillo.value}) opacity(${barraOpacidad.value}) blur(${barraDesenfoque.value}px) contrast(${barraContraste.value}%) grayscale(${barraEscalaGrises.value}%) hue-rotate(${barraHue.value}deg) sepia(${barraSepia.value}%) saturate(${barraSaturado.value}%) invert(${barraNegativo.value})`;
};

barraBrillo.addEventListener("input", (e) => filtros(e));
barraOpacidad.addEventListener("input", (e) => filtros(e));
barraContraste.addEventListener("input", (e) => filtros(e));
barraDesenfoque.addEventListener("input", (e) => filtros(e));
barraEscalaGrises.addEventListener("input", (e) => filtros(e));
barraSepia.addEventListener("input", (e) => filtros(e));
barraHue.addEventListener("input", (e) => filtros(e));
barraSaturado.addEventListener("input", (e) => filtros(e));
barraNegativo.addEventListener("input", (e) => filtros(e));

const reestrablecerFiltros = (e) => {
    $("brightness-slider").value = 1;
    $("opacity-slider").value = 1;
    $("blur-slider").value = 0;
    $("contrast-slider").value = 100;
    $("grayscale-slider").value = 0;
    $("hue-slider").value = 0;
    $("sepia-slider").value = 0;
    $("saturate-slider").value = 100;
    $("invert-slider").value = 0;
    filtros(e);
};

//IMAGEN MEME
const urlInput = document.getElementById("url-input");
const imagenMeme = document.getElementById("imagen-meme");
console.log(urlInput);
urlInput.addEventListener("input", (e) => changeBackground(e));

const changeBackground = (e) => {
    console.log(e);
    imagenMeme.style.backgroundImage = `url('${e.target.value}')`;
    imagenMeme.style.backgroundSize = "cover";
    imagenMeme.style.backgroundRepeat = "no-repeat";
    imagenMeme.style.backgroundPosition = "center";
};

const textoSuperior = document.getElementById("texto-superior");
const txtoInferior = document.getElementById("texto-inferior");

//INPUT COLOR
const colorMeme = document.getElementById("color-meme");
const colorPicker = document.getElementById("color-picker");

const cambiarFondoMeme = () => {
    let colorSeleccionado = colorPicker.value;
    colorMeme.innerHTML = `${colorSeleccionado}`;
};

colorPicker.addEventListener("input", () => cambiarFondoMeme());

//CAMBIOS ASIDE TEXTO
const inputTextoSuperior = document.getElementById("input-texto-superior");
const contenedorTexto = document.getElementById("top-text");

inputTextoSuperior.addEventListener("input", () => cambiarTextoSuperior());

const cambiarTextoSuperior = () => {
    contenedorTexto.innerText = inputTextoSuperior.value;
};

const inputTextoInferior = document.getElementById("input-texto-inferior");
const contenedorTextoInferior = document.getElementById("bottom-text");

inputTextoInferior.addEventListener("input", () => cambiarTextoInferior());

const cambiarTextoInferior = () => {
    contenedorTextoInferior.innerText = inputTextoInferior.value;
};

//selector de fuentes
const selectorFuente = document.getElementById("selector-fuente");

selectorFuente.addEventListener("change", () => changeFontFamily());

const cambioFuente = () => {
    topText.style.fontFamily = `${selectorFuente.value}`;
    bottomText.style.fontFamily = `${selectorFuente.value}`;
};

//BOTÓN DESCARGA
const botonDescarga = document.getElementById("boton-descarga");
const meme = document.getElementById("caja-meme");

botonDescarga.addEventListener("click", () => descargaMeme());

const descargaMeme = () => {
    domtoimage.toBlob(meme).then(function (blob) {
        window.saveAs(blob, mi - meme - png);
    });
    console.log(descargaMeme);
};

//MODOS
const cambiarModoOscuro = () => {
    body.classList.remove("modo-oscuro");
    body.classList.add("modo-claro");
};

const cambiarModoClaro = () => {
    body.classList.remove("modo-claro");
    body.classList.add("modo-oscuro");
};
