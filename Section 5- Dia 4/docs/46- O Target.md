# O Target

O arquivo `tsconfig.json` é usado para configurar o compilador TypeScript, e o parâmetro `target` é uma das opções principais nele. 

O `target` determina para qual versão do JavaScript o TypeScript compilará seu código. As opções mais comuns incluem:

- `ES3`: Gera código para ECMAScript 3 (ES3), que é compatível com navegadores mais antigos e ambientes Node.js antigos.
- `ES5`: Gera código para ECMAScript 5 (ES5), que é compatível com a maioria dos navegadores modernos.
- `ES6` ou `ES2015`: Gera código para ECMAScript 2015 (ES6), introduzindo recursos como classes, let e const.
- `ES2016`, `ES2017`, `ES2018`, `ES2019`, `ES2020`, `ESNext`: Gera código para versões específicas do ECMAScript, cada uma introduzindo novos recursos e funcionalidades.

A escolha do `target` depende do ambiente de execução do seu código. Por exemplo, se você estiver desenvolvendo para navegadores mais antigos, pode escolher `ES3` ou `ES5`, enquanto para projetos Node.js mais recentes ou navegadores modernos, pode optar por `ES6` ou versões mais recentes.

Por exemplo, se você estiver desenvolvendo um aplicativo web moderno que visa suportar navegadores recentes, pode configurar seu `tsconfig.json` da seguinte forma:

```json
{
  "compilerOptions": {
    "target": "ES2018",
    "module": "commonjs",
    // outras opções de configuração...
  }
}
```

Isso garantirá que o TypeScript compile seu código para ECMAScript 2018, aproveitando as funcionalidades mais recentes, desde que sejam compatíveis com os navegadores que você está segmentando.