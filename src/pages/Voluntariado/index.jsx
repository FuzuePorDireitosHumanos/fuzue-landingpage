import "./styles.css";

// Troque "#" pelos links do Google Forms quando eles existirem
const FORM_VOLUNTARIADO_URL = "#";
const FORM_PARCERIAS_URL = "#";

const Voluntariado = () => {
  return (
    <>
      <section className="secao vp-intro">
        <div className="container">
          <h1>Junte-se a essa transformação!</h1>
          <p className="texto">
            O Instituto Fuzuê acredita na força da ação coletiva para transformar
            realidades. Por isso, buscamos pessoas, organizações, coletivos,
            empresas e instituições que compartilhem nosso compromisso com os
            direitos humanos, a diversidade, a justiça social e o protagonismo
            das juventudes.
          </p>
        </div>
      </section>

      <section className="secao">
        <div className="container vp-grid">
          <div id="seja-voluntarie" className="vp-cartao vp-cartao-azul">
            <h2>Seja voluntário(a)</h2>
            <p>
              Compartilhe seus conhecimentos, habilidades, experiências e tempo
              para fortalecer nossos projetos e atividades. Você pode contribuir
              em áreas como comunicação, educação, arte e cultura, mobilização
              comunitária, pesquisa, sustentabilidade e organização de eventos.
            </p>
            <a
              href={FORM_VOLUNTARIADO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="botao vp-botao-amarelo"
            >
              QUERO COLABORAR
            </a>
          </div>

          <div id="seja-parceiro" className="vp-cartao vp-cartao-rosa">
            <h2>Construa parcerias conosco</h2>
            <p>
              Acreditamos na potência da colaboração entre diferentes atores
              sociais. Estamos abertos a parcerias institucionais, apoio técnico,
              iniciativas conjuntas, patrocínios e oportunidades de financiamento
              que contribuam para ampliar nosso impacto nos territórios
              periféricos.
            </p>
            <a
              href={FORM_PARCERIAS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="botao vp-botao-rosa"
            >
              QUERO SER PARCEIRO(A)
            </a>
          </div>
        </div>
      </section>

      <section className="secao vp-final">
        <div className="container">
          <p className="texto">
            Quer somar forças com a gente? Entre em contato pelo e-mail{" "}
            <a href="mailto:fuzuepordireitoshumanos@gmail.com">
              fuzuepordireitoshumanos@gmail.com
            </a>{" "}
            e conte como você gostaria de contribuir. Vamos construir,
            coletivamente, caminhos para uma sociedade mais justa, democrática e
            inclusiva!
          </p>
        </div>
      </section>
    </>
  );
};

export default Voluntariado;