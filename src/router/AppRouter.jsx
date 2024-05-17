import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { AdminPage } from '../pages/AdminPage';
import { LoginPage } from '../pages/LoginPage';
import { ErrorPage } from '../pages/ErrorPage';
import { RegPage } from '../pages/RegPage';

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/admin" element={<AdminPage />} />
				<Route path="/reg" element={<RegPage />} />
				<Route path="/" element={<HomePage id={'1'} />} />
				<Route path="/404" element={<ErrorPage />} />
				<Route path="/login" element={<LoginPage />} />
			</Routes>
		</BrowserRouter>
	);
};
