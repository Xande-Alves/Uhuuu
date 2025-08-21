import s from "./tabs.module.scss";
import React, { useState, useEffect } from "react";
import axios from "axios";

// Função para formatar a data no padrão brasileiro (DD/MM/AAAA)
const formatarData = (dataString) => {
  if (!dataString) return "Data não informada";
  const data = new Date(dataString);
  return isNaN(data)
    ? "Data inválida"
    : new Intl.DateTimeFormat("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      }).format(data);
};

export default function Tabs({ cidadeSelecionada }) {
  const [eventos, setEventos] = useState([]);
  const [activeTab, setActiveTab] = useState("future");

  useEffect(() => {
    const fetchEventos = async () => {
      try {
        const response = await axios.get(
          "https://api-uhuuu.onrender.com/cadastrados_eventos"
        );
        setEventos(response.data);
      } catch (error) {
        console.error("Erro ao buscar eventos:", error);
      }
    };

    fetchEventos();
  }, []);

  // Estado para armazenar os contadores e textos dos botões
  const [eventosState, setEventosState] = useState(
    eventos.map((evento) => ({
      ...evento,
      euVou: "Eu vou!",
    }))
  );

  // Atualiza eventosState sempre que eventos mudar
  useEffect(() => {
    setEventosState(
      eventos.map((evento) => ({
        ...evento,
        euVou: "Eu vou!",
        count: evento.numeroInteresse || 0, // garantir que count exista
      }))
    );
  }, [eventos]);

  // Sempre que a cidadeSelecionada mudar, resetar a aba para "future"
  useEffect(() => {
    setActiveTab("future");
  }, [cidadeSelecionada]);

  // Função para incrementar/decrementar contadores
  const handleCounter = (id) => {
    setEventosState((prevEventos) =>
      prevEventos.map((evento) =>
        evento.id === id
          ? {
              ...evento,
              count:
                evento.euVou === "Eu vou!"
                  ? evento.count + 1
                  : evento.count - 1,
              euVou: evento.euVou === "Eu vou!" ? "Desistir" : "Eu vou!",
            }
          : evento
      )
    );
  };

  // Filtra só os eventos da cidadeSelecionada (se existir)
  const eventosFiltrados = eventosState.filter((evento) => {
    if (!cidadeSelecionada) return true; // sem filtro → retorna todos
    const eventoCidade = `${evento.cidade} - ${evento.estado}`;
    return eventoCidade === cidadeSelecionada;
  });

  // Filtrar eventos futuros e passados
  const eventosFuturos = eventosFiltrados
    .filter((evento) => new Date(evento.dataHoraFim) > new Date())
    .sort((a, b) => b.count - a.count); // Ordena por count decrescente

  const eventosPassados = eventosFiltrados
    .filter((evento) => new Date(evento.dataHoraFim) < new Date())
    .sort((a, b) => b.count - a.count); // Ordena por count decrescente

  return (
    <section className={s.tabsContainer}>
      <div className={s["tab-buttons"]}>
        <button
          className={`${s["tab-btn"]} ${
            activeTab === "future" ? s.active : ""
          }`}
          onClick={() => setActiveTab("future")}
        >
          O que vai bombar?
        </button>
        <button
          className={`${s["tab-btn"]} ${activeTab === "past" ? s.active : ""}`}
          onClick={() => setActiveTab("past")}
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
          {eventosFuturos.map((evento) => (
            <div className={s.ranking} key={evento.id} id={evento.id}>
              <img
                src={evento.listaFoto?.[0]?.foto}
                alt={evento.listaFoto?.[0]?.legenda || evento.nome}
              />
              <div>
                <h2>{evento.nome}</h2>
                <p>{evento.descricao}</p>
                <span>
                  Cidade: {evento.cidade} - {evento.estado}
                </span>
                <br />
                <span>
                  Data: {formatarData(evento.dataHoraInicio)} a{" "}
                  {formatarData(evento.dataHoraFim)}
                </span>
                <br />
                <span>Eu vou: {evento.numeroInteresse}</span>
                <button
                  className={s["btn-euvou"]}
                  onClick={() => handleCounter(evento.id)}
                >
                  {evento.euVou}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* EVENTOS PASSADOS */}
        <div
          className={`${s.content} ${activeTab === "past" ? s.show : ""}`}
          id="past"
        >
          {eventosPassados.map((evento) => (
            <div className={s.ranking} key={evento.id} id={evento.id}>
              <img
                src={evento.listaFoto?.[0]?.foto}
                alt={evento.listaFoto?.[0]?.legenda || evento.nome}
              />
              <div>
                <h2>{evento.nome}</h2>
                <p>{evento.descricao}</p>
                <span>Cidade: {evento.cidade}</span>
                <br />
                <span>
                  Data: {formatarData(evento.dataHoraInicio)} a{" "}
                  {formatarData(evento.dataHoraFim)}
                </span>
                <br />
                <span>Eu fui: {evento.count}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
