import React, { useEffect } from "react";
import s from "./caroussel.module.scss";
import foto1 from '../../assets/bar.jpg';
import foto2 from '../../assets/boate.jpg';
import foto3 from '../../assets/restaurante.jpg';
import foto4 from '../../assets/show.jpg';

export default function Caroussel() {
  useEffect(() => {
    const radios = document.querySelectorAll('input[name="radio-btn"]');
    let indiceAtual = 0;

    const rotacionarAutomaticamente = () => {
      indiceAtual = (indiceAtual + 1) % radios.length; // Incrementa o índice
      radios[indiceAtual].checked = true; // Seleciona o próximo rádio
    };

    const intervalo = setInterval(rotacionarAutomaticamente, 5000); // Troca a cada 3 segundos

    return () => clearInterval(intervalo); // Limpa o intervalo ao desmontar
  }, []);

  return (
    <>
      <div className={s.slider}>
        <div className={s.slides}>
          <input type="radio" name="radio-btn" id={s.radio1} />
          <input type="radio" name="radio-btn" id={s.radio2} />
          <input type="radio" name="radio-btn" id={s.radio3} />
          <input type="radio" name="radio-btn" id={s.radio4} />

          <div className={`${s.slide} ${s.first}`}> 
            <img
              src={foto1}
              alt="bar"
            />
          </div>
          <div className={s.slide}>
            <img
              src={foto2}
              alt="boate"
            />
          </div>
          <div className={s.slide}>
            <img
              src={foto3}
              alt="restaurante"
            />
          </div>
          <div className={s.slide}>
            <img
              src={foto4}
              alt="show"
            />
          </div>

          <div className={s.navigationAuto}>
            <div className={s.autoBtn1}></div>
            <div className={s.autoBtn2}></div>
            <div className={s.autoBtn3}></div>
            <div className={s.autoBtn4}></div>
          </div>
        </div>

        <div className={s.manualNavigation}>
          <label htmlFor="radio1" className={s.manualBtn}></label>
          <label htmlFor="radio2" className={s.manualBtn}></label>
          <label htmlFor="radio3" className={s.manualBtn}></label>
          <label htmlFor="radio4" className={s.manualBtn}></label>
        </div>
      </div>
    </>
  );
}


