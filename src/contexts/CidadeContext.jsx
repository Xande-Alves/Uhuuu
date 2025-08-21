import { createContext, useContext, useState } from "react";

const CidadeContext = createContext();

export const CidadeProvider = ({ children }) => {
  const [cidadeSelecionada, setCidadeSelecionada] = useState(null);

  return (
    <CidadeContext.Provider value={{ cidadeSelecionada, setCidadeSelecionada }}>
      {children}
    </CidadeContext.Provider>
  );
};

export const useCidade = () => useContext(CidadeContext);
