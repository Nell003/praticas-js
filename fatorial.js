const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Informe o número para fatoração: ', (num) => {
    num = parseInt(num); 

    if (isNaN(num) || num <= 0) {
        console.log('Informe um número válido maior que 0');
        rl.close();
        return;
    }

    let fatoracao = 1; 

    for (let i = 1; i <= num; i++) {
        fatoracao *= i; 
    }

    console.log("Resultado: " + fatoracao);
    rl.close();
});
