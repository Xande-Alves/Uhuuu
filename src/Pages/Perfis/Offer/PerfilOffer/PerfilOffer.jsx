import s from "./perfilOffer.module.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PerfilOffer({ loggedUser, setLoggedUser }) {
  const [editando, setEditando] = useState(false);
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [email, setEmail] = useState(loggedUser.email);
  const [telefone, setTelefone] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");

  useEffect(() => {
    if (loggedUser) {
      setNome(loggedUser.nome || "");
      setLogradouro(loggedUser.logradouro || "");
      setNumero(loggedUser.numero || "");
      setComplemento(loggedUser.complemento || "");
      setBairro(loggedUser.bairro || "");
      setCidade(loggedUser.cidade || "");
      setEstado(loggedUser.estado || "");
      setEmail(loggedUser.email || "");
      setTelefone(loggedUser.telefone || "");
    }
  }, [loggedUser]);

  const capturaNome = (e) => {
    setNome(e.target.value);
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
  const capturaTelefone = (e) => {
    const valorDigitado = e.target.value.replace(/\D/g, ""); // Remove não-dígitos
    const max11Digitos = valorDigitado.slice(0, 11); // Limita a 11 dígitos
    setTelefone(max11Digitos);
  };
  const capturaSenha = (e) => {
    setSenha(e.target.value);
  };
  const capturaConfirmaSenha = (e) => {
    setConfirmaSenha(e.target.value);
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
    e.preventDefault();
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

    //CONFIRMA QUE A SENHA E CONFIRMA SENHA SÃO IGUAIS
    if (senha !== confirmaSenha) {
      alert(
        "Os campos de senha e confirmação de senha não coincidem. Por favor, tente novamente."
      );
      return;
    }

    //LOGICA DO PUT
    const endPointAPI = "https://api-uhuuu.onrender.com/atualizar_offer";

    const dadosAEnviar = {
      nome,
      logradouro,
      numero,
      complemento,
      bairro,
      cidade,
      estado,
      email,
      telefone,
    };

    if (senha != "") {
      dadosAEnviar.senha = senha;
    }

    try {
      const resposta = await axios.put(endPointAPI, dadosAEnviar);
      alert("Dados atualizados com sucesso!");

      // Atualiza o loggedUser com os novos dados
      setLoggedUser((prev) => ({
        ...prev,
        ...dadosAEnviar,
      }));

      // Limpa apenas as senhas
      setSenha("");
      setConfirmaSenha("");
      setEditando(false);
    } catch (erro) {
      console.error("Erro ao atualizar usuário ofertador:", erro);
      alert(
        "Erro ao atualizar usuário ofertador. Verifique os dados e tente novamente."
      );
      setEditando(false);
    }
  };

  //DELETAR CONTA
  const deletarConta = async (e) => {
    e.preventDefault();
    if (editando) {
      // Cancela a edição e atualização de dados
      setEditando(false);
      return;
    }

    const confirmacao = confirm(
      "Tem certeza de que deseja deletar sua conta? Esta ação é irreversível!"
    );

    if (!confirmacao) {
      return; // Usuário cancelou a exclusão
    }

    //LOGICA DO DELETE
    const endPointAPI = "https://api-uhuuu.onrender.com/deletar_offer";

    const dadosAEnviar = { email };

    try {
      const resposta = await axios.delete(endPointAPI, {
        data: dadosAEnviar,
      });
      alert("Conta deletada com sucesso!");
      setLoggedUser(null);
      navigate("/");
    } catch (erro) {
      console.error("Erro ao deletar usuário buscador:", erro);
      alert("Erro ao deletar usuário buscador.");
    }
  };

  return (
    <>
      <div className={s.cadastroContent}>
        <section className={s.cadastro}>
          <h1>Dados do Perfil</h1>
          <form>
            <div>
              <label htmlFor="nome">Nome</label>
              <input
                type="text"
                id="nome"
                placeholder="Digite seu primeiro nome"
                value={nome}
                onChange={capturaNome}
                disabled={!editando}
                required
              />
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
                      placeholder="Digite sua rua, avenida..."
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
                      placeholder="Digite seu bairro"
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
              <label htmlFor="telefone">Telefone</label>
              <input
                type="tel"
                id="telefone"
                placeholder="Digite seu telefone. Apenas números."
                value={formatarTelefone(telefone)}
                onChange={capturaTelefone}
                disabled={!editando}
                required
              />
            </div>
            <div>
              <label htmlFor="password">Senha</label>
              <input
                type="password"
                id="password"
                placeholder="Digite sua senha"
                value={senha}
                onChange={capturaSenha}
                disabled={!editando}
                required
              />
            </div>
            <div className={s.divConfirmaSenha}>
              <label htmlFor="passwordConfirma">Confirme sua senha</label>
              <input
                type="password"
                id="passwordConfirma"
                placeholder="Confirme sua senha"
                value={confirmaSenha}
                onChange={capturaConfirmaSenha}
                disabled={!editando}
                required
              />
            </div>
            <div className={s.cadastroDivButtom}>
              <button type="button" onClick={enviarDados}>
                {editando ? "Salvar alterações" : "Alterar dados"}
              </button>

              <button
                className={s.botaoDelete}
                type="button"
                onClick={deletarConta}
              >
                {editando ? "Cancelar" : "Deletar Perfil"}
              </button>
            </div>
          </form>
        </section>
      </div>
    </>
  );
}
