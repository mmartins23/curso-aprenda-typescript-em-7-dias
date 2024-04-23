# Modificando o TS compiler

Claro! Vamos analisar o arquivo `tsconfig.json` e as modificações feitas:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "outDir": "./prod",
    "noEmitOnError": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "noImplicitAny": true,
    "skipLibCheck": true
  }
}
```

1. **`tsc --init`**: O comando `tsc --init` inicializa um arquivo de configuração TypeScript chamado `tsconfig.json` no diretório atual. Esse arquivo contém todas as opções de configuração do compilador TypeScript.

2. **Modificações feitas no arquivo `tsconfig.json`:**

    - **`target: "ES2020"`**: Especifica a versão do ECMAScript para a qual o código TypeScript será compilado. Neste caso, o código será compilado para ECMAScript 2020.

    - **`module: "commonjs"`**: Especifica o formato do módulo para o código gerado. Aqui, o código será compilado para o formato CommonJS.

    - **`outDir: "./prod"`**: Especifica o diretório de saída para os arquivos JavaScript compilados. Neste caso, os arquivos serão colocados no diretório "prod".

    - **`noEmitOnError: true`**: Essa opção impede a geração de arquivos de saída (JavaScript) se houver erros durante a compilação.

    - **`esModuleInterop: true`**: Essa opção simplifica a interoperabilidade entre módulos do tipo CommonJS e módulos ES6.

    - **`forceConsistentCasingInFileNames: true`**: Força que todos os nomes de arquivos sejam tratados de forma consistente (maiúsculas ou minúsculas).

    - **`strict: true`**: Habilita todas as opções de checagem estrita de tipos.

    - **`noImplicitAny: true`**: Gera um erro se o TypeScript não puder inferir automaticamente o tipo de uma variável.

    - **`skipLibCheck: true`**: Pula a verificação de tipos de todos os arquivos de definição de tipo (arquivos `.d.ts`). Isso pode melhorar significativamente o tempo de compilação, especialmente em projetos grandes.

Essas modificações foram feitas para garantir uma compilação mais eficiente e segura do código TypeScript, com verificação estrita de tipos e configurações que ajudam a manter a consistência e a qualidade do código gerado.