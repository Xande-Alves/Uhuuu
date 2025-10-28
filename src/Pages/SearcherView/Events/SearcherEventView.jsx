import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import s from "./searcherEventView.module.scss";
import SideNavbar from "../../../Components/SideNavbar/SideNavbar"; 
import Chat from "../../../Components/Chat/Chat";

export default function SearcherEventView({loggedUser}) {
  const { id } = useParams();
  const navigate = useNavigate(); // hook para navegação 
  const [evento, setEvento] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [fotoAtiva, setFotoAtiva] = useState(null);

  useEffect(() => {
    const fetchEvento = async () => {
      try {
        const response = await axios.get(
          "https://api-uhuuu.onrender.com/cadastrados_eventos"
        );

        // Filtra apenas o evento com o ID da URL
        const eventoEncontrado = response.data.find(
          (ev) => String(ev.id) === String(id)
        );

        if (eventoEncontrado) {
          setEvento(eventoEncontrado);
        } else {
          setError("Evento não encontrado");
        }
      } catch (err) {
        setError("Erro ao buscar o evento");
      } finally {
        setLoading(false);
      }
    };

    fetchEvento();
  }, [id]);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  //FORMATA TELEFONE PARA O FORMATO (XX) XXXXX-XXXX
  const formatarTelefone = (telefone) => {
    return `(${telefone.slice(0, 2)}) ${telefone.slice(2, 7)}-${telefone.slice(
      7
    )}`;
  };

  return (
    <div className={s.searcherEvent}>
      <div>
        <SideNavbar />
        <Chat loggedUser={loggedUser} />
      </div>
      <div className={s.dataEvent}>
        <button
          className={s.botaoVoltar}
          onClick={() => navigate(-1)} // volta para a página anterior
        >
          ⬅ Voltar
        </button>
        <h1 className={s.titulo}>{evento.nome}</h1>
        <p className={s.descricao}>{evento.descricao}</p>
        <p className={s.dataHoraEndereco}>
          Data: {new Date(evento.dataHoraInicio).toLocaleString("pt-BR")} até{" "}
          {new Date(evento.dataHoraFim).toLocaleString("pt-BR")}
        </p>
        <p className={s.dataHoraEndereco}>
          Endereço: {evento.logradouro}, {evento.numero} {evento.complemento}.{" "}
          {evento.bairro}, {evento.cidade} - {evento.estado}.
        </p>
        <div className={s.contatos}>
          <h2>Contatos</h2>
          <p>E-mail: {evento.email}</p>
          <p>Telefone: {formatarTelefone(evento.telefone)}</p>
        </div>
        <div className={s.listaFoto}>
          <h2>Fotos</h2>
          <div className={s.fotoScroll}>
            {evento.listaFoto && evento.listaFoto.length > 0 ? (
              evento.listaFoto.map((item, index) => (
                <div key={index}>
                  <div className={s.divFoto}>
                    <img
                      src={item.foto}
                      alt={item.legenda}
                      onClick={() => setFotoAtiva(item)} // guardando o objeto inteiro
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                </div>
              ))
            ) : (
              <p>Sem informações de fotos</p>
            )}
          </div>

          {/* Overlay da foto ampliada */}
          {fotoAtiva && (
            <div
              className={s.overlay}
              onClick={() => setFotoAtiva(null)} // fecha ao clicar fora
            >
              <div
                style={{ textAlign: "center" }}
                onClick={(e) => e.stopPropagation()} // evita fechar ao clicar na própria foto/legenda
              >
                <img
                  src={fotoAtiva.foto}
                  alt={fotoAtiva.legenda}
                  className={s.fotoAmpliada}
                />
                <p style={{ color: "#fff", marginTop: "10px" }}>
                  {fotoAtiva.legenda}
                </p>
              </div>
            </div>
          )}
        </div>

        <div className={s.listaIngresso}>
          <h2>Ingressos</h2>
          {evento.listaIngresso && evento.listaIngresso.length > 0 ? (
            evento.listaIngresso.map((item, index) => (
              <div key={index}>
                <div className={s.divIngresso}>
                  <p className={s.pBold}>{item.ingresso}: </p>
                  <p>{item.ingressoDescricao}</p>
                </div>
              </div>
            ))
          ) : (
            <p>Sem informações de ingressos</p>
          )}
        </div>
        <div className={s.listaAtracao}>
          <h2>Atrações</h2>
          {evento.listaAtracao && evento.listaAtracao.length > 0 ? (
            evento.listaAtracao.map((item, index) => (
              <div key={index}>
                <div className={s.divAtracao}>
                  <p className={s.pBold}>{item.atracao}: </p>
                  <p>{item.atracaoDescricao}</p>
                </div>
              </div>
            ))
          ) : (
            <p>Sem informações de atrações</p>
          )}
        </div>
        <div className={s.listaPromocao}>
          <h2>Promoções</h2>
          {evento.listaPromocao && evento.listaPromocao.length > 0 ? (
            evento.listaPromocao.map((item, index) => (
              <div key={index}>
                <div className={s.divPromocao}>
                  <p className={s.pBold}>{item.promocao}: </p>
                  <p>{item.atracaoPromocao}</p>
                </div>
              </div>
            ))
          ) : (
            <p>Sem informações de promoções.</p>
          )}
        </div>
      </div>
    </div>
  );
}
