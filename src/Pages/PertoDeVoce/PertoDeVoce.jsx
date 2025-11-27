// src/pages/PertoDeVoce/PertoDeVoce.jsx
import { useState } from "react";
import Maps from "../../Components/Maps/Maps";
import s from "./pertoDeVoce.module.scss";

export default function PertoDeVoce() {
  const [filtroDias, setFiltroDias] = useState(0); // 0 = Hoje (padrão)

  return (
    <>
      <h1 className={s.titulo}>EVENTOS PERTO DE VOCÊ</h1>
      <div className={s.filtrosMaps}>
        <div className={s.filtros}>
          <h1>Filtros</h1>
          <label>
            <input
              type="radio"
              name="filtro"
              value={0}
              checked={filtroDias === 0}
              onChange={() => setFiltroDias(0)}
            />
            Hoje
          </label>

          <label>
            <input
              type="radio"
              name="filtro"
              value={7}
              checked={filtroDias === 7}
              onChange={() => setFiltroDias(7)}
            />
            7 dias
          </label>

          <label>
            <input
              type="radio"
              name="filtro"
              value={15}
              checked={filtroDias === 15}
              onChange={() => setFiltroDias(15)}
            />
            15 dias
          </label>

          <label>
            <input
              type="radio"
              name="filtro"
              value={30}
              checked={filtroDias === 30}
              onChange={() => setFiltroDias(30)}
            />
            1 mês
          </label>
        </div>

        {/* 🔹 Passa o filtro selecionado para o Maps */}
        <Maps filtroDias={filtroDias} />
      </div>
    </>
  );
}
