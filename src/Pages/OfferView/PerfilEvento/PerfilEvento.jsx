import EventList from "../../../Components/EventList/EventList";
import s from "./perfilEvento.module.scss";
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function PerfilEvento({ loggedUser }) {
  const [abaAtiva, setAbaAtiva] = useState("Dados Gerais");
  const [evento, setEvento] = useState(null);
  const [editando, setEditando] = useState(false);
  const navigate = useNavigate();
  const [refreshEventList, setRefreshEventList] = useState(false);

  const [nome, setNome] = useState("");
  const [dataHoraInicio, setDataHoraInicio] = useState("");
  const [dataHoraFim, setDataHoraFim] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [descricao, setDescricao] = useState("");
  const [foto, setFoto] = useState("");
  const [listaFoto, setListaFoto] = useState([]);
  const [descricaoFoto, setDescricaoFoto] = useState("");
  const [listaIngresso, setListaIngresso] = useState([]);
  const [ingresso, setIngresso] = useState("");
  const [descricaoIngresso, setDescricaoIngresso] = useState("");
  const [listaAtracao, setListaAtracao] = useState([]);
  const [atracao, setAtracao] = useState("");
  const [descricaoAtracao, setDescricaoAtracao] = useState("");
  const [listaPromocao, setListaPromocao] = useState([]);
  const [promocao, setPromocao] = useState("");
  const [descricaoPromocao, setDescricaoPromocao] = useState("");
  const [numeroInteresse, setNumeroInteresse] = useState(null);
  const [eventoId, setEventoId] = useState(null);
  const idOfertador = loggedUser.id;

  useEffect(() => {
    const eventoSalvo = localStorage.getItem("eventoSelecionado");
    if (eventoSalvo) {
      setEvento(JSON.parse(eventoSalvo));
    }
  }, []);

  useEffect(() => {
    if (evento) {
      setNome(evento.nome || "");
      setDataHoraInicio(evento.dataHoraInicio || "");
      setDataHoraFim(evento.dataHoraFim || "");
      setLogradouro(evento.logradouro || "");
      setNumero(evento.numero || "");
      setComplemento(evento.complemento || "");
      setBairro(evento.bairro || "");
      setCidade(evento.cidade || "");
      setEstado(evento.estado || "");
      setEmail(evento.email || "");
      setTelefone(evento.telefone || "");
      setDescricao(evento.descricao || "");
      setListaFoto(evento.listaFoto || []);
      setListaAtracao(evento.listaAtracao || []);
      setListaIngresso(evento.listaIngresso || []);
      setListaPromocao(evento.listaPromocao || []);
      setNumeroInteresse(evento.numeroInteresse);
      setEventoId(evento.id);
    }
  }, [evento]);

  const capturaNome = (e) => {
    setNome(e.target.value);
  };
  const capturaDataHoraInicio = (e) => {
    let valor = e.target.value;
    if (valor.length === 16) valor += ":00"; // adiciona os segundos
    setDataHoraInicio(valor);
  };
  const capturaDataHoraFim = (e) => {
    let valor = e.target.value;
    if (valor.length === 16) valor += ":00"; // adiciona os segundos
    setDataHoraFim(valor);
  };
  const capturaLogradouro = (e) => {
    setLogradouro(e.target.value);
  };
  const capturaNumero = (e) => {
    setNumero(e.target.value);
  };
  const capturaComplemento = (e) => {
    setComplemento(e.target.value);
  };
  const capturaBairro = (e) => {
    setBairro(e.target.value);
  };
  const capturaCidade = (e) => {
    setCidade(e.target.value);
  };
  const capturaEstado = (e) => {
    setEstado(e.target.value);
  };
  const capturaEmail = (e) => {
    setEmail(e.target.value.toLowerCase());
  };
  const capturaTelefone = (e) => {
    const valorDigitado = e.target.value.replace(/\D/g, ""); // Remove não-dígitos
    const max11Digitos = valorDigitado.slice(0, 11); // Limita a 11 dígitos
    setTelefone(max11Digitos);
  };
  const capturaDescricao = (e) => {
    setDescricao(e.target.value);
  };
  const capturaFoto = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFoto(reader.result); // base64 da imagem
      };
      reader.readAsDataURL(file);
    }
  };
  const capturaDescricaoFoto = (e) => {
    setDescricaoFoto(e.target.value);
  };
  const capturaTituloAtracao = (e) => {
    setAtracao(e.target.value);
  };
  const capturaDescricaoAtracao = (e) => {
    setDescricaoAtracao(e.target.value);
  };
  const capturaTituloIngresso = (e) => {
    setIngresso(e.target.value);
  };
  const capturaDescricaoIngresso = (e) => {
    setDescricaoIngresso(e.target.value);
  };
  const capturaTituloPromocao = (e) => {
    setPromocao(e.target.value);
  };
  const capturaDescricaoPromocao = (e) => {
    setDescricaoPromocao(e.target.value);
  };

  //LOGICA DE FORMAÇÃO DA LISTA DE FOTOS
  const inputFotoRef = useRef(null); //PARA LIMPAR O NOME DO ARQUIVO DO INPUT FOTO

  const adicionaFoto = () => {
    const fotoDescrita = {
      foto: foto,
      legenda: descricaoFoto,
    };
    if (foto) {
      setListaFoto([...listaFoto, fotoDescrita]);
      setFoto("");
      setDescricaoFoto("");

      if (inputFotoRef.current) {
        inputFotoRef.current.value = ""; // limpa o input de arquivo
      }
    } else {
      alert("Adicione uma imagem primeiro.");
    }
  };

  const deletaFoto = (indexParaRemover) => {
    const novaLista = listaFoto.filter(
      (_, index) => index !== indexParaRemover
    );
    setListaFoto(novaLista);
  };

  //LOGICA DE FORMAÇÃO DA LISTA DE ATRAÇÕES
  const adicionaAtracao = () => {
    const atracaoDescrita = {
      atracao: atracao,
      atracaoDescricao: descricaoAtracao,
    };
    if (atracao) {
      setListaAtracao([...listaAtracao, atracaoDescrita]);
      setAtracao("");
      setDescricaoAtracao("");
    } else {
      alert("Adicione o título da atração primeiro.");
    }
  };

  const deletaAtracao = (indexParaRemover) => {
    const novaLista = listaAtracao.filter(
      (_, index) => index !== indexParaRemover
    );
    setListaAtracao(novaLista);
  };

  //LOGICA DE FORMAÇÃO DA LISTA DE INGRESSOS
  const adicionaIngresso = () => {
    const ingressoDescrito = {
      ingresso: ingresso,
      ingressoDescricao: descricaoIngresso,
    };
    if (ingresso) {
      setListaIngresso([...listaIngresso, ingressoDescrito]);
      setIngresso("");
      setDescricaoIngresso("");
    } else {
      alert("Adicione o título de ingresso primeiro.");
    }
  };

  const deletaIngresso = (indexParaRemover) => {
    const novaLista = listaIngresso.filter(
      (_, index) => index !== indexParaRemover
    );
    setListaIngresso(novaLista);
  };

  //LOGICA DE FORMAÇÃO DA LISTA DE PROMOÇÕES
  const adicionaPromocao = () => {
    const promocaoDescrita = {
      promocao: promocao,
      promocaoDescricao: descricaoPromocao,
    };
    if (promocao) {
      setListaPromocao([...listaPromocao, promocaoDescrita]);
      setPromocao("");
      setDescricaoPromocao("");
    } else {
      alert("Adicione o título de promoção primeiro.");
    }
  };

  const deletaPromocao = (indexParaRemover) => {
    const novaLista = listaPromocao.filter(
      (_, index) => index !== indexParaRemover
    );
    setListaPromocao(novaLista);
  };

  //CONTROLANDO OS BOTÕES
  const botao1 = () => {
    if (abaAtiva === "fotos") {
      setAbaAtiva("Dados Gerais");
    } else if (abaAtiva === "atracoes") {
      setAbaAtiva("fotos");
    } else if (abaAtiva === "ingressos") {
      setAbaAtiva("atracoes");
    } else {
      setAbaAtiva("ingressos");
    }
  };

  const botao2 = () => {
    if (abaAtiva === "Dados Gerais") {
      setAbaAtiva("fotos");
    } else if (abaAtiva === "fotos") {
      setAbaAtiva("atracoes");
    } else if (abaAtiva === "atracoes") {
      setAbaAtiva("ingressos");
    } else if (abaAtiva === "ingressos") {
      setAbaAtiva("promocoes");
    } else {
      enviarDados();
    }
  };

  //RETORNA NÚMERO FORMATADO DO TELEFONE AO USUÁRIO
  function formatarTelefone(numero) {
    // Remove qualquer coisa que não seja número, só por segurança
    const numeros = numero.replace(/\D/g, "");
    // Checa se tem 11 dígitos (DDD + número com 9 dígitos)
    if (numeros.length === 11) {
      const ddd = numeros.slice(0, 2);
      const parte1 = numeros.slice(2, 7);
      const parte2 = numeros.slice(7);
      return `(${ddd}) ${parte1}-${parte2}`;
    }
    // Retorna original se não tiver o formato esperado
    return numero;
  }

  const enviarDados = async (e) => {
    if (e) e.preventDefault();
    if (!editando) {
      // Ativa modo edição, sem enviar nada
      setEditando(true);
      return;
    }

    //VALIDA EMAIL PARA UM FORMATO VÁLIDO
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Por favor, insira um e-mail válido.");
      return;
    }

    //VALIDA APENAS NÚMEROS NO TELEFONE
    if (!/^\d+$/.test(telefone)) {
      alert("O telefone deve conter apenas números.");
      return;
    }
    if (telefone.length !== 11) {
      alert("O número de telefone deve conter 11 dígitos (DDD + número).");
      return;
    }

    //VERIFICA SE A DATA DE INICIO É ANTERIOR A DE TERMINO
    if (new Date(dataHoraInicio) >= new Date(dataHoraFim)) {
      alert("A data/hora de início deve ser anterior à de fim.");
      return;
    }

    //NORMALIZA DATA PARA ENVIO AO BACK-END
    const normalizarData = (valor) => {
      return valor.length === 16 ? valor + ":00" : valor;
    };

    const endPointAPI = "https://api-uhuuu.onrender.com/atualizar_evento";

    const dadosAEnviar = {
      eventoId,
      nome,
      dataHoraInicio: normalizarData(dataHoraInicio),
      dataHoraFim: normalizarData(dataHoraFim),
      logradouro,
      numero,
      complemento,
      bairro,
      cidade,
      estado,
      email,
      telefone,
      descricao,
      listaFoto,
      listaIngresso,
      listaAtracao,
      listaPromocao,
    };

    try {
      const resposta = await axios.put(endPointAPI, dadosAEnviar);
      alert("Evento atualizado com sucesso!");

      setEditando(false);
      setRefreshEventList((prev) => !prev); // Isso força o useEffect do EventList a disparar novamente
    } catch (erro) {
      console.error("Erro ao atualizar evento:", erro);
      alert("Erro ao atualizar evento. Verifique os dados e tente novamente.");
    }
  };

  //DELETAR EVENTO
  const deletarEvento = async (e) => {
    e.preventDefault();
    if (editando) {
      // Cancela a edição e atualização de dados
      setEditando(false);
      return;
    }

    const confirmacao = confirm(
      "Tem certeza de que deseja deletar o evento? Esta ação é irreversível!"
    );

    if (!confirmacao) {
      return; // Usuário cancelou a exclusão
    }

    //LOGICA DO DELETE
    const endPointAPI = "https://api-uhuuu.onrender.com/deletar_evento";

    const dadosAEnviar = { eventoId };

    try {
      const resposta = await axios.delete(endPointAPI, {
        data: dadosAEnviar,
      });
      alert("Evento excluído com sucesso!");
      navigate("/CadastroEvento");
    } catch (erro) {
      console.error("Erro ao deletar evento:", erro);
      alert("Erro ao deletar evento.");
    }
  };

  return (
    <div className={s.cadastroListaEvento}>
      <EventList
        loggedUser={loggedUser}
        onSelectEvento={(eventoSelecionado) => setEvento(eventoSelecionado)}
        atualizar={refreshEventList}
      />
      <div className={s.cadastroContent}>
        <div className={s.divTabButtons}>
          <button
            className={`${s.tabButtons} ${
              abaAtiva === "Dados Gerais" ? s.ativo : ""
            }`}
            onClick={() => setAbaAtiva("Dados Gerais")}
          >
            Dados Gerais
          </button>
          <button
            className={`${s.tabButtons} ${abaAtiva === "fotos" ? s.ativo : ""}`}
            onClick={() => setAbaAtiva("fotos")}
          >
            Fotos
          </button>
          <button
            className={`${s.tabButtons} ${
              abaAtiva === "atracoes" ? s.ativo : ""
            }`}
            onClick={() => setAbaAtiva("atracoes")}
          >
            Atrações
          </button>
          <button
            className={`${s.tabButtons} ${
              abaAtiva === "ingressos" ? s.ativo : ""
            }`}
            onClick={() => setAbaAtiva("ingressos")}
          >
            Ingressos
          </button>
          <button
            className={`${s.tabButtons} ${
              abaAtiva === "promocoes" ? s.ativo : ""
            }`}
            onClick={() => setAbaAtiva("promocoes")}
          >
            Promoções
          </button>
        </div>
        <section className={s.cadastro}>
          <h1>Perfil de Eventos</h1>
          {abaAtiva === "Dados Gerais" && (
            <form>
              <div>
                <label htmlFor="nome">Nome</label>
                <input
                  type="text"
                  id="nome"
                  placeholder="Digite o nome do evento"
                  value={nome}
                  onChange={capturaNome}
                  disabled={!editando}
                  required
                />
              </div>
              <div className={s.dataHora}>
                <div className={s.dataHoraInicio}>
                  <label htmlFor="nome">Data/Hora de início</label>
                  <input
                    type="datetime-local"
                    id="inicio"
                    placeholder="Data/Hora início"
                    value={dataHoraInicio}
                    onChange={capturaDataHoraInicio}
                    disabled={!editando}
                    required
                  />
                </div>
                <div className={s.dataHoraFim}>
                  <label htmlFor="nome">Data/Hora de fim</label>
                  <input
                    type="datetime-local"
                    id="fim"
                    placeholder="Data/Hora fim"
                    value={dataHoraFim}
                    onChange={capturaDataHoraFim}
                    disabled={!editando}
                    required
                  />
                </div>
              </div>
              <div className={s.endereco}>
                <label className={s.labelEndereco} htmlFor="endereço">
                  Endereço
                </label>
                <div className={s.dadosEndereco}>
                  <div className={s.rua}>
                    <div>
                      <label className={s.labelLogradouro} htmlFor="logradouro">
                        Logradouro
                      </label>
                      <input
                        className={s.inputLogradouro}
                        type="text"
                        id="logradouro"
                        placeholder="Digite a rua, avenida..."
                        value={logradouro}
                        onChange={capturaLogradouro}
                        disabled={!editando}
                        required
                      />
                    </div>
                  </div>
                  <div className={s.numeroComplemento}>
                    <div className={s.divNumero}>
                      <label htmlFor="numero">Número</label>
                      <input
                        className={s.inputNumero}
                        type="number"
                        id="numero"
                        value={numero}
                        onChange={capturaNumero}
                        disabled={!editando}
                        required
                      />
                    </div>
                    <div className={s.divComplemento}>
                      <label htmlFor="complemento">Complemento</label>
                      <input
                        type="text"
                        id="complemento"
                        placeholder="Complemento do endereço"
                        value={complemento}
                        onChange={capturaComplemento}
                        disabled={!editando}
                      />
                    </div>
                  </div>
                  <div className={s.bairroCidadeEstado}>
                    <div className={s.divBairro}>
                      <label htmlFor="bairro">Bairro</label>
                      <input
                        type="text"
                        id="bairro"
                        placeholder="Digite o bairro"
                        value={bairro}
                        onChange={capturaBairro}
                        disabled={!editando}
                        required
                      />
                    </div>
                    <div className={s.divCidade}>
                      <label htmlFor="cidade">Cidade</label>
                      <input
                        type="text"
                        id="cidade"
                        placeholder="Digite a cidade"
                        value={cidade}
                        onChange={capturaCidade}
                        disabled={!editando}
                        required
                      />
                    </div>
                    <div className={s.divEstado}>
                      <label htmlFor="estado">Estado</label>
                      <input
                        type="text"
                        id="estado"
                        value={estado}
                        onChange={capturaEstado}
                        disabled={!editando}
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Digite o e-mail de contato"
                  value={email}
                  onChange={capturaEmail}
                  disabled={!editando}
                  required
                />
              </div>
              <div>
                <label htmlFor="telefone">Telefone</label>
                <input
                  type="tel"
                  id="telefone"
                  placeholder="Digite o telefone de contato"
                  value={formatarTelefone(telefone)}
                  onChange={capturaTelefone}
                  disabled={!editando}
                  required
                />
              </div>
              <div>
                <label htmlFor="descricao">Descrição do evento</label>
                <textarea
                  className={s.descricao}
                  type="text"
                  id="descricao"
                  placeholder="Descreva o evento"
                  value={descricao}
                  onChange={capturaDescricao}
                  disabled={!editando}
                  required
                />
              </div>
            </form>
          )}

          {abaAtiva === "fotos" && (
            <div className={s.abaFotos}>
              <h2>Fotos</h2>
              <form className={s.formFotos}>
                <div>
                  <label htmlFor="fotos">Adicione um arquivo de imagem</label>
                  <input
                    className={s.inputFotos}
                    type="file"
                    accept="image/*"
                    id="fotos"
                    onChange={capturaFoto}
                    disabled={!editando}
                    ref={inputFotoRef}
                  />
                </div>
                <div>
                  <label htmlFor="descricaoFoto">Legenda da foto</label>
                  <textarea
                    className={s.inputDescricaoFoto}
                    type="text"
                    id="descricaoFoto"
                    value={descricaoFoto}
                    placeholder="Adicione uma legenda para foto"
                    onChange={capturaDescricaoFoto}
                    disabled={!editando}
                  />
                </div>
              </form>
              <button
                type="button"
                onClick={adicionaFoto}
                disabled={!editando}
                className={`${s.botaoAdiciona} ${
                  editando ? s.ativo : s.inativo
                }`}
              >
                Adicionar Foto
              </button>
              <div className={s.listaFoto}>
                {listaFoto.map((item, index) => (
                  <div key={index}>
                    <div className={s.divFotoDescricao}>
                      <img src={item.foto} alt={item.legenda} />
                      <p>{item.legenda}</p>
                    </div>
                    <div className={s.divBotaoDeleteFoto}>
                      <button type="button" onClick={() => deletaFoto(index)}>
                        X
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {abaAtiva === "atracoes" && (
            <div className={s.abaDescricao}>
              <h2>Atrações</h2>
              <form className={s.formDescricao}>
                <div>
                  <label htmlFor="atracao">
                    Adicione um título para atração
                  </label>
                  <input
                    type="text"
                    id="atracao"
                    value={atracao}
                    placeholder="Digite o título da atração"
                    onChange={capturaTituloAtracao}
                    disabled={!editando}
                  />
                </div>
                <div>
                  <label htmlFor="descricaoAtracao">Descrição da atração</label>
                  <textarea
                    className={s.inputDescricaoAtracao}
                    type="text"
                    id="descricaoAtracao"
                    value={descricaoAtracao}
                    placeholder="Adicione uma descrição para atração"
                    onChange={capturaDescricaoAtracao}
                    disabled={!editando}
                  />
                </div>
              </form>
              <button
                type="button"
                onClick={adicionaAtracao}
                disabled={!editando}
                className={`${s.botaoAdiciona} ${
                  editando ? s.ativo : s.inativo
                }`}
              >
                Adicionar Atração
              </button>
              <div className={s.listaAtracao}>
                {listaAtracao.map((item, index) => (
                  <div key={index}>
                    <div className={s.divAtracaoDescricao}>
                      <h3>{item.atracao}</h3>
                      <p>{item.atracaoDescricao}</p>
                    </div>
                    <div className={s.divBotaoDeleteAtracao}>
                      <button
                        type="button"
                        onClick={() => deletaAtracao(index)}
                      >
                        X
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {abaAtiva === "ingressos" && (
            <div className={s.abaIngresso}>
              <h2>Ingressos</h2>
              <form className={s.formIngresso}>
                <div>
                  <label htmlFor="ingresso">
                    Adicione um título para ingresso
                  </label>
                  <input
                    type="text"
                    id="ingresso"
                    value={ingresso}
                    placeholder="Digite o título do ingresso"
                    onChange={capturaTituloIngresso}
                    disabled={!editando}
                  />
                </div>
                <div>
                  <label htmlFor="descricaoIngresso">
                    Descrição do ingresso
                  </label>
                  <textarea
                    className={s.inputDescricaoIngresso}
                    type="text"
                    id="descricaoIngresso"
                    value={descricaoIngresso}
                    placeholder="Adicione uma descrição para ingresso"
                    onChange={capturaDescricaoIngresso}
                    disabled={!editando}
                  />
                </div>
              </form>
              <button
                type="button"
                onClick={adicionaIngresso}
                disabled={!editando}
                className={`${s.botaoAdiciona} ${
                  editando ? s.ativo : s.inativo
                }`}
              >
                Adicionar Ingresso
              </button>
              <div className={s.listaIngresso}>
                {listaIngresso.map((item, index) => (
                  <div key={index}>
                    <div className={s.divIngressoDescricao}>
                      <h3>{item.ingresso}</h3>
                      <p>{item.ingressoDescricao}</p>
                    </div>
                    <div className={s.divBotaoDeleteIngresso}>
                      <button
                        type="button"
                        onClick={() => deletaIngresso(index)}
                      >
                        X
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {abaAtiva === "promocoes" && (
            <div className={s.abaPromocao}>
              <h2>Promoções</h2>
              <form className={s.formPromocao}>
                <div>
                  <label htmlFor="promocao">
                    Adicione um título para promoção
                  </label>
                  <input
                    type="text"
                    id="promocao"
                    value={promocao}
                    placeholder="Digite o título da promoção"
                    onChange={capturaTituloPromocao}
                    disabled={!editando}
                  />
                </div>
                <div>
                  <label htmlFor="descricaoPromocao">
                    Descrição da promoção
                  </label>
                  <textarea
                    className={s.inputDescricaoPromocao}
                    type="text"
                    id="descricaoPromocao"
                    value={descricaoPromocao}
                    placeholder="Adicione uma descrição para promoção"
                    onChange={capturaDescricaoPromocao}
                    disabled={!editando}
                  />
                </div>
              </form>
              <button
                type="button"
                onClick={adicionaPromocao}
                disabled={!editando}
                className={`${s.botaoAdiciona} ${
                  editando ? s.ativo : s.inativo
                }`}
              >
                Adicionar Promoção
              </button>
              <div className={s.listaPromocao}>
                {listaPromocao.map((item, index) => (
                  <div key={index}>
                    <div className={s.divPromocaoDescricao}>
                      <h3>{item.promocao}</h3>
                      <p>{item.promocaoDescricao}</p>
                    </div>
                    <div className={s.divBotaoDeletePromocao}>
                      <button
                        type="button"
                        onClick={() => deletaPromocao(index)}
                      >
                        X
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className={s.cadastroDivButtom}>
            <button
              type="button"
              style={{
                visibility: abaAtiva === "Dados Gerais" ? "hidden" : "visible",
              }}
              onClick={botao1}
            >
              Anterior
            </button>

            <button
              type="button"
              style={{
                visibility: abaAtiva === "promocoes" ? "hidden" : "visible",
              }}
              onClick={botao2}
            >
              {abaAtiva === "promocoes" ? "Cadastrar Evento" : "Próximo"}
            </button>
          </div>
          <div className={s.cadastroDivButtom}>
            <button type="button" onClick={enviarDados}>
              {editando ? "Salvar alterações" : "Alterar dados"}
            </button>

            <button
              className={s.botaoDelete}
              type="button"
              onClick={deletarEvento}
            >
              {editando ? "Cancelar" : "Excluir Evento"}
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
