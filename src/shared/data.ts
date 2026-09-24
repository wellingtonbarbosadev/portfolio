import type { FormacaoType } from "../components/LinhaFormacao/LinhaFormacao";

export type Projeto = {
  titulo: string;
  descricao: string;
  tecnologias: string[];
  link: string;
};

export type Usuario = {
  nome: string;
  cargo: string;
  bio: string;
  github: string;
  local: string;
  status: string;
  linkedin: string;

  formacao: FormacaoType[];
};

export type Linha = { chave: string; valor: string };

export type ProjetoType = {
  title: string;
  descricao: string;
  tecnologias: string[];
};

export const tecnologias = [
  "Java",
  "Spring Boot",
  "Node.js",
  "TypeScript",
  "Python",
  "Flask",
  "React",
  "PostgreSQL",
  "SQLite",
];

export const usuario: Usuario = {
  nome: "Wellington Barbosa",
  cargo: "Estudante de Engenharia de Software",
  bio: "Busco estágio em desenvolvimento front-end, back-end ou full-stack.",
  local: "Rio de Janeiro, RJ",
  status: "open_to_work",
  formacao: [
    {
      periodo: "jun. 2025 - jun. 2029",
      instituicao: {
        nome: "Universidade Veiga de Almeida (UVA) - Rio de Janeiro.",
        detalhes: "Engenharia de Software",
      },
    },
    {
      periodo: "mai. 2026 - fev. 2027",
      instituicao: {
        nome: "FIRJAN Senai - Programa Autonomia e Renda",
        detalhes: "Programador Full-Stack"
      }
    },
    {
      periodo: "contínuo",
      instituicao: {
        nome: "Cursos e prática constante em back-end, front-end e boas práticas de código.",
        detalhes: "Estudo Autodidata"
      }
    }
  ],
  github: "https://github.com/wellingtonbarbosadev",
  linkedin: "https://linkedin.com/in/wellingtoncbarbosa",
};

export const LINHAS: Linha[] = [
  {
    chave: "nome",
    valor: usuario.nome,
  },
  {
    chave: "cargo",
    valor: "Desenvolvedor FullStack",
  },
  {
    chave: "local",
    valor: usuario.local,
  },
  {
    chave: "status",
    valor: usuario.status,
  },
];

export const projetos: ProjetoType[] = [
  {
    title: "helpdesk",
    descricao:
      "Sistema de abertura e acompanhamento de chamados de suporte, com fluxo de tickets do início ao fim.",
    tecnologias: ["TypeScript", "Node.js"],
  },
  {
    title: "refund-v2",
    descricao:
      "Sistema de solicitação e aprovação de reembolsos, do pedido até a confirmação.",
    tecnologias: ["TypeScript"],
  },
  {
    title: "helpdesk",
    descricao:
      "Sistema de abertura e acompanhamento de chamados de suporte, com fluxo de tickets do início ao fim.",
    tecnologias: ["TypeScript", "Node.js"],
  },
];
