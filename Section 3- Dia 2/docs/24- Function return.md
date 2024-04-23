# Function return

Em TypeScript, você pode definir o tipo de retorno de uma função usando `: TipoDeRetorno` após a lista de parâmetros da função. Isso ajuda a garantir que a função retorne o tipo correto de valor. 

No exemplo que você forneceu:

```typescript
// Função que retorna a soma de dois números
function add(num1: number, num2: number): number {
    return num1 + num2;
}

// Chama a função e armazena o resultado em uma variável
const result = add(2, 5);

// Imprime o resultado
console.log(result); // Saída: 7
```

A função `add` recebe dois parâmetros do tipo `number` e retorna um valor do tipo `number`. No exemplo, `add(2, 5)` retorna `7`, que é atribuído à variável `result` e então impresso no console.

Se você tentar chamar a função `add` com argumentos de tipos diferentes, ou se a função não retornar um número, o TypeScript emitirá um erro em tempo de compilação. Isso ajuda a detectar erros de forma precoce e a escrever código mais seguro.