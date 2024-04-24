# Configurando o Watch Mode

Para configurar o TypeScript no modo de observação (watch mode), você pode usar a opção `--watch` ao chamar o compilador TypeScript (`tsc`). Isso fará com que o compilador TypeScript observe os arquivos do seu projeto e recompile sempre que houver uma alteração nos arquivos.

Aqui está como você pode configurar o watch mode para um projeto TypeScript:

Passo 1: Certifique-se de ter o TypeScript instalado globalmente ou localmente em seu projeto. Se você ainda não tiver o TypeScript instalado, você pode instalá-lo usando npm:

```bash
npm install typescript --save-dev
```

Passo 2: Navegue até o diretório do seu projeto.

Passo 3: Execute o compilador TypeScript com a opção `--watch`:

```bash
npx tsc --watch
```

Se você estiver usando um arquivo `tsconfig.json` para configurar seu projeto TypeScript, você pode simplesmente executar:

```bash
npx tsc --watch --p tsconfig.json
```

Isso iniciará o compilador TypeScript no modo de observação, e ele recompilará automaticamente seu código sempre que detectar uma alteração em qualquer arquivo TypeScript do seu projeto.