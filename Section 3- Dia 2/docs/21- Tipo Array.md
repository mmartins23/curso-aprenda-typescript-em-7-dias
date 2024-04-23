# Tipo Array

Claro! Em TypeScript, assim como em JavaScript, você pode definir arrays para armazenar uma coleção de elementos do mesmo tipo ou de tipos diferentes. Aqui está como você pode usar arrays em TypeScript:

1. **Definindo um array de um tipo específico:**

```typescript
let numbers: number[] = [1, 2, 3, 4, 5];
```

Neste exemplo, `numbers` é um array que só pode conter números.

2. **Acessando elementos de um array:**

```typescript
console.log(numbers[0]); // Saída: 1
console.log(fruits[1]); // Saída: banana
```

3. **Adicionando elementos a um array:**

```typescript
numbers.push(6); // Adiciona 6 ao final do array
fruits.push("morango"); // Adiciona "morango" ao final do array
```

4. **Iterando sobre os elementos de um array:**

```typescript
for(let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// Usando o forEach
fruits.forEach(fruit => {
    console.log(fruit);
});
```

5. **Operações comuns de array:**

- **`pop()`:** Remove e retorna o último elemento do array.
- **`push()`:** Adiciona um ou mais elementos ao final do array e retorna o novo comprimento do array.
- **`shift()`:** Remove e retorna o primeiro elemento do array.
- **`unshift()`:** Adiciona um ou mais elementos ao início do array e retorna o novo comprimento do array.
- **`splice()`:** Adiciona ou remove elementos do array.

```typescript
numbers.pop(); // Remove o último elemento
numbers.push(6); // Adiciona 6 ao final do array

fruits.shift(); // Remove o primeiro elemento
fruits.unshift("abacaxi"); // Adiciona "abacaxi" ao início do array

let removedFruit = fruits.splice(1, 1); // Remove um elemento a partir do índice 1
```

Esses são alguns dos conceitos básicos sobre arrays em TypeScript. Eles são uma parte fundamental da linguagem e são amplamente usados em muitas situações diferentes. Se tiver alguma dúvida específica ou precisar de mais exemplos, sinta-se à vontade para perguntar!