import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Registro from '../pages/Registro';
import Login from '../pages/Login';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/registro" element={<Registro />} />
		<Route path="/login" element={<Login />} />
  
        {/* Agrega más rutas según sea necesario */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
