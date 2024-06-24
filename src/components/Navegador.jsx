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

    if (!token) {
      // Si no hay token, redirige a la página de inicio de sesión
      navigate('/login');
    } else {
      // Si hay token, determina la redirección basada en el rol
      if (admin && location.pathname === '/') {
        navigate('/admin');
      } else if (!admin && location.pathname === '/admin') {
        navigate('/');
      }
    }
  }, [location.pathname, navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('isAdmin');
    setIsLoggedIn(false);
    setIsAdmin(false);
    navigate('/login');
  };

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
              {isLoggedIn && (
                <>
                  {isAdmin && (
                    <li>
                      <NavLink
                        className="text-decoration-none text-white me-3"
                        to="/admin"
                      >
                        <span className="text-orange">Panel de Administrador</span>
                      </NavLink>
                    </li>
                  )}
                  <li>
                    <NavLink
                      className="text-decoration-none text-white"
                      to="/"
                      onClick={handleLogout}
                    >
                      Cerrar Sesión
                    </NavLink>
                  </li>
                </>
              )}
              {!isLoggedIn && (
                <>
                  <li>
                    <NavLink
                      className="text-decoration-none text-white me-3"
                      to="/registro"
                    >
                      Registro
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="text-decoration-none text-white"
                      to="/login"
                    >
                      Iniciar Sesión
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

export const handleLogin = (token, isAdmin) => {
  localStorage.setItem('token', token);
  localStorage.setItem('isAdmin', isAdmin ? 'true' : 'false');
};
