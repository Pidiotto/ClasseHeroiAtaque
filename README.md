# ClasseHeroiAtaque

Este projeto implementa uma classe `Heroi` para representar um herói de uma aventura, com a capacidade de realizar ataques baseados no tipo do herói.

## Funcionalidades

- **Classe Heroi:** Representa um herói com propriedades como nome, idade e tipo.
- **Método Atacar:** Exibe uma mensagem de ataque com base no tipo do herói.

## Tipos de Herói e Ataques

- **Mago:** Ataque - "usou magia"
- **Guerreiro:** Ataque - "usou espada"
- **Monge:** Ataque - "usou artes marciais"
- **Ninja:** Ataque - "usou shuriken"

## Exemplo de Uso

```javascript
// Exemplo de uso da classe Heroi
const heroi1 = new Heroi("Lancelot", 30, "guerreiro");
const heroi2 = new Heroi("Merlin", 150, "mago");

heroi1.atacar(); // Exibirá: "O guerreiro atacou usando espada"
heroi2.atacar(); // Exibirá: "O mago atacou usando magia"
