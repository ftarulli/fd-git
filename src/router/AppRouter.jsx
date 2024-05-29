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


export const AppRouter = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/reservas" element={<Reservas/>} />
        <Route path="/admin" element={<AdminPage/>} />
        
        <Route path="/sobrenosotros" element={<SobreNosotros />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/404" element={<ErrorPage />} />


      </Routes>
    </BrowserRouter>
  );




};

export default AppRouter;
