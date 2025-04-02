import Footer from "../../../Components/Footer/Footer";
import Header from "../../../Components/Header/Header";
import s from "./cadastroSeacher.module.scss";
import axios from "axios";
import { useState } from "react";

export default function CadastroSeacher() {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [data_nascimento, setData_nascimento] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");

  const capturaNome = (e) => {
    setNome(e.target.value);
  };
  const capturaSobrenome = (e) => {
    setSobrenome(e.target.value);
  };
  const capturaDataNascimento = (e) => {
    setData_nascimento(e.target.value);
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

    const endPointAPI = "https://api-uhuuu.onrender.com/cadastrar_seacher";

    const dadosAEnviar = {
      nome,
      sobrenome,
      data_nascimento,
      email,
      telefone,
      senha,
    };

    try {
      const resposta = await axios.post(endPointAPI, dadosAEnviar);
      alert("Usuário buscador cadastrado com sucesso!");

      // Limpa os campos após o envio bem-sucedido
      setNome("");
      setSobrenome("");
      setData_nascimento("");
      setEmail("");
      setTelefone("");
      setSenha("");
      setConfirmaSenha("");
    } catch (erro) {
      console.error("Erro ao cadastrar usuário buscador:", erro);
      alert(
        "Erro ao cadastrar usuário buscador. Verifique os dados e tente novamente."
      );
    }
  };

  return (
    <>
      <Header />
      <div className={s.cadastroContent}>
        <section className={s.cadastro}>
          <h1>Cadastro de buscadores</h1>
          <form>
            <div>
              <label className={s.labelCadastro} htmlFor="nome">
                Nome
              </label>
              <input
                type="text"
                id="nome"
                placeholder="Digite seu primeiro nome"
                value={nome}
                onChange={capturaNome}
                required
              />
            </div>
            <div>
              <label className={s.labelCadastro} htmlFor="sobrenome">
                Sobrenome
              </label>
              <input
                type="text"
                id="sobrenome"
                placeholder="Digite seu sobrenome"
                value={sobrenome}
                onChange={capturaSobrenome}
                required
              />
            </div>
            <div>
              <label className={s.labelCadastro} htmlFor="dataNascimento">
                Data de Nascimento
              </label>
              <input
                type="date"
                id="dataNascimento"
                placeholder="Digite sua data de nascimento"
                value={data_nascimento}
                onChange={capturaDataNascimento}
                required
              />
            </div>
            <div>
              <label className={s.labelCadastro} htmlFor="email">
                E-mail
              </label>
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
              <label className={s.labelCadastro} htmlFor="telefone">
                Telefone
              </label>
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
              <label className={s.labelCadastro} htmlFor="password">
                Senha
              </label>
              <input
                type="password"
                id="password"
                placeholder="Digite sua senha"
                value={senha}
                onChange={capturaSenha}
                required
              />
            </div>
            <div>
              <label className={s.labelCadastro} htmlFor="passwordConfirma">
                Confirme sua senha
              </label>
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
