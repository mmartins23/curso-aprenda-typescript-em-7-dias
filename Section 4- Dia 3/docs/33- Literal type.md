# Literal type

Em TypeScript, os Literal Types permitem que você defina um tipo que aceita um valor específico, em vez de apenas um tipo. Isso pode ser útil quando você quer restringir uma variável a um conjunto específico de valores.

Aqui estão alguns exemplos de como você pode usar Literal Types:

### Exemplo 1: Literal Types para variáveis

```typescript
// Literal Types para variáveis
let numero: 10;

numero = 10; // OK
// numero = 20; // Erro: Type '20' is not assignable to type '10'
```

### Exemplo 2: Literal Types para parâmetros de função

```typescript
// Literal Types para parâmetros de função
function exibirStatus(status: "ativo" | "inativo"): void {
    console.log(`Status: ${status}`);
}

exibirStatus("ativo"); // OK
exibirStatus("inativo"); // OK
// exibirStatus("pendente"); // Erro: Argument of type '"pendente"' is not assignable to parameter of type '"ativo" | "inativo"'.
```

### Exemplo 3: Literal Types para retorno de função

```typescript
// Literal Types para retorno de função
function criarMensagem(tipo: "erro" | "aviso" | "sucesso", texto: string): string {
    return `[${tipo.toUpperCase()}]: ${texto}`;
}

console.log(criarMensagem("erro", "Ocorreu um erro")); // Saída: [ERRO]: Ocorreu um erro
console.log(criarMensagem("aviso", "Atenção")); // Saída: [AVISO]: Atenção
console.log(criarMensagem("sucesso", "Operação concluída com sucesso")); // Saída: [SUCESSO]: Operação concluída com sucesso
// console.log(criarMensagem("info", "Informação")); // Erro: Argument of type '"info"' is not assignable to parameter of type '"erro" | "aviso" | "sucesso"'.
```

### Exemplo 4: Literal Types com tipos personalizados

```typescript
// Literal Types com tipos personalizados
type DiaDaSemana = "segunda" | "terça" | "quarta" | "quinta" | "sexta";

function agendarTarefa(tarefa: string, dia: DiaDaSemana): void {
    console.log(`Tarefa "${tarefa}" agendada para ${dia}.`);
}

agendarTarefa("Reunião de equipe", "segunda"); // OK
// agendarTarefa("Reunião de equipe", "sábado"); // Erro: Argument of type '"sábado"' is not assignable to parameter of type 'DiaDaSemana'.
```

Os Literal Types são úteis quando você deseja restringir uma variável, parâmetro de função ou retorno de função a um valor específico. Eles fornecem uma maneira de tornar seu código mais seguro e expressivo.