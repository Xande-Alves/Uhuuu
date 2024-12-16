import Header from "../../../Components/Header/Header";
import s from "./recife.module.scss";
import SideNavbar from "../../../Components/SideNavbar/SideNavbar";
import React, { useState } from "react";
import barGera from "../../../assets/barGera.jpg";
import fogoTerra from "../../../assets/fogoTerra.jpg";
import BoateKiss from "../../../assets/boateKiss.jpg";
import angra from "../../../assets/angra14.jpg";
import transamerica from "../../../assets/transamerica.jpg";
import ney from "../../../assets/ney.jpg";
import sambaRecife from "../../../assets/sambaRecife.jpg";
import seresta from "../../../assets/seresta.jpeg";
import natalGelado from "../../../assets/natalGelado.jpg";
import Chat from "../../../Components/Chat/Chat";
import Footer from "../../../Components/Footer/Footer";
import fotoC from "../../../assets/Carlos.jpg";
import fotoW from "../../../assets/Wesley.jpg";
import fotoG from "../../../assets/Gabriel.jpeg";
import fotoX from "../../../assets/Xande.jpeg";
import fotoE from "../../../assets/Elton.jpeg";
import semfoto from "../../../assets/PerfilSft.jpg";
import yuri from "../../../assets/yuri.jpeg";

export default function Recife() {
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
      user: "Wesley Paredes",
      text: "Mano... Que noite foi aquela no Bar do Gera, ontem? Bombou demais!",
      img: fotoW,
    },
    {
      user: "Carlos Jansen",
      text: "Fala não! Sei nem como cheguei em casa... Só acordei na minha cama kkkkkkkkk. Top!!",
      img: fotoC,
    },
    {
      user: "Yuri",
      text: "Poisé Wesley, só faltou eu ter caído de tanto que aproveitei kkkkk",
      img: yuri,
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
      <h1 className={s.h1Recife}>RECIFE - PE</h1>
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
              <div className={s.ranking} id="bardogera">
                <img src={barGera} alt="Roda de Samba no Bar do Gera" />
                <div>
                  <h2>
                    Samba no Bar do Gera: A Festa que Você Não Pode Perder!
                  </h2>
                  <p>
                    Prepare-se para uma noite inesquecível de samba, alegria e
                    descontração! Venha celebrar com a gente na nossa
                    tradicional roda de samba!
                  </p>
                  <p>
                    Traga seus amigos e venha viver a verdadeira essência do
                    samba! Vamos fazer história juntos! Confirme sua presença e
                    venha sambar com a gente!
                  </p>
                  <span>Cidade: Recife</span>
                  <br />
                  <span>Eu vou: {countBDG}</span>
                  <button
                    className={s["btn-euvou"]}
                    onClick={incrementCountBDG}
                  >
                    Eu vou!
                  </button>
                </div>
              </div>

              <div className={s.ranking} id="armazem14">
                <img src={angra} alt="Armazém 14" />
                <div>
                  <h2>
                    Show Imperdível de Metal no Armazém 14 com a Banda Angra!
                  </h2>
                  <p>Prepare-se para uma noite épica de heavy metal!</p>
                  <p>
                    Não perca a chance de ver Angra de perto! Traga sua galera e
                    prepare-se para bater cabeça a noite toda! Garanta seu
                    ingresso agora e venha fazer parte desse momento histórico!
                  </p>
                  <span>Cidade: Recife</span>
                  <br />
                  <span>Eu vou: {countAMZ14}</span>
                  <button
                    className={s["btn-euvou"]}
                    onClick={incrementCountAMZ14}
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
              <div className={s.ranking} id="sambaRecife">
                <img src={sambaRecife} alt="Samba Recife" />
                <div>
                  <h2>Samba Recife: Um Espetáculo de Sucesso do Samba</h2>
                  <p>
                    No último fim de semana, o Centro de Convenções do Recife se
                    transformou em um verdadeiro palco de celebração com o
                    evento Samba Recife! Foi uma noite repleta de ritmo, alegria
                    e muita animação, unindo apaixonados pelo samba em uma festa
                    inesquecível.
                  </p>
                  <p>
                    Obrigado a todos que compareceram! Vocês fizeram desse
                    evento uma experiência incrível, com apresentações de
                    artistas talentosos que contagiaram a todos com sua energia!
                    Reviva os melhores momentos! Fique ligado! Em breve, teremos
                    mais eventos para continuar a celebração da nossa rica
                    cultura. Junte-se a nós e mantenha o samba vivo!
                  </p>
                  <span>Cidade: Recife</span>
                  <br />
                  <span>Eu fui: 568</span>
                </div>
              </div>

              <div className={s.ranking} id="seresta">
                <img src={seresta} alt="Seresta dos Amigos" />
                <div>
                  <h2>Sucesso Total na Seresta do Marco Zero!</h2>
                  <p>
                    No coração do Recife, a magia da música tomou conta do Marco
                    Zero! A seresta foi um verdadeiro espetáculo, reunindo
                    centenas de amantes da boa música e da cultura pernambucana.
                  </p>
                  <p>
                    Agradecemos a todos que participaram! Com canções que
                    embalaram corações e sorrisos que iluminaram a noite, o
                    evento foi um sucesso absoluto! Não perca a próxima! Fique
                    ligado para mais eventos incríveis. Juntos, fazemos a
                    cultura brilhar ainda mais!
                  </p>
                  <span>Cidade: Recife</span>
                  <br />
                  <span>Eu fui: 368</span>
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
