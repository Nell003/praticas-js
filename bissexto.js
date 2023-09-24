const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function informeAno() {
    rl.question('Informe o ano e verifique se o mesmo é bissexto: ', function (ano) {
        const anoInt = parseInt(ano);
        if (isNaN(anoInt)) {
            console.log('Dado inválido, favor inserir apenas números');
            informeAno();
        } else {
            verifiqueAno(anoInt); 
            rl.close();
        }
    });
}

function verifiqueAno(ano) {
    if (ano % 4 == 0 && (ano % 100 != 0 || ano % 400 == 0)) {
        console.log('O Ano ' + ano + ' é Bissexto');
    } else {
        console.log('O Ano ' + ano + ' não é um ano Bissexto');
    }
}

informeAno(); 
