# Strict e implicit Any

As opções `strict` e `noImplicitAny` no arquivo `tsconfig.json` estão relacionadas ao nível de rigor aplicado pelo compilador TypeScript em relação ao uso de tipos.

1. **`strict`**: Esta é uma opção abrangente que habilita um conjunto de opções de verificação estrita no TypeScript. Quando `strict` é definido como `true`, várias opções individuais são habilitadas implicitamente, incluindo `noImplicitAny`, `strictNullChecks`, `strictFunctionTypes`, `strictPropertyInitialization` e `strictBindCallApply`. Essas opções garantem que o TypeScript verifique o código de forma mais rigorosa em relação à segurança de tipos, uso de valores nulos e outras questões que podem levar a erros em tempo de execução.

2. **`noImplicitAny`**: Esta opção é uma das opções habilitadas pelo `strict`. Quando `noImplicitAny` é definido como `true`, o TypeScript não permite que uma variável seja implicitamente do tipo `any`. Isso significa que você deve sempre fornecer um tipo explícito para todas as variáveis, parâmetros de função e propriedades de objeto. O TypeScript encoraja o uso de tipos explícitos para garantir que seu código seja mais seguro e menos propenso a erros relacionados a tipos.

Por exemplo, aqui está como você pode configurar essas opções no seu arquivo `tsconfig.json`:

```json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    // outras opções de configuração...
  }
}
```

Com essa configuração, o TypeScript garantirá que seu código esteja em conformidade com um conjunto rigoroso de regras de tipagem, ajudando a evitar erros comuns relacionados a tipos durante a compilação e em tempo de execução. Isso promove a robustez e a segurança do seu código TypeScript.