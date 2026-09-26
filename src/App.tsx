import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ArrowDown, MoveUpRight } from "lucide-react";

import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Marquee } from "./components/Marquee/Marquee";
import { SectionContent } from "./components/SectionContent/SectionContent";
import { CardTechnology } from "./components/CardTechnology/CardTechnology";
import { projetos, tecnologias, usuario } from "./shared/data";
import { LinhaFormacao } from "./components/LinhaFormacao/LinhaFormacao";
import { CardCertificado } from "./components/CardCertificado/CardCertificado";
import { Button } from "./components/Button/Button";

function LandingPage() {
  
  function unhideCertificados() {
    const showAllButton = document.querySelector(
      "#showAll",
    );
    const containerCertificados = document.getElementById(
      "containerCertificados",
    );

    containerCertificados?.classList.toggle("hide");

    showAllButton?.remove();
  }

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
          <section id="containerCertificados" className="hide">
            <section className="certificados">
              {usuario.certificados.map((certificado) => {
                return (
                  <CardCertificado
                    imagem={certificado.imagem}
                    nome={certificado.nome}
                    detalhes={certificado.detalhes}
                    link={certificado.link}
                  />
                );
              })}
            </section>

            <Button type="primario" id="showAll" onClick={unhideCertificados}>
              Mostrar tudo
              <ArrowDown size={16} />
            </Button>
          </section>
        </SectionContent>

        <SectionContent
          titleHeader="contato"
          title="Bora conversar?"
          titleColor="roxo"
          style="flex flex-col justify-center items-center text-center"
        >
          <section
            id="containerContato"
            className="flex flex-col justify-center items-center gap-8 "
          >
            <p>
              Aberto pra estágio, projetos e trocas sobre código. Só chamar.
            </p>
            <section className="buttonsContato flex gap-4">
              <Button link={usuario.linkedin} type="primario">
                Linkedin
                <MoveUpRight size={16} />
              </Button>
              <Button link={usuario.github} type="secundario">
                GitHub
                <MoveUpRight size={16} />
              </Button>
            </section>
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
