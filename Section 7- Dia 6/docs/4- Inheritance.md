# Inheritance

Em TypeScript, assim como em outras linguagens de programação orientadas a objetos, a herança permite que uma classe herde as propriedades e métodos de outra classe, possibilitando a reutilização de código e a criação de uma hierarquia entre as classes. Vou explicar o conceito de herança com base no exemplo fornecido.

```typescript
class Person {
    constructor(public firstName: string, public lastName: string, public age: number) {}

    greet() {
        console.log(`Hi, I am ${this.firstName}`);
    }
}

// Cliente do banco
class Client extends Person {
    balance() {
        console.log('Your balance is USD 50');
    }
}
```

Neste exemplo, temos duas classes:

1. **`Person`**: Representa uma pessoa comum, com propriedades como `firstName`, `lastName` e `age`, e um método `greet()` para cumprimentar a pessoa.

2. **`Client`**: É uma classe que herda da classe `Person`. Isso é indicado pela declaração `extends Person`. Isso significa que a classe `Client` herda todas as propriedades e métodos da classe `Person`. Além disso, a classe `Client` possui um novo método `balance()` que é específico para clientes do banco.

Com essa hierarquia de classes, um objeto da classe `Client` terá acesso tanto aos métodos e propriedades da classe `Person` quanto aos métodos definidos diretamente na classe `Client`. Por exemplo:

```typescript
const johnDoe = new Client('John', 'Doe', 30);

johnDoe.greet(); // Saída: Hi, I am John
johnDoe.balance(); // Saída: Your balance is USD 50
```

Neste exemplo, o objeto `johnDoe` é uma instância da classe `Client`, então ele pode chamar tanto o método `greet()` da classe `Person` quanto o método `balance()` específico da classe `Client`. Isso demonstra como a herança permite a reutilização de código e a definição de uma relação de "é um" entre classes.