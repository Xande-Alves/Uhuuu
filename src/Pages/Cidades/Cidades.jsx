import { useCidade } from "../../contexts/CidadeContext";
import Tabs from "../../Components/Tabs/Tabs";
import Chat from "../../Components/Chat/Chat";
import s from "./cidades.module.scss";

export default function Cidades({ loggedUser }) {
  const { cidadeSelecionada } = useCidade();

  return (
    <>
      <h1 className={s.titulo}>Eventos {cidadeSelecionada}</h1>
      <div className={s.divChatTabs}>
        <Chat cidadeSelecionada={cidadeSelecionada} loggedUser={loggedUser} />
        <Tabs cidadeSelecionada={cidadeSelecionada} loggedUser={loggedUser} />
      </div>
    </>
  );
}
