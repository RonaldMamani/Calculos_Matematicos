const resultado = document.querySelector(".resultado")

function multiplicar(event) {
    event.preventDefault();
    var s1 = document.getElementById("txt1").value;
    var s2 = document.getElementById("txt2").value;
    var s3 = s1 * s2;
    resultado.textContent = `O Resultado é: ${s3}`
}
function divisao(event){
    event.preventDefault();
    var s1 = document.getElementById("txt1").value;
    var s2 = document.getElementById("txt2").value;
    var s3 = Math.round(s1) / Math.round(s2);
    resultado.textContent = `O Resultado é: ${s3}`
}
function soma(event){
    event.preventDefault();
    var s1 = document.getElementById("txt1").value;
    var s2 = document.getElementById("txt2").value;
    var s3 = Math.round(s1) + Math.round(s2);
    resultado.textContent = `O Resultado é: ${s3}`
}
function menos(event){
    event.preventDefault();
    var s1 = document.getElementById("txt1").value;
    var s2 = document.getElementById("txt2").value;
    var s3 = s1 - s2;
    resultado.textContent = `O Resultado é: ${s3}`
}
