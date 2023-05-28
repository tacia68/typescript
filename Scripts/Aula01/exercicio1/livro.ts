export interface Livro {
    nome: string;
    preco: number;
    categoria?: string;
  }
  
  export const livros: Livro[] = [
    { nome: "Livro 1", preco: 10.99, categoria: "Ficção" },
    { nome: "Livro 2", preco: 15.99, categoria: "Fantasia" },
    { nome: "Livro 3", preco: 12.5, categoria: "Não Ficção" },
  ];
  