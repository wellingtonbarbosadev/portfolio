import type { FormacaoType } from "../components/LinhaFormacao/LinhaFormacao";

import formacaoFullStackImg from "../assets/certificados/formacao-fullstack.png";
import introducaoReactImg from "../assets/certificados/introducao-react.png"

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
  certificados: CertificadoType[];
};

export type Linha = { chave: string; valor: string };

export type ProjetoType = {
  title: string;
  descricao: string;
  tecnologias: string[];
};

export type CertificadoType = {
  imagem: string;
  nome: string;
  detalhes: string;
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
        detalhes: "Programador Full-Stack",
      },
    },
    {
      periodo: "contínuo",
      instituicao: {
        nome: "Cursos e prática constante em back-end, front-end e boas práticas de código.",
        detalhes: "Estudo Autodidata",
      },
    },
  ],
  certificados: [
    {
      imagem: formacaoFullStackImg,
      nome: "Formação Full-Stack",
      detalhes: "Fundamentos da programação Web, Configuração de ambiente de desenvolvimento, Git e Github, Fundamentos e conceitos avançados de HTML, CSS e JavaScript, Fundamentos do TypeScript, Desenvolvimento de aplicações back- end com Node.js, Desenvolvimento de aplicações front-end com React, Banco de dados, Docker, Testes automatizados, Tailwind CSS, Requisições HTTP e APIS, Deploy de aplicações front-end e back-end.",
    },
    {
      imagem: introducaoReactImg,
      nome: "Introdução ao React",
      detalhes: "Fundamentos do React, componentes, estados, propriedades, TypeScript, navegação com React Router, hooks, React Hook Form, Tailwind CSS, requisições HTTP e consumo de API, paginação, deploy de aplicações front-end.",
    },
    {
      imagem: "data:image/png;base64,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",
      nome: "TS",
      detalhes: "TESTE2",
    },
    {
      imagem: "",
      nome: "TS",
      detalhes: "TESTE2",
    },
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
