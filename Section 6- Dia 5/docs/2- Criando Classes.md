# Criando Classes

Em TypeScript, as classes são uma forma de definir estruturas de dados e comportamentos associados a esses dados. Elas fornecem uma maneira de criar objetos que contêm tanto dados (propriedades) quanto funcionalidades (métodos) relacionadas. Aqui está uma explicação de algumas partes do código de exemplo que você forneceu:

```typescript
class Users {
    name: string;
    balance: number;

    constructor(name: string, balance: number) {
        this.name = name;
        this.balance = balance;
    }
}
```

Neste exemplo:

- `class Users { ... }`: Define uma nova classe chamada `Users`. Esta classe é uma representação de um usuário comum.

- `name: string; balance: number;`: Declara duas propriedades da classe `Users` - `name` e `balance`. `name` é do tipo `string` e `balance` é do tipo `number`.

- `constructor(name: string, balance: number) { ... }`: Define o construtor da classe. O construtor é um método especial que é chamado automaticamente quando um novo objeto da classe é criado. Ele aceita dois parâmetros - `name` e `balance`, que são usados para inicializar as propriedades `name` e `balance` do objeto.

- `this.name = name; this.balance = balance;`: No construtor, as propriedades `name` e `balance` do objeto são inicializadas com os valores passados como argumentos para o construtor.

```typescript
// Creating users
const user1 = new Users('Alice', 10);
const user2 = new Users('Bob', 5);
```

Neste trecho:

- `const user1 = new Users('Alice', 10);`: Cria uma nova instância da classe `Users` com o nome 'Alice' e saldo 10, e atribui a esta instância à variável `user1`.

- `const user2 = new Users('Bob', 5);`: Cria outra nova instância da classe `Users` com o nome 'Bob' e saldo 5, e atribui a esta instância à variável `user2`.

Agora, você tem dois objetos do tipo `Users` - `user1` e `user2`, cada um com um nome e saldo associados. Esses objetos podem ser usados em seu programa para realizar operações relacionadas a usuários, como exibir seus nomes e saldos, fazer transações, etc.