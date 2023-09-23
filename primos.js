const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function isPrime(numero) {
  if (numero <= 1) {
    return false;
  }

  if (numero <= 3) {
    return true;
  }

  if (numero % 2 === 0 || numero % 3 === 0) {
    return false;
  }

  let i = 5;

  while (i * i <= numero) {
    if (numero % i === 0 || numero % (i + 2) === 0) {
      return false;
    }
    i += 6;
  }

  return true;
}

function somaNumerosPrimos(lista) {
  let soma = 0;

  for (let i = 0; i < lista.length; i++) {
    if (isPrime(lista[i])) {
      soma += lista[i];
    }
  }

  return soma;
}

function quantidadeNumeros() {
  rl.question("Informe a quantidade de números para Soma: ", (quantidadeInput) => {
    const quantidade = parseInt(quantidadeInput);

    if (isNaN(quantidade) || quantidade <= 0) {
      console.log("Insira somente números maiores que 0.");
      rl.close();
      return;
    }

    const lista = [];

    function lerNumero(i) {
      if (i === quantidade) {
        const resultado = somaNumerosPrimos(lista);
        console.log("A soma dos números primos é: " + resultado);
        rl.close();
        return;
      }

      rl.question(`Digite o número ${i + 1}: `, (numeroInput) => {
        const numero = parseInt(numeroInput);

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

quantidadeNumeros();


