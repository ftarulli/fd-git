
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import { Navegador } from '../components/Navegador';




export const AppRouter = () => {
	return (
	<>
		<BrowserRouter>
			<Routes>
				<Route>
						<Navegador/>
				</Route>
			</Routes>
		</BrowserRouter>
	</>
	);
};
