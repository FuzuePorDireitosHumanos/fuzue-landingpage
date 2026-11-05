import { useRef, useState } from "react";
import "./styles.css";

const CHAVE_PIX = "fuzuepordireitoshumanos@gmail.com";

const opcoes = [
  {
    valor: "R$ 5",
    subtitulo: "Fortaleça nossas ideias",
    descricao:
      "Ajude a produzir e compartilhar conteúdos educativos sobre direitos humanos, diversidade e justiça social.",
    cor: "var(--rosa)",
  },
  {
    valor: "R$ 15",
    subtitulo: "Movimente nossas ações",
    descricao:
      "Contribua para a realização de atividades educativas, culturais e de mobilização comunitária.",
    cor: "var(--laranja)",
  },
  {
    valor: "R$ 50",
    subtitulo: "Impulsione nossas iniciativas",
    descricao:
      "Ajude a fortalecer as atividades e os projetos que promovem o protagonismo das juventudes e a transformação dos territórios.",
    cor: "var(--verde)",
  },
  {
    valor: "Outro valor",
    subtitulo: "Doe do seu jeito",
    descricao:
      "Escolha o valor que cabe no seu bolso e faça parte dessa rede de transformação.",
    cor: "var(--azul)",
  },
];

const QueroDoar = () => {
  const pixRef = useRef(null);
  const [mensagem, setMensagem] = useState("");

  const irParaPix = () => {
    pixRef.current.scrollIntoView({ behavior: "smooth" });
    pixRef.current.focus({ preventScroll: true });
  };

  const copiarChave = async () => {
    try {
      await navigator.clipboard.writeText(CHAVE_PIX);
      setMensagem("Chave copiada!");
    } catch {
      setMensagem("Não foi possível copiar. Selecione a chave acima.");
    }
  };

  return (
    <>
      <section className="secao">
        <div className="container">
          <h1>Sua contribuição fortalece nossas lutas!</h1>
          <p className="texto">
            Acreditamos que a transformação social se constrói coletivamente. Sua
            doação ajuda o Instituto Fuzuê a desenvolver projetos de educação,
            arte e cultura, justiça climática e defesa dos direitos humanos,
            fortalecendo o protagonismo das juventudes periféricas em sua
            diversidade. Cada contribuição, independentemente do valor, fortalece
            nossa capacidade de transformar realidades.
          </p>
        </div>
      </section>

      <section id="como-contribuir" className="secao qd-opcoes">
        <div className="container">
          <h2>Escolha como você quer contribuir:</h2>
          <div className="qd-grid">
            {opcoes.map((opcao) => (
              <div
                key={opcao.valor}
                className="qd-cartao"
                style={{ borderTopColor: opcao.cor }}
              >
                <h3>{opcao.valor}</h3>
                <p className="qd-subtitulo">{opcao.subtitulo}</p>
                <p>{opcao.descricao}</p>
              </div>
            ))}
          </div>
          <p className="texto qd-fechamento">
            Toda contribuição faz a diferença! Ao doar, você fortalece uma
            organização comprometida com a construção de territórios mais justos,
            democráticos, inclusivos e sustentáveis.
          </p>
          <button type="button" className="botao qd-doar" onClick={irParaPix}>
            QUERO DOAR
          </button>
        </div>
      </section>

      <section id="doe-via-pix" className="secao qd-pix" ref={pixRef} tabIndex={-1}>
        <div className="container">
          <h2>Doe via Pix</h2>
          <p className="qd-pix-rotulo">Chave Pix (e-mail)</p>
          <p className="qd-pix-chave">{CHAVE_PIX}</p>
          <button
            type="button"
            className="botao qd-copiar"
            onClick={copiarChave}
          >
            Copiar chave Pix
          </button>
          <p className="qd-mensagem" aria-live="polite">
            {mensagem}
          </p>
        </div>
      </section>
    </>
  );
};

export default QueroDoar;