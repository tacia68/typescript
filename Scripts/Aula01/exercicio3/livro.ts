export enum CategoriaLivro {
  Ficcao = "Ficção",
  Fantasia = "Fantasia",
  NaoFiccao = "Não Ficção",
}

export interface Livro {
  nome: string;
  preco: number;
  categoria?: CategoriaLivro;
}

export const livros: Livro[] = [
  { nome: "Livro 1", preco: 10.99, categoria: CategoriaLivro.Ficcao },
  { nome: "Livro 2", preco: 15.99, categoria: CategoriaLivro.Fantasia },
  { nome: "Livro 3", preco: 12.5 },
];
