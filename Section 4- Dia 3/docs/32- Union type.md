# Union type

Claro! Em TypeScript, Union Types permitem que você use mais de um tipo para uma variável, parâmetro de função ou retorno de função. Isso é útil quando você deseja que uma variável possa conter valores de tipos diferentes.

Aqui estão alguns exemplos de como você pode usar Union Types:

### Exemplo 1: Union Types para variáveis

```typescript
// Union Types para variáveis
let numeroOuString: number | string;

numeroOuString = 10; // número
console.log(numeroOuString); // Saída: 10

numeroOuString = "dez"; // string
console.log(numeroOuString); // Saída: dez
```

### Exemplo 2: Union Types para parâmetros de função

```typescript
// Union Types para parâmetros de função
function imprimirIdade(idade: number | string): void {
    console.log(`Idade: ${idade}`);
}

imprimirIdade(25); // número
// Saída: Idade: 25

imprimirIdade("vinte e cinco"); // string
// Saída: Idade: vinte e cinco
```

### Exemplo 3: Union Types para retorno de função

```typescript
// Union Types para retorno de função
function dobrarNumeroOuString(valor: number | string): number | string {
    if (typeof valor === "number") {
        return valor * 2;
    } else {
        return valor + valor;
    }
}

console.log(dobrarNumeroOuString(5)); // número
// Saída: 10

console.log(dobrarNumeroOuString("5")); // string
// Saída: 55
```

### Exemplo 4: Union Types com tipos personalizados

```typescript
// Union Types com tipos personalizados
type Status = "ativo" | "inativo";

function getStatus(usuario: string): Status | null {
    // Lógica para obter o status do usuário
    if (usuario === "joao") {
        return "ativo";
    } else if (usuario === "maria") {
        return "inativo";
    } else {
        return null;
    }
}

console.log(getStatus("joao")); // Saída: ativo
console.log(getStatus("maria")); // Saída: inativo
console.log(getStatus("pedro")); // Saída: null
```

Os Union Types são úteis quando você precisa de uma variável, parâmetro de função ou retorno de função que pode ter mais de um tipo. Eles permitem que você torne seu código mais flexível e expressivo.