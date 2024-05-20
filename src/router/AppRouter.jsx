import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GaleriaImg from '../pages/GaleriaImg';
import { Contacto } from '../pages/Contacto';

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/contacto" element={<Contacto />} />
			</Routes>
		</BrowserRouter>
	);
};
