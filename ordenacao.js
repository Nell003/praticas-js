const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Informe os números pertencentes ao array (separados por espaços): ", function(input) {
    const numeros = input.split(' ').map(Number); 

    if (numeros.some(isNaN)) {
        console.log("Informe somente números válidos.");
        rl.close();
    } else {
        rl.question("Informe a direção da ordenação (crescente ou decrescente): ", function(direcao) {
            if (direcao === "crescente" || direcao === "decrescente") {
                const resultado = ordenarArray(numeros, direcao);
                console.log(`Array ordenado ${direcao}: ${resultado}`);
            } else {
                console.log("Direção de ordenação inválida. Use 'crescente' ou 'decrescente'.");
            }
            rl.close();
        });
    }
});

function ordenarArray(array, direcao) {
    return direcao === "crescente"
        ? array.slice().sort((a, b) => a - b)
        : direcao === "decrescente"
        ? array.slice().sort((a, b) => b - a)
        : array.slice();
}
