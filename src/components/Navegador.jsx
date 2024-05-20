import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../css/nav.css'
// import React from 'react'

const Navegador = () => {
  return (
    <div>
      <>
      <Navbar expand="lg" className="color">
       <Container>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
           <Nav className="me-auto">
             <Nav.Link href="#">Home</Nav.Link>
             <Nav.Link href="#">Galeria</Nav.Link>
             <Nav.Link href="#">Reservas</Nav.Link>
             <Nav.Link href="#">Quienes Somos</Nav.Link>
             <Nav.Link href="#">Contacto</Nav.Link>
           </Nav>
           <Nav>
                 <Nav.Link href="#">Registrarse</Nav.Link>
                 <Nav.Link href="#">Iniciar Sesión</Nav.Link>
           </Nav>              
         </Navbar.Collapse>
       </Container>
     </Navbar>
      </>
    </div>
  )
}

export default Navegador



// export const Navegador = () => {
//   return (
//     
//   )
// }