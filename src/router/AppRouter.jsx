import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Reservas } from '../pages/Reservas';

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/reservas" element={<Reservas />} />
			</Routes>
		</BrowserRouter>
	);
};
