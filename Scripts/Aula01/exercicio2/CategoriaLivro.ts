import { Livro, livros } from "../exercicio1/livro";

enum Categoria {
  Ficcao = "Ficção",
  Fantasia = "Fantasia",
  NaoFiccao = "Não Ficção",
}

interface LivroComCategoria extends Livro {
  categoria?: Categoria;
}

const livrosComCategoria: LivroComCategoria[] = livros.map((livro) => ({
  ...livro,
  categoria: Categoria.Ficcao, // Defina a categoria desejada para todos os livros
}));

for (const livro of livrosComCategoria) {
  console.log(`Nome: ${livro.nome}`);
  console.log(`Preço: ${livro.preco}`);
  if (livro.categoria) {
    console.log(`Categoria: ${livro.categoria}`);
  }
  console.log("------------------------");
}

