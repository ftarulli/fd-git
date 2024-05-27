<<<<<<< HEAD

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Contacto } from "../pages/Contacto";
import HomePage from "../pages/HomePage";
import { Galeria } from "../pages/Galeria";
import { Login } from "../pages/Login";
import { Registro } from "../pages/Registro";
import { SobreNosotros } from "../pages/SobreNosotros";
=======
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Contacto } from '../pages/Contacto';
import HomePage from '../pages/HomePage';
import { Galeria } from '../pages/Galeria';
import { Login } from '../pages/Login';
import { Registro } from '../pages/Registro';
import { SobreNosotros } from '../pages/SobreNosotros';
>>>>>>> c4e5a2e21cf8300903dce97a8f63509a9f29d5bb
import { ErrorPage } from '../pages/ErrorPage';
import { AdminPage } from "../pages/AdminPage";

export const AppRouter = () => {
<<<<<<< HEAD
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
        <Route path="/adminpage" element={<AdminPage/>} />
      
      </Routes>
    </BrowserRouter>
  );

=======
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
>>>>>>> c4e5a2e21cf8300903dce97a8f63509a9f29d5bb
};

export default AppRouter;
