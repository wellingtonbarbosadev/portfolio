import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";

import { Marquee } from "./components/Marquee/Marquee";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import { SectionContent } from "./components/SectionContent/SectionContent";
import { CardTechnology } from "./components/CardTechnology/CardTechnology";
import { projetos, tecnologias, usuario } from "./shared/data";
import { LinhaFormacao } from "./components/LinhaFormacao/LinhaFormacao";
import { CardCertificado } from "./components/CardCertificado/CardCertificado";

function LandingPage() {
  return (
    <>
      <Header />
      <main className="mainContainer">
        <Hero />

        <section className="tecnologias overflow-hidden">
          <Marquee items={tecnologias} />
        </section>

        <SectionContent
          titleHeader="projetos"
          title="Projetos que construí"
          titleColor="roxo"
        >
          <section id="containerProjetos">
            {projetos.map((projeto) => (
              <CardTechnology
                title={projeto.title}
                descricao={projeto.descricao}
                tecnologias={projeto.tecnologias}
              />
            ))}
          </section>
        </SectionContent>

        <SectionContent
          titleHeader="formação"
          title="De onde eu venho"
          titleColor="laranja"
        >
          <section id="containerFormacao">
            {usuario.formacao.map((formacao) => {
              return (
                <LinhaFormacao
                  periodo={formacao.periodo}
                  instituicao={formacao.instituicao}
                />
              );
            })}
          </section>
        </SectionContent>

        <SectionContent
          titleHeader="certificados"
          title="Estudo contínuo"
          titleColor="verde"
        >
          <section id="containerCertificados">
            {usuario.certificados.map((certificado) => {
              return (
                <CardCertificado
                  imagem={certificado.imagem}
                  nome={certificado.nome}
                  detalhes={certificado.detalhes}
                />
              );
            })}
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
