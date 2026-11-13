import { Link } from "react-router-dom";
import "./styles.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <a
          href="https://www.instagram.com/institutofuzue"
          target="_blank"
          rel="noopener noreferrer"
        >
          Nos acompanhe no Instagram
        </a>
        <Link to="/voluntariado-e-parcerias">Seja voluntárie</Link>
        <a href="mailto:fuzuepordireitoshumanos@gmail.com">
          fuzuepordireitoshumanos@gmail.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;