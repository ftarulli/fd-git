import { useEffect, useState } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../css/nav.css';

export const Navegador = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const admin = localStorage.getItem('isAdmin') === 'true';
    setIsLoggedIn(!!token);
    setIsAdmin(admin);

    // Redirigir automáticamente solo si no está en una página válida
    if (token && !admin && location.pathname === '/') {
      navigate('/');
    } else if (token && admin && location.pathname === '/') {
      navigate('/admin');
    }
  }, [location.pathname, navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('isAdmin');
    setIsLoggedIn(false);
    setIsAdmin(false);
    navigate('/login');
  };

  // No mostrar el navbar en la página de administrador
  if (location.pathname === '/admin') {
    return null;
  }

  return (
    <div>
      <Navbar expand="lg" className="color" sticky="top">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink to="/" className="nav-link" exact>
                Home
              </NavLink>
              <NavLink to="/galeria" className="nav-link">
                Galeria
              </NavLink>
              <NavLink to="/reservas" className="nav-link">
                Reservas
              </NavLink>
              <NavLink to="/sobrenosotros" className="nav-link">
                Quienes Somos
              </NavLink>
              <NavLink to="/contacto" className="nav-link">
                Contacto
              </NavLink>
            </Nav>
            <Nav>
              {isLoggedIn ? (
                <>
                  {isAdmin ? (
                    <li>
                      <NavLink
                        className="text-decoration-none text-white me-3"
                        to="/admin"
                      >
                        <span className="text-orange">Panel de Administrador</span>
                      </NavLink>
                    </li>
                  ) : (
                    <li>
                      <NavLink
                        className="text-decoration-none text-white"
                        to="/"
                        onClick={handleLogout}
                      >
                        CERRAR SESIÓN
                      </NavLink>
                    </li>
                  )}
                </>
              ) : (
                <>
                  <li>
                    <NavLink
                      className="text-decoration-none text-white me-3"
                      to="/registro"
                    >
                      REGISTRO
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="text-decoration-none text-white"
                      to="/login"
                    >
                      INICIAR SESIÓN
                    </NavLink>
                  </li>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

// No necesitamos redirigir manualmente en handleLogin
export const handleLogin = (token, isAdmin) => {
  localStorage.setItem('token', token);
  localStorage.setItem('isAdmin', isAdmin ? 'true' : 'false');
};
