# Utilizando o Unused locals

A opção `noUnusedLocals` no arquivo `tsconfig.json` é utilizada para controlar se o compilador TypeScript deve emitir um aviso quando detectar variáveis locais que foram declaradas, mas nunca usadas no código.

Quando você define `noUnusedLocals` como `true`, o TypeScript irá verificar todas as variáveis locais dentro das funções e escopos locais do seu código. Se uma variável local for declarada e nunca utilizada em nenhum lugar do código dentro do mesmo escopo, o TypeScript emitirá um aviso indicando que a variável não está sendo usada.

Isso é útil porque ajuda a identificar código morto ou variáveis que foram esquecidas ou deixadas para trás durante o desenvolvimento. Remover variáveis não utilizadas pode ajudar a tornar o código mais limpo, mais legível e mais fácil de manter, além de evitar confusão para outros desenvolvedores que possam ler o código no futuro.

Aqui está um exemplo de como você pode configurar a opção `noUnusedLocals` no seu arquivo `tsconfig.json`:

```json
{
  "compilerOptions": {
    "noUnusedLocals": true,
    // outras opções de configuração...
  }
}
```

Com essa configuração, o TypeScript emitirá avisos sempre que encontrar variáveis locais que não estão sendo usadas no código, ajudando a manter o código mais limpo e seguro.