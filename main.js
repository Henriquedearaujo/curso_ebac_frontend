// Classe base (abstração)
class Veiculo {
    constructor(tipo, marca, modelo, ano) {
        this.tipo = tipo;
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    descricao() {
        return `Tipo Veiculo: ${this.tipo}, Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`;
    }
}

// Classe derivada 1
class Carro extends Veiculo {
    constructor(tipo, marca, modelo, ano, portas) {
        super(tipo, marca, modelo, ano);
        this.portas = portas;
    }

    descricao() {
        return `${super.descricao()}, Portas: ${this.portas}`;
    }
}

// Classe derivada 2
class Moto extends Veiculo {
    constructor(tipo, marca, modelo, ano, cilindradas) {
        super(tipo, marca, modelo, ano);
        this.cilindradas = cilindradas;
    }

    descricao() {
        return `${super.descricao()}, Cilindradas: ${this.cilindradas}`;
    }
}

// Criando instâncias de objetos
const carro1 = new Carro("carro", "Toyota", "Corolla", 2020, 4);
const carro2 = new Carro("carro", "Honda", "Civic", 2021, 4);
const moto1 = new Moto("Moto", "Yamaha", "YZF-R3", 2019, 321);

// Exibindo descrições dos veículos
console.log(carro1.descricao());
console.log(carro2.descricao());
console.log(moto1.descricao());
