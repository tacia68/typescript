import { Livro, livros, CategoriaLivro } from "./livro";

for (const livro of livros) {
  const nomeLivro = livro.nome.split(" ").length === 1 ? livro.nome.toUpperCase() : livro.nome.toLowerCase();
  console.log(`Nome: ${nomeLivro}`);
  console.log(`Preço: ${livro.preco}`);
  console.log(`Categoria: ${livro.categoria}`);
  console.log("------------------------");
}
