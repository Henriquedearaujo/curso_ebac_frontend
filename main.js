// Definição da classe Aluno
class Aluno {
    constructor(nome, nota) {
        this.nome = nome;
        this.nota = nota;
    }
}

// Array de instâncias da classe Aluno
const alunos = [
    new Aluno('João', 8),
    new Aluno('Maria', 5),
    new Aluno('Pedro', 6),
    new Aluno('Ana', 9),
    new Aluno('Luís', 4)
];

// Função para filtrar alunos com nota maior ou igual a 6
function filtrarAlunosAprovados(alunos) {
    return alunos.filter(aluno => aluno.nota >= 6);
}

// Uso da função
const alunosAprovados = filtrarAlunosAprovados(alunos);
console.log(alunosAprovados);
