# Removendo comments

No TypeScript, você pode configurar o compilador para remover comentários do código JavaScript gerado através da opção `removeComments` no arquivo `tsconfig.json`.

Por padrão, essa opção está definida como `false`. Se você quiser remover os comentários durante a compilação, basta definir essa opção como `true`. Aqui está um exemplo de como você pode configurar isso no seu `tsconfig.json`:

```json
{
  "compilerOptions": {
    "removeComments": true,
    // outras opções de configuração...
  }
}
```

Com essa configuração, ao compilar o código TypeScript, os comentários serão removidos do código JavaScript resultante. Isso pode ser útil para reduzir o tamanho do arquivo JavaScript final, especialmente em projetos grandes onde os comentários podem ocupar uma parte significativa do código. No entanto, lembre-se de que a remoção de comentários pode tornar o código menos legível para outros desenvolvedores e pode dificultar a depuração, então use com cautela.