import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";

import { Marquee } from "./components/Marquee/Marquee";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import { SectionContent } from "./components/SectionContent/SectionContent";
import { CardTechnology } from "./components/CardTechnology/CardTechnology";

const tecnologias = [
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

const projetos = [
  {
    title: "helpdesk",
    descricao:
      "Sistema de abertura e acompanhamento de chamados de suporte, com fluxo de tickets do início ao fim.",
    tecnologiasUsadas: ["TypeScript", "Node.js"],
  },
  {
    title: "refund-v2",
    descricao:
      "Sistema de solicitação e aprovação de reembolsos, do pedido até a confirmação.",
    tecnologiasUsadas: ["TypeScript"],
  },
  {
    title: "helpdesk",
    descricao:
      "Sistema de abertura e acompanhamento de chamados de suporte, com fluxo de tickets do início ao fim.",
    tecnologiasUsadas: ["TypeScript", "Node.js"],
  },
];

function LandingPage() {
  return (
    <>
      <Header />
      <main className="mainContainer">
        <Hero />

        <section className="tecnologias">
          <Marquee items={tecnologias} />
        </section>

        <SectionContent
          titleHeader="projetos"
          title="Projetos que construí"
          titleColor="roxo"
        >
          <section className="containerProjetos">
            {projetos.map((projeto) => (
              <CardTechnology
                title={projeto.title}
                descricao={projeto.descricao}
                tecnologias={projeto.tecnologiasUsadas}
              />
            ))}
          </section>
        </SectionContent>
      </main>
    </>
  );
}

function PaginaNaoEncontrada() {
  return (
    <div>
      <h1>Página não encontrada</h1>
      <p>A página que você está procurando não existe.</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<PaginaNaoEncontrada />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
