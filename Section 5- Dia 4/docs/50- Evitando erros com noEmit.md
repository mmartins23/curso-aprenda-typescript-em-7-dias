# Evitando erros com noEmitOnError

A opção `noEmitOnError` no arquivo `tsconfig.json` é usada para controlar o comportamento do compilador TypeScript quando ocorrem erros durante a compilação do código. 

Quando você define `noEmitOnError` como `true`, o compilador TypeScript não irá gerar arquivos de saída (como arquivos JavaScript) se ocorrerem erros durante a compilação. Em vez disso, ele apenas mostrará os erros encontrados no código.

Essa opção é útil quando você deseja garantir que apenas código sem erros seja compilado e gerado como saída. Isso pode ser especialmente útil em ambientes de construção automatizada, como pipelines de CI/CD, onde você deseja evitar que código com erros seja implantado ou distribuído.

Aqui está um exemplo de como você pode configurar a opção `noEmitOnError` no seu arquivo `tsconfig.json`:

```json
{
  "compilerOptions": {
    "noEmitOnError": true,
    // outras opções de configuração...
  }
}
```

Com essa configuração, se houver qualquer erro durante a compilação do TypeScript, nenhum arquivo de saída será gerado e apenas os erros serão relatados. Isso ajuda a garantir que apenas código sem erros seja compilado e gerado como saída.