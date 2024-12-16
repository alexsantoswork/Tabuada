function somar() {
    const valorSomaUm = parseInt(document.getElementById('numeroUmSomar').value);
    const valorSomaDois = parseInt(document.getElementById('numeroDoisSomar').value);
    const soma = valorSomaUm + valorSomaDois;
    const resultadoSomar = document.getElementById('resultadoSomar')
    
    const inputOneSomar = document.getElementById('numeroUmSomar');
    const inputTwoSomar = document.getElementById('numeroDoisSomar');
    
    if (inputOneSomar.value === "" || inputTwoSomar.value === "") {
        alert('Escolha um numero para somar')
        return;
    }
    resultadoSomar.textContent = `${soma}`;
}

function subtrair() {
    const valorSubtrairUm = parseInt(document.getElementById('numeroUmSubtrair').value);
    const valorSubtrairDois = parseInt(document.getElementById('numeroDoisSubtrair').value);
    const subtrair = valorSubtrairUm - valorSubtrairDois;
    const resultadoSubtrair = document.getElementById('resultadoSubtrair')
    
    const inputOneSubtrair = document.getElementById('numeroUmSubtrair');
    const inputTwoSubtrair = document.getElementById('numeroDoisSubtrair');
    
    if (inputOneSubtrair.value === "" || inputTwoSubtrair.value === "") {
        alert('Escolha um numero para subtrair')
        return;
    }
    resultadoSubtrair.textContent = `${subtrair}`;
}

function multiplicar() {
    const valorMultiplicarUm = parseInt(document.getElementById('numeroUmMultiplicar').value);
    const valorMultiplicarDois = parseInt(document.getElementById('numeroDoisMultiplicar').value);
    const multiplicar = valorMultiplicarUm * valorMultiplicarDois;
    const resultadoMultiplicar = document.getElementById('resultadoMultiplicar')
    
    const inputOneMultiplicar = document.getElementById('numeroUmMultiplicar');
    const inputTwoMultiplicar = document.getElementById('numeroDoisMultiplicar');
    
    if (inputOneMultiplicar.value === "" || inputTwoMultiplicar.value === "") {
        alert('Escolha um numero para multiplicar')
        return;
    }
    resultadoMultiplicar.textContent = `${multiplicar}`;
}


function dividir() {
    const valorDividirUm = parseInt(document.getElementById('numeroUmDividir').value);
    const valorDividirDois = parseInt(document.getElementById('numeroDoisDividir').value);
    const dividir = valorDividirUm / valorDividirDois;
    const resultadoDividir = document.getElementById('resultadoDividir')
    
    const inputOneDividir = document.getElementById('numeroUmDividir');
    const inputTwoDividir = document.getElementById('numeroDoisDividir');
    
    if (inputOneDividir.value === "" || inputTwoDividir.value === "") {
        alert('Escolha um numero para dividir')
        return;
    }
    resultadoDividir.textContent = `${dividir}`;
}