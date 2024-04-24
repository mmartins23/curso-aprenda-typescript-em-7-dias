# Objectos

Em TypeScript, você pode criar objetos de várias maneiras. Aqui estão alguns exemplos:

### Exemplo 1: Objeto com propriedades tipadas
```typescript
// Definindo um tipo para o objeto
type Pessoa = {
    nome: string;
    idade: number;
    email: string;
};

// Criando um objeto do tipo Pessoa
let pessoa: Pessoa = {
    nome: "João",
    idade: 30,
    email: "joao@example.com"
};

console.log(pessoa.nome); // Saída: João
console.log(pessoa.idade); // Saída: 30
console.log(pessoa.email); // Saída: joao@example.com
```

### Exemplo 2: Objeto sem tipagem explícita
```typescript
// Criando um objeto sem tipagem explícita
let carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2020
};

console.log(carro.marca); // Saída: Toyota
console.log(carro.modelo); // Saída: Corolla
console.log(carro.ano); // Saída: 2020
```

### Exemplo 3: Objeto com método
```typescript
// Definindo um tipo para o objeto
type Produto = {
    nome: string;
    preco: number;
    calcularDesconto: (percentual: number) => number;
};

// Criando um objeto do tipo Produto
let produto: Produto = {
    nome: "Notebook",
    preco: 2500,
    calcularDesconto(percentual) {
        return this.preco - (this.preco * percentual / 100);
    }
};

console.log(produto.calcularDesconto(10)); // Saída: 2250
```

Esses são apenas alguns exemplos de como você pode criar objetos em TypeScript. Você pode adicionar propriedades, métodos e até mesmo tipar esses objetos para tornar seu código mais legível e seguro.