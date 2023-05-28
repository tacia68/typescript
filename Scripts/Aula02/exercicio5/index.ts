import { Produto } from './produto';
import { ProdutoInfantil } from './produtoInfantil';

console.log("\n ##############");

// Exemplo de uso
const novoProdutoInfantil1 = new ProdutoInfantil("Shampoo Infantil", "Cuidados Pessoais", 20, "ESGOTADO", 8);
novoProdutoInfantil1.adicionar();

console.log("\n ##############");

// Exemplo de uso
const novoProduto = new Produto("Shampoo", "Cuidados Pessoais", 30, "ESGOTADO");
console.log("Código do Produto:", novoProduto.getCodigo());
console.log("Nome do Produto:", novoProduto.getNome());
console.log("Categoria do Produto:", novoProduto.getCategoria());
console.log("Preço do Produto:", novoProduto.getPreco());
console.log("Status do Produto:", novoProduto.getStatus());

console.log("\n ##############");

const novoProdutoInfantil = new ProdutoInfantil("Shampoo Infantil", "Cuidados Pessoais", 20, "EM_ESTOQUE", 8);
console.log("Código do Produto Infantil:", novoProdutoInfantil.getCodigo());
console.log("Nome do Produto Infantil:", novoProdutoInfantil.getNome());


console.log("\n ##############");
const novoProdutoInfantil2 = new ProdutoInfantil("Shampoo Infantil", "Cuidados Pessoais", 20, "EM_ESTOQUE", 20);