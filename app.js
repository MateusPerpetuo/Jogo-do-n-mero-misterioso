let listaNumSorteados = [];
let numLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 0;


exibirMensagemInicial();


function verificarChute() {
    let chute = document.querySelector('input').value;

    tentativas++;

    // Verificação do plural ou singular da palavra "tentativa"
    let palavraTentativa =  tentativas > 1 ? 'tentativas' : 'tentativa';
    mensagemAcertou = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
    
    if (chute == numeroSecreto) {
        // Verificando se o acerto na primeira tentativa para exibir uma mensagem diferente
        if (tentativas == 1) {
            exibirTextoNaTela('h1' , 'Acertou!');
            exibirTextoNaTela('p' , 'Vai Filhão, você acertou de primeira!');
        } else {
            exibirTextoNaTela('h1' , 'Acertou!');
            exibirTextoNaTela('p' , mensagemAcertou);
        }

        // Hbailitando o botão de novo jogo
        document.getElementById('reiniciar').removeAttribute('disabled');
        
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('h1' , 'Errouuu!');
            exibirTextoNaTela('p' , 'O número secreto é menor!');
        } else {
            exibirTextoNaTela('h1' , 'Errouuu!');
            exibirTextoNaTela('p' , 'O número secreto é maior!');
        }
        
        limparCampo();
    }
}

// Funcção que vai gerar um número aleatório entre 1 e 10
function gerarNumeroAleatorio() {
    let numEscolhido = parseInt(Math.random() * numLimite + 1);

    // Verificando se a lista atingiu o limite de números registrados e resetando ela
    let quantElementosNumListaSorteados =  listaNumSorteados.length;

    if ( quantElementosNumListaSorteados == numLimite) {
        listaNumSorteados = [];
    }

    // Verificação em uma lista para evitar que o mesmo número possa ser sorteado várias vezes seguidas
    if (listaNumSorteados.includes(numEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaNumSorteados.push(numEscolhido);
        return  numEscolhido;
    }
}

//  Função que vai deixar o campo do chute vazio 
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

// Função que vai iniciar um novo jogo
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 0;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

//  Função para exibir texto exibido com base na tag que for definida
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
   // Verica se o Navedor tem suporte para a API de falar o que esta escrito
   if(responsiveVoice.voiceSupport()) {
        responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
    }
}

// Função que define a mensagem inicial que vai ser exibida
function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e ' + numLimite);
}




