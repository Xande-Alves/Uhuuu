import { useCidade } from "../../contexts/CidadeContext";
import Tabs from "../../Components/Tabs/Tabs";

export default function Cidades() {
  const { cidadeSelecionada } = useCidade();

  return (
    <>
      <h1>Eventos {cidadeSelecionada}</h1>
      <Tabs cidadeSelecionada={cidadeSelecionada} />
    </>
  );
}
