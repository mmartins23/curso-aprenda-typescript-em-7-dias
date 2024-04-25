# Criando um objeto com metodo

Em TypeScript, os métodos são funções que estão associadas a uma classe e podem ser chamados nos objetos dessa classe. Eles permitem que você adicione comportamentos específicos a um objeto. Aqui está uma explicação do método `addMoney` no exemplo fornecido:

```typescript
class Users {
    name: string;
    balance: number;

    constructor(name: string, balance: number) {
        this.name = name;
        this.balance = balance;
    }

    addMoney(amount: number) {
        this.balance += amount;
    }
}
```

Neste exemplo:

- `addMoney(amount: number) { ... }`: Define um método chamado `addMoney` na classe `Users`. Este método aceita um parâmetro `amount` do tipo `number`, que representa a quantidade de dinheiro a ser adicionada ao saldo do usuário.

- `this.balance += amount;`: Dentro do método `addMoney`, o valor do parâmetro `amount` é adicionado ao saldo atual (`this.balance`) do usuário usando o operador de atribuição `+=`. Isso aumenta o saldo do usuário pelo valor fornecido.

```typescript
// Creating users
const user1 = new Users('Alice', 10);
const user2 = new Users('Bob', 5);
console.log(user1, user2);
```

Neste trecho:

- `const user1 = new Users('Alice', 10);`: Cria uma nova instância da classe `Users` com o nome 'Alice' e saldo 10, e atribui a esta instância à variável `user1`.
- `const user2 = new Users('Bob', 5);`: Cria outra nova instância da classe `Users` com o nome 'Bob' e saldo 5, e atribui a esta instância à variável `user2`.

```typescript
// method
user1.addMoney(100);
user2.addMoney(5);
console.log(user1, user2);
```

Neste último trecho:

- `user1.addMoney(100);`: Chama o método `addMoney` no objeto `user1`, adicionando 100 ao saldo de `user1`.
- `user2.addMoney(5);`: Chama o método `addMoney` no objeto `user2`, adicionando 5 ao saldo de `user2`.
- `console.log(user1, user2);`: Imprime os objetos `user1` e `user2` após a chamada dos métodos `addMoney`, mostrando os saldos atualizados.