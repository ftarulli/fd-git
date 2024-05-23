import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ErrorPage } from '../pages/ErrorPage';

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/404" element={<ErrorPage />} />
			</Routes>
		</BrowserRouter>
	);
};
