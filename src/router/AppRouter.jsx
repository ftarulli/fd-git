import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Galeria from '../pages/Galeria';

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/galeria" element={<Galeria />} />
			</Routes>
		</BrowserRouter>
	);
};
