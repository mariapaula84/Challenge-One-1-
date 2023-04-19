function criptografar(e) {
  var palavra = document.getElementById("palavra").value;
  palavra = palavra.replace(/e/g, "enter");
  palavra = palavra.replace(/i/g, "imes");
  palavra = palavra.replace(/a/g, "ai");
  palavra = palavra.replace(/o/g, "ober");
  palavra = palavra.replace(/u/g, "ufat");

  palavraCriptografada.value = palavra;
  
  e.preventDefault();
}

function descriptografar(e) {
  var palavraCriptografada = document.getElementById("palavraCriptografada").value;
  palavraCriptografada = palavraCriptografada.replace(/enter/g, "e");
  palavraCriptografada = palavraCriptografada.replace(/imes/g, "i");
  palavraCriptografada = palavraCriptografada.replace(/ai/g, "a");
  palavraCriptografada = palavraCriptografada.replace(/ober/g, "o");
  palavraCriptografada = palavraCriptografada.replace(/ufat/g, "u");

  palavra.value = palavraCriptografada;
  e.preventDefault();
}


function copiar() {
  var texto = document.getElementById("palavraCriptografada");
  texto.select();
  document.execCommand("copy");
}


