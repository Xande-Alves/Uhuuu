import s from "./tabs.module.scss";
import React, { useState } from "react";
import barGera from "../../assets/barGera.jpg";
import fogoTerra from "../../assets/fogoTerra.jpg";
import BoateKiss from "../../assets/boateKiss.jpg";
import angra from "../../assets/angra14.jpg";
import transamerica from "../../assets/transamerica.jpg";
import ney from "../../assets/ney.jpg";
import sambaRecife from "../../assets/sambaRecife.jpg";
import seresta from "../../assets/seresta.jpeg";
import natalGelado from "../../assets/natalGelado.jpg";

export default function Tabs() {
  //CONTADOR DE EU VOU
  const [countBDG, setCountBDG] = useState(85); // Bar do Gera
  const [countFDT, setCountFDT] = useState(76); // Fogo de Terra
  const [countBTK, setCountBTK] = useState(71); // Boate Hotkiss
  const [countAMZ14, setCountAMZ14] = useState(68); // Armazém 14
  const [countSNW, setCountSNW] = useState(61); // Shopping North Way

  const incrementCountBDG = () => setCountBDG(countBDG + 1);
  const incrementCountFDT = () => setCountFDT(countFDT + 1);
  const incrementCountBTK = () => setCountBTK(countBTK + 1);
  const incrementCountAMZ14 = () => setCountAMZ14(countAMZ14 + 1);
  const incrementCountSNW = () => setCountSNW(countSNW + 1);

  //SELECIONA TAB ATIVA
  const [activeTab, setActiveTab] = useState("future");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <section className={s.tabsContainer}>
      <div className={s["tab-buttons"]}>
        <button
          className={`${s["tab-btn"]} ${
            activeTab === "future" ? s.active : ""
          }`}
          onClick={() => handleTabClick("future")}
        >
          O que vai bombar?
        </button>
        <button
          className={`${s["tab-btn"]} ${activeTab === "past" ? s.active : ""}`}
          onClick={() => handleTabClick("past")}
        >
          O que já bombou?
        </button>
      </div>

      <div className={s["tab-contents"]}>
        {/* EVENTOS FUTUROS */}
        <div
          className={`${s.content} ${activeTab === "future" ? s.show : ""}`}
          id="future"
        >
          <div className={s.ranking} id="bardogera">
            <img src={barGera} alt="Roda de Samba no Bar do Gera" />
            <div>
              <h2>Samba no Bar do Gera: A Festa que Você Não Pode Perder!</h2>
              <p>
                Prepare-se para uma noite inesquecível de samba, alegria e
                descontração! Venha celebrar com a gente na nossa tradicional
                roda de samba!
              </p>
              <p>
                Traga seus amigos e venha viver a verdadeira essência do samba!
                Vamos fazer história juntos! Confirme sua presença e venha
                sambar com a gente!
              </p>
              <span>Cidade: Recife</span>
              <br />
              <span>Eu vou: {countBDG}</span>
              <button className={s["btn-euvou"]} onClick={incrementCountBDG}>
                Eu vou!
              </button>
            </div>
          </div>

          <div className={s.ranking} id="fogodaterra">
            <img src={fogoTerra} alt="Rodízio Restaurante Fogo de Terra" />
            <div>
              <h2>
                Rodízio de Carnes no Fogo de Terra: O Paraíso dos Carnívoros!
              </h2>
              <p>
                Se você é fã de uma boa carne, não pode perder essa
                oportunidade!
              </p>
              <p>
                Traga sua fome e prepare-se para uma experiência gastronômica
                única! Venha se deliciar e aproveitar momentos especiais no Fogo
                de Terra! Reserve sua mesa e venha saborear o melhor da carne!
              </p>
              <span>Cidade: Olinda</span>
              <br />
              <span>Eu vou: {countFDT}</span>
              <button className={s["btn-euvou"]} onClick={incrementCountFDT}>
                Eu vou!
              </button>
            </div>
          </div>

          <div className={s.ranking} id="boatehotkiss">
            <img src={BoateKiss} alt="Boate Hotkiss" />
            <div>
              <h2>Noite Incrível na Boate Hotkiss com DJ Boladão!</h2>
              <p>Prepare-se para uma festa inesquecível!</p>
              <p>
                Não fique de fora dessa! Venha fazer parte da festa que todo
                mundo vai comentar! Traga seus amigos e venha se divertir!
                Garanta seu ingresso e venha curtir a noite com a gente!
              </p>
              <span>Cidade: Olinda</span>
              <br />
              <span>Eu vou: {countBTK}</span>
              <button className={s["btn-euvou"]} onClick={incrementCountBTK}>
                Eu vou!
              </button>
            </div>
          </div>
          <br />
          <div className={s.ranking} id="armazem14">
            <img src={angra} alt="Armazém 14" />
            <div>
              <h2>Show Imperdível de Metal no Armazém 14 com a Banda Angra!</h2>
              <p>Prepare-se para uma noite épica de heavy metal!</p>
              <p>
                Não perca a chance de ver Angra de perto! Traga sua galera e
                prepare-se para bater cabeça a noite toda! Garanta seu ingresso
                agora e venha fazer parte desse momento histórico!
              </p>
              <span>Cidade: Recife</span>
              <br />
              <span>Eu vou: {countAMZ14}</span>
              <button className={s["btn-euvou"]} onClick={incrementCountAMZ14}>
                Eu vou!
              </button>
            </div>
          </div>

          <div className={s.ranking} id="shoppingnorthway">
            <img src={transamerica} alt="Shopping North Way" />
            <div>
              <h2>O Circo TransAmérica Chegou ao Shopping North Way!</h2>
              <p>Prepare-se para uma experiência mágica e emocionante!</p>
              <p>
                Traga a família e venha viver momentos inesquecíveis! Venha se
                surpreender com a magia do circo! Garanta seus ingressos e não
                fique de fora dessa aventura!
              </p>
              <span>Cidade: Paulista</span>
              <br />
              <span>Eu vou: {countSNW}</span>
              <button className={s["btn-euvou"]} onClick={incrementCountSNW}>
                Eu vou!
              </button>
            </div>
          </div>
        </div>

        {/* EVENTOS PASSADO */}
        <div
          className={`${s.content} ${activeTab === "past" ? s.show : ""}`}
          id="past"
        >
          <div className={s.ranking} id="ney">
            <img src={ney} alt="Show do Ney Matogrosso" />
            <div>
              <h2>Relato do Sucesso: Ney Matogrosso Encanta Olinda</h2>
              <p>
                É com grande entusiasmo que compartilhamos os momentos
                inesquecíveis do recente show de Ney Matogrosso em Olinda. A
                cidade histórica foi palco de uma performance memorável que
                deixou a todos em êxtase.
              </p>
              <p>
                O evento reuniu uma multidão de fãs que vibraram e cantaram
                junto com Ney Matogrosso. Com um repertório que incluiu
                clássicos como "Homem com H", "Poema" e "Sangue Latino", Ney
                trouxe uma energia indescritível ao palco, confirmando mais uma
                vez seu status de lenda viva da música brasileira.
              </p>
              <span>Cidade: Olinda</span>
              <br />
              <span>Eu fui: 602</span>
            </div>
          </div>

          <div className={s.ranking} id="sambaRecife">
            <img src={sambaRecife} alt="Samba Recife" />
            <div>
              <h2>Samba Recife: Um Espetáculo de Sucesso do Samba</h2>
              <p>
                No último fim de semana, o Centro de Convenções do Recife se
                transformou em um verdadeiro palco de celebração com o evento
                Samba Recife! Foi uma noite repleta de ritmo, alegria e muita
                animação, unindo apaixonados pelo samba em uma festa
                inesquecível.
              </p>
              <p>
                Obrigado a todos que compareceram! Vocês fizeram desse evento
                uma experiência incrível, com apresentações de artistas
                talentosos que contagiaram a todos com sua energia! Reviva os
                melhores momentos! Fique ligado! Em breve, teremos mais eventos
                para continuar a celebração da nossa rica cultura. Junte-se a
                nós e mantenha o samba vivo!
              </p>
              <span>Cidade: Recife</span>
              <br />
              <span>Eu fui: 568</span>
            </div>
          </div>

          <div className={s.ranking} id="seresta">
            <img src={seresta} alt="Seresta dos Amigos" />
            <div>
              <h2>Sucesso Total na Seresta do Marco Zero!</h2>
              <p>
                No coração do Recife, a magia da música tomou conta do Marco
                Zero! A seresta foi um verdadeiro espetáculo, reunindo centenas
                de amantes da boa música e da cultura pernambucana.
              </p>
              <p>
                Agradecemos a todos que participaram! Com canções que embalaram
                corações e sorrisos que iluminaram a noite, o evento foi um
                sucesso absoluto! Não perca a próxima! Fique ligado para mais
                eventos incríveis. Juntos, fazemos a cultura brilhar ainda mais!
              </p>
              <span>Cidade: Recife</span>
              <br />
              <span>Eu fui: 368</span>
            </div>
          </div>

          <div className={s.ranking} id="natalGelado">
            <img src={natalGelado} alt="Natal Gelado" />
            <div>
              <h2>
                Natal Gelado: Um Sucesso Encantador no Shopping North Way!
              </h2>
              <p>
                Neste fim de semana, o Shopping North Way se transformou em um
                verdadeiro paraíso de Natal com o evento Natal Gelado! Famílias
                e amigos se reuniram para aproveitar a magia das festividades,
                repletas de atrações incríveis e momentos inesquecíveis.
              </p>
              <p>
                Agradecemos a todos que participaram! Vocês tornaram nosso Natal
                ainda mais especial com sorrisos, alegria e muita diversão!
                Fique atento! Em breve teremos mais surpresas e eventos para
                continuar a celebração. Venha viver a magia do Natal conosco!
              </p>
              <span>Cidade: Paulista</span>
              <br />
              <span>Eu fui:97</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
