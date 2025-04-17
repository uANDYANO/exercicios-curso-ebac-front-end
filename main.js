// Lista de alunos com nome e nota
const alunos = [
    { nome: 'Ana', nota: 8 },
    { nome: 'Carlos', nota: 5 },
    { nome: 'João', nota: 7 },
    { nome: 'Maria', nota: 4 },
    { nome: 'Laura', nota: 9 },
    { nome: 'Pedro', nota: 10 },
    { nome: 'Bia', nota: 2 },
];

// Valida se a nota está dentro do intervalo 0-10
const notaValida = (nota) => typeof nota === 'number' && nota >= 0 && nota <= 10;

// Filtra alunos com nota maior ou igual a 6
const filtrarAprovados = (lista) => {
    return lista.filter(aluno => notaValida(aluno.nota) && aluno.nota >= 6);
};

// Gera um relatório dos aprovados
const gerarRelatorio = (alunosAprovados) => {
    return alunosAprovados.map(({ nome, nota }) => `✅ ${nome} foi aprovado(a) com nota ${nota}`);
};

// Função principal
const mostrarRelatorioFinal = (listaAlunos) => {
    console.log('📚 Analisando lista de alunos...\n');

    const aprovados = filtrarAprovados(listaAlunos);

    if (aprovados.length === 0) {
        console.log('⚠️ Nenhum aluno foi aprovado.');
    } else {
        console.log(`🎉 ${aprovados.length} aluno(s) aprovado(s):\n`);
        const relatorio = gerarRelatorio(aprovados);
        relatorio.forEach(linha => console.log(linha));
    }
};

// Executar o relatório
mostrarRelatorioFinal(alunos);