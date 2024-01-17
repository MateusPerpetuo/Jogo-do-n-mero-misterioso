alert ('Boas Vindas ao jogo do número secreto');
// Aqui define o numero maximo uma unica vez e ja aplica para o resto da aplicação
let maxNum = 8000;
// Gerando o número aleatório
let numSecreto = parseInt(Math.random() * maxNum + 1);

console.log (numSecreto);
let chute;
let tentativa = 0;
console.log ('valor do chute ' + chute);


while ( chute != numSecreto){
    tentativa ++;
    chute = prompt (`Escolha um número entre 1 e ${maxNum}`);

    // Se o chute for igual ao número secreto
    console.log ('Resultado da comparação', chute == numSecreto);

    if (chute == numSecreto){    
        break;
    } else {
        if (chute > numSecreto){
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
    }
}

let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa';

alert(`Isso ai! Você descobriu o número secreto ${numSecreto} com ${tentativa} ${palavraTentativa}.`);


