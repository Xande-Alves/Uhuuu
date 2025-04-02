import Footer from "../../../Components/Footer/Footer";
import Header from "../../../Components/Header/Header";
import s from "./cadastroOffer.module.scss";

export default function CadastroOffer() {
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
                required
              />
            </div>
            <div className={s.endereco}>
              <label htmlFor="endereço">Endereço</label>
              <div className={s.dadosEndereco}>
                <div className={s.rua}>
                  <div>
                    <label htmlFor="logradouro">Logradouro</label>
                    <input
                      className={s.inputLogradouro}
                      type="text"
                      id="logradouro"
                      placeholder="Digite sua rua, avenida..."
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
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="complemento">Complemento</label>
                    <input
                      type="text"
                      id="complemento"
                      placeholder="Complemento do endereço"
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
                      required
                    />
                  </div>
                  <div className={s.divCidade}>
                    <label htmlFor="cidade">Cidade</label>
                    <input
                      type="text"
                      id="cidade"
                      placeholder="Digite a cidade"
                      required
                    />
                  </div>
                  <div className={s.divEstado}>
                    <label htmlFor="estado">Estado</label>
                    <input type="text" id="estado" required />
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
                required
              />
            </div>
            <div>
              <label htmlFor="telefone">Telefone</label>
              <input
                type="tel"
                id="telefone"
                placeholder="Digite seu telefone"
                required
              />
            </div>
            <div>
              <label htmlFor="password">Senha</label>
              <input
                type="password"
                id="password"
                placeholder="Digite sua senha"
                required
              />
            </div>
            <div>
              <label htmlFor="passwordConfirma">Confirme sua senha</label>
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
