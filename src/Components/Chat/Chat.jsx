import React, { useState } from "react";
import s from "./chat.module.scss";
import fotoC from "../../assets/Carlos.jpg";
import fotoW from "../../assets/Wesley.jpg";
import fotoG from "../../assets/Gabriel.jpeg";
import fotoX from "../../assets/Xande.jpeg";
import fotoE from "../../assets/Elton.jpeg";
import semfoto from "../../assets/PerfilSft.jpg";
import yuri from "../../assets/yuri.jpeg";

export default function Chat() {
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
      user: "Gabriel Francisco",
      text: "Vcs viram que o Fogo de Terra tá com promoção de nas sextas feiras? 30 conto o rodízio pow... Tá valendo demais. Simbora!",
      img: fotoG,
    },
    {
      user: "Alexandre Alves",
      text: "Ahhh, esse fds fiquei off. Peguei minhas filhas e fui lá no evento do Natal Gelado, lá no NorthWay. Elas endoidaram kkkk. Tá massa lá",
      img: fotoX,
    },
    {
      user: "Yuri",
      text: "Poisé Wesley, só faltou eu ter caído de tanto que aproveitei kkkkk",
      img: yuri,
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
  );
}
