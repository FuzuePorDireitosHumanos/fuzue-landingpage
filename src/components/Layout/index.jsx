import { useEffect, useLayoutEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

const SELETOR_REVELAR = [
  ".secao > .container > *:not(.qs-valores-grid):not(.qd-grid)",
  ".qs-valor",
  ".qd-cartao",
].join(", ");

const Layout = () => {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView();
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [pathname, hash, key]);

  useLayoutEffect(() => {
    const reduzirMovimento = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduzirMovimento) return;

    const observer = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (!entrada.isIntersecting) return;

          const elemento = entrada.target;
          elemento.addEventListener(
            "transitionend",
            () => elemento.classList.remove("revelar", "revelado"),
            { once: true },
          );
          elemento.classList.add("revelado");
          observer.unobserve(elemento);
        });
      },
      { rootMargin: "0px 0px -40px 0px" },
    );

    document.querySelectorAll(SELETOR_REVELAR).forEach((elemento) => {
      const posicao = [...elemento.parentElement.children].indexOf(elemento);
      elemento.style.setProperty("--atraso", `${Math.min(posicao, 5) * 70}ms`);
      elemento.classList.add("revelar");
      observer.observe(elemento);
    });

    return () => observer.disconnect();
  }, [pathname]);

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;