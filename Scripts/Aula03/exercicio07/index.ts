// index.ts

import { Turma, Turno, Area } from './turma';

// Adicionar turmas
Turma.adicionarTurma(1, 'Turma de Matemática', Turno.MANHA, { descricao: 'Matemática', area: Area.EXATAS });
Turma.adicionarTurma(2, 'Turma de História', Turno.TARDE, { descricao: 'História', area: Area.HUMANAS });
Turma.adicionarTurma(3, 'Turma de Biologia', Turno.NOITE, { descricao: 'Biologia', area: Area.BIOLOGICAS });

// Imprimir turmas
Turma.imprimirTurmas();

// Buscar turma
const turma = Turma.buscarTurma(2);
console.log('Turma encontrada:', turma);

// Alterar turma
Turma.alterarTurma(1, 'Nova descrição da turma de Matemática');

// Imprimir turmas novamente
Turma.imprimirTurmas();

// Excluir turma
Turma.excluirTurma(3);

// Imprimir turmas após exclusão
Turma.imprimirTurmas();
