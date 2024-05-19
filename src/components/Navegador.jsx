import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../css/nav.css'

export const Navegador = () => {
  return (
    <div> <Navbar expand="lg" className="color">
    <Container>
      
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#Galeria">Galeria</Nav.Link>
          <Nav.Link href="#Reservas">Reservas</Nav.Link>
          <Nav.Link href="/sobrenosotros">Quienes Somos</Nav.Link>
          <Nav.Link href="#Contacto">Contacto</Nav.Link>
      
        </Nav>

        <Nav>
              <Nav.Link href="#registrarse">Registrarse</Nav.Link>
              <Nav.Link href="#iniciar-sesion">Iniciar Sesión</Nav.Link>
            </Nav>
            
      </Navbar.Collapse>
    </Container>
  </Navbar></div>
  )
}