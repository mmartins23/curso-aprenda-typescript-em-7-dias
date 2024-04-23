# Tipos no TypeScript

No TypeScript, você pode definir tipos para variáveis, parâmetros de função, retornos de função e muito mais. Aqui estão alguns dos tipos básicos no TypeScript:

1. **number**: representa valores numéricos, como números inteiros ou de ponto flutuante.
   ```typescript
   let age: number = 30;
   ```

2. **string**: representa valores de texto.
   ```typescript
   let name: string = "João";
   ```

3. **boolean**: representa valores verdadeiros ou falsos.
   ```typescript
   let isStudent: boolean = true;
   ```

4. **Array**: representa uma lista de valores do mesmo tipo.
   ```typescript
   let numbers: number[] = [1, 2, 3, 4, 5];
   let fruits: Array<string> = ["maçã", "banana", "laranja"];
   ```

5. **Tuple**: representa um array com um número fixo de elementos, com tipos conhecidos.
   ```typescript
   let person: [string, number] = ["João", 30];
   ```

6. **enum**: permite definir um conjunto de constantes nomeadas.
   ```typescript
   enum Color {
       Red,
       Green,
       Blue
   }
   let color: Color = Color.Blue;
   ```

7. **any**: representa qualquer tipo. Evite usar `any` sempre que possível, pois ele desativa a verificação de tipos.
   ```typescript
   let data: any = 10;
   data = "Olá";
   ```

8. **void**: é o oposto de `any`, representa a ausência de tipo. Normalmente usado em funções que não retornam nenhum valor.
   ```typescript
   function sayHello(): void {
       console.log("Olá!");
   }
   ```

9. **null** e **undefined**: têm seus próprios tipos com os mesmos nomes.
   ```typescript
   let valueNull: null = null;
   let valueUndefined: undefined = undefined;
   ```

10. **object**: representa qualquer coisa que não é um tipo primitivo.
    ```typescript
    let user: object = {
        name: "João",
        age: 30
    };
    ```

Esses são apenas alguns dos tipos básicos fornecidos pelo TypeScript. Além disso, o TypeScript permite a criação de tipos personalizados usando `interfaces`, `type` e `class`. Isso oferece uma maneira poderosa de descrever a forma dos objetos em JavaScript.

```typescript
interface Person {
    name: string;
    age: number;
}

let person: Person = {
    name: "João",
    age: 30
};
```

```typescript
type Point = {
    x: number;
    y: number;
}

let point: Point = {
    x: 10,
    y: 20
};
```

Esses são os conceitos básicos sobre tipos no TypeScript. Se tiver alguma dúvida específica ou precisar de mais exemplos, fique à vontade para perguntar!