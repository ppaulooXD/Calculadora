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

  const largura = parseFloat(prompt("Insira a largura do retângulo:"));
  const altura = parseFloat(prompt("Insira a altura do retângulo:"));
  
  const retangulo = new Retangulo(largura, altura);
  
  console.log("Perímetro:", retangulo.calcularPerimetro());
  console.log("Área:", retangulo.calcularArea());
  console.log("É quadrado?", retangulo.ehQuadrado());
  