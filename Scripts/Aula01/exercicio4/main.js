import "core-js/es/map";


enum Categoria {
  Ficcao = "Ficção",
  NaoFiccao = "Não Ficção",
  Aventura = "Aventura",
}

type Autor = {
  nome: string;
  nacionalidade: string;
};

type Livro = {
  nome: string;
  preco: number;
  categoria?: Categoria;
  autor: Autor;
};

const biblioteca1: Map<string, Autor | Livro[]> = new Map();
const biblioteca2: Map<string, Autor | Livro[]> = new Map();

const autor1: Autor = { nome: "Autor 1", nacionalidade: "País 1" };
const autor2: Autor = { nome: "Autor 2", nacionalidade: "País 2" };

const livrosBiblioteca1: Livro[] = [
  { nome: "Livro 1", preco: 29.99, autor: autor1 },
  { nome: "Livro 2", preco: 19.99, categoria: Categoria.Ficcao, autor: autor1 },
];

const livrosBiblioteca2: Livro[] = [
  { nome: "Livro 3", preco: 39.99, categoria: Categoria.NaoFiccao, autor: autor2 },
  { nome: "Livro 4", preco: 24.99, categoria: Categoria.Aventura, autor: autor2 },
];

biblioteca1.set("Biblioteca 1", livrosBiblioteca1);
biblioteca2.set("Biblioteca 2", livrosBiblioteca2);

biblioteca1.forEach((value, key) => {
  console.log(`Livros da ${key}:`);
  if (Array.isArray(value)) {
    value.forEach((livro) => {
      console.log(`- ${livro.nome} (Autor: ${livro.autor.nome})`);
    });
  }
});

biblioteca2.forEach((value, key) => {
  console.log(`Livros da ${key}:`);
  if (Array.isArray(value)) {
    value.forEach((livro) => {
      console.log(`- ${livro.nome} (Autor: ${livro.autor.nome})`);
    });
  }
});
