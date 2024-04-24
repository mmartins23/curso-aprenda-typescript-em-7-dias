# Type Alias

Claro! Em TypeScript, você pode criar aliases de tipos usando a palavra-chave `type`. Os aliases de tipos são úteis para tornar o código mais legível, permitindo que você defina tipos complexos uma vez e os reutilize em vários lugares.

Aqui estão alguns exemplos de como você pode usar aliases de tipo:

### Exemplo 1: Alias de tipo para um objeto

```typescript
// Definindo um alias de tipo para um objeto
type Pessoa = {
    nome: string;
    idade: number;
};

// Usando o alias de tipo
let pessoa: Pessoa = {
    nome: "João",
    idade: 30
};

console.log(pessoa.nome); // Saída: João
console.log(pessoa.idade); // Saída: 30
```

### Exemplo 2: Alias de tipo para uma função

```typescript
// Definindo um alias de tipo para uma função
type FuncaoSoma = (a: number, b: number) => number;

// Usando o alias de tipo
let somar: FuncaoSoma = (a, b) => a + b;

console.log(somar(2, 3)); // Saída: 5
```

### Exemplo 3: Alias de tipo para uma união de tipos

```typescript
// Definindo um alias de tipo para uma união de tipos
type Status = "ativo" | "inativo";

// Usando o alias de tipo
let statusUsuario: Status = "ativo";
console.log(statusUsuario); // Saída: ativo

// Tentando atribuir um valor inválido
// Isso resultará em um erro de compilação
// let statusUsuario: Status = "desativado"; // Erro: Type '"desativado"' is not assignable to type 'Status'.
```

Os aliases de tipo são úteis para tornar o código mais legível e fácil de manter. Eles permitem que você defina tipos complexos uma vez e os reutilize em vários lugares do seu código.