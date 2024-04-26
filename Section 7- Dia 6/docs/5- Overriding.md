# Overriding

Em TypeScript, o conceito de overriding (sobreposição) é usado quando uma classe herda um método de sua classe pai, mas deseja fornecer uma implementação específica desse método. Isso permite que a classe filha substitua o comportamento do método herdado, fornecendo uma nova implementação que seja mais apropriada para a classe filha. Vou explicar o conceito de overriding com base no exemplo fornecido:

```typescript
class Person {
    constructor(public firstName: string, public lastName: string, public age: number) {}

    // Método de saudação padrão
    get greet() {
        return this.firstName + " " + this.lastName;
    }
}

// Cliente do banco
class Client extends Person {
    // Sobrescrevendo o método de saudação para clientes
    override get greet() {
        return "Dear " + super.greet;
    }
}

// Funcionário
class Staff extends Person {
    // Sobrescrevendo o método de saudação para funcionários
    override get greet() {
        return "Hi " + super.greet;
    }
}

let client1 = new Client('Andre', "Silva", 30);
let staff1 = new Staff('Bruna', "Martins", 20);

console.log(client1.greet); // Saída: Dear Andre Silva
console.log(staff1.greet); // Saída: Hi Bruna Martins
```

Neste exemplo:

- A classe `Person` define um método de saudação padrão chamado `greet`, que retorna o nome completo da pessoa.

- A classe `Client` estende a classe `Person` e sobrescreve o método `greet`. A implementação sobrescrita adiciona a palavra "Dear" à frente da saudação padrão da pessoa.

- A classe `Staff` também estende a classe `Person` e sobrescreve o método `greet`. Neste caso, a implementação sobrescrita adiciona a palavra "Hi" à frente da saudação padrão da pessoa.

- Ao criar instâncias de `Client` e `Staff` e chamar o método `greet`, cada classe retorna uma saudação personalizada de acordo com a sua implementação sobrescrita do método `greet`.

Portanto, o overriding permite que as classes filhas forneçam uma implementação específica para os métodos herdados da classe pai, adaptando o comportamento da classe pai às necessidades da classe filha.