//Elementos del DOM
let textToEncrypt = document.getElementById('textToEncrypt')
let btnEncrypt = document.getElementById('btnEncrypt')
let btnDecrypt = document.getElementById('btnDecrypt')
let textEncrypted = document.getElementById('textEncrypted')
//Arreglo con los cambios segun vocal
let codes={
    a:'ai',
    e:'enter',
    i:'imes',
    o:'ober',
    u:'ufat'
}


btnEncrypt.addEventListener('click',()=>{
    let toEncrypt = encryptText(textToEncrypt.value, codes)
    textEncrypted.innerHTML = toEncrypt
    alert(toEncrypt)
})
    
//Funcion de encriptacion
function encryptText(texto, codes) {
    //Retorna el texto remplazadando las vocales del texto entrante
    return texto.replace(/[aeiou]/gi, function(vocal) {
        return codes[vocal.toLowerCase()] || vocal;
    });
}

//Funcion encriptar 
function decryptText(textoModificado, valores) {
    const valoresInvertidos = {};
    for (const clave in valores) {
        valoresInvertidos[valores[clave]] = clave;
    }
    return textoModificado.replace(new RegExp(Object.keys(valoresInvertidos).join('|'), 'gi'), function(match) {
        return valoresInvertidos[match];
    });
}

