import "./globalReset/globalReset.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Recife from "./Pages/Cidades/Recife/Recife";
import Olinda from "./Pages/Cidades/Olinda/Olinda";
import Paulista from "./Pages/Cidades/Paulista/Paulista";
import PesquisaGeral from "./Pages/PesquisaGeral/PesquisaGeral";
import BuscaCompleta from "./Pages/BuscaCompleta/BuscaCompleta";
import PertoDeVoce from "./Pages/PertoDeVoce/PertoDeVoce";
import PorCategorias from "./Pages/PorCategorias/PorCategorias";
import SeusRoles from "./Pages/SeusRoles/SeusRoles";
import CadastroOffer from "./Pages/Cadastro/CadastroOffer/CadastroOffer";
import CadastroSeacher from "./Pages/Cadastro/CadastroSeacher/CadastroSeacher";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Recife" element={<Recife />} />
        <Route path="Olinda" element={<Olinda />} />
        <Route path="Paulista" element={<Paulista />} />
        <Route path="PesquisaGeral" element={<PesquisaGeral />} />
        <Route path="BuscaCompleta" element={<BuscaCompleta />} />
        <Route path="PertoDeVoce" element={<PertoDeVoce />} />
        <Route path="PorCategorias" element={<PorCategorias />} />
        <Route path="SeusRoles" element={<SeusRoles />} />
        <Route path="CadastroSeacher" element={<CadastroSeacher />} />
        <Route path="CadastroOffer" element={<CadastroOffer />} />
      </Routes>
    </BrowserRouter>
  );
}
