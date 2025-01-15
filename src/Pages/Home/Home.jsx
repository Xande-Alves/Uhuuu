import Caroussel from "../../Components/Caroussel/Caroussel";
import Chat from "../../Components/Chat/Chat";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import SideNavbar from "../../Components/SideNavbar/SideNavbar";
import Tabs from "../../Components/Tabs/Tabs";
import s from "./home.module.scss";

export default function Home() {
  return ( 
    <>
      <Header />
      <div className={s.sideNavCaroussel}>
        <SideNavbar />
        <main> 
          <h1>
            Nossa plataforma conecta você aos melhores estabelecimentos e
            eventos de entretenimento da cidade. De bares e restaurantes a
            baladas, shows e exposições imperdíveis, estamos aqui para você
            ficar por dentro das últimas novidades e viver experiências
            inesquecíveis. Junte-se a nós e descubra tudo o que o "Uhuuu!!!" tem
            a oferecer!
          </h1>
          <Caroussel />
        </main>
      </div>
      <div className={s.chatTabs}>
          <Chat />
          <Tabs />
      </div>
      <Footer />
    </>
  );
}
