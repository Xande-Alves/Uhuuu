import Header from "../../../Components/Header/Header";
import s from "./paulista.module.scss";
import SideNavbar from "../../../Components/SideNavbar/SideNavbar";
import React, { useState } from "react";
import transamerica from "../../../assets/transamerica.jpg";
import natalGelado from "../../../assets/natalGelado.jpg";
import Footer from "../../../Components/Footer/Footer";
import fotoX from "../../../assets/Xande.jpeg";
import semfoto from "../../../assets/PerfilSft.jpg";

export default function Paulista() {
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
      user: "Alexandre Alves",
      text: "Ahhh, esse fds fiquei off. Peguei minhas filhas e fui lá no evento do Natal Gelado, lá no NorthWay. Elas endoidaram kkkk. Tá massa lá",
      img: fotoX,
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
      <h1 className={s.h1Paulista}>Paulista - PE</h1>
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
              <div className={s.ranking} id="shoppingnorthway">
                <img src={transamerica} alt="Shopping North Way" />
                <div>
                  <h2>O Circo TransAmérica Chegou ao Shopping North Way!</h2>
                  <p>Prepare-se para uma experiência mágica e emocionante!</p>
                  <p>
                    Traga a família e venha viver momentos inesquecíveis! Venha
                    se surpreender com a magia do circo! Garanta seus ingressos
                    e não fique de fora dessa aventura!
                  </p>
                  <span>Cidade: Paulista</span>
                  <br />
                  <span>Eu vou: {countSNW}</span>
                  <button
                    className={s["btn-euvou"]}
                    onClick={incrementCountSNW}
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
              <div className={s.ranking} id="natalGelado">
                <img src={natalGelado} alt="Natal Gelado" />
                <div>
                  <h2>
                    Natal Gelado: Um Sucesso Encantador no Shopping North Way!
                  </h2>
                  <p>
                    Neste fim de semana, o Shopping North Way se transformou em
                    um verdadeiro paraíso de Natal com o evento Natal Gelado!
                    Famílias e amigos se reuniram para aproveitar a magia das
                    festividades, repletas de atrações incríveis e momentos
                    inesquecíveis.
                  </p>
                  <p>
                    Agradecemos a todos que participaram! Vocês tornaram nosso
                    Natal ainda mais especial com sorrisos, alegria e muita
                    diversão! Fique atento! Em breve teremos mais surpresas e
                    eventos para continuar a celebração. Venha viver a magia do
                    Natal conosco!
                  </p>
                  <span>Cidade: Paulista</span>
                  <br />
                  <span>Eu fui:97</span>
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
