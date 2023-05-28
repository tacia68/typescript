// turma.ts

import { validarTamanhoMinimoCaracteres } from './utils';

enum Turno {
  MANHA = 'Manhã',
  TARDE = 'Tarde',
  NOITE = 'Noite',
}

enum Area {
  HUMANAS = 'Humanas',
  BIOLOGICAS = 'Biológicas',
  EXATAS = 'Exatas',
}

interface Curso {
  descricao: string;
  area: Area;
}

class Turma {
  private static turmas: Turma[] = [];

  readonly id: number;
  @validarTamanhoMinimoCaracteres(10)
  descricao: string;
  turno: Turno;
  curso: Curso;

  constructor(id: number, descricao: string, turno: Turno, curso: Curso) {
    this.id = id;
    this.descricao = descricao;
    this.turno = turno;
    this.curso = curso;
    Turma.turmas.push(this);
  }

  static adicionarTurma(id: number, descricao: string, turno: Turno, curso: Curso): void {
    Turma.turmas.push(new Turma(id, descricao, turno, curso));
  }

  static excluirTurma(id: number): void {
    const index = Turma.turmas.findIndex((turma) => turma.id === id);
    if (index !== -1) {
      Turma.turmas.splice(index, 1);
    }
  }

  static alterarTurma(id: number, novaDescricao: string): void {
    const turma = Turma.buscarTurma(id);
    if (turma) {
      turma.descricao = novaDescricao;
    }
  }

  static buscarTurma(id: number): Turma | null {
    return Turma.turmas.find((turma) => turma.id === id) || null;
  }

  static imprimirTurmas(): void {
    Turma.turmas.forEach((turma) => {
      console.log(
        `ID: ${turma.id}, Descrição: ${turma.descricao}, Turno: ${turma.turno}, Curso: ${turma.curso.descricao} (${turma.curso.area})`
      );
    });
  }
}

export { Turma, Turno, Area };
