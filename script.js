document.getElementById("calculador").addEventListener("click", function() {

    let altura = parseFloat(document.getElementById("altura1").value);
    let peso = parseFloat(document.getElementById("peso1").value);

    let imc = peso / Math.pow(altura, 2);
  
    document.getElementById("resultado").textContent = "Seu IMC é: " + imc.toFixed(2);


    let classificacao = "";
    
    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc >= 18.5 && imc <= 24.9) {
        classificacao = "Eutrófico";
    } else if (imc >= 25 && imc <= 29.9) {
        classificacao = "Sobrepeso";
    } else if (imc >= 30 && imc <= 34.9) {
        classificacao = "Obesidade grau I";
    } else if (imc >= 35 && imc <= 39.9) {
        classificacao = "Obesidade grau II";
    } else {
        classificacao = "Obesidade grau III";
    }

    document.getElementById("classificação").textContent = "Classificação: " + classificacao;
});
