# Tipo Enum

Em TypeScript, `enum` é um tipo de dado que permite definir um conjunto de constantes nomeadas. Isso facilita a criação de conjuntos de valores mais legíveis e autoexplicativos.

Aqui está um exemplo simples de como você pode usar `enum` em TypeScript:

```typescript
enum DiaDaSemana {
    Segunda,
    Terça,
    Quarta,
    Quinta,
    Sexta,
    Sábado,
    Domingo
}

let dia: DiaDaSemana = DiaDaSemana.Segunda;

console.log(dia); // Saída: 0
```

Neste exemplo, `DiaDaSemana` é um `enum` que contém os dias da semana. Por padrão, os membros do `enum` são números, começando de 0. No entanto, você pode definir valores específicos para eles, se preferir:

```typescript
enum DiaDaSemana {
    Segunda = 1,
    Terça,
    Quarta,
    Quinta,
    Sexta,
    Sábado,
    Domingo
}

let dia: DiaDaSemana = DiaDaSemana.Segunda;

console.log(dia); // Saída: 1
```

Neste exemplo, o valor de `Segunda` é definido como `1` e os valores seguintes são incrementados automaticamente a partir desse valor.

Você também pode definir `enum` com valores de string:

```typescript
enum Cor {
    Vermelho = "RED",
    Verde = "GREEN",
    Azul = "BLUE"
}

let cor: Cor = Cor.Verde;

console.log(cor); // Saída: "GREEN"
```

`enum` em TypeScript oferece algumas vantagens sobre os `enum` em JavaScript puro, como a capacidade de ter valores inicializados e valores de string, em vez de apenas valores numéricos. Isso torna o código mais legível e menos propenso a erros. Além disso, o TypeScript fornece verificação de tipo para valores de `enum`, garantindo que apenas valores válidos sejam usados.