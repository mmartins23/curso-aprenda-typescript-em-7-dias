# Parametro do constructor

Em TypeScript, você pode usar um atalho no constructor para definir e inicializar propriedades de uma classe de forma mais concisa. No exemplo fornecido, o constructor foi reescrito para usar esse atalho. Aqui está como funciona:

```typescript
class Movies {
    constructor(
        public readonly id: number,
        public name: string,
        private _price: number
    ) {}
}

let movie1 = new Movies(1, 'Spider-Man', 20);
```

Neste exemplo:

- `public readonly id: number`: Isso define uma propriedade `id` que é pública (acessível de fora da classe) e somente leitura (`readonly`). Isso significa que uma vez que `id` seja atribuído no constructor, não pode ser modificado posteriormente.

- `public name: string`: Isso define uma propriedade `name` que é pública e mutável. Ela pode ser acessada e modificada de fora da classe.

- `private _price: number`: Isso define uma propriedade `_price` que é privada, o que significa que ela só pode ser acessada de dentro da classe. Esta propriedade é mutável, pois não possui o modificador `readonly`.

Este método de atalho no constructor é muito útil para simplificar o código, especialmente quando você precisa apenas definir propriedades básicas com base nos parâmetros do constructor. Ele elimina a necessidade de declarar explicitamente as propriedades da classe e atribuir valores a elas dentro do constructor.