# Source Map

Os Source Maps (mapas de origem) são arquivos adicionais que mapeiam o código TypeScript compilado para o código JavaScript equivalente. Eles são úteis durante o processo de depuração, pois permitem que você depure o código TypeScript original em um navegador ou em uma ferramenta de desenvolvimento, mesmo que o código em execução seja JavaScript.

Para habilitar os Source Maps no TypeScript, você pode configurar o arquivo `tsconfig.json` com a opção `"sourceMap"` definida como `true`. Aqui está um exemplo:

```json
{
  "compilerOptions": {
    "sourceMap": true,
    // outras opções de configuração...
  }
}
```

Com essa configuração, quando você compilar seu código TypeScript, o compilador irá gerar um arquivo de mapa de origem (com extensão `.map`) que mapeia o código JavaScript gerado de volta para o código TypeScript original.

Para habilitar Source Maps em um ambiente de desenvolvimento comum, como em um projeto Node.js ou em uma aplicação web, você também pode precisar ajustar a configuração do seu ambiente de desenvolvimento específico (por exemplo, configurando o webpack ou ajustando as configurações do seu servidor de desenvolvimento).

Os Source Maps facilitam a depuração do código TypeScript em navegadores ou ferramentas de desenvolvimento, pois permitem que você visualize e depure o código TypeScript original, mesmo que o código em execução seja JavaScript compilado. Isso pode ser particularmente útil em projetos grandes ou complexos, onde depurar o código JavaScript diretamente pode ser difícil.