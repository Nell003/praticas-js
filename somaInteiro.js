const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Informe um número inteiro: ', function(numInteiro) {
    if (isNaN(numInteiro)) {
        console.log('Informe apenas números inteiros.');
    } else {
        const digitos = dividirEmDigitos(numInteiro);
        const soma = somaDigitos(digitos);
        console.log('Dígitos separados:', digitos);
        console.log('Soma dos dígitos:', soma);
    }
    
    rl.close();
});

function dividirEmDigitos(numInteiro) {
    const numeroStr = numInteiro.toString();
    const digitos = [];

    for (let i = 0; i < numeroStr.length; i++) {
        digitos.push(parseInt(numeroStr.charAt(i)));
    }

    return digitos;
}

function somaDigitos(digitos) {
    let soma = 0;
    for (let i = 0; i < digitos.length; i++) {
        soma += digitos[i];
    }
    return soma;
}
