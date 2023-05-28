import { Livro, livros } from "./livro";

for (const livro of livros) {
  console.log(`Nome: ${livro.nome}`);
  console.log(`Preço: ${livro.preco}`);
  console.log(`Categoria: ${livro.categoria}`);
  console.log("------------------------");
}
