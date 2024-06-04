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

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas con el componente Navegador */}
        <Route path="/" element={<><Navegador /><HomePage /></>} />
<Route path="/galeria" element={<><Navegador /><Galeria /></>} />
<Route path="/reservas" element={<><Navegador /><Reservas /></>} />
<Route path="/sobrenosotros" element={<><Navegador /><SobreNosotros /></>} />
<Route path="/contacto" element={<><Navegador /><Contacto /></>} />
<Route path="/404" element={<><Navegador /><ErrorPage /></>} />


        {/* Rutas sin el componente Navegador */}
        <Route path="/admin/*" element={<AdminPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
