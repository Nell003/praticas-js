const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question ("Digite um número: ", function(numero){
    if (numero % 2 == 0 ){
        console.log (" O número: " + numero +" é Par")
    } else{
        console.log (" O número: " + numero + " é Impar");
    }

    rl.close();
   
});



