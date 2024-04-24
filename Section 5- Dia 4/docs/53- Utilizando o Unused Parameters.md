# Utilizando o Unused Parameters

A opção `noUnusedParameters` no arquivo `tsconfig.json` é usada para controlar se o compilador TypeScript deve emitir um aviso quando detectar parâmetros de função que foram declarados, mas nunca utilizados no código.

Quando você define `noUnusedParameters` como `true`, o TypeScript verificará todos os parâmetros de função em suas declarações de função. Se um parâmetro de função for declarado e nunca utilizado na implementação da função, o TypeScript emitirá um aviso indicando que o parâmetro não está sendo usado.

Essa opção é útil para identificar parâmetros de função que não são necessários e podem ter sido deixados acidentalmente durante o desenvolvimento. Remover parâmetros de função não utilizados pode ajudar a manter o código mais limpo, mais legível e mais fácil de entender para outros desenvolvedores que possam ler o código posteriormente.

Aqui está um exemplo de como você pode configurar a opção `noUnusedParameters` no seu arquivo `tsconfig.json`:

```json
{
  "compilerOptions": {
    "noUnusedParameters": true,
    // outras opções de configuração...
  }
}
```

Com essa configuração, o TypeScript emitirá avisos sempre que encontrar parâmetros de função que não estão sendo usados nas implementações das funções, ajudando a manter o código mais limpo e seguro.