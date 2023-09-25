const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculadoraObter1(callback) {
  rl.question('Digite o primeiro número: ', function (calculadora1) {
    if (isNaN(calculadora1)) {
      console.log('Informe apenas números.');
      calculadoraObter1(callback);
    } else {
      callback(calculadora1);
    }
  });
}

function modo(callback) {
  rl.question('Digite a operação (+, -, *, /): ', function (operation) {
    if (operation !== '*' && operation !== '-' && operation !== '+' && operation !== '/') {
      console.log('Informe um operador válido.');
      modo(callback);
    } else {
      callback(operation);
    }
  });
}

function calculadoraObter2(calculadora1, operation) {
  rl.question('Digite o segundo número: ', function (calculadora2) {
    if (isNaN(calculadora2)) {
      console.log('Informe apenas números.');
      calculadoraObter2(calculadora1, operation);
    } else {
      calculadora(calculadora1, operation, calculadora2);
    }
  });
}

function calculadora(calculadora1, operation, calculadora2) {
  calculadora1 = parseFloat(calculadora1);
  calculadora2 = parseFloat(calculadora2);

  let resultado;

  switch (operation) {
    case '+':
      resultado = calculadora1 + calculadora2;
      break;
    case '-':
      resultado = calculadora1 - calculadora2;
      break;
    case '*':
      resultado = calculadora1 * calculadora2;
      break;
    case '/':
      if (calculadora2 === 0) {
        console.log('Divisão por zero não é permitida.');
        rl.close();
        return;
      }
      resultado = calculadora1 / calculadora2;
      break;
    default:
      console.log('Operação inválida.');
      rl.close();
      return;
  }

  console.log(`O resultado de ${calculadora1} ${operation} ${calculadora2} é: ${resultado}`);
  rl.close();
}

calculadoraObter1(function (calculadora1) {
  modo(function (operation) {
    calculadoraObter2(calculadora1, operation);
  });
});
