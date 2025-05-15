import s from "./cadastroSeacher.module.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function CadastroSeacher() {
  const navigate = useNavigate();

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
    setEmail(e.target.value.toLowerCase());
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

  //BUSCA (GET) DOS CADASTRADOS PARA VERIFICAR DUPLICIDADE DE EMAIL
  const [seachers, setSeachers] = useState([]);

  useEffect(() => {
    const fetchSeachers = async () => {
      try {
        const response = await axios.get(
          "https://api-uhuuu.onrender.com/cadastrados_seachers"
        );
        setSeachers(response.data);
      } catch (error) {
        console.error("Erro ao buscar usuários cadastrados:", error);
      }
    };

    fetchSeachers();
  }, []);


  const enviarDados = async (e) => {
    e.preventDefault();

    //VERIFICAÇÃO DE EMAIL JÁ CADSTRADO NO SISTEMA
    const userSeacher = seachers.find((user) => user.email === email);

    if (userSeacher) {
      alert("E-mail já possui cadastro no sistema.");
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
      navigate("/");
      // Limpa os campos após o envio bem-sucedido
      // setNome("");
      // setSobrenome("");
      // setData_nascimento("");
      // setEmail("");
      // setTelefone("");
      // setSenha("");
      // setConfirmaSenha("");
    } catch (erro) {
      console.error("Erro ao cadastrar usuário buscador:", erro);
      alert(
        "Erro ao cadastrar usuário buscador. Verifique os dados e tente novamente."
      );
    }
  };

  return (
    <>
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
                value={formatarTelefone(telefone)}
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
    </>
  );
}
