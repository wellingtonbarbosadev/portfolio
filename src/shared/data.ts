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

import gymLoginImg from "../assets/projetos/gym-login.png";
import gymDashboardImg from "../assets/projetos/gym-dashboard.png";
import gymAlunosImg from "../assets/projetos/gym-alunos.png";
import gymFuncionariosImg from "../assets/projetos/gym-funcionarios.png";
import gymTreinoImg from "../assets/projetos/gym-treino.png";

import refundLoginImg from "../assets/projetos/refund-login.png";
import refundEmployeeImg from "../assets/projetos/refund-employee.png";
import refundManagerImg from "../assets/projetos/refund-manager.png";

import helpdeskDashboardImg from "../assets/projetos/helpdesk-dashboard.jpg";
import taskflowKanbanImg from "../assets/projetos/taskflow-kanban.jpg";
import hairdayBookingImg from "../assets/projetos/hairday-booking.jpg";

import portalNoticias01Img from "../assets/projetos/portal-noticias-01.png";
import portalNoticias02Img from "../assets/projetos/portal-noticias-02.png";
import portalNoticias03Img from "../assets/projetos/portal-noticias-03.png";

import quicklistImg from "../assets/projetos/quicklist.jpg";
import livrariaImg from "../assets/projetos/livraria.jpg";

// export type Projeto = {
//   titulo: string;
//   descricao: string;
//   tecnologias: string[];
//   imagens: string[];
//   linkDemo: string;
//   linkRepositorio: string;
// };

export type Usuario = {
  nome: string;
  idade: number;
  desafioAtual: string;
  cargo: string;
  bio: string;
  github: string;
  local: string;
  status: string;
  linkedin: string;

  formacao: FormacaoType[];
  certificados: CertificadoType[];
};

export type Linha = { chave: string; valor: string | number | string[] };

export type ProjetoType = {
  title: string;
  descricaoCurta?: string;
  descricao: string;
  tecnologias: string[];
  imagens: string[];
  linkDemo: string;
  linkRepositorio: string;
};

export type CertificadoType = {
  imagem: string;
  nome: string;
  link: string;
  detalhes: string;
};

export const tecnologias = [
  "React",
  "Angular",
  "Node.js",
  "TypeScript",
  "PrismaORM",
  "Express",
  "TailwindCSS",
  "HTML",
  "CSS",
  "JavaScript",
  "Java",
  "Spring Boot",
  "Python",
  "Flask",
  "PostgreSQL",
  "SQLite",
];

export const usuario: Usuario = {
  nome: "Wellington Barbosa",
  idade:
    new Date().getFullYear() -
    new Date("2005-11-29").getFullYear() -
    (new Date().getMonth() < new Date("2005-11-29").getMonth() ||
    (new Date().getMonth() === new Date("2005-11-29").getMonth() &&
      new Date().getDate() < new Date("2005-11-29").getDate())
      ? 1
      : 0),
  cargo: "Desenvolvedor Full-Stack",
  bio: "Busco estágio em desenvolvimento front-end, back-end ou full-stack.",
  local: "Rio de Janeiro, Brasil",
  desafioAtual: "Criar soluções inovadoras e eficientes",
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
      detalhes:
        "Fundamentos da programação Web, Configuração de ambiente de desenvolvimento, Git e Github, Fundamentos e conceitos avançados de HTML, CSS e JavaScript, Fundamentos do TypeScript, Desenvolvimento de aplicações back-end com Node.js, Desenvolvimento de aplicações front-end com React, Banco de dados, Docker, Testes automatizados, Tailwind CSS, Requisições HTTP e APIs, Deploy de aplicações front-end e back-end.",
    },
    {
      imagem: introducaoReactImg,
      nome: "Introdução ao React",
      link: "https://app.rocketseat.com.br/certificates/da46947a-238b-47bd-b243-5f4762b00007",
      detalhes:
        "Fundamentos do React, componentes, estados, propriedades, TypeScript, navegação com React Router, hooks, React Hook Form, Tailwind CSS, requisições HTTP e consumo de API, paginação, deploy de aplicações front-end.",
    },
    {
      imagem: nodejsImg,
      nome: "Introdução ao Node.js",
      link: "https://app.rocketseat.com.br/certificates/52150a48-932f-4d78-b679-ee341030cf83",
      detalhes:
        "Fundamentos do Node.js, desenvolvimento de APIs REST com Express, TypeScript, gerenciamento de bancos de dados com PostgreSQL e Prisma, autenticação e autorização, testes automatizados, uso de containers com Docker e deploy de aplicações Node.js.",
    },
    {
      imagem: javascriptImg,
      nome: "JavaScript",
      link: "https://app.rocketseat.com.br/certificates/97dc97be-122c-4208-a959-2f3826df0ab3",
      detalhes:
        "Sintaxe básica, tipos de dados, operadores, variáveis, controle de fluxo (if, else, switch), laços (for, while, do...while), funções, arrays, objetos, manipulação do DOM, eventos, callbacks, promessas, async/await, escopo, hoisting, classes e herança, módulos, funções assíncronas, pacotes, APIs, JSON, compiladores, bundlers, JavaScript antes do framework.",
    },
    {
      imagem: springBootImg,
      nome: "Fundamentos do Spring Boot",
      link: "https://app.rocketseat.com.br/certificates/8f28eccc-ce82-4d6f-9808-ac4df4b74a45",
      detalhes:
        "Spring Boot, annotations, controller, component scan, API REST, path, body e header params, ResponseEntity, IoC e DI.",
    },
    {
      imagem: javaImg,
      nome: "Fundamentos de Java",
      link: "https://app.rocketseat.com.br/certificates/b70b74e5-b05e-4101-9c27-734fce9984c6",
      detalhes:
        "Java, JDK, JRE, JVM, tipos de dados, controles de fluxo, estruturas de repetição, POO, operadores, Java Time, Java NIO, exceções, expressões.",
    },
    {
      imagem: htmlCssImg,
      nome: "Fundamentos de HTML e CSS",
      link: "https://app.rocketseat.com.br/certificates/9d77243c-a3a2-4286-bed6-88dc5fa45490",
      detalhes:
        "Estrutura do HTML, tags HTML, semântica, acessibilidade, conceitos de CSS, seletores CSS, animações em CSS, grid e flexbox, formulários, inputs, variáveis em CSS, responsividade.",
    },
    {
      imagem: gitGithubImg,
      nome: "O básico de Git e GitHub",
      link: "https://app.rocketseat.com.br/certificates/52022b04-de4e-474e-a2b1-4300ab811262",
      detalhes:
        "Git, comandos básicos, repositórios, comandos para trabalhar local e com repositórios remotos, criação de commits, GitHub, controle de versão com o GitHub.",
    },
    {
      imagem: htmlCssB7webImg,
      nome: "Fundamentos em HTML/CSS",
      link: "https://app.b7web.com.br/certificates/f9b5be7d-3b88-49e1-8195-bd3205082487",
      detalhes:
        "Curso de Fundamentos em HTML/CSS da B7Web, com carga horária de 12 horas, concluído em 29/05/2025.",
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
    valor: usuario.cargo,
  },
  {
    chave: "idade",
    valor: usuario.idade,
  },
  {
    chave: "desafioAtual",
    valor: usuario.desafioAtual,
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
    title: "GymHub",
    descricaoCurta:
      "Sistema de gestão para academias com controle de alunos, planos, mensalidades, treinos e equipe.",
    descricao:
      "Sistema completo de gestão para academias com múltiplos painéis adaptados por nível de acesso (proprietário, recepção, professor e aluno). Conta com dashboard com indicadores financeiros e métricas de matrículas, cadastro e status de pagamento de alunos, gestão de funcionários e personal trainers, criação e acompanhamento de fichas de treino personalizadas e interface responsiva construída em Angular.",
    tecnologias: ["Angular", "TypeScript", "RxJS", "Vitest"],
    imagens: [
      gymDashboardImg,
      gymAlunosImg,
      gymFuncionariosImg,
      gymTreinoImg,
      gymLoginImg,
    ],
    linkDemo: "",
    linkRepositorio: "https://github.com/wellingtonbarbosadev/gym-hub",
  },
  {
    title: "Refund v2",
    descricaoCurta:
      "Aplicação full stack para solicitação e aprovação de reembolsos corporativos com upload de comprovantes.",
    descricao:
      "Aplicação full stack para gerenciar reembolsos corporativos com autenticação JWT e separação de acessos entre colaboradores e gestores. Conta com 6 endpoints REST, upload de comprovantes (JPEG/PNG), validação rigorosa com Zod, senhas com bcrypt, pesquisa em tempo real por nome e paginação no painel do gestor.",
    tecnologias: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "Node.js",
      "Express",
      "PrismaORM",
      "SQLite",
    ],
    imagens: [refundManagerImg, refundEmployeeImg, refundLoginImg],
    linkDemo: "https://devwb-projeto-refund.vercel.app",
    linkRepositorio: "https://github.com/wellingtonbarbosadev/refund-v2",
  },
  {
    title: "Helpdesk API",
    descricaoCurta:
      "API REST para abertura e gestão de chamados de suporte técnico com controle de disponibilidade de técnicos.",
    descricao:
      "API REST desenvolvida em Node.js e TypeScript para abertura, gestão e acompanhamento de chamados de suporte técnico. Oferece fluxo estruturado de tickets do início ao fim, controle de disponibilidade de técnicos, atribuição de chamados, modelagem relacional com Prisma ORM e tratamento de erros centralizado com AppError.",
    tecnologias: ["Node.js", "TypeScript", "Express", "PrismaORM", "PostgreSQL"],
    imagens: [helpdeskDashboardImg],
    linkDemo: "",
    linkRepositorio: "https://github.com/wellingtonbarbosadev/helpdesk",
  },
  {
    title: "Taskflow API",
    descricaoCurta:
      "API REST para gerenciamento de times e tarefas corporativas com autenticação JWT e controle de papéis.",
    descricao:
      "API REST desenvolvida para gerenciamento de times e fluxo de trabalho corporativo. Implementa autenticação JWT, controle de acesso baseado em perfis (admin e member), CRUD completo de equipes e tarefas, histórico de movimentação de status, filtros por prioridade e ambiente configurado com Docker Compose e PostgreSQL.",
    tecnologias: [
      "Node.js",
      "TypeScript",
      "Express",
      "PrismaORM",
      "PostgreSQL",
      "Docker",
    ],
    imagens: [taskflowKanbanImg],
    linkDemo: "",
    linkRepositorio: "https://github.com/wellingtonbarbosadev/taskflow-api",
  },
  {
    title: "Hair Day",
    descricaoCurta:
      "Aplicação web interativa para agendamento de cortes em barbearias e salões em tempo real.",
    descricao:
      "Aplicação interativa desenvolvida para agendamentos em barbearias e salões de beleza. Permite aos clientes selecionar datas, visualizar horários disponíveis e ocupados nos períodos manhã, tarde e noite, cadastrar cliente por atendimento e cancelar horários com persistência e manipulação avançada de datas via Day.js.",
    tecnologias: ["JavaScript", "HTML", "CSS", "Webpack"],
    imagens: [hairdayBookingImg],
    linkDemo: "",
    linkRepositorio: "https://github.com/wellingtonbarbosadev/projeto-hairday",
  },
  {
    title: "Portal de Notícias",
    descricaoCurta:
      "Portal web moderno de notícias com layout responsivo e arquitetura avançada em CSS Grid.",
    descricao:
      "Portal de notícias responsivo construído com foco em semântica HTML5 e layouts complexos em CSS Grid e Flexbox. Possui manchetes principais, colunas laterais de tendências, seção de tecnologia, cards dinâmicos e adaptação fluida para dispositivos móveis e desktops.",
    tecnologias: ["HTML", "CSS", "JavaScript"],
    imagens: [portalNoticias01Img, portalNoticias02Img, portalNoticias03Img],
    linkDemo: "https://wellingtonbarbosadev.github.io/projeto-portal-noticias/",
    linkRepositorio:
      "https://github.com/wellingtonbarbosadev/projeto-portal-noticias",
  },
  {
    title: "Quicklist",
    descricaoCurta:
      "Lista de compras inteligente com manipulação de estado, remoção e alertas interativos.",
    descricao:
      "Aplicação web intuitiva para gerenciamento de listas de compras no cotidiano. Desenvolvida com foco em interatividade e UX, inclui cadastro ágil de itens, marcação visual de itens comprados, exclusão com alertas temporários (toasts) e layout responsivo e acessível.",
    tecnologias: ["JavaScript", "HTML", "CSS"],
    imagens: [quicklistImg],
    linkDemo: "https://projeto-quicklist-theta.vercel.app",
    linkRepositorio: "https://github.com/wellingtonbarbosadev/projeto-quicklist",
  },
  {
    title: "Sistema de Livraria",
    descricaoCurta:
      "Sistema em Java aplicando Orientação a Objetos para gestão de acervo, autores e empréstimos.",
    descricao:
      "Sistema desenvolvido em Java explorando a fundo os pilares da Programação Orientada a Objetos (encapsulamento, herança, polimorfismo e composição). Implementa regras de negócio para cadastro de autores, acervo de livros, controle de estoque e fluxo completo de empréstimos e devoluções.",
    tecnologias: ["Java", "POO"],
    imagens: [livrariaImg],
    linkDemo: "",
    linkRepositorio: "https://github.com/wellingtonbarbosadev/SistemaLivraria",
  },
];
