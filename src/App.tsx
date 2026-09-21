import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function LandingPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
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
