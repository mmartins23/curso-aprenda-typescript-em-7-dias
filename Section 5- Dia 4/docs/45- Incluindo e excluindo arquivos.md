# Incluindo e excluindo arquivos

Claro! Aqui está um passo a passo para incluir e excluir arquivos no `tsconfig.json`:

Passo 1: Navegue até o diretório do seu projeto.

Passo 2: Se você ainda não tiver um arquivo `tsconfig.json`, crie um executando o seguinte comando:

```bash
npx tsc --init
```

Passo 3: Abra o arquivo `tsconfig.json` no seu editor de código.

Passo 4: Para incluir ou excluir arquivos no seu projeto, você pode usar as opções `include` e `exclude` no arquivo `tsconfig.json`.

Por exemplo, se você quiser incluir apenas arquivos da pasta `src` e excluir a pasta `node_modules`, seu arquivo `tsconfig.json` deve ser parecido com isso:

```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "strict": true
  },
  "include": [
    "src/**/*"
  ],
  "exclude": [
    "node_modules"
  ]
}
```

No exemplo acima:

- `"include": ["src/**/*"]` inclui todos os arquivos da pasta `src` e suas subpastas.
- `"exclude": ["node_modules"]` exclui a pasta `node_modules` do processo de compilação.

Passo 5: Salve o arquivo `tsconfig.json`.

Passo 6: Agora você pode iniciar o compilador TypeScript no modo de observação com o seguinte comando:

```bash
npx tsc --watch
```

Se você já estiver usando um arquivo `tsconfig.json`, basta editar o arquivo e adicionar as opções `include` e `exclude` conforme mostrado acima.