import Header from "../../../Components/Header/Header";
import s from "./olinda.module.scss";
import SideNavbar from "../../../Components/SideNavbar/SideNavbar";
import React, { useState } from "react";
import fogoTerra from "../../../assets/fogoTerra.jpg";
import BoateKiss from "../../../assets/boateKiss.jpg";
import ney from "../../../assets/ney.jpg";
import Footer from "../../../Components/Footer/Footer";
import fotoG from "../../../assets/Gabriel.jpeg";
import fotoE from "../../../assets/Elton.jpeg";
import semfoto from "../../../assets/PerfilSft.jpg";

export default function Olinda() {
  //CONTADOR DE EU VOU
  const [countBDG, setCountBDG] = useState(85); // Bar do Gera
  const [countFDT, setCountFDT] = useState(76); // Fogo de Terra
  const [countBTK, setCountBTK] = useState(71); // Boate Hotkiss
  const [countAMZ14, setCountAMZ14] = useState(68); // Armazém 14
  const [countSNW, setCountSNW] = useState(61); // Shopping North Way

  const incrementCountBDG = () => setCountBDG(countBDG + 1);
  const incrementCountFDT = () => setCountFDT(countFDT + 1);
  const incrementCountBTK = () => setCountBTK(countBTK + 1);
  const incrementCountAMZ14 = () => setCountAMZ14(countAMZ14 + 1);
  const incrementCountSNW = () => setCountSNW(countSNW + 1);

  //SELECIONA TAB ATIVA
  const [activeTab, setActiveTab] = useState("future");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  // MENSAGENS PARA SER RENDERIZADAS
  const [messages, setMessages] = useState([
    {
      user: "Gabriel Francisco",
      text: "Vcs viram que o Fogo de Terra tá com promoção de nas sextas feiras? 30 conto o rodízio pow... Tá valendo demais. Simbora!",
      img: fotoG,
    },
    {
      user: "Elton Melo",
      text: "Não consigo mais viver sem Uhuuuuuuu!!!! <3",
      img: fotoE,
    },
  ]);

  //QUEBRAR TEXTO NA CAIXA DE IMPUT
  function quebrarTexto(texto) {
    let resultado = "";
    const limite = 27;

    for (let i = 0; i < texto.length; i += limite) {
      resultado += texto.slice(i, i + limite) + "\n";
    }

    return resultado;
  }

  //ENVIAR NOVA MENSAGEM
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      const textorig = inputValue;
      const textocorrig = quebrarTexto(textorig);
      const newMessage = {
        user: "Você",
        text: textocorrig,
        img: semfoto,
      };

      // Limitar o número máximo de mensagens a 5
      setMessages((prevMessages) => {
        const updatedMessages = [...prevMessages, newMessage];
        // Remove a primeira mensagem (mais antiga) se houver mais de 5 mensagens
        return updatedMessages.length > 5
          ? updatedMessages.slice(1)
          : updatedMessages;
      });

      setInputValue("");
    }
  };

  //UTILIZA A TECLA ENTER PARA ENVIAR NOVA MENSAGEM
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); // Impede a quebra de linha ao pressionar Enter
      handleSubmit(e); // Chama a função de envio
    }
  };

  return (
    <>
      <Header />
      <h1 className={s.h1Olinda}>OLINDA - PE</h1>
      <div className={s.sideNavTabs}>
        <SideNavbar />
        <section className={s.tabsContainer}>
          <div className={s["tab-buttons"]}>
            <button
              className={`${s["tab-btn"]} ${
                activeTab === "future" ? s.active : ""
              }`}
              onClick={() => handleTabClick("future")}
            >
              O que vai bombar?
            </button>
            <button
              className={`${s["tab-btn"]} ${
                activeTab === "past" ? s.active : ""
              }`}
              onClick={() => handleTabClick("past")}
            >
              O que já bombou?
            </button>
          </div>

          <div className={s["tab-contents"]}>
            {/* EVENTOS FUTUROS */}
            <div
              className={`${s.content} ${activeTab === "future" ? s.show : ""}`}
              id="future"
            >
              <div className={s.ranking} id="fogodaterra">
                <img src={fogoTerra} alt="Rodízio Restaurante Fogo de Terra" />
                <div>
                  <h2>
                    Rodízio de Carnes no Fogo de Terra: O Paraíso dos
                    Carnívoros!
                  </h2>
                  <p>
                    Se você é fã de uma boa carne, não pode perder essa
                    oportunidade!
                  </p>
                  <p>
                    Traga sua fome e prepare-se para uma experiência
                    gastronômica única! Venha se deliciar e aproveitar momentos
                    especiais no Fogo de Terra! Reserve sua mesa e venha
                    saborear o melhor da carne!
                  </p>
                  <span>Cidade: Olinda</span>
                  <br />
                  <span>Eu vou: {countFDT}</span>
                  <button
                    className={s["btn-euvou"]}
                    onClick={incrementCountFDT}
                  >
                    Eu vou!
                  </button>
                </div>
              </div>

              <div className={s.ranking} id="boatehotkiss">
                <img src={BoateKiss} alt="Boate Hotkiss" />
                <div>
                  <h2>Noite Incrível na Boate Hotkiss com DJ Boladão!</h2>
                  <p>Prepare-se para uma festa inesquecível!</p>
                  <p>
                    Não fique de fora dessa! Venha fazer parte da festa que todo
                    mundo vai comentar! Traga seus amigos e venha se divertir!
                    Garanta seu ingresso e venha curtir a noite com a gente!
                  </p>
                  <span>Cidade: Olinda</span>
                  <br />
                  <span>Eu vou: {countBTK}</span>
                  <button
                    className={s["btn-euvou"]}
                    onClick={incrementCountBTK}
                  >
                    Eu vou!
                  </button>
                </div>
              </div>
            </div>

            {/* EVENTOS PASSADO */}
            <div
              className={`${s.content} ${activeTab === "past" ? s.show : ""}`}
              id="past"
            >
              <div className={s.ranking} id="ney">
                <img src={ney} alt="Show do Ney Matogrosso" />
                <div>
                  <h2>Relato do Sucesso: Ney Matogrosso Encanta Olinda</h2>
                  <p>
                    É com grande entusiasmo que compartilhamos os momentos
                    inesquecíveis do recente show de Ney Matogrosso em Olinda. A
                    cidade histórica foi palco de uma performance memorável que
                    deixou a todos em êxtase.
                  </p>
                  <p>
                    O evento reuniu uma multidão de fãs que vibraram e cantaram
                    junto com Ney Matogrosso. Com um repertório que incluiu
                    clássicos como "Homem com H", "Poema" e "Sangue Latino", Ney
                    trouxe uma energia indescritível ao palco, confirmando mais
                    uma vez seu status de lenda viva da música brasileira.
                  </p>
                  <span>Cidade: Olinda</span>
                  <br />
                  <span>Eu fui: 602</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className={s.boxChat}>
        <div className={s.dizAi}>
          <h2>Diz aí!</h2>
        </div>
        <div className={s.caixaMensagens}>
          {messages.map((msg, index) => (
            <div className={s.mensagens} key={index}>
              <div className={s.perfil}>
                <img src={msg.img} alt="Foto de perfil de usuário" />
                <p>{msg.user}</p>
              </div>
              <p className={s.textoMaxw}>{msg.text}</p>
            </div>
          ))}
        </div>
        <div>
          <form className={s.chatFormInputText} onSubmit={handleSubmit}>
            <textarea
              className={s.chatInputText}
              rows="4"
              cols="50"
              placeholder="Digite seu texto aqui..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown} // Captura a tecla "Enter"
            ></textarea>
            <button type="submit" className={s.sendButton} title="Enviar">
              ⮚
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}
