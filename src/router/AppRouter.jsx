import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Contacto } from "../pages/Contacto";
import HomePage from "../pages/HomePage";
import { Galeria } from "../pages/Galeria";
import { Login } from "../pages/Login";
import { Registro } from "../pages/Registro";
import { SobreNosotros } from "../pages/SobreNosotros";
import ErrorPage from "../pages/ErrorPage";
import { Reservas } from "../pages/Reservas";
import { AdminPage } from "../pages/AdminPage";
import { Navegador } from "../components/Navegador"; // Importa el componente Navegador
import { Footer } from "../components/Footer";

export const AppRouter = () => {
  return (
    <BrowserRouter>
    <Navegador/>
      <Routes>
        {/* Rutas con el componente Navegador */}
        <Route path="/" element={<HomePage />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/reservas" element={<Reservas />} />
        <Route path="/sobrenosotros" element={<SobreNosotros />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/404" element={<ErrorPage />} />
        {/* Rutas sin el componente Navegador */}
        <Route path="/admin/*" element={<AdminPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>
    <Footer/>
    </BrowserRouter>
  );
};

export default AppRouter;
