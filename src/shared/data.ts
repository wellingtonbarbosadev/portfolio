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
  link: string
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
      link: "https://app.rocketseat.com.br/certificates/52150a48-932f-4d78-b679-ee341030cf83",
      detalhes: "Fundamentos da programação Web, Configuração de ambiente de desenvolvimento, Git e Github, Fundamentos e conceitos avançados de HTML, CSS e JavaScript, Fundamentos do TypeScript, Desenvolvimento de aplicações back- end com Node.js, Desenvolvimento de aplicações front-end com React, Banco de dados, Docker, Testes automatizados, Tailwind CSS, Requisições HTTP e APIS, Deploy de aplicações front-end e back-end.",
    },
    {
      imagem: introducaoReactImg,
      nome: "Introdução ao React",
      link: "https://app.rocketseat.com.br/certificates/da46947a-238b-47bd-b243-5f4762b00007",
      detalhes: "Fundamentos do React, componentes, estados, propriedades, TypeScript, navegação com React Router, hooks, React Hook Form, Tailwind CSS, requisições HTTP e consumo de API, paginação, deploy de aplicações front-end.",
    },
    {
      imagem: introducaoReactImg,
      nome: "Introdução ao React",
      link: "https://app.rocketseat.com.br/certificates/da46947a-238b-47bd-b243-5f4762b00007",
      detalhes: "Fundamentos do React, componentes, estados, propriedades, TypeScript, navegação com React Router, hooks, React Hook Form, Tailwind CSS, requisições HTTP e consumo de API, paginação, deploy de aplicações front-end.",
    },
    {
      imagem: introducaoReactImg,
      nome: "Introdução ao React",
      link: "https://app.rocketseat.com.br/certificates/da46947a-238b-47bd-b243-5f4762b00007",
      detalhes: "Fundamentos do React, componentes, estados, propriedades, TypeScript, navegação com React Router, hooks, React Hook Form, Tailwind CSS, requisições HTTP e consumo de API, paginação, deploy de aplicações front-end.",
    },
    {
      imagem: introducaoReactImg,
      nome: "Introdução ao React",
      link: "https://app.rocketseat.com.br/certificates/da46947a-238b-47bd-b243-5f4762b00007",
      detalhes: "Fundamentos do React, componentes, estados, propriedades, TypeScript, navegação com React Router, hooks, React Hook Form, Tailwind CSS, requisições HTTP e consumo de API, paginação, deploy de aplicações front-end.",
    },
    {
      imagem: introducaoReactImg,
      nome: "Introdução ao React",
      link: "https://app.rocketseat.com.br/certificates/da46947a-238b-47bd-b243-5f4762b00007",
      detalhes: "Fundamentos do React, componentes, estados, propriedades, TypeScript, navegação com React Router, hooks, React Hook Form, Tailwind CSS, requisições HTTP e consumo de API, paginação, deploy de aplicações front-end.",
    },
    {
      imagem: introducaoReactImg,
      nome: "Introdução ao React",
      link: "https://app.rocketseat.com.br/certificates/da46947a-238b-47bd-b243-5f4762b00007",
      detalhes: "Fundamentos do React.",
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
