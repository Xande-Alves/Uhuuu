import "./globalReset/globalReset.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
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
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import PerfilSeacher from "./Pages/Perfis/Seacher/PerfilSeacher/PerfilSeacher";
import PerfilOffer from "./Pages/Perfis/Offer/PerfilOffer/PerfilOffer";
import CadastroEvento from "./Pages/OfferView/CadastroEvento/CadastroEvento";
import PerfilEvento from "./Pages/OfferView/PerfilEvento/PerfilEvento";
import Cidades from "./Pages/Cidades/Cidades";
import SearcherEventView from "./Pages/SearcherView/Events/SearcherEventView";
import Tabs from "./Components/Tabs/Tabs";

export default function App() {
  const [loggedUser, setLoggedUser] = useState(() => {
    const savedUser = localStorage.getItem("loggedUser");
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [forcarAtualizacao, setForcarAtualizacao] = useState(false);

  useEffect(() => {
    if (loggedUser) {
      localStorage.setItem("loggedUser", JSON.stringify(loggedUser));
    } else {
      localStorage.removeItem("loggedUser");
    }
  }, [loggedUser]);

  const atualizarEventos = () => {
    setForcarAtualizacao((prev) => !prev); // só troca o valor pra forçar re-render
  };

  return (
    <BrowserRouter>
      <Header loggedUser={loggedUser} setLoggedUser={setLoggedUser} />
      <Routes>
        <Route path="/" element={<Home loggedUser={loggedUser} />} />
        <Route path="Cidades" element={<Cidades loggedUser={loggedUser} />} />
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
        <Route path="SearcherEventView/:id" element={<SearcherEventView />} />
        <Route
          path="CadastroEvento"
          element={
            <CadastroEvento
              loggedUser={loggedUser}
              onEventoCadastrado={atualizarEventos}
              atualizar={forcarAtualizacao}
            />
          }
        />
        <Route
          path="PerfilEvento"
          element={<PerfilEvento loggedUser={loggedUser} />}
        />
        <Route
          path="PerfilSeacher"
          element={
            <PerfilSeacher
              loggedUser={loggedUser}
              setLoggedUser={setLoggedUser}
            />
          }
        />
        <Route
          path="PerfilOffer"
          element={
            <PerfilOffer
              loggedUser={loggedUser}
              setLoggedUser={setLoggedUser}
            />
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
