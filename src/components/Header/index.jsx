import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/fuzue-logo.png";
import "./styles.css";

const links = [
  {
    to: "/",
    label: "Quem somos",
    cor: "var(--azul)",
    corTexto: "var(--branco)",
    secoes: [
      { id: "nossa-missao", label: "Nossa missão" },
      { id: "nossos-valores", label: "Nossos valores" },
      { id: "documentos-internos", label: "Documentos internos" },
    ],
  },
  {
    to: "/projetos",
    label: "Projetos",
    cor: "var(--verde)",
    corTexto: "var(--texto)",
    secoes: [
      { id: "cine-bafafa", label: "Cine Bafafá" },
      { id: "carnaval-e-democracia", label: "Carnaval é Democracia" },
      { id: "observatorio-lgbtqia", label: "Observatório LGBTQIA+" },
      { id: "clima-em-jogo", label: "Clima em Jogo" },
      { id: "presenca", label: "Presença" },
    ],
  },
  {
    to: "/transparencia",
    label: "Transparência e prestação de contas",
    cor: "var(--amarelo)",
    corTexto: "var(--texto)",
    secoes: [{ id: "prestacao-de-contas", label: "Prestação de contas" }],
  },
  {
    to: "/quero-doar",
    label: "Quero doar",
    cor: "var(--rosa)",
    corTexto: "var(--branco)",
    secoes: [
      { id: "como-contribuir", label: "Como contribuir" },
      { id: "doe-via-pix", label: "Doe via Pix" },
    ],
  },
  {
    to: "/voluntariado-e-parcerias",
    label: "Voluntariado e parcerias",
    cor: "var(--laranja)",
    corTexto: "var(--texto)",
    alinharDireita: true,
    secoes: [
      { id: "seja-voluntarie", label: "Seja voluntárie" },
      { id: "seja-parceiro", label: "Seja nosso parceiro" },
    ],
  },
];

const Header = () => {
  const [menuAberto, setMenuAberto] = useState(false);
  const [dropdownAberto, setDropdownAberto] = useState(null);
  const headerRef = useRef(null);
  const { pathname } = useLocation();

  const fecharTudo = () => {
    setMenuAberto(false);
    setDropdownAberto(null);
  };

  useEffect(() => {
    const cliqueFora = (evento) => {
      if (!headerRef.current?.contains(evento.target)) {
        setDropdownAberto(null);
      }
    };

    document.addEventListener("click", cliqueFora);
    return () => document.removeEventListener("click", cliqueFora);
  }, []);

  return (
    <header className="header" ref={headerRef}>
      <div className="container header-linha">
        <Link to="/" onClick={fecharTudo}>
          <img
            src={Logo}
            alt="Fuzuê por direitos humanos"
            className="header-logo"
          />
        </Link>

        <button
          type="button"
          className="header-hamburguer"
          aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuAberto}
          aria-controls="menu-principal"
          onClick={() => setMenuAberto(!menuAberto)}
        >
          <span aria-hidden="true">{menuAberto ? "✕" : "☰"}</span>
        </button>

        <nav
          id="menu-principal"
          aria-label="Menu principal"
          className={menuAberto ? "header-nav aberto" : "header-nav"}
        >
          {links.map((link) => {
            const aberto = dropdownAberto === link.to;
            const ativo = pathname === link.to;
            const painelId = `dropdown-${link.secoes[0].id}`;

            return (
              <div
                key={link.to}
                className="header-item"
                style={{ "--cor": link.cor, "--cor-texto": link.corTexto }}
                onKeyDown={(evento) => {
                  if (evento.key === "Escape" && aberto) {
                    setDropdownAberto(null);
                    evento.currentTarget.querySelector("button").focus();
                  }
                }}
                onBlur={(evento) => {
                  const destino = evento.relatedTarget;
                  if (aberto && destino && !evento.currentTarget.contains(destino)) {
                    setDropdownAberto(null);
                  }
                }}
              >
                <button
                  type="button"
                  className={ativo ? "header-botao ativo" : "header-botao"}
                  aria-expanded={aberto}
                  aria-controls={painelId}
                  aria-current={ativo ? "page" : undefined}
                  onClick={() => setDropdownAberto(aberto ? null : link.to)}
                >
                  {link.label}
                  <svg
                    className={aberto ? "header-seta aberta" : "header-seta"}
                    viewBox="0 0 12 8"
                    aria-hidden="true"
                  >
                    <path
                      d="M1 1.5 6 6.5 11 1.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                <div
                  id={painelId}
                  hidden={!aberto}
                  className={
                    link.alinharDireita
                      ? "header-dropdown direita"
                      : "header-dropdown"
                  }
                >
                  <p className="header-dropdown-titulo">{link.label}</p>
                  <ul className="header-dropdown-lista">
                    {link.secoes.map((secao) => (
                      <li key={secao.id}>
                        <Link
                          to={`${link.to}#${secao.id}`}
                          onClick={fecharTudo}
                        >
                          {secao.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={link.to}
                    className="botao header-ver-tudo"
                    onClick={fecharTudo}
                  >
                    VER TUDO →
                  </Link>
                </div>
              </div>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Header;