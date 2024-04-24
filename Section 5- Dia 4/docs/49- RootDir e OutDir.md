# RootDir e OutDir

No arquivo `tsconfig.json`, `rootDir` e `outDir` são opções importantes que controlam onde o TypeScript procura por arquivos de origem (rootDir) e onde ele coloca os arquivos JavaScript compilados (outDir).

1. **`rootDir`**: Essa opção especifica o diretório raiz em que o TypeScript irá procurar por arquivos TypeScript para compilar. Se você tiver uma estrutura de projeto complexa com vários diretórios contendo código TypeScript, `rootDir` ajuda o TypeScript a identificar de onde deve começar a procurar os arquivos a serem compilados. Se não for especificado, o TypeScript usará o diretório atual como o diretório raiz.

2. **`outDir`**: Esta opção especifica o diretório de saída onde o TypeScript colocará os arquivos JavaScript compilados. Quando o TypeScript compila os arquivos TypeScript, ele gera arquivos JavaScript correspondentes. Esses arquivos JavaScript são colocados no diretório especificado por `outDir`. Isso é útil para manter seus arquivos TypeScript e JavaScript separados, especialmente em projetos maiores. Se você não definir `outDir`, os arquivos JavaScript serão gerados no mesmo diretório onde os arquivos TypeScript estão localizados.

Por exemplo, suponha que você tenha a seguinte estrutura de diretórios:

```
projeto/
│
├── src/
│   ├── app/
│   │   ├── arquivo1.ts
│   │   └── arquivo2.ts
│   └── index.ts
└── dist/
```

Se você configurar `rootDir` como `"src"` e `outDir` como `"dist"`, o TypeScript irá procurar por arquivos TypeScript dentro do diretório `src` e colocará os arquivos JavaScript compilados no diretório `dist`.

```json
{
  "compilerOptions": {
    "rootDir": "src",
    "outDir": "dist",
    // outras opções de configuração...
  }
}
```

Após a compilação, a estrutura de diretórios ficaria assim:

```
projeto/
│
├── src/
│   ├── app/
│   │   ├── arquivo1.ts
│   │   └── arquivo2.ts
│   └── index.ts
└── dist/
    ├── app/
    │   ├── arquivo1.js
    │   ├── arquivo2.js
    └── index.js
```

Isso ajuda a manter uma estrutura de projeto limpa e organizada, separando claramente os arquivos de origem e os arquivos compilados.