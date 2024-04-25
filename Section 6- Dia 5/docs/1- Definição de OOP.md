# Definição de OOP

A Programação Orientada a Objetos (OOP) em TypeScript segue os mesmos princípios básicos da OOP em outras linguagens, como encapsulamento, herança e polimorfismo. Vou explicar brevemente esses conceitos e depois fornecer um exemplo de código em TypeScript.

1. **Encapsulamento**: É o conceito de agrupar dados (propriedades) e comportamentos (métodos) relacionados em uma única unidade, chamada de classe. Isso impede o acesso direto aos dados da classe de fora, em vez disso, fornece métodos para acessá-los e modificá-los.

2. **Herança**: Permite que uma classe herde propriedades e métodos de outra classe, promovendo a reutilização de código e a criação de uma hierarquia de classes.

3. **Polimorfismo**: Permite que objetos de diferentes classes sejam tratados de forma uniforme se eles forem de um tipo comum, facilitando a manipulação de diferentes tipos de objetos através de uma interface comum.

Aqui está um exemplo de código em TypeScript demonstrando esses conceitos:

```typescript
// Definição de uma classe base
class Animal {
  // Propriedade protegida (encapsulamento)
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  // Método público
  public makeSound(): void {
    console.log(`${this.name} faz um som.`);
  }
}

// Definição de uma classe derivada (herança)
class Dog extends Animal {
  // Método específico da classe Dog
  public wagTail(): void {
    console.log(`${this.name} está abanando o rabo.`);
  }

  // Sobrescrita do método makeSound
  public makeSound(): void {
    console.log(`${this.name} late.`);
  }
}

// Definição de uma classe derivada diferente
class Cat extends Animal {
  // Sobrescrita do método makeSound
  public makeSound(): void {
    console.log(`${this.name} mia.`);
  }
}

// Criando instâncias das classes
const dog = new Dog('Rex');
const cat = new Cat('Whiskers');

// Chamando métodos das instâncias
dog.makeSound(); // Saída: Rex late.
dog.wagTail(); // Saída: Rex está abanando o rabo.

cat.makeSound(); // Saída: Whiskers mia.
```

Neste exemplo:

- `Animal` é a classe base que define uma propriedade `name` e um método `makeSound`.
- `Dog` e `Cat` são classes derivadas que herdam de `Animal`.
- `Dog` adiciona um método específico `wagTail` e sobrescreve o método `makeSound`.
- `Cat` sobrescreve o método `makeSound`.
- As instâncias de `Dog` e `Cat` podem ser tratadas como instâncias de `Animal`, demonstrando polimorfismo.