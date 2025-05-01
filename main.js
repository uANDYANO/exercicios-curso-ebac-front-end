"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importa o módulo readline para interagir com o terminal
const readline = __importStar(require("readline"));
// Cria uma interface para leitura e escrita no terminal
const rl = readline.createInterface({
    input: process.stdin, // Define a entrada padrão (teclado)
    output: process.stdout // Define a saída padrão (terminal)
});
// --- Definição das Funções ---
/**
 * Função de multiplicação que recebe dois números e retorna o resultado.
 * @param a O primeiro número.
 * @param b O segundo número.
 * @returns A multiplicação de a por b.
 */
function multiplicar(a, b) {
    return a * b;
}
/**
 * Função de saudação que recebe um nome e retorna uma mensagem.
 * @param nome O nome a ser saudado.
 * @returns Uma string de saudação no formato "Olá [nome]".
 */
function saudacao(nome) {
    return "Olá " + nome;
}
// --- Lógica de Execução com Entradas do Terminal ---
// Função auxiliar para tornar rl.question usável com async/await
function perguntar(pergunta) {
    return new Promise((resolve) => {
        rl.question(pergunta, resolve);
    });
}
// Função principal assíncrona para controlar o fluxo
function executar() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // 1. Pede o nome para a saudação
            const nomeInput = yield perguntar('Digite o nome para a saudação: ');
            // Chama a função de saudação e exibe o resultado
            const mensagem = saudacao(nomeInput);
            console.log(mensagem);
            // 2. Pede o primeiro número para a multiplicação
            const num1Input = yield perguntar('Digite o primeiro número para multiplicar: ');
            // 3. Pede o segundo número para a multiplicação
            const num2Input = yield perguntar('Digite o segundo número para multiplicar: ');
            // Converte as entradas (que são strings) para números
            // Usamos parseFloat para permitir números decimais
            const num1 = parseFloat(num1Input);
            const num2 = parseFloat(num2Input);
            // Validação básica para garantir que a conversão foi bem-sucedida
            if (isNaN(num1) || isNaN(num2)) {
                console.error("Erro: Por favor, insira números válidos para a multiplicação.");
            }
            else {
                // Chama a função de multiplicação e exibe o resultado
                const resultado = multiplicar(num1, num2);
                console.log(`O resultado da multiplicação de ${num1} e ${num2} é: ${resultado}`);
            }
        }
        catch (error) {
            console.error("Ocorreu um erro durante a execução:", error);
        }
        finally {
            // Fecha a interface readline, liberando o terminal
            rl.close();
        }
    });
}
// Inicia a execução da lógica principal
executar();
