class Retangulo {
  constructor(largura, altura) {
    this.setLargura(largura);
    this.setAltura(altura);
  }

  setLargura(largura) {
    if (largura > 0) {
      this.largura = largura;
    } else {
      console.error("A largura deve ser maior que zero.");
    }
  }

  setAltura(altura) {
    if (altura > 0) {
      this.altura = altura;
    } else {
      console.error("A altura deve ser maior que zero.");
    }
  }

  calcularPerimetro() {
    return 2 * (this.largura + this.altura);
  }

  calcularArea() {
    return this.largura * this.altura;
  }

  ehQuadrado() {
    return this.largura === this.altura;
  }
}

const retangulo1 = new Retangulo(5, 7);
console.log("Perímetro:", retangulo1.calcularPerimetro());
console.log("Área:", retangulo1.calcularArea());
console.log("É quadrado?", retangulo1.ehQuadrado());

const retangulo2 = new Retangulo(4, 4);
console.log("Perímetro:", retangulo2.calcularPerimetro());
console.log("Área:", retangulo2.calcularArea());
console.log("É quadrado?", retangulo2.ehQuadrado());

class Calculadora {
  constructor() {
    this.Res = 0; // Inicializa o resultado com zero
    this.Mem = 0; // Inicializa a memória com zero
  }

  zerar() {
    this.Res = 0;
  }

  desfaz() {
    this.Res = this.Mem;
  }

  getRes() {
    return this.Res;
  }

  soma(valor) {
    this.Mem = this.Res;
    this.Res += valor;
  }

  subtrai(valor) {
    this.Mem = this.Res;
    this.Res -= valor;
  }

  multiplica(valor) {
    this.Mem = this.Res;
    this.Res *= valor;
  }

  divide(valor) {
    if (valor !== 0) {
      this.Mem = this.Res;
      this.Res /= valor;
    } else {
      console.error("Divisão por zero não é permitida.");
    }
  }

  potencia(exp) {
    this.Mem = this.Res;
    this.Res = Math.pow(this.Res, exp);
  }

  porcentagem(porc) {
    this.Mem = this.Res;
    this.Res *= porc / 100;
  }

  raiz() {
    this.Mem = this.Res;
    this.Res = Math.sqrt(this.Res);
  }
}


const c = new Calculadora();

console.log(c.getRes());

c.soma(100);
c.multiplica(2);
c.divide(5);
console.log(c.getRes());

c.desfaz();
console.log(c.getRes());
