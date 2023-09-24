const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function converterTemperatura() {
    rl.question('Informe a temperatura: ', function (temperatura) {
        temperatura = parseFloat(temperatura);

        if (isNaN(temperatura)) {
            console.log('Informe uma temperatura válida.');
            converterTemperatura(); 
        } else {
            pedirUnidade(temperatura);
        }
    });
}

function pedirUnidade(temperatura) {
    rl.question('Informe a unidade de medida (F para Fahrenheit ou C para Celsius): ', function (unidade) {
        if (unidade === 'F') {
            const celsius = (temperatura - 32) * 5/9;
            console.log(`A temperatura em Celsius é: ${celsius.toFixed(2)} °C`);
            rl.close();
        } else if (unidade === 'C') {
            const fahrenheit = (temperatura * 9/5) + 32;
            console.log(`A temperatura em Fahrenheit é: ${fahrenheit.toFixed(2)} °F`);
            rl.close();
        } else {
            console.log('Unidade de medida não suportada.');
            pedirUnidade(temperatura); 
        }
    });
}

converterTemperatura();







