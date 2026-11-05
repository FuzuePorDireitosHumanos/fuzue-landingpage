import FotoCineBafafa from "../../assets/foto_cine_bafafa.jpg";
import FotoCarnaval from "../../assets/foto_carnaval_e_democracia.jpg";
import FotoObservatorio from "../../assets/foto_observatorio_lgbt+.jpg";
import FotoClimaEmJogo from "../../assets/foto_clima.jpg";
import FotoPresenca from "../../assets/foto_presenca.jpg";
import "./styles.css";

const projetos = [
  {
    id: "cine-bafafa",
    imagem: FotoCineBafafa,
    alt: "Pessoa de costas assiste a um filme projetado em uma tela, em uma rua à noite",
    numeros: [{ valor: "+60", legenda: "pessoas alcançadas" }],
    titulo: "Cine Bafafá",
    periodo: "07/2025 – Contínua",
    cor: "var(--rosa)",
    corEtiqueta: "var(--branco)",
    legenda: "Fotos do Cine Bafafá",
    descricao:
      "O Cine Bafafá fortalece o acesso à cultura e ao audiovisual como ferramentas de educação, reflexão crítica e transformação social. Por meio de exibições cinematográficas e debates coletivos, abordamos temas como raça, gênero, sexualidade, classe social, justiça climática, violência e direitos humanos, valorizando diferentes experiências e perspectivas.",
    resultados:
      "Já alcançamos mais de 60 pessoas com sessões e debates que estimulam o pensamento crítico e a construção coletiva de conhecimentos. Entre as produções exibidas estão Meu Nome é Mallum e Abuela Grillo. A iniciativa busca democratizar o acesso à cultura, fortalecer o diálogo sobre as desigualdades e transformar o cinema em um espaço de diversidade e mobilização social.",
  },
  {
    id: "carnaval-e-democracia",
    imagem: FotoCarnaval,
    alt: "Pessoas conversam sentadas em roda ao redor de uma mesa com materiais de oficina, em um pátio coberto",
    numeros: [
      { valor: "+60", legenda: "trabalhadores e trabalhadoras na pesquisa" },
      { valor: "10", legenda: "jovens na rede" },
    ],
    titulo:
      "Carnaval é Democracia: Agenda 2030, Juventudes e o Carnaval nas Ladeiras de Olinda",
    periodo: "05/2025 – 09/2025",
    apoio: "Gestos, GT Agenda 2030 e União Europeia",
    cor: "var(--laranja)",
    corEtiqueta: "var(--texto)",
    legenda: "Fotos do Carnaval é Democracia",
    descricao:
      "O Carnaval é Democracia teve como objetivo promover a mobilização de juventudes, trabalhadores e trabalhadoras da cultura e organizações culturais em defesa do trabalho digno, da cultura de paz, da participação social e da preservação do patrimônio cultural, reconhecendo o Carnaval como uma expressão fundamental da diversidade e da identidade popular.",
    resultados:
      "Realizamos uma pesquisa com mais de 60 trabalhadores e trabalhadoras do carnaval, articulamos uma rede com 10 jovens de organizações culturais da festa e promovemos incidência política em espaços estratégicos. Essas ações contribuíram para a construção do manifesto Carnaval é Democracia, fortalecendo a participação popular e a defesa de políticas públicas que valorizem a cultura, garantam direitos e tornem a festa mais inclusiva, democrática e sustentável.",
  },
  {
    id: "observatorio-lgbtqia",
    imagem: FotoObservatorio,
    alt: "Pessoas em uma reunião de trabalho, sentadas em volta de uma mesa, com materiais de apresentação à vista",
    numeros: [
      { valor: "+10", legenda: "reuniões estratégicas" },
      { valor: "+100", legenda: "pessoas alcançadas" },
      { valor: "+50 mil", legenda: "visualizações" },
    ],
    titulo: "Observatório LGBTQIA+ de Pernambuco",
    periodo: "05/2025 – Contínua",
    apoio: "Secretaria de Direitos Humanos de Pernambuco",
    cor: "var(--azul)",
    corEtiqueta: "var(--branco)",
    legenda: "Fotos do Observatório LGBTQIA+ de Pernambuco",
    descricao:
      "O Observatório LGBTQIA+ de Pernambuco é uma plataforma de comunicação, pesquisa e incidência política desenvolvida pelo Instituto Fuzuê, em parceria com o Centro Raízes e o Observatório Brasileiro LGBTQIA+, para promover e defender os direitos da população LGBTQIA+ no estado. A iniciativa produz análises, sistematiza dados sobre violência e discriminação e desenvolve estratégias de mobilização e diálogo com instituições públicas e organizações da sociedade civil para fortalecer as políticas de prevenção à violência e garantia de direitos.",
    resultados:
      "Publicamos o relatório parcial Quando Existir é Perigoso, realizamos mais de 10 reuniões com atores estratégicos dos poderes Executivo e Legislativo e do Ministério Público e promovemos conferências, oficinas e espaços de formação e construção coletiva, alcançando mais de 100 pessoas. Além disso, nossos conteúdos sobre direitos LGBTQIA+ somam mais de 50 mil visualizações, ampliando a circulação de informações e fortalecendo a incidência política em Pernambuco.",
  },
  {
    id: "clima-em-jogo",
    imagem: FotoClimaEmJogo,
    alt: "Crianças brincam em um espaço com elementos de um jogo educativo sobre clima",
    numeros: [
      { valor: "+60", legenda: "crianças mobilizadas" },
      { valor: "1", legenda: "jogo digital educativo" },
    ],
    titulo: "Clima em Jogo: Inventando Cidades Possíveis",
    periodo: "12/2025 – 05/2026",
    apoio: "Habitat para Humanidade em parceria com o GCASC",
    cor: "var(--verde)",
    corEtiqueta: "var(--texto)",
    legenda: "Fotos do Clima em Jogo",
    descricao:
      "Iniciativa do Instituto Fuzuê que mobiliza crianças de Peixinhos, em Olinda, para refletir sobre os desafios climáticos e urbanos de seus territórios e imaginar soluções para cidades mais justas, inclusivas e sustentáveis. Por meio de atividades lúdicas, processos criativos e metodologias participativas, o projeto valoriza as experiências e percepções das crianças, transformando suas ideias em propostas de educação, participação comunitária e justiça climática.",
    resultados:
      "Mobilizamos mais de 60 crianças, desenvolvemos um jogo digital educativo sobre justiça climática e promovemos articulações com atores estratégicos, incluindo representantes do Ministério Público, do Poder Legislativo e de universidades. A iniciativa fortalece o protagonismo infantil e evidencia a importância de incluir as crianças e as comunidades periféricas na construção de soluções para os desafios socioambientais.",
  },
];

const Projetos = () => {
  return (
    <>
      <section className="secao pj-intro">
        <div className="container">
          <h1>Projetos</h1>
          <p className="texto">
            No Instituto Fuzuê, acreditamos na força das juventudes para
            transformar realidades. Por isso, atuamos em quatro eixos: Arte e
            Cultura, Justiça Climática, Direito à Cidade e Enfrentamento à
            Violência, internacionalizando os direitos humanos e fortalecendo
            nossos territórios.
          </p>
        </div>
      </section>

      <section className="secao">
        <div className="container pj-lista">
          {projetos.map((projeto) => (
            <article
              key={projeto.id}
              id={projeto.id}
              className="pj-cartao"
              style={{ borderColor: projeto.cor }}
            >
              {projeto.imagem ? (
                <img
                  src={projeto.imagem}
                  alt={projeto.alt}
                  className="pj-foto"
                  style={{ objectPosition: projeto.posicaoImagem }}
                />
              ) : (
                <div className="pj-imagem">{projeto.legenda}</div>
              )}
              <div>
                <span
                  className="pj-etiqueta"
                  style={{
                    backgroundColor: projeto.cor,
                    color: projeto.corEtiqueta,
                  }}
                >
                  {projeto.periodo}
                </span>
                <h2>{projeto.titulo}</h2>
                {projeto.apoio && (
                  <p>
                    <strong>Apoio:</strong> {projeto.apoio}
                  </p>
                )}
                <p>{projeto.descricao}</p>
                <div className="pj-resultados">
                  <h3>Resultados e impacto</h3>
                  <ul
                    className="pj-numeros"
                    style={{ "--cor": projeto.cor }}
                  >
                    {projeto.numeros.map((numero) => (
                      <li key={numero.legenda} className="pj-numero">
                        <strong className="pj-numero-valor">
                          {numero.valor}
                        </strong>
                        <span className="pj-numero-legenda">
                          {numero.legenda}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <p>{projeto.resultados}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="presenca" className="secao pj-presenca">
        <div className="container pj-presenca-grid">
          <img
            src={FotoPresenca}
            alt="Duas pessoas seguram a bandeira do Fuzuê em frente ao painel da Conferência Regional ILGA LAC"
            className="pj-foto"
          />
          <div>
            <h2>Presença</h2>
            <p>
              O Instituto Fuzuê acredita que a transformação social se constrói
              coletivamente. Por isso, participamos de redes e espaços de
              articulação política, como o Fórum Popular de Segurança Pública de
              Pernambuco, o Fórum Popular de Segurança Pública do Nordeste e a
              Rede Sementes Periféricas. Também somos filiados à ABGLT e à ILGA
              LAC, fortalecendo a cooperação nacional e internacional, o
              protagonismo das juventudes, a participação social e a incidência
              política em defesa dos direitos humanos, da diversidade e da
              democracia.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projetos;