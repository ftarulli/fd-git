import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/error.css';

export const ErrorPage = () => {
	return (
		<Container fluid className="text-center error-container imagenFondo">
			<Row className="align-items-center justify-content-center vh-100">
				<Col md={8}>
					<div className="error-content">
						<h1 className="texto">Error 404</h1>
						<h3 className="lead texto1">Página no encontrada</h3>
						<p className="texto2">
							Lo sentimos, no pudimos encontrar la página que estás buscando
						</p>
						<div className="error-image">
							<img
								src="src/assets/img/imgHuevo.png"
								alt="404 Error"
								className="img-fluid"
							/>
						</div>
						<Button variant="warning" className="boton" href="/">
							Volver al Inicio
						</Button>
					</div>
				</Col>
			</Row>
		</Container>
	);
};
export default ErrorPage;
