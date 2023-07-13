alert('hola')























//IMAGEN
const urlInput = document.getElementById('url-input');
console.log(urlInput)
const imagenMeme = document.getElementById('imagen-meme');

urlInput.addEventListener('input', (e)=> changeBackground(e))

const changeBackground = (e) =>{
    imagenMeme.style.backgroundImage = `url ('${e.target.value}')`
    imagenMeme.style.backgroundSize = 'cover';
    imagenMeme.style.backgroundRepeat = 'no-repeat'
    imagenMeme.style.backgroundPosition = 'center'
}


