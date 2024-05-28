import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Contacto } from "../pages/Contacto";
import HomePage from "../pages/HomePage";
import { Galeria } from "../pages/Galeria";
import { Login } from "../pages/Login";
import { Registro } from "../pages/Registro";
import { SobreNosotros } from "../pages/SobreNosotros";
import ErrorPage from "../pages/ErrorPage";


export const AppRouter = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/galeria" element={<Galeria />} />
        {/* <Route path="/reservas" element={<Reservas />} /> Asegúrate de tener esta página */}
        <Route path="/sobrenosotros" element={<SobreNosotros />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/404" element={<ErrorPage />} />


      </Routes>
    </BrowserRouter>
  );


	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/galeria" element={<Galeria />} />
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
