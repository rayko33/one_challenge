let encryptBotton = document.getElementById('encrypt_botton')
let inputText = document.getElementById('input_text')
let encryptedText = document.getElementById('text_encrypted')
let decryptBotton = document.getElementById('decrypt_botton')
let decryptedText = document.getElementById('decrypt_text')
function stringToBinary(str) {
    return Array.from(str).map(char => char.charCodeAt(0).toString(2).padStart(8, '0')).join(' ');
}

function binaryToString(binary) {
    return binary.split(' ').map(byte => String.fromCharCode(parseInt(byte, 2))).join('');
}

encryptBotton.addEventListener('click',()=>{
    let binaryStr = stringToBinary(inputText.value)
    encryptedText.innerHTML = binaryStr
})

decryptBotton.addEventListener("click",()=>{
    let binaryEncrypted = binaryToString(encryptedText.innerText)
    decryptedText.innerHTML= binaryEncrypted

    
})