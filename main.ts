// Importa o módulo readline para interagir com o terminal
import * as readline from 'readline';

// Cria uma interface para leitura e escrita no terminal
const rl = readline.createInterface({
  input: process.stdin,  // Define a entrada padrão (teclado)
  output: process.stdout // Define a saída padrão (terminal)
});

// --- Definição das Funções ---

/**
 * Função de multiplicação que recebe dois números e retorna o resultado.
 * @param a O primeiro número.
 * @param b O segundo número.
 * @returns A multiplicação de a por b.
 */
function multiplicar(a: number, b: number): number {
  return a * b;
}

/**
 * Função de saudação que recebe um nome e retorna uma mensagem.
 * @param nome O nome a ser saudado.
 * @returns Uma string de saudação no formato "Olá [nome]".
 */
function saudacao(nome: string): string {
  return "Olá " + nome;
}

// --- Lógica de Execução com Entradas do Terminal ---

// Função auxiliar para tornar rl.question usável com async/await
function perguntar(pergunta: string): Promise<string> {
    return new Promise((resolve) => {
        rl.question(pergunta, resolve);
    });
}

// Função principal assíncrona para controlar o fluxo
async function executar() {
  try {
    // 1. Pede o nome para a saudação
    const nomeInput = await perguntar('Digite o nome para a saudação: ');

    // Chama a função de saudação e exibe o resultado
    const mensagem = saudacao(nomeInput);
    console.log(mensagem);

    // 2. Pede o primeiro número para a multiplicação
    const num1Input = await perguntar('Digite o primeiro número para multiplicar: ');

    // 3. Pede o segundo número para a multiplicação
    const num2Input = await perguntar('Digite o segundo número para multiplicar: ');

    // Converte as entradas (que são strings) para números
    // Usamos parseFloat para permitir números decimais
    const num1 = parseFloat(num1Input);
    const num2 = parseFloat(num2Input);

    // Validação básica para garantir que a conversão foi bem-sucedida
    if (isNaN(num1) || isNaN(num2)) {
      console.error("Erro: Por favor, insira números válidos para a multiplicação.");
    } else {
      // Chama a função de multiplicação e exibe o resultado
      const resultado = multiplicar(num1, num2);
      console.log(`O resultado da multiplicação de ${num1} e ${num2} é: ${resultado}`);
    }

  } catch (error) {
      console.error("Ocorreu um erro durante a execução:", error);
  } finally {
      // Fecha a interface readline, liberando o terminal
      rl.close();
  }
}

// Inicia a execução da lógica principal
executar();