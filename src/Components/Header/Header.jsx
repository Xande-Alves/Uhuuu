import s from "./header.module.scss";
import React, { useState, useEffect } from "react";
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
import axios from "axios";
import Select from "react-select";
import { useCidade } from "../../contexts/CidadeContext";

export default function Header({ loggedUser, setLoggedUser }) {
  const cidades = [
    { value: "Rio Branco - AC", label: "Rio Branco - AC" },
    { value: "Cruzeiro do Sul - AC", label: "Cruzeiro do Sul - AC" },
    { value: "Sena Madureira - AC", label: "Sena Madureira - AC" },
    { value: "Tarauacá - AC", label: "Tarauacá - AC" },
    { value: "Feijó - AC", label: "Feijó - AC" },
    { value: "Brasiléia - AC", label: "Brasiléia - AC" },
    { value: "Senador Guiomard - AC", label: "Senador Guiomard - AC" },
    { value: "Plácido de Castro - AC", label: "Plácido de Castro - AC" },
    { value: "Xapuri - AC", label: "Xapuri - AC" },
    { value: "Marechal Thaumaturgo - AC", label: "Marechal Thaumaturgo - AC" },
    { value: "Maceió - AL", label: "Maceió - AL" },
    { value: "Arapiraca - AL", label: "Arapiraca - AL" },
    { value: "Rio Largo - AL", label: "Rio Largo - AL" },
    { value: "Palmeira dos Índios - AL", label: "Palmeira dos Índios - AL" },
    { value: "União dos Palmares - AL", label: "União dos Palmares - AL" },
    { value: "Penedo - AL", label: "Penedo - AL" },
    {
      value: "São Miguel dos Campos - AL",
      label: "São Miguel dos Campos - AL",
    },
    { value: "Campo Alegre - AL", label: "Campo Alegre - AL" },
    { value: "Delmiro Gouveia - AL", label: "Delmiro Gouveia - AL" },
    { value: "Coruripe - AL", label: "Coruripe - AL" },
    { value: "Macapá - AP", label: "Macapá - AP" },
    { value: "Santana - AP", label: "Santana - AP" },
    { value: "Laranjal do Jari - AP", label: "Laranjal do Jari - AP" },
    { value: "Oiapoque - AP", label: "Oiapoque - AP" },
    { value: "Mazagão - AP", label: "Mazagão - AP" },
    { value: "Porto Grande - AP", label: "Porto Grande - AP" },
    { value: "Tartarugalzinho - AP", label: "Tartarugalzinho - AP" },
    {
      value: "Pedra Branca do Amapari - AP",
      label: "Pedra Branca do Amapari - AP",
    },
    { value: "Vitória do Jari - AP", label: "Vitória do Jari - AP" },
    { value: "Calçoene - AP", label: "Calçoene - AP" },
    { value: "Manaus - AM", label: "Manaus - AM" },
    { value: "Parintins - AM", label: "Parintins - AM" },
    { value: "Itacoatiara - AM", label: "Itacoatiara - AM" },
    { value: "Manacapuru - AM", label: "Manacapuru - AM" },
    { value: "Coari - AM", label: "Coari - AM" },
    { value: "Tabatinga - AM", label: "Tabatinga - AM" },
    { value: "Maués - AM", label: "Maués - AM" },
    { value: "Tefé - AM", label: "Tefé - AM" },
    { value: "Humaitá - AM", label: "Humaitá - AM" },
    { value: "Iranduba - AM", label: "Iranduba - AM" },
    { value: "Salvador - BA", label: "Salvador - BA" },
    { value: "Feira de Santana - BA", label: "Feira de Santana - BA" },
    { value: "Vitória da Conquista - BA", label: "Vitória da Conquista - BA" },
    { value: "Camaçari - BA", label: "Camaçari - BA" },
    { value: "Itabuna - BA", label: "Itabuna - BA" },
    { value: "Juazeiro - BA", label: "Juazeiro - BA" },
    { value: "Lauro de Freitas - BA", label: "Lauro de Freitas - BA" },
    { value: "Ilhéus - BA", label: "Ilhéus - BA" },
    { value: "Jequié - BA", label: "Jequié - BA" },
    { value: "Teixeira de Freitas - BA", label: "Teixeira de Freitas - BA" },
    { value: "Fortaleza - CE", label: "Fortaleza - CE" },
    { value: "Caucaia - CE", label: "Caucaia - CE" },
    { value: "Juazeiro do Norte - CE", label: "Juazeiro do Norte - CE" },
    { value: "Maracanaú - CE", label: "Maracanaú - CE" },
    { value: "Sobral - CE", label: "Sobral - CE" },
    { value: "Crato - CE", label: "Crato - CE" },
    { value: "Itapipoca - CE", label: "Itapipoca - CE" },
    { value: "Maranguape - CE", label: "Maranguape - CE" },
    { value: "Quixadá - CE", label: "Quixadá - CE" },
    { value: "Aquiraz - CE", label: "Aquiraz - CE" },
    { value: "Brasília - DF", label: "Brasília - DF" },
    { value: "Serra - ES", label: "Serra - ES" },
    { value: "Vila Velha - ES", label: "Vila Velha - ES" },
    { value: "Cariacica - ES", label: "Cariacica - ES" },
    { value: "Vitória - ES", label: "Vitória - ES" },
    {
      value: "Cachoeiro de Itapemirim - ES",
      label: "Cachoeiro de Itapemirim - ES",
    },
    { value: "Linhares - ES", label: "Linhares - ES" },
    { value: "Colatina - ES", label: "Colatina - ES" },
    { value: "São Mateus - ES", label: "São Mateus - ES" },
    { value: "Guarapari - ES", label: "Guarapari - ES" },
    { value: "Aracruz - ES", label: "Aracruz - ES" },
    { value: "Goiânia - GO", label: "Goiânia - GO" },
    { value: "Aparecida de Goiânia - GO", label: "Aparecida de Goiânia - GO" },
    { value: "Anápolis - GO", label: "Anápolis - GO" },
    { value: "Rio Verde - GO", label: "Rio Verde - GO" },
    { value: "Luziânia - GO", label: "Luziânia - GO" },
    {
      value: "Águas Lindas de Goiás - GO",
      label: "Águas Lindas de Goiás - GO",
    },
    { value: "Valparaíso de Goiás - GO", label: "Valparaíso de Goiás - GO" },
    { value: "Trindade - GO", label: "Trindade - GO" },
    { value: "Formosa - GO", label: "Formosa - GO" },
    { value: "Novo Gama - GO", label: "Novo Gama - GO" },
    { value: "São Luís - MA", label: "São Luís - MA" },
    { value: "Imperatriz - MA", label: "Imperatriz - MA" },
    { value: "São José de Ribamar - MA", label: "São José de Ribamar - MA" },
    { value: "Timon - MA", label: "Timon - MA" },
    { value: "Caxias - MA", label: "Caxias - MA" },
    { value: "Codó - MA", label: "Codó - MA" },
    { value: "Paço do Lumiar - MA", label: "Paço do Lumiar - MA" },
    { value: "Açailândia - MA", label: "Açailândia - MA" },
    { value: "Bacabal - MA", label: "Bacabal - MA" },
    { value: "Balsas - MA", label: "Balsas - MA" },
    { value: "Cuiabá - MT", label: "Cuiabá - MT" },
    { value: "Várzea Grande - MT", label: "Várzea Grande - MT" },
    { value: "Rondonópolis - MT", label: "Rondonópolis - MT" },
    { value: "Sinop - MT", label: "Sinop - MT" },
    { value: "Tangará da Serra - MT", label: "Tangará da Serra - MT" },
    { value: "Sorriso - MT", label: "Sorriso - MT" },
    { value: "Lucas do Rio Verde - MT", label: "Lucas do Rio Verde - MT" },
    { value: "Primavera do Leste - MT", label: "Primavera do Leste - MT" },
    { value: "Cáceres - MT", label: "Cáceres - MT" },
    { value: "Barra do Garças - MT", label: "Barra do Garças - MT" },
    { value: "Campo Grande - MS", label: "Campo Grande - MS" },
    { value: "Dourados - MS", label: "Dourados - MS" },
    { value: "Três Lagoas - MS", label: "Três Lagoas - MS" },
    { value: "Corumbá - MS", label: "Corumbá - MS" },
    { value: "Ponta Porã - MS", label: "Ponta Porã - MS" },
    { value: "Naviraí - MS", label: "Naviraí - MS" },
    { value: "Nova Andradina - MS", label: "Nova Andradina - MS" },
    { value: "Paranaíba - MS", label: "Paranaíba - MS" },
    { value: "Aquidauana - MS", label: "Aquidauana - MS" },
    { value: "Sidrolândia - MS", label: "Sidrolândia - MS" },
    { value: "Belo Horizonte - MG", label: "Belo Horizonte - MG" },
    { value: "Uberlândia - MG", label: "Uberlândia - MG" },
    { value: "Contagem - MG", label: "Contagem - MG" },
    { value: "Juiz de Fora - MG", label: "Juiz de Fora - MG" },
    { value: "Betim - MG", label: "Betim - MG" },
    { value: "Montes Claros - MG", label: "Montes Claros - MG" },
    { value: "Ribeirão das Neves - MG", label: "Ribeirão das Neves - MG" },
    { value: "Uberaba - MG", label: "Uberaba - MG" },
    { value: "Governador Valadares - MG", label: "Governador Valadares - MG" },
    { value: "Ipatinga - MG", label: "Ipatinga - MG" },
    { value: "Belém - PA", label: "Belém - PA" },
    { value: "Ananindeua - PA", label: "Ananindeua - PA" },
    { value: "Santarém - PA", label: "Santarém - PA" },
    { value: "Marabá - PA", label: "Marabá - PA" },
    { value: "Parauapebas - PA", label: "Parauapebas - PA" },
    { value: "Castanhal - PA", label: "Castanhal - PA" },
    { value: "Abaetetuba - PA", label: "Abaetetuba - PA" },
    { value: "Cametá - PA", label: "Cametá - PA" },
    { value: "Tucuruí - PA", label: "Tucuruí - PA" },
    { value: "Bragança - PA", label: "Bragança - PA" },
    { value: "João Pessoa - PB", label: "João Pessoa - PB" },
    { value: "Campina Grande - PB", label: "Campina Grande - PB" },
    { value: "Santa Rita - PB", label: "Santa Rita - PB" },
    { value: "Patos - PB", label: "Patos - PB" },
    { value: "Bayeux - PB", label: "Bayeux - PB" },
    { value: "Sousa - PB", label: "Sousa - PB" },
    { value: "Cajazeiras - PB", label: "Cajazeiras - PB" },
    { value: "Guarabira - PB", label: "Guarabira - PB" },
    { value: "Sapé - PB", label: "Sapé - PB" },
    { value: "Mamanguape - PB", label: "Mamanguape - PB" },
    { value: "Recife - PE", label: "Recife - PE" },
    {
      value: "Jaboatão dos Guararapes - PE",
      label: "Jaboatão dos Guararapes - PE",
    },
    { value: "Olinda - PE", label: "Olinda - PE" },
    { value: "Caruaru - PE", label: "Caruaru - PE" },
    { value: "Petrolina - PE", label: "Petrolina - PE" },
    { value: "Paulista - PE", label: "Paulista - PE" },
    {
      value: "Cabo de Santo Agostinho - PE",
      label: "Cabo de Santo Agostinho - PE",
    },
    { value: "Camaragibe - PE", label: "Camaragibe - PE" },
    { value: "Garanhuns - PE", label: "Garanhuns - PE" },
    {
      value: "Vitória de Santo Antão - PE",
      label: "Vitória de Santo Antão - PE",
    },
    { value: "Teresina - PI", label: "Teresina - PI" },
    { value: "Parnaíba - PI", label: "Parnaíba - PI" },
    { value: "Picos - PI", label: "Picos - PI" },
    { value: "Piripiri - PI", label: "Piripiri - PI" },
    { value: "Floriano - PI", label: "Floriano - PI" },
    { value: "Campo Maior - PI", label: "Campo Maior - PI" },
    { value: "Barras - PI", label: "Barras - PI" },
    { value: "União - PI", label: "União - PI" },
    { value: "Altos - PI", label: "Altos - PI" },
    { value: "Esperantina - PI", label: "Esperantina - PI" },
    { value: "Curitiba - PR", label: "Curitiba - PR" },
    { value: "Londrina - PR", label: "Londrina - PR" },
    { value: "Maringá - PR", label: "Maringá - PR" },
    { value: "Ponta Grossa - PR", label: "Ponta Grossa - PR" },
    { value: "Cascavel - PR", label: "Cascavel - PR" },
    { value: "São José dos Pinhais - PR", label: "São José dos Pinhais - PR" },
    { value: "Foz do Iguaçu - PR", label: "Foz do Iguaçu - PR" },
    { value: "Colombo - PR", label: "Colombo - PR" },
    { value: "Guarapuava - PR", label: "Guarapuava - PR" },
    { value: "Paranaguá - PR", label: "Paranaguá - PR" },
    { value: "Rio de Janeiro - RJ", label: "Rio de Janeiro - RJ" },
    { value: "São Gonçalo - RJ", label: "São Gonçalo - RJ" },
    { value: "Duque de Caxias - RJ", label: "Duque de Caxias - RJ" },
    { value: "Nova Iguaçu - RJ", label: "Nova Iguaçu - RJ" },
    { value: "Niterói - RJ", label: "Niterói - RJ" },
    { value: "Belford Roxo - RJ", label: "Belford Roxo - RJ" },
    {
      value: "Campos dos Goytacazes - RJ",
      label: "Campos dos Goytacazes - RJ",
    },
    { value: "São João de Meriti - RJ", label: "São João de Meriti - RJ" },
    { value: "Petrópolis - RJ", label: "Petrópolis - RJ" },
    { value: "Volta Redonda - RJ", label: "Volta Redonda - RJ" },
    { value: "Natal - RN", label: "Natal - RN" },
    { value: "Mossoró - RN", label: "Mossoró - RN" },
    { value: "Parnamirim - RN", label: "Parnamirim - RN" },
    {
      value: "São Gonçalo do Amarante - RN",
      label: "São Gonçalo do Amarante - RN",
    },
    { value: "Macaíba - RN", label: "Macaíba - RN" },
    { value: "Ceará-Mirim - RN", label: "Ceará-Mirim - RN" },
    { value: "Caicó - RN", label: "Caicó - RN" },
    { value: "Assu - RN", label: "Assu - RN" },
    { value: "Currais Novos - RN", label: "Currais Novos - RN" },
    { value: "Santa Cruz - RN", label: "Santa Cruz - RN" },
    { value: "Porto Alegre - RS", label: "Porto Alegre - RS" },
    { value: "Caxias do Sul - RS", label: "Caxias do Sul - RS" },
    { value: "Pelotas - RS", label: "Pelotas - RS" },
    { value: "Canoas - RS", label: "Canoas - RS" },
    { value: "Santa Maria - RS", label: "Santa Maria - RS" },
    { value: "Gravataí - RS", label: "Gravataí - RS" },
    { value: "Viamão - RS", label: "Viamão - RS" },
    { value: "Novo Hamburgo - RS", label: "Novo Hamburgo - RS" },
    { value: "São Leopoldo - RS", label: "São Leopoldo - RS" },
    { value: "Rio Grande - RS", label: "Rio Grande - RS" },
    { value: "Porto Velho - RO", label: "Porto Velho - RO" },
    { value: "Ji-Paraná - RO", label: "Ji-Paraná - RO" },
    { value: "Ariquemes - RO", label: "Ariquemes - RO" },
    { value: "Vilhena - RO", label: "Vilhena - RO" },
    { value: "Cacoal - RO", label: "Cacoal - RO" },
    { value: "Rolim de Moura - RO", label: "Rolim de Moura - RO" },
    { value: "Guajará-Mirim - RO", label: "Guajará-Mirim - RO" },
    { value: "Jaru - RO", label: "Jaru - RO" },
    { value: "Pimenta Bueno - RO", label: "Pimenta Bueno - RO" },
    { value: "Buritis - RO", label: "Buritis - RO" },
    { value: "Boa Vista - RR", label: "Boa Vista - RR" },
    { value: "Rorainópolis - RR", label: "Rorainópolis - RR" },
    { value: "Caracaraí - RR", label: "Caracaraí - RR" },
    { value: "Alto Alegre - RR", label: "Alto Alegre - RR" },
    { value: "Mucajaí - RR", label: "Mucajaí - RR" },
    { value: "Cantá - RR", label: "Cantá - RR" },
    { value: "Pacaraima - RR", label: "Pacaraima - RR" },
    { value: "Bonfim - RR", label: "Bonfim - RR" },
    { value: "São Luiz - RR", label: "São Luiz - RR" },
    { value: "Amajari - RR", label: "Amajari - RR" },
    { value: "Joinville - SC", label: "Joinville - SC" },
    { value: "Florianópolis - SC", label: "Florianópolis - SC" },
    { value: "Blumenau - SC", label: "Blumenau - SC" },
    { value: "São José - SC", label: "São José - SC" },
    { value: "Chapecó - SC", label: "Chapecó - SC" },
    { value: "Itajaí - SC", label: "Itajaí - SC" },
    { value: "Criciúma - SC", label: "Criciúma - SC" },
    { value: "Jaraguá do Sul - SC", label: "Jaraguá do Sul - SC" },
    { value: "Lages - SC", label: "Lages - SC" },
    { value: "Balneário Camboriú - SC", label: "Balneário Camboriú - SC" },
    { value: "Aracaju - SE", label: "Aracaju - SE" },
    {
      value: "Nossa Senhora do Socorro - SE",
      label: "Nossa Senhora do Socorro - SE",
    },
    { value: "Lagarto - SE", label: "Lagarto - SE" },
    { value: "Itabaiana - SE", label: "Itabaiana - SE" },
    { value: "São Cristóvão - SE", label: "São Cristóvão - SE" },
    { value: "Estância - SE", label: "Estância - SE" },
    { value: "Tobias Barreto - SE", label: "Tobias Barreto - SE" },
    { value: "Simão Dias - SE", label: "Simão Dias - SE" },
    {
      value: "Nossa Senhora da Glória - SE",
      label: "Nossa Senhora da Glória - SE",
    },
    { value: "Propriá - SE", label: "Propriá - SE" },
    { value: "São Paulo - SP", label: "São Paulo - SP" },
    { value: "Guarulhos - SP", label: "Guarulhos - SP" },
    { value: "Campinas - SP", label: "Campinas - SP" },
    {
      value: "São Bernardo do Campo - SP",
      label: "São Bernardo do Campo - SP",
    },
    { value: "Santo André - SP", label: "Santo André - SP" },
    { value: "Osasco - SP", label: "Osasco - SP" },
    { value: "São José dos Campos - SP", label: "São José dos Campos - SP" },
    { value: "Ribeirão Preto - SP", label: "Ribeirão Preto - SP" },
    { value: "Sorocaba - SP", label: "Sorocaba - SP" },
    { value: "Mauá - SP", label: "Mauá - SP" },
    { value: "Palmas - TO", label: "Palmas - TO" },
    { value: "Araguaína - TO", label: "Araguaína - TO" },
    { value: "Gurupi - TO", label: "Gurupi - TO" },
    { value: "Porto Nacional - TO", label: "Porto Nacional - TO" },
    { value: "Paraíso do Tocantins - TO", label: "Paraíso do Tocantins - TO" },
    { value: "Colinas do Tocantins - TO", label: "Colinas do Tocantins - TO" },
    { value: "Guaraí - TO", label: "Guaraí - TO" },
    { value: "Formoso do Araguaia - TO", label: "Formoso do Araguaia - TO" },
    { value: "Tocantinópolis - TO", label: "Tocantinópolis - TO" },
    { value: "Augustinópolis - TO", label: "Augustinópolis - TO" },
  ];

  //LÓGICA DO MODAL
  const [isSobreModalOpen, setIsSobreModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false); // Novo estado para o modal de contato
  const [isTipoLoginModalOpen, setIsTipoLoginModalOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [nomeBotaoLogin, setNomeBotaoLogin] = useState("Login");
  const { setCidadeSelecionada } = useCidade(); // Pega a função do contexto

  useEffect(() => {
    if (loggedUser === null) {
      setNomeBotaoLogin("Login");
    }
  }, [loggedUser]);

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

  const handleLogin = (user) => {
    setIsAuthenticated(true); // Usuário autenticado
    setLoggedUser(user); // <- salva o usuário autenticado
  };

  const handleLogout = () => {
    setIsAuthenticated(false); // Usuário deslogado
    setLoggedUser(null); // limpa o user ao sair
    setNomeBotaoLogin("Login");
    navigate("/");
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
            <Link
              to="/CadastroSeacher"
              className={s.linkSemEstilo}
              onClick={closeTipoLoginModal}
            >
              <div className={s.buscadores}>
                <h2>Buscadores</h2>
                <p>
                  Tipo de cadastro destinado a usuários que buscam eventos
                  alinhados às suas necessidades.
                </p>
              </div>
            </Link>
            <Link
              to="/CadastroOffer"
              className={s.linkSemEstilo}
              onClick={closeTipoLoginModal}
            >
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
    //BUSCA (GET) DOS CADASTRADOS PARA VERIFICAR AUTENTICIDADE
    const [seachers, setSeachers] = useState([]);
    const [offers, setOffers] = useState([]);

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

    useEffect(() => {
      const fetchOffers = async () => {
        try {
          const response = await axios.get(
            "https://api-uhuuu.onrender.com/cadastrados_offers"
          );
          setOffers(response.data);
        } catch (error) {
          console.error("Erro ao buscar usuários cadastrados:", error);
        }
      };

      fetchOffers();
    }, []);

    //CAPTURA DE DADOS DE USUÁRIO E SENHA NO MODAL LOGIN
    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");

    const capturaUsuario = (e) => {
      setUsuario(e.target.value);
    };
    const capturaSenha = (e) => {
      setSenha(e.target.value);
    };

    //AUTENTICAÇÃO DO LOGIN
    if (!isOpen) return null; // Não renderiza o modal se isOpen for falso
    const processLogin = (event) => {
      event.preventDefault();

      const userSeacher = seachers.find(
        (user) => user.email === usuario && user.senha === senha
      );

      const userOffer = offers.find(
        (user) => user.email === usuario && user.senha === senha
      );

      const user = userSeacher || userOffer;

      if (user) {
        onLogin(user); // Envie o objeto do usuário autenticado
        closeModal();
        setNomeBotaoLogin("Perfil");
      } else {
        alert(
          "Dados incorretos ou usuário não possui cadastro no sistema. Verifique os dados ou efetue o cadastro."
        );
      }

      if (userOffer) {
        navigate("/CadastroEvento");
      }
    };

    return (
      <div className={s.modalLogin}>
        <section>
          <div>
            <button onClick={closeModal}>❌</button>
          </div>
          <h2>Login</h2>
          <form>
            <div>
              <label htmlFor="username">Usuário</label>
              <input
                type="text"
                id="username"
                placeholder="Digite seu usuário"
                onChange={capturaUsuario}
                required
              />
            </div>
            <div>
              <label htmlFor="password">Senha </label>
              <input
                type="password"
                id="password"
                placeholder="  Digite sua senha"
                onChange={capturaSenha}
                required
              />
            </div>
            <button type="submit" onClick={processLogin}>
              Entrar
            </button>
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

  const handleSelectChange = (selectedOption) => {
    const valueCidade = selectedOption?.value;
    if (valueCidade) {
      setCidadeSelecionada(valueCidade); // Atualiza a cidade global
      navigate("Cidades"); // Redireciona para rota da cidade
    }
  };

  return (
    <>
      <header className={s.header}>
        <section className={s.headerLogos}>
          <Link
            to={
              !loggedUser || loggedUser.data_nascimento
                ? "/"
                : "/CadastroEvento"
            }
          >
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
                <a
                  className={s.modais}
                  href="#"
                  title="Login"
                  onClick={(e) => {
                    e.preventDefault();
                    if (nomeBotaoLogin === "Login") {
                      openLoginModal();
                    } else if (loggedUser.sobrenome) {
                      navigate("/PerfilSeacher");
                    } else {
                      navigate("/PerfilOffer");
                    }
                  }}
                >
                  {nomeBotaoLogin}
                </a>
              </li>
            </ul>
          </nav>
          <Select
            className={s.selectHeader}
            options={cidades}
            onChange={handleSelectChange}
            placeholder="Digite a cidade"
            isClearable
          />
          {/* <select value="" onChange={handleSelectChange}>
            <option value="" disabled>
              Cidades
            </option>
            <option value="/Recife">Recife - PE</option>
            <option value="/Olinda">Olinda - PE</option>
            <option value="/Paulista">Paulista - PE</option>
          </select> */}
        </section>
      </header>
      <div>
        {isAuthenticated && loggedUser && (
          <div className={s.welcomeMessage}>
            <p>Bem-vindo, {loggedUser.nome}!</p>
            <button onClick={handleLogout}>Sair</button>
          </div>
        )}
      </div>

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
