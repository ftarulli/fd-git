import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SobreNosotros } from '../Pages/SobreNosotros';


export const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/sobrenosotros" element={<SobreNosotros />} />
				
			</Routes>
		</BrowserRouter>
	);
};
