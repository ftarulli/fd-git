import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../css/nav.css";
// import React from 'react'

export const Navegador = () => {
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
                <Nav.Link href="/registro">Registrarse</Nav.Link>
                <Nav.Link href="/login">Iniciar Sesión</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    </div>
  );
};
