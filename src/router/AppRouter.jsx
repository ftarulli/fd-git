

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Contacto } from '../pages/Contacto';
import HomePage from '../pages/HomePage';
import { Galeria } from '../pages/Galeria';
import { Login } from '../pages/Login';
import { Registro } from '../pages/Registro';


export const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>

				<Route path="/" element={<HomePage />} />
				<Route path="/contacto" element={<Contacto />} />
				<Route path="/Galeria" element={<Galeria />} />
				<Route path="/Login" element={<Login />} />
				<Route path="/Registro" element={<Registro />} />

			</Routes>
		</BrowserRouter>
	);

};

export default AppRouter;
