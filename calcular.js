const resultado = document.querySelector(".resultado")
var s1 = document.getElementById("n1");
var s2 = document.getElementById("n2");

function multiplicar(event) {
    event.preventDefault();
    var s3 = s1.value * s2.value;
    resultado.textContent = `O Resultado é: ${s3}`
}
function divisao(event){
    event.preventDefault();
    var s3 = s1.value / s2.value;
    resultado.textContent = `O Resultado é: ${s3}`
}
function soma(event){
    event.preventDefault();
    var s3 = Math.round(s1.value) + Math.round(s2.value);
    resultado.textContent = `O Resultado é: ${s3}`
}
function menos(event){
    event.preventDefault();
    var s3 = s1.value - s2.value;
    resultado.textContent = `O Resultado é: ${s3}`
}
