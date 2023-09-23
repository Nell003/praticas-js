const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function encontrarMaiorNumero() {
  rl.question("Digite o tamanho da lista: ", (tamanho) => {
    tamanho = parseInt(tamanho);

    if (isNaN(tamanho) || tamanho <= 0) {
      console.log("Tamanho inválido, insira um número maior que zero.");
      rl.close();
      return;
    }

    const lista = [];

    function lerNumero(i) {
      if (i === tamanho) {
        if (lista.length === 0) {
          console.log("A lista está vazia.");
          rl.close();
          return;
        }

        let maiorNumero = lista[0];

        for (let j = 1; j < lista.length; j++) {
          if (lista[j] > maiorNumero) {
            maiorNumero = lista[j];
          }
        }

        console.log("O maior número é: " + maiorNumero);
        rl.close();
        return;
      }

      rl.question(`Digite o número ${i + 1}: `, (numero) => {
        numero = parseFloat(numero);

        if (isNaN(numero)) {
          console.log("Número inválido, insira um número válido.");
          rl.close();
          return;
        }

        lista.push(numero);
        lerNumero(i + 1);
      });
    }

    lerNumero(0);
  });
}

encontrarMaiorNumero();

