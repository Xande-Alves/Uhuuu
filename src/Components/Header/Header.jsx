import s from "./header.module.scss";
import React, { useState } from "react";
import smile from "../../assets/Home.png";
import uhuuu from "../../assets/Logo12.png";
import { Link, useNavigate } from "react-router-dom";
import alexandre from "../../assets/Alexandre.jpeg";
import carlos from "../../assets/Carlos.jpg";
import elton from "../../assets/Elton.jpeg";
import yuri from "../../assets/yuri.jpeg";
import gabriel from "../../assets/Gabriel.jpeg";
import wesley from "../../assets/Wesley.jpg";
import { Value } from "sass";

export default function Header() {
  //LÓGICA DO MODAL
  const [isSobreModalOpen, setIsSobreModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false); // Novo estado para o modal de contato
  const [isTipoLoginModalOpen, setIsTipoLoginModalOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const openLoginModal = () => {
    setIsLoginModalOpen(true); // Abre o modal de login
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false); // Fecha o modal de login
  };

  const openContactModal = () => {
    setIsContactModalOpen(true); // Abre o modal de contato
  };

  const closeContactModal = () => {
    setIsContactModalOpen(false); // Fecha o modal de contato
  };

  const openSobreModal = () => {
    setIsSobreModalOpen(true); // Abre o modal de sobre
  };

  const closeSobreModal = () => {
    setIsSobreModalOpen(false); // Fecha o modal de sobre
  };

  const openTipoLoginModal = () => {
    setIsTipoLoginModalOpen(true); // Abre o modal de tipo login
    setIsLoginModalOpen(false);
  };

  const closeTipoLoginModal = () => {
    setIsTipoLoginModalOpen(false); // Fecha o modal de tipo login
  };

  const handleLogin = () => {
    setIsAuthenticated(true); // Usuário autenticado
  };

  const handleLogout = () => {
    setIsAuthenticated(false); // Usuário deslogado
  };

  // MODAL DE SOBRE
  function SobreModal({ isOpenC, closeModalC }) {
    if (!isOpenC) return null; // Não renderiza o modal se isOpen for falso

    return (
      <div className={s.modalSobre}>
        <section className={s.sectionSobre}>
          <div className={s.buttonCloseSobre}>
            <button onClick={closeModalC}>❌</button>
          </div>
          <section>
            <h1>Sobre o Uhuuu!!!</h1>
            <p>
              O Uhuuu!!! nasceu como um projeto desenvolvido para apresentação
              no primeiro módulo do curso técnico de Desenvolvimento de Sistemas
              da Escola Técnica Estadual Jurandir Bezerra Lins. Desde então,
              evoluiu para um projeto pessoal, com o objetivo de conectar
              pessoas a experiências únicas de entretenimento e lazer.
            </p>
            <p>
              A plataforma tem como propósito unir usuários a estabelecimentos e
              eventos variados, atendendo a diferentes preferências e estilos.
              De baladas e shows a exposições, passeios ecológicos e até eventos
              religiosos, o Uhuuu!!! oferece algo para todos, tornando-se uma
              ferramenta indispensável para qualquer tipo de usuário.
            </p>
            <p>
              Quando um organizador cadastra seu evento na plataforma, ele se
              torna acessível para pesquisa pelos usuários cadastrados. Essa
              dinâmica beneficia ambas as partes: os usuários ganham acesso a um
              catálogo diversificado para enriquecer seus momentos de lazer,
              enquanto os organizadores aumentam as chances de sucesso de seus
              eventos.
            </p>
            <p>
              Junte-se a nós e descubra todas as possibilidades que o Uhuuu!!!
              tem a oferecer. Viva momentos inesquecíveis com a nossa
              plataforma!
            </p>
          </section>
        </section>
      </div>
    );
  }

  // function SobreModal({ isOpenC, closeModalC }) {
  //   if (!isOpenC) return null; // Não renderiza o modal se isOpen for falso

  //   return (
  //     <div className={s.modalSobre}>
  //       <section className={s.sectionSobre}>
  //         <div className={s.buttonCloseSobre}>
  //           <button onClick={closeModalC}>❌</button>
  //         </div>
  //         <div>
  //           <h2>Sobre</h2>
  //           <p>Grupo de alunos idealizadores do Uhuuu!</p>
  //         </div>
  //         <div className={s.alunosContainer}>
  //           <div>
  //             <section>
  //               <img src={alexandre} alt="Foto Alexandre Alves" />
  //               <p>Alexandre Alves</p>
  //             </section>
  //             <section>
  //               <img src={carlos} alt="Foto Carlos Jansen" />
  //               <p>Carlos Jansen</p>
  //             </section>
  //             <section>
  //               <img src={elton} alt="Foto Elton Melo" />
  //               <p>Elton Melo</p>
  //             </section>
  //           </div>
  //           <div>
  //             <section>
  //               <img src={gabriel} alt="Foto Gabriel Francisco" />
  //               <p>Gabriel Francisco</p>
  //             </section>
  //             <section>
  //               <img src={wesley} alt="Foto Wesley Paredes" />
  //               <p>Wesley Paredes</p>
  //             </section>
  //             <section>
  //               <img src={yuri} alt="Foto Yuri D'Albuquerque" />
  //               <p>Yuri D'Albuquerque</p>
  //             </section>
  //           </div>
  //         </div>
  //       </section>
  //     </div>
  //   );
  // }

  // MODAL DE TIPO DE LOGIN
  function TipoLoginModal({ isOpenC, closeModalC }) {
    if (!isOpenC) return null; // Não renderiza o modal se isOpen for falso

    return (
      <div className={s.modalTipoLogin}>
        <div className={s.modalTipoLoginWindow}>
          <div className={s.buttonCloseTipoLogin}>
            <button onClick={closeModalC}>❌</button>
          </div>
          <div className={s.tiposLogin}>
            <Link to="/CadastroSeacher" className={s.linkSemEstilo}>
              <div className={s.buscadores}>
                <h2>Buscadores</h2>
                <p>
                  Tipo de cadastro destinado a usuários que buscam eventos
                  alinhados às suas necessidades.
                </p>
              </div>
            </Link>
            <Link to="/CadastroOffer" className={s.linkSemEstilo}>
              <div className={s.ofertadores}>
                <h2>Ofertadores</h2>
                <p>
                  Tipo de cadastro destinado a usuários que produzem ou
                  organizam eventos e desejam divulgá-los no Uhuuu!!!
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // MODAL DE CONTATOS
  function ContactModal({ isOpenC, closeModalC }) {
    if (!isOpenC) return null; // Não renderiza o modal se isOpen for falso

    return (
      <div className={s.modalContatos}>
        <section>
          <div>
            <button onClick={closeModalC}>❌</button>
          </div>
          <h2>Contatos</h2>
          <p>
            <strong>Email:</strong> contato@uhuuu.com
          </p>
          <p>
            <strong>Telefone:</strong> +55 81 9xxxx-4321
          </p>
          <p>
            <strong>Endereço:</strong> Cais do Apolo, 222 - Recife, PE, Cep
            50030-230
          </p>
        </section>
      </div>
    );
  }

  //MODAL DE LOGIN
  function LoginModal({ isOpen, closeModal, onLogin }) {
    if (!isOpen) return null; // Não renderiza o modal se isOpen for falso

    const handleLogin = (event) => {
      event.preventDefault();
      // Aqui você pode adicionar a lógica de autenticação (verificação de usuário e senha)
      onLogin(); // Ao fazer login, chamamos o onLogin que vai mudar o estado de autenticado
      closeModal(); // Fecha o modal após o login
    };

    return (
      <div className={s.modalLogin}>
        <section>
          <div>
            <button onClick={closeModal}>❌</button>
          </div>
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <div>
              <label htmlFor="username">Usuário</label>
              <input
                type="text"
                id="username"
                placeholder="Digite seu usuário"
                required
              />
            </div>
            <div>
              <label htmlFor="password">Senha </label>
              <input
                type="password"
                id="password"
                placeholder="  Digite sua senha"
                required
              />
            </div>
            <button type="submit">Entrar</button>
          </form>
          <div className={s.cadastrar}>
            <a onClick={openTipoLoginModal}>Ainda não sou cadastrado.</a>
          </div>
        </section>
      </div>
    );
  }

  //FUNÇÃO DE PESQUISA
  const handleSearch = (event) => {
    event.preventDefault();
    const query = event.target.elements.search.value;
    console.log("Buscando por:", query);
  };

  //FUNÇÃO DE TROCA DE CIDADES
  const navigate = useNavigate(); // Hook para navegação
  const [selectedPage, setSelectedPage] = useState(""); // Estado para a cidade selecionada

  const handleSelectChange = (event) => {
    const valueC = event.target.value;
    setSelectedPage(valueC);
    navigate(valueC); // Navega para o valor selecionado
  };

  return (
    <>
      <header className={s.header}>
        <section className={s.headerLogos}>
          <Link to="/">
            <img
              src={smile}
              className={s.homeSmile}
              alt="Logo do Uhuuu, emoji de óculos sorrindo"
            />
          </Link>
          <img src={uhuuu} className={s.homeUhuuu} alt="Nome Uhuuu em arte." />
        </section>
        <section className={s.formNavSelect}>
          <form action="#" onSubmit={handleSearch}>
            <input type="search" name="" id="" placeholder="Buscar" />
            <Link to="PesquisaGeral">
              <button>🔎</button>
            </Link>
          </form>
          <nav>
            <ul>
              <li>
                <a
                  className={s.modais}
                  href="#"
                  title="Sobre"
                  onClick={openSobreModal}
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  className={s.modais}
                  href="#"
                  title="Contato"
                  onClick={openContactModal}
                >
                  Contato
                </a>
              </li>
              <li>
                {isAuthenticated ? (
                  <span className={s.welcomeMessage}>
                    Bem-Vindo <div>😁</div>
                    <button onClick={handleLogout}>Sair</button>
                  </span>
                ) : (
                  <a
                    className={s.modais}
                    href="#"
                    title="Login"
                    onClick={openLoginModal}
                  >
                    Login
                  </a>
                )}
              </li>
            </ul>
          </nav>
          <select value="" onChange={handleSelectChange}>
            <option value="" disabled>
              Cidades
            </option>
            <option value="/Recife">Recife - PE</option>
            <option value="/Olinda">Olinda - PE</option>
            <option value="/Paulista">Paulista - PE</option>
          </select>
        </section>
      </header>

      {/* Modal de sobre */}
      <SobreModal isOpenC={isSobreModalOpen} closeModalC={closeSobreModal} />

      {/* Modal de tipo de login */}
      <TipoLoginModal
        isOpenC={isTipoLoginModalOpen}
        closeModalC={closeTipoLoginModal}
      />

      {/* Modal de Contato */}
      <ContactModal
        isOpenC={isContactModalOpen}
        closeModalC={closeContactModal}
      />

      {/* Modal de Login */}
      <LoginModal
        isOpen={isLoginModalOpen}
        closeModal={closeLoginModal}
        onLogin={handleLogin}
      />
    </>
  );
}
