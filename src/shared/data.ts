import type { FormacaoType } from "../components/LinhaFormacao/LinhaFormacao";

import formacaoFullStackImg from "../assets/certificados/formacao-fullstack.png";
import introducaoReactImg from "../assets/certificados/introducao-react.png";
import nodejsImg from "../assets/certificados/nodejs.png";
import javascriptImg from "../assets/certificados/javascript.png";
import htmlCssImg from "../assets/certificados/html-css.png";
import javaImg from "../assets/certificados/java.png";
import springBootImg from "../assets/certificados/spring-boot.png";
import gitGithubImg from "../assets/certificados/git-github.png";
import htmlCssB7webImg from "../assets/certificados/html-css-b7web.png";

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
      link: "https://app.rocketseat.com.br/certificates/68e7b178-30ce-4077-9572-e0d07d7886f0",
      detalhes: "Fundamentos da programação Web, Configuração de ambiente de desenvolvimento, Git e Github, Fundamentos e conceitos avançados de HTML, CSS e JavaScript, Fundamentos do TypeScript, Desenvolvimento de aplicações back-end com Node.js, Desenvolvimento de aplicações front-end com React, Banco de dados, Docker, Testes automatizados, Tailwind CSS, Requisições HTTP e APIs, Deploy de aplicações front-end e back-end.",
    },
    {
      imagem: introducaoReactImg,
      nome: "Introdução ao React",
      link: "https://app.rocketseat.com.br/certificates/da46947a-238b-47bd-b243-5f4762b00007",
      detalhes: "Fundamentos do React, componentes, estados, propriedades, TypeScript, navegação com React Router, hooks, React Hook Form, Tailwind CSS, requisições HTTP e consumo de API, paginação, deploy de aplicações front-end.",
    },
    {
      imagem: nodejsImg,
      nome: "Introdução ao Node.js",
      link: "https://app.rocketseat.com.br/certificates/52150a48-932f-4d78-b679-ee341030cf83",
      detalhes: "Fundamentos do Node.js, desenvolvimento de APIs REST com Express, TypeScript, gerenciamento de bancos de dados com PostgreSQL e Prisma, autenticação e autorização, testes automatizados, uso de containers com Docker e deploy de aplicações Node.js.",
    },
    {
      imagem: javascriptImg,
      nome: "JavaScript",
      link: "https://app.rocketseat.com.br/certificates/97dc97be-122c-4208-a959-2f3826df0ab3",
      detalhes: "Sintaxe básica, tipos de dados, operadores, variáveis, controle de fluxo (if, else, switch), laços (for, while, do...while), funções, arrays, objetos, manipulação do DOM, eventos, callbacks, promessas, async/await, escopo, hoisting, classes e herança, módulos, funções assíncronas, pacotes, APIs, JSON, compiladores, bundlers, JavaScript antes do framework.",
    },
    {
      imagem: springBootImg,
      nome: "Fundamentos do Spring Boot",
      link: "https://app.rocketseat.com.br/certificates/8f28eccc-ce82-4d6f-9808-ac4df4b74a45",
      detalhes: "Spring Boot, annotations, controller, component scan, API REST, path, body e header params, ResponseEntity, IoC e DI.",
    },
    {
      imagem: javaImg,
      nome: "Fundamentos de Java",
      link: "https://app.rocketseat.com.br/certificates/b70b74e5-b05e-4101-9c27-734fce9984c6",
      detalhes: "Java, JDK, JRE, JVM, tipos de dados, controles de fluxo, estruturas de repetição, POO, operadores, Java Time, Java NIO, exceções, expressões.",
    },
    {
      imagem: htmlCssImg,
      nome: "Fundamentos de HTML e CSS",
      link: "https://app.rocketseat.com.br/certificates/9d77243c-a3a2-4286-bed6-88dc5fa45490",
      detalhes: "Estrutura do HTML, tags HTML, semântica, acessibilidade, conceitos de CSS, seletores CSS, animações em CSS, grid e flexbox, formulários, inputs, variáveis em CSS, responsividade.",
    },
    {
      imagem: gitGithubImg,
      nome: "O básico de Git e GitHub",
      link: "https://app.rocketseat.com.br/certificates/52022b04-de4e-474e-a2b1-4300ab811262",
      detalhes: "Git, comandos básicos, repositórios, comandos para trabalhar local e com repositórios remotos, criação de commits, GitHub, controle de versão com o GitHub.",
    },
    {
      imagem: htmlCssB7webImg,
      nome: "Fundamentos em HTML/CSS",
      link: "https://app.b7web.com.br/certificates/f9b5be7d-3b88-49e1-8195-bd3205082487",
      detalhes: "Curso de Fundamentos em HTML/CSS da B7Web, com carga horária de 12 horas, concluído em 29/05/2025.",
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
