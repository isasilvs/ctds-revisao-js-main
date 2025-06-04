function  somar() {

    var num1 = Number(document.getElementById('valor1').value);
    var num2 = Number(document.getElementById('valor2').value);
    document.getElementById('resultado').innerHTML = (`A soma dos valores é : ${num1 + num2}`);   

}

function  subtrair() {

    var num1 = Number(document.getElementById('valor1').value);
    var num2 = Number(document.getElementById('valor2').value);
    document.getElementById('resultado').innerHTML = (`A subtração dos valores é : ${num1 - num2}`);    

}

function  multiplicar() {

    var num1 = Number(document.getElementById('valor1').value);
    var num2 = Number(document.getElementById('valor2').value);
    document.getElementById('resultado').innerHTML = (`A multiplicação dos valores é : ${num1 * num2}`);

    

}

function  dividir() {

    var num1 = Number(document.getElementById('valor1').value);
    var num2 = Number(document.getElementById('valor2').value);
    document.getElementById('resultado').innerHTML = (`A divisão dos valores é : ${num1 / num2}`);

    

}


