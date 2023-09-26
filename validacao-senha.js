const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout 
});

function validaSenha(senha) {
    if (
      senha.length >= 8 &&
      /[a-z]/.test(senha) &&
      /[A-Z]/.test(senha) &&
      /\d/.test(senha) &&
      /[!@#$%^&*]/.test(senha) 
    ) {
      console.log('Senha válida!');
    } else {
      console.log('Senha inválida. Certifique-se de que tenha pelo menos 8 caracteres, letras maiúsculas e minúsculas, números e pelo menos um caractere especial (!@#$%^&*).');
      
    }

    rl.close();
}

rl.question('Informe uma senha: ', function (senha) {
    validaSenha(senha);
});
