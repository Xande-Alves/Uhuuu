import Footer from "../../../Components/Footer/Footer";
import Header from "../../../Components/Header/Header";
import s from "./cadastroOffer.module.scss";
import { useState } from "react";
import axios from "axios";

export default function CadastroOffer() {
  const [nome, setNome] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");

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
  const capturaEmail = (e) => {
    setEmail(e.target.value);
  };
  const capturaTelefone = (e) => {
    setTelefone(e.target.value);
  };
  const capturaSenha = (e) => {
    setSenha(e.target.value);
  };
  const capturaConfirmaSenha = (e) => {
    setConfirmaSenha(e.target.value);
  };

  const enviarDados = async (e) => {
    e.preventDefault();

    if (senha !== confirmaSenha) {
      alert(
        "Os campos de senha e confirmação de senha não coincidem. Por favor, tente novamente."
      );
      return;
    }

    const endPointAPI = "https://api-uhuuu.onrender.com/cadastrar_offer";

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
      senha,
    };

    try {
      const resposta = await axios.post(endPointAPI, dadosAEnviar);
      alert("Usuário ofertador cadastrado com sucesso!");

      // Limpa os campos após o envio bem-sucedido
      setNome("");
      setLogradouro("");
      setNumero("");
      setComplemento("");
      setBairro("");
      setCidade("");
      setEstado("");
      setEmail("");
      setTelefone("");
      setSenha("");
      setConfirmaSenha("");
    } catch (erro) {
      console.error("Erro ao cadastrar usuário buscador:", erro);
      alert(
        "Erro ao cadastrar usuário ofertador. Verifique os dados e tente novamente."
      );
    }
  };

  return (
    <>
      <Header />
      <div className={s.cadastroContent}>
        <section className={s.cadastro}>
          <h1>Cadastro de ofertadores</h1>
          <form>
            <div>
              <label htmlFor="nome">Nome</label>
              <input
                type="text"
                id="nome"
                placeholder="Digite seu primeiro nome"
                value={nome}
                onChange={capturaNome}
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
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="complemento">Complemento</label>
                    <input
                      type="text"
                      id="complemento"
                      placeholder="Complemento do endereço"
                      value={complemento}
                      onChange={capturaComplemento}
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
                placeholder="Digite seu e-mail"
                value={email}
                onChange={capturaEmail}
                required
              />
            </div>
            <div>
              <label htmlFor="telefone">Telefone</label>
              <input
                type="tel"
                id="telefone"
                placeholder="Digite seu telefone"
                value={telefone}
                onChange={capturaTelefone}
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
                required
              />
            </div>
            <div className={s.cadastroDivButtom}>
              <button type="submit" onClick={enviarDados}>
                Cadastrar
              </button>
            </div>
          </form>
        </section>
      </div>
      <Footer />
    </>
  );
}
