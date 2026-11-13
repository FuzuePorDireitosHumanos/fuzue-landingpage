import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import QuemSomos from "./pages/QuemSomos";
import Projetos from "./pages/Projetos";
import Transparencia from "./pages/Transparencia";
import QueroDoar from "./pages/QueroDoar";
import Voluntariado from "./pages/Voluntariado";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<QuemSomos />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/transparencia" element={<Transparencia />} />
        <Route path="/quero-doar" element={<QueroDoar />} />
        <Route path="/voluntariado-e-parcerias" element={<Voluntariado />} />
      </Route>
    </Routes>
  );
}

export default App;