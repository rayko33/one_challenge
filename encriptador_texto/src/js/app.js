//Elementos del DOM
let textToEncrypt = document.getElementById('textToEncrypt')
let btnEncrypt = document.getElementById('btnEncrypt')
let btnDecrypt = document.getElementById('btnDecrypt')
let textEncrypted = document.getElementById('textEncrypted')
let btnCoppy = document.getElementById('coppy')
//Arreglo con los cambios segun vocal
let codes={
    a:'ai',
    e:'enter',
    i:'imes',
    o:'ober',
    u:'ufat'
}


btnEncrypt.addEventListener('click',()=>{
    let toEncrypt = textToEncrypt.value
    if(emptyText(toEncrypt)){
         alert('Debes escribir un texto')
         return
    }
    if(!textValidation(toEncrypt)){
        alert('El texto debe ser en minusculas y sin caracteres especiales')
        return
    }

    let encryptedText = encryptText(toEncrypt,codes)
    addEncryptedText(encryptedText)
    alert(encryptedText)
})

btnCoppy.addEventListener('click',()=>{
    let selected = window.getSelection(); 
    const selectedText = selected.toString();
    navigator.clipboard.writeText(selectedText);
    alert(selectedText)
})
    
//Funcion de encriptacion
function encryptText(texto, codes) {
    //Retorna el texto remplazadando las vocales del texto entrante
    return texto.replace(/[aeiou]/gi, function(vocal) {
        return codes[vocal.toLowerCase()] || vocal
    });
}

//Funcion encriptar 
function decryptText(textoModificado, valores) {
    const valoresInvertidos = {}
    for (const clave in valores) {
        valoresInvertidos[valores[clave]] = clave
    }
    return textoModificado.replace(new RegExp(Object.keys(valoresInvertidos).join('|'), 'gi'), function(match) {
        return valoresInvertidos[match]
    })
}

function emptyText(text){
    return text.trim() === "" ?true:false 
}

function textValidation(text){
    const pattern=/^[a-z]+(\s[a-z]+)*$/
    return pattern.test(text)
}

function addEncryptedText(text){
   let currentTextEncryptedValue = textEncrypted.value
   currentTextEncryptedValue == "" ? textEncrypted.value = text : textEncrypted.value = currentTextEncryptedValue + "\n"+text  
}