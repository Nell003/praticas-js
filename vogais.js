const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function informePalavra() {
    rl.question('Informe a palavra e descubra quantas vogais ela possui: ', function (palavra) {
        if (/^[a-zA-Z]+$/.test(palavra)) {
          
            const palavras = palavra.split(' ');
            for (const palavra of palavras) {
                const numeroDeVogais = contadorVogal(palavra);
                console.log(`A palavra "${palavra}" possui ${numeroDeVogais} vogais.`);
            }
            rl.close();
        } else {
            console.log("Informe apenas palavras contendo letras.");
            informePalavra();
        }
    });
}

function contadorVogal(palavra) {
    let vogais = 0;
    for (let i = 0; i < palavra.length; i++) {
        const letra = palavra[i].toLowerCase();
        if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
            vogais++;
        }
    }
    return vogais;
}

informePalavra();

