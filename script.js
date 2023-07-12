























//IMAGEN
const urlInput = document.getElementById('url-imagen');
const imagenMeme = document.getElementById('imagen-meme');

imagenMeme.addEventListener('input', (e)=> changeBackground(e))

const changeBackground = (e) =>{
    console.log(e.target.value)
    imagenMeme.style.backgroundImage = `url ('${e.target.value}')`
    imagenMeme.style.backgroundSize = 'cover';
    imagenMeme.style.backgroundRepeat = 'no-repeat'
    imagenMeme.style.backgroundPosition = 'center'
}