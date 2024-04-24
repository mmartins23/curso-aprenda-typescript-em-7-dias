# Utilizando o Implicit Returns

A opção `noImplicitReturns` no arquivo `tsconfig.json` é usada para controlar se o compilador TypeScript deve emitir um aviso quando detectar uma função que não tem um retorno explícito em todos os seus caminhos de execução.

Quando você define `noImplicitReturns` como `true`, o TypeScript irá verificar todas as funções em seu código para garantir que todas elas tenham uma declaração de retorno em todos os possíveis caminhos de execução. Se houver um código em que uma função possa não retornar um valor em algum cenário, o TypeScript emitirá um aviso indicando a falta de retorno explícito.

Essa opção é útil para evitar bugs sutis onde uma função não retorna um valor em todos os casos possíveis, o que pode levar a resultados inesperados ou a erros em tempo de execução.

Aqui está um exemplo de como você pode configurar a opção `noImplicitReturns` no seu arquivo `tsconfig.json`:

```json
{
  "compilerOptions": {
    "noImplicitReturns": true,
    // outras opções de configuração...
  }
}
```

Com essa configuração, o TypeScript irá garantir que todas as funções tenham uma declaração de retorno explícita em todos os caminhos de execução, ajudando a tornar o código mais seguro e robusto.