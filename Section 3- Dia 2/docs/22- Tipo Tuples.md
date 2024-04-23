# Tipo Tuples

Em TypeScript, uma **tupla** é um tipo de dados que permite representar uma coleção de elementos de tipos específicos, onde o número de elementos é fixo e sua ordem é importante. Ao contrário dos arrays, onde todos os elementos são do mesmo tipo, em uma tupla, cada elemento pode ter um tipo diferente.

A sintaxe para definir uma tupla é usar colchetes `[]` e especificar o tipo de cada elemento entre parênteses:

```typescript
let person: [string, number] = ["João", 30];
```

Neste exemplo, `person` é uma tupla que contém dois elementos: o primeiro é do tipo `string` e o segundo é do tipo `number`. 

Acessamos os elementos da tupla pelo índice:

```typescript
console.log(person[0]); // Saída: João
console.log(person[1]); // Saída: 30
```

As tuplas podem ser úteis quando você sabe exatamente quantos e que tipos de valores serão armazenados em uma coleção e quer garantir que eles estejam na ordem correta.

```typescript
let coordinate: [number, number, number] = [10, 20, 30];
```

Neste exemplo, `coordinate` é uma tupla que representa as coordenadas x, y e z de um ponto no espaço tridimensional.

Uma vez que as tuplas são imutáveis após a sua criação, você não pode adicionar ou remover elementos, nem mudar os tipos dos elementos que ela contém.

```typescript
let person: [string, number];
person = ["João", 30]; // OK
person = ["Maria", "25"]; // Erro: O segundo elemento deve ser do tipo number
person.push("Desenvolvedor"); // Erro: O método 'push' não está disponível em tuplas
```

As tuplas são uma forma poderosa de trabalhar com dados estruturados em TypeScript, garantindo que o tipo e a ordem dos elementos sejam verificados pelo compilador.