const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Informe a palavra: ", function(palavra) {
   
    palavra = palavra.toLowerCase().replace(/\s/g, '');
    const palavraReversa = palavra.split('').reverse().join('');

    if (palavra === palavraReversa) {
        console.log("É um palíndromo");
    } else {
        console.log("Não é um palíndromo");
    }

    rl.close(); 
});






