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

export default function App() {
  const [loggedUser, setLoggedUser] = useState(() => {
    const savedUser = localStorage.getItem("loggedUser");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  useEffect(() => {
    if (loggedUser) {
      localStorage.setItem("loggedUser", JSON.stringify(loggedUser));
    } else {
      localStorage.removeItem("loggedUser");
    }
  }, [loggedUser]);

  return (
    <BrowserRouter>
      <Header loggedUser={loggedUser} setLoggedUser={setLoggedUser} />
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
        <Route path="CadastroEvento" element={<CadastroEvento />} />
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
