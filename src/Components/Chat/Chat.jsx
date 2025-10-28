import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import s from "./chat.module.scss";
import axios from "axios";
import fotoC from "../../assets/Carlos.jpg";
import fotoW from "../../assets/Wesley.jpg";
import fotoG from "../../assets/Gabriel.jpeg";
import fotoX from "../../assets/Xande.jpeg";
import fotoE from "../../assets/Elton.jpeg";
import semfoto from "../../assets/PerfilSft.jpg";
import yuri from "../../assets/yuri.jpeg";

export default function Chat({ cidadeSelecionada, loggedUser }) {
  const { id } = useParams();
  const [mensagem, setMensagem] = useState("");
  const [listaMensagem, setListaMensagem] = useState([]);
  const caixaMensagensRef = useRef(null); // ✅ ALTERADO — ref direto no container
  const [estaNoFinal, setEstaNoFinal] = useState(true);
  // ✅ Define a origem atual com prioridade
  const origemAtual = id || cidadeSelecionada || "Home"; 

  const scrollToBottom = () => {
    if (!caixaMensagensRef.current) return;
    caixaMensagensRef.current.scrollTop =
      caixaMensagensRef.current.scrollHeight;
  };

  // Detecta se o usuário está rolando manualmente
  const handleScroll = () => {
    const el = caixaMensagensRef.current;
    if (!el) return;

    const estaNoFundo = el.scrollTop + el.clientHeight >= el.scrollHeight - 10;
    setEstaNoFinal(estaNoFundo);
  };

  // Só rola automaticamente se o usuário estiver no final
  useEffect(() => {
    if (estaNoFinal) {
      const timer = setTimeout(scrollToBottom, 50);
      return () => clearTimeout(timer);
    }
  }, [listaMensagem, estaNoFinal]);

  //UTILIZA A TECLA ENTER PARA ENVIAR NOVA MENSAGEM
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); // Impede a quebra de linha ao pressionar Enter
      enviarMensagem(e);
    }
  };

  useEffect(() => {
    const fetchMensagens = async () => {
      try {
        const response = await axios.get(
          "https://api-uhuuu.onrender.com/mensagens"
        );

        let mensagensFiltradas;

        if (origemAtual === "Home") {
          // Na Home, mostra todas as mensagens
          mensagensFiltradas = response.data;
        } else {
          // Evento ou cidade: filtra apenas as mensagens do contexto
          mensagensFiltradas = response.data.filter(
            (msg) => String(msg.origem) === String(origemAtual)
          );
        }

        setListaMensagem(mensagensFiltradas);

      } catch (error) {
        console.error("Erro ao buscar mensagens:", error);
      }
    };

    fetchMensagens();
    const interval = setInterval(fetchMensagens, 3000);
    return () => clearInterval(interval);
  }, [origemAtual]); // ✅ Atualiza quando muda cidade ou id do evento

  const enviarMensagem = async (e) => {
    e.preventDefault();

    if (!loggedUser || !loggedUser.data_nascimento) {
      alert("Você precisa estar logado como buscador para enviar mensagens!");
      return;
    }

    const nomeParaMensagem = loggedUser.nome 
      ? loggedUser.sobrenome
        ? `${loggedUser.nome} ${loggedUser.sobrenome.split(" ")[0]}`
        : loggedUser.nome
      : null;

    const dadosAEnviar = {
      foto: loggedUser.fotoPerfil || null,
      nome: nomeParaMensagem,
      mensagem: mensagem,
      origem: origemAtual, 
      dataHoraMensagem: new Date().toLocaleString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
      idCriador: loggedUser.id,
    };

    try {
      await axios.post(
        "https://api-uhuuu.onrender.com/cadastrar_mensagem",
        dadosAEnviar,
        { headers: { "Content-Type": "application/json" } }
      );

      const response = await axios.get(
        "https://api-uhuuu.onrender.com/mensagens"
      );

      const mensagensFiltradas = response.data.filter(
        (msg) => String(msg.origem) === String(origemAtual)
      );

      setListaMensagem(mensagensFiltradas);
      setMensagem("");

      // ✅ Só rola se o usuário já estava no fim antes do envio
      if (estaNoFinal) {
        setTimeout(scrollToBottom, 50);
      }
    } catch (erro) {
      console.error("Erro ao enviar a mensagem:", erro);
      alert("Erro ao enviar a mensagem.");
    }
  };

  return (
    <section className={s.boxChat}>
      <div className={s.dizAi}>
        <h2>Diz aí!</h2>
      </div>

      <div
        className={s.caixaMensagens}
        ref={caixaMensagensRef}
        onScroll={handleScroll}
      >
        {listaMensagem.map((msg) => (
          <div className={s.mensagens} key={msg.id}>
            <div className={s.perfil}>
              <img src={msg.foto || semfoto} alt="Foto de perfil de usuário" />
              <p>{msg.nome}</p>
            </div>
            <p className={s.textoMaxw}>{msg.mensagem}</p>
          </div>
        ))}
      </div>

      <div>
        <form className={s.chatFormInputText} onSubmit={enviarMensagem}>
          <textarea
            className={s.chatInputText}
            rows="4"
            cols="50"
            placeholder="Digite seu texto aqui..."
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            onKeyDown={handleKeyDown}
          ></textarea>
          <button
            type="submit"
            className={s.sendButton}
            title="Enviar"
            disabled={!mensagem.trim()}
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}
