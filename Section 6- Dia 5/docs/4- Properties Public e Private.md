# Properties Public e Private

Em TypeScript, `public` e `private` são modificadores de acesso que podem ser aplicados a membros (propriedades e métodos) de uma classe. Eles controlam a visibilidade desses membros fora da classe. Aqui está uma explicação de como esses modificadores são usados no exemplo fornecido:

```typescript
class Users {
    name: string;
    private balance: number; // balance é uma propriedade privada

    constructor(name: string, balance: number) {
        this.name = name;
        this.balance = balance;
    }

    addMoney(amount: number) {
        this.balance += amount;
    }
}
```

- `name: string;`: Esta é uma propriedade pública da classe `Users`. Isso significa que ela pode ser acessada e modificada de fora da classe.

- `private balance: number;`: Esta é uma propriedade privada da classe `Users`. Isso significa que ela só pode ser acessada e modificada de dentro da própria classe, não podendo ser acessada diretamente de fora da classe.

- `constructor(name: string, balance: number) { ... }`: O construtor da classe `Users` inicializa as propriedades `name` e `balance`. Mesmo sendo `balance` privada, ela ainda pode ser acessada dentro do próprio construtor.

- `addMoney(amount: number) { ... }`: Este é um método público da classe `Users`. Ele pode ser chamado de fora da classe e tem acesso à propriedade `balance` mesmo que ela seja privada. Isso significa que métodos da própria classe podem acessar propriedades privadas, mas métodos externos não podem.

No código fornecido, a propriedade `balance` é privada, o que significa que ela não pode ser acessada diretamente de fora da classe `Users`. No entanto, o método `addMoney` dentro da classe ainda pode acessá-la e modificá-la. Isso garante que a integridade dos dados seja mantida, já que apenas métodos internos podem alterar o saldo do usuário.