# Criando Interfaces

Em TypeScript, as interfaces são contratos que definem a estrutura de um objeto, ou seja, quais propriedades e métodos esse objeto deve ter. Elas são utilizadas para descrever a forma de objetos em termos de tipos, fornecendo uma maneira de definir tipos de forma mais flexível e reutilizável. Aqui está uma explicação do conceito de interface e do exemplo fornecido:

```typescript
interface Item {
    name: string;
    price: number;

    itemPurchased(message: string): void;
}
```

- `interface Item { ... }`: Esta é a definição de uma interface chamada `Item`. Ela especifica que qualquer objeto que implemente essa interface deve ter as propriedades `name` (do tipo `string`) e `price` (do tipo `number`), bem como o método `itemPurchased`, que recebe uma mensagem do tipo `string` como argumento e não retorna nada (`void`).

```typescript
let product1: Item;

product1 = {
    name: "Apple",
    price: 2,
    itemPurchased(message) {
        console.log(message + " " + this.name);
    },
}
```

- `let product1: Item;`: Declara uma variável `product1` do tipo `Item`, o que significa que ela deve seguir a estrutura definida pela interface `Item`.

- `product1 = { ... }`: Inicializa a variável `product1` com um objeto que segue a estrutura definida pela interface `Item`.

- `name: "Apple", price: 2,`: Define as propriedades `name` e `price` do objeto `product1`.

- `itemPurchased(message) { ... }`: Define o método `itemPurchased` no objeto `product1`. Este método recebe uma mensagem como argumento e imprime uma mensagem junto com o nome do produto.

```typescript
console.log(product1.itemPurchased('You just bought a'));
```

- `console.log(product1.itemPurchased('You just bought a'));`: Chama o método `itemPurchased` do objeto `product1`, passando a mensagem 'You just bought a'. Isso imprimirá a mensagem juntamente com o nome do produto ('You just bought a Apple').

Resumindo, interfaces em TypeScript ajudam a definir contratos que objetos devem seguir, o que aumenta a segurança e a clareza do código, especialmente em situações onde há várias partes do código que precisam comunicar-se entre si.