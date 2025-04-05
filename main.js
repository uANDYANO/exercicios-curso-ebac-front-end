// ------------------------------------
// 1. Classe de Abstração: Veiculo
// ------------------------------------
class Veiculo {
    // O construtor define as propriedades básicas de qualquer veículo
    constructor(marca, modelo, ano) {
        // Validação básica
        if (!marca || !modelo || !ano) {
            throw new Error("Marca, modelo e ano são obrigatórios para criar um veículo.");
        }
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.ligado = false; // Todo veículo começa desligado
    }

    // Métodos comuns a todos os veículos
    ligar() {
        if (this.ligado) {
            console.log(`${this.marca} ${this.modelo} já está ligado.`);
        } else {
            this.ligado = true;
            console.log(`${this.marca} ${this.modelo} ligado.`);
        }
    }

    desligar() {
        if (!this.ligado) {
            console.log(`${this.marca} ${this.modelo} já está desligado.`);
        } else {
            this.ligado = false;
            console.log(`${this.marca} ${this.modelo} desligado.`);
        }
    }

    // Método para descrever as informações básicas do veículo
    descrever() {
        console.log(`Veículo: ${this.marca} ${this.modelo}, Ano: ${this.ano}`);
    }
}

// ------------------------------------
// 2. Classes Herdeiras
// ------------------------------------

// Classe Carro herda de Veiculo
class Carro extends Veiculo {
    // Construtor específico do Carro
    constructor(marca, modelo, ano, numeroPortas) {
        // Chama o construtor da classe pai (Veiculo) OBRIGATORIAMENTE primeiro
        super(marca, modelo, ano);
        // Adiciona propriedades específicas do Carro
        this.numeroPortas = numeroPortas;
    }

    // Sobrescrevendo o método descrever para incluir informações do carro
    // Isso é um exemplo de Polimorfismo
    descrever() {
        super.descrever(); // Chama o método descrever da classe pai (Veiculo)
        console.log(`  Tipo: Carro, Portas: ${this.numeroPortas}`); // Adiciona info específica
    }

    // Método específico do Carro
    abrirPortaMala() {
        console.log(`Porta-malas do ${this.modelo} aberto.`);
    }
}

// Classe Moto herda de Veiculo
class Moto extends Veiculo {
    // Construtor específico da Moto
    constructor(marca, modelo, ano, cilindradas) {
        // Chama o construtor da classe pai (Veiculo)
        super(marca, modelo, ano);
        // Adiciona propriedades específicas da Moto
        this.cilindradas = cilindradas;
    }

    // Sobrescrevendo o método descrever para incluir informações da moto
    descrever() {
        super.descrever(); // Chama o método descrever da classe pai (Veiculo)
        console.log(`  Tipo: Moto, Cilindradas: ${this.cilindradas}cc`); // Adiciona info específica
    }

    // Método específico da Moto
    empinar() {
        if (this.ligado) {
            console.log(`A ${this.modelo} ${this.cilindradas}cc está empinando! Uhuu!`);
        } else {
            console.log(`Não dá para empinar a ${this.modelo} desligada.`);
        }
    }
}

// ------------------------------------
// 3. Criação de Instâncias (Objetos)
// ------------------------------------

console.log("--- Criando Instâncias ---");

// Instância 1: Um Carro
const meuCarro = new Carro('Toyota', 'Corolla', 2023, 4);

// Instância 2: Outro Carro
const carroPopular = new Carro('Fiat', 'Mobi', 2022, 4);

// Instância 3: Uma Moto
const minhaMoto = new Moto('Honda', 'CB 500X', 2021, 500);

// Instância 4: Tentativa de criar veículo inválido (demonstra a validação)
try {
    const veiculoInvalido = new Veiculo('MarcaX', null, 2020);
} catch (error) {
    console.error(`Erro ao criar veículo: ${error.message}`);
}

console.log("\n--- Utilizando os Objetos ---");

// Usando os métodos dos objetos
meuCarro.descrever();
meuCarro.ligar();
meuCarro.abrirPortaMala();
meuCarro.desligar();

console.log("---"); // Separador

carroPopular.descrever();
carroPopular.ligar();

console.log("---"); // Separador

minhaMoto.descrever();
minhaMoto.ligar();
minhaMoto.empinar();
minhaMoto.desligar();
minhaMoto.empinar(); // Tentar empinar desligada

console.log("\n--- Fim da Demonstração ---");