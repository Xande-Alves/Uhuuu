import s from "./perfilSeacher.module.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PerfilSeacher({ loggedUser, setLoggedUser }) {
  const [editando, setEditando] = useState(false);
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [data_nascimento, setData_nascimento] = useState("");
  const [email, setEmail] = useState(loggedUser.email);
  const [telefone, setTelefone] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");

  useEffect(() => {
    if (loggedUser) {
      setNome(loggedUser.nome || "");
      setSobrenome(loggedUser.sobrenome || "");
      setData_nascimento(loggedUser.data_nascimento || "");
      setEmail(loggedUser.email || "");
      setTelefone(loggedUser.telefone || "");
    }
  }, [loggedUser]);

  const capturaNome = (e) => setNome(e.target.value);
  const capturaSobrenome = (e) => setSobrenome(e.target.value);
  const capturaDataNascimento = (e) => setData_nascimento(e.target.value);
  const capturaTelefone = (e) => {
    const valorDigitado = e.target.value.replace(/\D/g, "");
    const max11Digitos = valorDigitado.slice(0, 11);
    setTelefone(max11Digitos);
  };
  const capturaSenha = (e) => setSenha(e.target.value);
  const capturaConfirmaSenha = (e) => setConfirmaSenha(e.target.value);

  function formatarTelefone(numero) {
    const numeros = numero.replace(/\D/g, "");
    if (numeros.length === 11) {
      const ddd = numeros.slice(0, 2);
      const parte1 = numeros.slice(2, 7);
      const parte2 = numeros.slice(7);
      return `(${ddd}) ${parte1}-${parte2}`;
    }
    return numero;
  }

  const enviarDados = async (e) => {
    e.preventDefault();
    if (!editando) {
      // Ativa modo edição, sem enviar nada
      setEditando(true);
      return;
    }

    //CERTIFICA A NÃO EXISTENCIA DE NUMEROS E CARACTERES ESPECIAIS NO NOME
    for (const caractere of nome) {
      if (!/[a-zA-Z]/.test(caractere)) {
        alert(
          "O campo nome não deve possuir números ou caracteres especiais. Por favor, tente novamente."
        );
        return;
      }
    }

    //CERTIFICA A NÃO EXISTENCIA DE NUMEROS E CARACTERES ESPECIAIS NO SOBRENOME
    for (const caractere of sobrenome) {
      if (!/[a-zA-Z ]/.test(caractere)) {
        alert(
          "O campo sobrenome não deve possuir números ou caracteres especiais. Por favor, tente novamente."
        );
        return;
      }
    }

    // VERIFICA SE IDADE É MENOR QUE 100 ANOS
    const hoje = new Date();
    const nascimento = new Date(data_nascimento);
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const mesAtual = hoje.getMonth();
    const diaAtual = hoje.getDate();
    const mesNascimento = nascimento.getMonth();
    const diaNascimento = nascimento.getDate();
    // Ajusta a idade se a pessoa ainda não fez aniversário este ano
    if (
      mesAtual < mesNascimento ||
      (mesAtual === mesNascimento && diaAtual < diaNascimento)
    ) {
      idade--;
    }
    if (idade > 100) {
      alert(
        "Os dados indicam idade maior que 100 anos. Por favor verifique os dados e tente novamente."
      );
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
    const endPointAPI = "https://api-uhuuu.onrender.com/atualizar_seacher";

    const dadosAEnviar = {
      nome,
      sobrenome,
      data_nascimento,
      email,
      telefone,
    };

    if (senha != "") {
      dadosAEnviar.senha = senha;
    }

    try {
      const resposta = await axios.put(endPointAPI, dadosAEnviar);
      alert("Dados atualizados com sucesso!");

      // Limpa os campos após o envio bem-sucedido
      setNome(nome);
      setSobrenome(sobrenome);
      setData_nascimento(data_nascimento);
      setTelefone(telefone);
      setSenha("");
      setConfirmaSenha("");

      setEditando(false);
    } catch (erro) {
      console.error("Erro ao cadastrar usuário buscador:", erro);
      alert(
        "Erro ao atualizar usuário buscador. Verifique os dados e tente novamente."
      );
      setEditando(false);
    }
  };

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
    const endPointAPI = "https://api-uhuuu.onrender.com/deletar_seacher";

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
              <label className={s.labelCadastro} htmlFor="nome">
                Nome
              </label>
              <input
                type="text"
                id="nome"
                value={nome}
                onChange={capturaNome}
                disabled={!editando}
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
                value={sobrenome}
                onChange={capturaSobrenome}
                disabled={!editando}
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
                value={data_nascimento}
                onChange={capturaDataNascimento}
                disabled={!editando}
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
                value={formatarTelefone(telefone)}
                onChange={capturaTelefone}
                disabled={!editando}
                required
              />
            </div>
            <div>
              <label htmlFor="senha">Nova Senha</label>
              <input
                type="password"
                id="senha"
                value={senha}
                onChange={capturaSenha}
                disabled={!editando}
              />
            </div>
            <div>
              <label htmlFor="confirmaSenha">Confirma Senha</label>
              <input
                type="password"
                id="confirmaSenha"
                value={confirmaSenha}
                onChange={capturaConfirmaSenha}
                disabled={!editando}
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
