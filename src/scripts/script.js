// Variáveis
let tabuleiro = ["", "", "", "", "", "", "", "", ""];
let jogadorAtual = "X";
let jogoAtivo = true;
let placarX = 0;
let placarO = 0;

const mensagemElement = document.getElementById("mensagem");
const celulas = document.querySelectorAll(".celula");
const resetButton = document.getElementById("resetButton");

const jogador1Input = document.getElementById("jogador1");
const jogador2Input = document.getElementById("jogador2");
const jogador1Placar = document.getElementById("jogador1-placar");
const jogador2Placar = document.getElementById("jogador2-placar");
const jogador1NomeElement = document.getElementById("jogador1-nome");
const jogador2NomeElement = document.getElementById("jogador2-nome");

//Elementos das telas
const menuPrincipal = document.getElementById("menu-principal");
const telaNomes = document.getElementById("tela-nomes");
const telaJogo = document.getElementById("tela-jogo");

//Botões
const btnJogarLocal = document.getElementById("btn-jogar-local");
const btnIniciarJogo = document.getElementById("btn-iniciar-jogo");
const btnVoltarMenu = document.getElementById("btn-voltar-menu");
const btnJogarPc = document.getElementById("btn-jogar-pc");

// Funções

// 1. handleJogada(posicao)  - Lida com a jogada de um jogador
function handleJogada(posicao) {
    console.log('handleJogada chamada, posicao:', posicao); // Adicionado
    if (tabuleiro[posicao] === "" && jogoAtivo) { //  - Garante que a célula esteja vazia e o jogo ativo
        tabuleiro[posicao] = jogadorAtual; //  - Atualiza o tabuleiro
        celulas[posicao].innerText = jogadorAtual; //  - Exibe o símbolo na célula
        celulas[posicao].classList.add(jogadorAtual.toLowerCase()); //  - Adiciona a classe 'x' ou 'o'
        checarVencedor(); //  - Verifica se há um vencedor ou empate
        if (jogoAtivo) { //  - Só muda o jogador se o jogo ainda estiver ativo
            mudarJogador();
        }
    }
}

// 2. mudarJogador()  - Alterna entre os jogadores
function mudarJogador() {
    jogadorAtual = (jogadorAtual === "X") ? "O" : "X"; //  - Alterna o jogador
    atualizarMensagem(); //  - Atualiza a mensagem
}

// 3. checarVencedor() - Verifica se há um vencedor ou empate (PROBLEMA POTENCIAL)
function checarVencedor() {
    console.log('checarVencedor chamada'); // Adicionado
    const combinacoesVencedoras = [ // 
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (let combinacao of combinacoesVencedoras) { // 
        const [a, b, c] = combinacao;
        if (tabuleiro[a] && tabuleiro[a] === tabuleiro[b] && tabuleiro[a] === tabuleiro[c]) { // 
            celulas[a].classList.add("vencedora"); // 
            celulas[b].classList.add("vencedora"); // 
            celulas[c].classList.add("vencedora"); // 

            mensagemElement.innerText = `${getNomeJogador(jogadorAtual)} venceu!`; // 
            jogoAtivo = false; //  - Define o jogo como inativo
            atualizarPlacar(); // 
            confetti(); // 
            return;
        }
    }

    if (!tabuleiro.includes("")) { // 
        mensagemElement.innerText = "Empate!"; // 
        jogoAtivo = false; //  - Define o jogo como inativo
        confetti(); // 
        return;
    }
}

// 4. atualizarPlacar()  - Atualiza o placar
function atualizarPlacar() {
    console.log('atualizarPlacar chamada'); // Adicionado
    if (jogadorAtual === "X") { // 
        placarX++; // 
        jogador1Placar.innerText = placarX; // 
    } else { // 
        placarO++; // 
        jogador2Placar.innerText = placarO; // 
    }
}

// 6. getNomeJogador()  - Obtém o nome do jogador
function getNomeJogador(jogador) {
    console.log('getNomeJogador chamada, jogador:', jogador); // Adicionado
    return (jogador === "X") ? jogador1Input.value : jogador2Input.value; // 
}

// 7. atualizarMensagem()  - Atualiza a mensagem
function atualizarMensagem() {
    console.log('atualizarMensagem chamada'); // Adicionado
    if (jogoAtivo) { //  - Apenas atualiza se o jogo estiver ativo
        mensagemElement.innerText = `Vez de ${getNomeJogador(jogadorAtual)}`; // 
    }
}

// 8. mostrarTela() - Exibe a tela desejada 
function mostrarTela(telaASerMostrada) {
    console.log('mostrarTela chamada, telaASerMostrada:', telaASerMostrada.id); // Adicionado
    let telas = document.querySelectorAll(".tela"); // 
    telas.forEach(tela => tela.classList.remove("ativa")); // 

    telaASerMostrada.classList.add("ativa"); // 
}

// 9. iniciarJogo() - Inicia um novo jogo 
function iniciarJogo() {
    console.log('iniciarJogo chamada'); // Adicionado
    const nomeJogador1 = jogador1Input.value; // 
    const nomeJogador2 = jogador2Input.value; // 

    jogador1NomeElement.innerText = nomeJogador1; // 
    jogador2NomeElement.innerText = nomeJogador2; // 

    mostrarTela(telaJogo);  //Mostra a tela de jogo
}

function limparTudo(){
     tabuleiro = ["", "", "", "", "", "", "", "", ""]; //  - Reseta o tabuleiro
        jogadorAtual = "X"; //  - Define o jogador atual como X
        jogoAtivo = true; //  - Define o jogo como ativo
        mensagemElement.innerText = ""; //  - Limpa a mensagem
}

// Listeners dos botões 
btnJogarLocal.addEventListener("click", function () {
    console.log('btnJogarLocal click'); // Adicionado
    mostrarTela(telaNomes); //  - Mostra a tela de nomes
});

// Lógica para o botão btnJogarPc (Jogar contra o Computador - a ser implementado)
btnJogarPc.addEventListener("click", function () {
    console.log('btnJogarPc click'); // Adicionado
    mostrarTela(telaNomes); //  - Mostra a tela de nomes - provisório
});

btnIniciarJogo.addEventListener("click", function () {
    console.log('btnIniciarJogo click'); // Adicionado
    iniciarJogo(); //  - Inicia o jogo
    menuPrincipal.style.display = "none";
});

btnVoltarMenu.addEventListener("click", function () {
    console.log('btnVoltarMenu click'); // Adicionado
    limparTudo()
    
        placarX = 0;
        placarO = 0;
        jogador1Placar.innerText = placarX; // Reseta o placar do jogador 1
        jogador2Placar.innerText = placarO; // Reseta o placar do jogador 2
        jogador1Input.value = "Jogador 1"
        jogador2Input.value = "Jogador 2"

        const celulas = document.querySelectorAll(".celula"); // Busca as células novamente
        celulas.forEach(celula => { // 
            celula.innerText = ""; //  - Limpa o texto das células
            celula.classList.remove('x', 'o', 'vencedora'); //  - Remove as classes das células
        });

        atualizarMensagem(); //  - Atualiza a mensagem
    menuPrincipal.style.display = "flex";
    mostrarTela(menuPrincipal); //  - Volta ao menu principal
});

resetButton.addEventListener("click", function () {
    console.log('resetButton click'); // Adicionado
    
         tabuleiro = ["", "", "", "", "", "", "", "", ""]; //  - Reseta o tabuleiro
        jogadorAtual = "X"; //  - Define o jogador atual como X
        jogoAtivo = true; //  - Define o jogo como ativo
        mensagemElement.innerText = ""; //  - Limpa a mensagem
        const nomeJogador1 = jogador1Input.value; // 
        const nomeJogador2 = jogador2Input.value; // 

        jogador1NomeElement.innerText = nomeJogador1; // 
        jogador2NomeElement.innerText = nomeJogador2; // 
        const celulas = document.querySelectorAll(".celula");
        celulas.forEach(celula => { // 
            celula.innerText = ""; //  - Limpa o texto das células
            celula.classList.remove('x', 'o', 'vencedora'); //  - Remove as classes das células
        });

        atualizarMensagem(); //  - Atualiza a mensagem

    mostrarTela(telaJogo);  //Mostra a tela de jogo
});

// Inicialização 
mostrarTela(menuPrincipal);

// Adiciona os event listeners nas celulas (movemos para ca para garantir que sejam adicionados apenas uma vez) 
celulas.forEach((celula, index) => {
    celula.addEventListener("click", () => handleJogada(index));
});