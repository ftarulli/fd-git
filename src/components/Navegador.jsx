import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../css/nav.css";
import { NavLink } from "react-router-dom";
import React from "react";
// import React from 'react'
const isLoggedIn = localStorage.getItem("TokenJWT");
const isAdmin = localStorage.getItem("isAdmin");

export const Navegador = () => {
  const handleLogout = () => {};
  return (
    <div>
      <>
        <Navbar expand="lg" className="color" sticky="top">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/galeria">Galeria</Nav.Link>
                <Nav.Link href="/reservas">Reservas</Nav.Link>
                <Nav.Link href="/sobrenosotros">Quienes Somos</Nav.Link>
                <Nav.Link href="/contacto">Contacto</Nav.Link>
              </Nav>
              <Nav>
                {isLoggedIn &&
                  isAdmin && ( // Mostrar solo si el usuario está logeado y es administeador
                    <li>
                      <NavLink
                        className="text-decoration-none text-white"
                        to="/panel-admin"
                      >
                        ADMINISTRACION
                      </NavLink>
                    </li>
                  )}
                {isLoggedIn ? (
                  <li>
                    <NavLink
                      className="text-decoration-none text-white"
                      to="/"
                      onClick={handleLogout}
                    >
                      CERRAR SESIÓN
                    </NavLink>
                  </li>
                ) : (
                  <React.Fragment>
                    <li>
                      <NavLink
                        className="text-decoration-none text-white"
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
                  </React.Fragment>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    </div>
  );
};
