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
