# O ReadOnly

Em TypeScript, a palavra-chave `readonly` é usada para indicar que uma propriedade de uma classe não pode ser modificada após a sua inicialização. Isso é útil quando você quer garantir que certas propriedades não sejam alteradas acidentalmente ou de forma inadequada após a criação de um objeto.

Vamos criar uma classe `Movies` com duas propriedades, `id` e `name`, e usar a palavra-chave `readonly` para tornar a propriedade `id` somente leitura:

```typescript
class Movies {
    readonly id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}

// Criando uma instância da classe Movies
const movie = new Movies(1, "Inception");

// Podemos acessar a propriedade id normalmente
console.log(movie.id); // Saída: 1

// Tentativa de modificar a propriedade id
movie.id = 2; // Isso resultará em um erro de compilação

// Podemos modificar a propriedade name
movie.name = "Interstellar";

// Acessando as propriedades atualizadas
console.log(movie.name); // Saída: Interstellar
```

Neste exemplo, a propriedade `id` é marcada como `readonly`, o que significa que uma vez que ela é atribuída no construtor da classe, ela não pode ser modificada. Qualquer tentativa de modificação direta resultará em um erro de compilação. Por outro lado, a propriedade `name` não é `readonly`, então podemos modificá-la normalmente.