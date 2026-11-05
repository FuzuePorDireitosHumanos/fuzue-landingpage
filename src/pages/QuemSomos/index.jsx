import Logo from "../../assets/fuzue-logo.png";
import FormaArco from "../../assets/ê.png";
import FormaEstrela from "../../assets/Star.png";
import FormaAzul from "../../assets/u.png";
import FotoFuzue from "../../assets/fuzue-foto.png";
import "./styles.css";

const valores = [
  { nome: "Colaboração e Engajamento", cor: "var(--rosa)" },
  { nome: "Democracia", cor: "var(--amarelo)" },
  { nome: "Diversidade e Inclusão", cor: "var(--azul)" },
  { nome: "Horizontalidade", cor: "var(--verde)" },
  { nome: "Inovação e Melhoria Contínua", cor: "var(--laranja)" },
  { nome: "Protagonismo das Juventudes", cor: "var(--rosa)" },
  { nome: "Sustentabilidade", cor: "var(--verde)" },
  { nome: "Transparência e Rigor", cor: "var(--azul)" },
  { nome: "União e Respeito", cor: "var(--amarelo)" },
];

const QuemSomos = () => {
  return (
    <>
      <section className="qs-topo">
        <img src={FormaArco} alt="" className="qs-forma qs-forma-arco" />
        <img src={FormaEstrela} alt="" className="qs-forma qs-forma-estrela" />
        <img src={FormaAzul} alt="" className="qs-forma qs-forma-azul" />
        <img
          src={Logo}
          alt="Fuzuê por direitos humanos"
          className="qs-topo-logo"
        />
      </section>

      <section className="secao qs-sobre-secao">
        <div className="container qs-sobre">
          <img
            src={FotoFuzue}
            alt="Integrantes do Instituto Fuzuê reunidos"
            className="qs-foto"
          />
          <div>
            <h1>Quem somos</h1>
            <p>
              O Instituto Fuzuê é a sinergia das juventudes pernambucanas em sua
              diversidade. Por meio da educação, da política, da arte e da
              cultura, atuamos na defesa e na promoção dos direitos humanos e da
              justiça social, fortalecendo grupos historicamente marginalizados.
              Construímos redes de apoio, oportunidades e mobilização coletiva
              para enfrentar as desigualdades e transformar as realidades dos
              territórios onde estamos presentes.
            </p>
          </div>
        </div>
      </section>

      <section id="nossa-missao" className="secao qs-missao">
        <div className="container">
          <h2>Nossa missão</h2>
          <p className="texto">
            Ampliar e fortalecer espaços e iniciativas protagonizados pelas
            juventudes em sua diversidade, por meio de uma atuação feminista,
            antirracista, anti-LGBTfóbica e interseccional. Nosso compromisso é
            promover os direitos humanos e a justiça social nos territórios
            periféricos da Região Metropolitana do Recife, articulando lutas
            locais, nacionais e globais por igualdade, democracia e transformação
            social.
          </p>
        </div>
      </section>

      <section id="nossos-valores" className="secao qs-valores">
        <div className="container">
          <h2>Nossos valores</h2>
          <p className="texto">
            Nossos valores orientam nossas práticas, nossas relações e nosso
            compromisso com a transformação social. São os princípios que
            fortalecem nossa atuação coletiva em defesa dos direitos humanos e do
            protagonismo das juventudes.
          </p>
          <ul className="qs-valores-grid">
            {valores.map((valor) => (
              <li
                key={valor.nome}
                className="qs-valor"
                style={{ borderTopColor: valor.cor }}
              >
                <h3>{valor.nome}</h3>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="documentos-internos" className="secao">
        <div className="container">
          <h2>Documentos internos</h2>
          <ol className="qs-documentos">
            <li>Estatuto Social</li>
            <li>Regimento Interno</li>
          </ol>
        </div>
      </section>
    </>
  );
};

export default QuemSomos;