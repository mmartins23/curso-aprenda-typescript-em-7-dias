# Function void

Em TypeScript, quando uma função não retorna nenhum valor, você pode usar `void` como o tipo de retorno da função. Isso indica explicitamente que a função não retorna nenhum valor.

Aqui está um exemplo de uma função que não retorna nenhum valor:

```typescript
// Função que imprime a soma de dois números
function imprimirSoma(num1: number, num2: number): void {
    console.log("A soma é:", num1 + num2);
}

// Chamando a função
imprimirSoma(2, 5);
```

Neste exemplo, `imprimirSoma` é uma função que recebe dois números como parâmetros e imprime a soma deles no console. O tipo de retorno `void` indica que a função não retorna nenhum valor.

Se tentarmos atribuir o resultado da chamada da função a uma variável, o TypeScript emitirá um erro:

```typescript
let resultado: void = imprimirSoma(2, 5); // Erro: Type 'undefined' is not assignable to type 'void'.
```

Isso ocorre porque o valor retornado pela função é `undefined`, não `void`. 

Em resumo, `void` é usado para indicar que uma função não retorna nenhum valor. Isso é útil para deixar claro o propósito da função e para ajudar o TypeScript a detectar possíveis erros em seu código.