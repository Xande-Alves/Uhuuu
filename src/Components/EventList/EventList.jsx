import s from "./eventList.module.scss";
import barGera from "../../assets/barGera.jpg";
import fogoTerra from "../../assets/fogoTerra.jpg";
import BoateKiss from "../../assets/boateKiss.jpg";
import angra from "../../assets/angra14.jpg";
import transamerica from "../../assets/transamerica.jpg";
import ney from "../../assets/ney.jpg";
import sambaRecife from "../../assets/sambaRecife.jpg";
import seresta from "../../assets/seresta.jpeg";
import natalGelado from "../../assets/natalGelado.jpg";

const eventos = [
  {
    id: "bardogera",
    titulo: "Samba no Bar do Gera: A Festa que Você Não Pode Perder!",
    descricao:
      "Prepare-se para uma noite inesquecível de samba, alegria e descontração! Venha celebrar com a gente na nossa tradicional roda de samba! Traga seus amigos e venha viver a verdadeira essência do samba! Vamos fazer história juntos! Confirme sua presença e venha sambar com a gente!",
    cidade: "Recife",
    count: 85,
    imagem: barGera,
    dataInicio: "2029-03-15T20:00:00",
    dataTermino: "2029-03-15T02:00:00",
  },
  {
    id: "fogodaterra",
    titulo: "Rodízio de Carnes no Fogo de Terra: O Paraíso dos Carnívoros!",
    descricao:
      "Se você é fã de uma boa carne, não pode perder essa oportunidade! Traga sua fome e prepare-se para uma experiência gastronômica única! Venha se deliciar e aproveitar momentos especiais no Fogo de Terra! Reserve sua mesa e venha saborear o melhor da carne!",
    cidade: "Olinda",
    count: 76,
    imagem: fogoTerra,
    dataInicio: "2029-03-15T20:00:00",
    dataTermino: "2029-03-20T02:00:00",
  },
  {
    id: "boatehotkiss",
    titulo: "Noite Incrível na Boate Hotkiss com DJ Boladão!",
    descricao:
      "Prepare-se para uma festa inesquecível! Não fique de fora dessa! Venha fazer parte da festa que todo mundo vai comentar! Traga seus amigos e venha se divertir! Garanta seu ingresso e venha curtir a noite com a gente!",
    cidade: "Olinda",
    count: 71,
    imagem: BoateKiss,
    dataInicio: "2029-03-16T20:00:00",
    dataTermino: "2029-03-16T02:00:00",
  },
  {
    id: "armazem14",
    titulo: "Show Imperdível de Metal no Armazém 14 com a Banda Angra!",
    descricao:
      "Prepare-se para uma noite épica de heavy metal! Não perca a chance de ver Angra de perto! Traga sua galera e prepare-se para bater cabeça a noite toda! Garanta seu ingresso agora e venha fazer parte desse momento histórico!",
    cidade: "Recife",
    count: 68,
    imagem: angra,
    dataInicio: "2029-03-19T20:00:00",
    dataTermino: "2029-03-19T02:00:00",
  },
  {
    id: "shoppingnorthway",
    titulo: "O Circo TransAmérica Chegou ao Shopping North Way!",
    descricao:
      "Prepare-se para uma experiência mágica e emocionante! Traga a família e venha viver momentos inesquecíveis! Venha se surpreender com a magia do circo! Garanta seus ingressos e não fique de fora dessa aventura!",
    cidade: "Paulista",
    count: 61,
    imagem: transamerica,
    dataInicio: "2029-03-18T20:00:00",
    dataTermino: "2029-03-28T02:00:00",
  },
  {
    id: "ney",
    titulo: "Relato do Sucesso: Ney Matogrosso Encanta Olinda",
    descricao:
      "É com grande entusiasmo que compartilhamos os momentos inesquecíveis do recente show de Ney Matogrosso em Olinda. A cidade histórica foi palco de uma performance memorável que deixou a todos em êxtase. O evento reuniu uma multidão de fãs que vibraram e cantaram junto com Ney Matogrosso. Com um repertório que incluiu clássicos como Homem com H, Poema e Sangue Latino, Ney trouxe uma energia indescritível ao palco, confirmando mais uma vez seu status de lenda viva da música brasileira.",
    cidade: "Olinda",
    count: 602,
    imagem: ney,
    dataInicio: "2024-03-15T20:00:00",
    dataTermino: "2024-03-15T02:00:00",
  },
  {
    id: "sambaRecife",
    titulo: "Samba Recife: Um Espetáculo de Sucesso do Samba",
    descricao:
      "No último fim de semana, o Centro de Convenções do Recife se transformou em um verdadeiro palco de celebração com o evento Samba Recife! Foi uma noite repleta de ritmo, alegria e muita animação, unindo apaixonados pelo samba em uma festa inesquecível. Obrigado a todos que compareceram! Vocês fizeram desse evento uma experiência incrível, com apresentações de artistas talentosos que contagiaram a todos com sua energia! Reviva os melhores momentos! Fique ligado! Em breve, teremos mais eventos para continuar a celebração da nossa rica cultura. Junte-se a nós e mantenha o samba vivo!",
    cidade: "Recife",
    count: 568,
    imagem: sambaRecife,
    dataInicio: "2024-03-17T20:00:00",
    dataTermino: "2024-03-19T02:00:00",
  },
  {
    id: "seresta",
    titulo: "Sucesso Total na Seresta do Marco Zero!",
    descricao:
      "No coração do Recife, a magia da música tomou conta do Marco Zero! A seresta foi um verdadeiro espetáculo, reunindo centenas de amantes da boa música e da cultura pernambucana. Agradecemos a todos que participaram! Com canções que embalaram corações e sorrisos que iluminaram a noite, o evento foi um sucesso absoluto! Não perca a próxima! Fique ligado para mais eventos incríveis. Juntos, fazemos a cultura brilhar ainda mais!",
    cidade: "Recife",
    count: 368,
    imagem: seresta,
    dataInicio: "2024-03-21T20:00:00",
    dataTermino: "2024-03-24T02:00:00",
  },
  {
    id: "natalGelado",
    titulo: "Natal Gelado: Um Sucesso Encantador no Shopping North Way!",
    descricao:
      "Neste fim de semana, o Shopping North Way se transformou em um verdadeiro paraíso de Natal com o evento Natal Gelado! Famílias e amigos se reuniram para aproveitar a magia das festividades, repletas de atrações incríveis e momentos inesquecíveis. Agradecemos a todos que participaram! Vocês tornaram nosso Natal ainda mais especial com sorrisos, alegria e muita diversão! Fique atento! Em breve teremos mais surpresas e eventos para continuar a celebração. Venha viver a magia do Natal conosco!",
    cidade: "Paulista",
    count: 97,
    imagem: natalGelado,
    dataInicio: "2023-12-20T20:00:00",
    dataTermino: "2023-12-30T02:00:00",
  },
];

// Função para formatar a data no padrão brasileiro (DD/MM/AAAA)
const formatarData = (dataString) => {
  const data = new Date(dataString);
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(data);
};

export default function EventList() {
  return (
    <div className={s.eventList}>
      <h1>Eventos cadastrados</h1>
      <div className={s.caixaEventos}>
        {eventos.map((evento) => (
          <div className={s.evento}>
            <h3>{evento.titulo}</h3>
            <p>Início: {formatarData(evento.dataInicio)}</p>
            <p>Término: {formatarData(evento.dataTermino)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
