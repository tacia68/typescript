"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var livro_1 = require("./livro");
for (var _i = 0, livros_1 = livro_1.livros; _i < livros_1.length; _i++) {
    var livro = livros_1[_i];
    console.log("Nome: ".concat(livro.nome));
    console.log("Pre\u00E7o: ".concat(livro.preco));
    console.log("Categoria: ".concat(livro.categoria));
    console.log("------------------------");
}
