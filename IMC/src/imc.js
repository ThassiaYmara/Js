//resultado, peso, altura, calcular

const calcular = document.getElementById('calcular');


function imc() {
    //utilizando o id da tag HTML para manipular no arquivo js
    //document.getElementById -> acessando o elemento html
    //.value para pegar o valuor do elemento

    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if ((nome !== '') && (altura !== '') && (peso !== '')) {

        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classificacao = '';

        if (valorIMC < 18.5) {
            classificacao = 'abaixo do peso.';
        } else if (valorIMC < 25) {
            classificacao = 'com peso ideal.';
        } else if (valorIMC < 30) {
            classificacao = 'acima do peso.';
        } else if (valorIMC < 35) {
            classificacao = 'obesidade grau I.';
        } else if (valorIMC < 40) {
            classificacao = 'obesidade grau II.';
        } else {
            classificacao = 'obesidade grau III.';
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`;

    } else {
        resultado.textContent = 'Preencha todos os campos!';
    }
}

calcular.addEventListener('click', imc);