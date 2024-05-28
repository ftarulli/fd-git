import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/ErrorPage.css';

export const ErrorPage = () => {
  return (
    <Container fluid className="error-container imagenFondo">
      <Row className="align-items-left justify-content-center vh-100">
        <Col md={8} className="text-start">
          <div className="error-content">
            <h1 className="texto">Error 404</h1>
            <h3 className="lead texto1">Página no encontrada</h3>
            <p className="texto2">
              Lo sentimos, no pudimos encontrar la página que estás buscando
            </p>
            <Button variant="warning" className="boton" href="/">
              Volver al Inicio
            </Button>
          </div>
        </Col>
      </Row>
      <div className="error-image">
        <img
          src="src\assets\img-404\Frame (1).png"
          alt="404 Error"
          className="img-fluid"
        />
      </div>
    </Container>
  );
};

export default ErrorPage;
