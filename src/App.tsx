import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";

import { Marquee } from "./components/Marquee/Marquee";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

const tecnologias = ["Java", "Spring Boot", "Node.js", "TypeScript", "Python", "Flask", "React", "PostgreSQL", "SQLite"];

function LandingPage() {
  return (
    <>
      <Header />
      <main className="mainContainer">
        <Hero />

        <section className="tecnologias">
          <Marquee
            items={tecnologias}
          />
        </section>
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
