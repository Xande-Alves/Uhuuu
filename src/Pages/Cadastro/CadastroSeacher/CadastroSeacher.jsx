import Footer from "../../../Components/Footer/Footer";
import Header from "../../../Components/Header/Header";
import s from "./cadastroSeacher.module.scss";

export default function CadastroSeacher() {
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
                required
              />
            </div>
            <div className={s.cadastroDivButtom}>
              <button type="submit">Cadastrar</button>
            </div>
          </form>
        </section>
      </div>
      <Footer />
    </>
  );
}
