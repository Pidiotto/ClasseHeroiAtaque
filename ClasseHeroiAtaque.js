class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;

    switch (this.tipo) {
      case "mago":
        ataque = "usou magia";
        break;
      case "guerreiro":
        ataque = "usou espada";
        break;
      case "monge":
        ataque = "usou artes marciais";
        break;
      case "ninja":
        ataque = "usou shuriken";
        break;
      default:
        ataque = "usou um ataque genérico";
    }

    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}

// Exemplo de uso da classe Heroi
const heroi1 = new Heroi("Lancelot", 30, "guerreiro");
const heroi2 = new Heroi("Merlin", 150, "mago");

heroi1.atacar(); // Exibirá: "O guerreiro atacou usando espada"
heroi2.atacar(); // Exibirá: "O mago atacou usando magia"
