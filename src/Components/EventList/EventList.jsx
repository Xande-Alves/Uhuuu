import s from "./eventList.module.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function EventList({ loggedUser }) {
  const [eventos, setEventos] = useState([]);
  const navigate = useNavigate();

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

  // Filtra os eventos pelo ID do usuário logado
  const eventosFiltrados = loggedUser
    ? eventos.filter((evento) => evento.idOfertador === loggedUser.id)
    : [];

  // Função para formatar a data no padrão brasileiro (DD/MM/AAAA)
  const formatarData = (dataString) => {
    const data = new Date(dataString);
    return new Intl.DateTimeFormat("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }).format(data);
  };

  const escolheEvento = (eventoSelecionado) => {
    localStorage.setItem(
      "eventoSelecionado",
      JSON.stringify(eventoSelecionado)
    );
    navigate("/PerfilEvento");
  };

  return (
    <div className={s.eventList}>
      <h1>Eventos cadastrados</h1>
      <div className={s.caixaEventos}>
        {eventosFiltrados.map((evento) => (
          <div key={evento.id} className={s.evento} onClick={() => escolheEvento(evento)}>
            <h3>{evento.nome}</h3>
            <p>Início: {formatarData(evento.dataHoraInicio)}</p>
            <p>Término: {formatarData(evento.dataHoraFim)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
