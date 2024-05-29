import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import '../css/registro.css';
import apiTest from '../api/apiTest';

export const Registro = () => {
	const navigate = useNavigate();
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex) => {
		setIndex(selectedIndex);
	};

	const [nombre, setNombre] = useState('');
	const [apellido, setApellido] = useState('');
	const [mail, setMail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [aceptaTerminos, setAceptaTerminos] = useState(false);

	const registroComplete = async (nombre, apellido, mail, password) => {
		try {
			const response = await apiTest.post('/user/register', {
				nombre: nombre.trim(),
				apellido: apellido.trim(),
				mail: mail.trim(),
				password: password.trim(),
			});

			alert('Registro Correcto');

			// Limpiar campos después del registro exitoso
			setNombre('');
			setApellido('');
			setMail('');
			setPassword('');
			setConfirmPassword('');
			setAceptaTerminos(false);

			// Redirigimos a la pagina de login
			navigate('/login');
		} catch (error) {
			const errorMsg =
				error.response.data.msg || 'Error en el registro. Intenta nuevamente.';
			return alert(errorMsg);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

		//Validaciones necesarias para registrarse
		if (!nombre || !apellido || !mail || !password || !confirmPassword) {
			return alert('Todos los campos son obligatorios');
		} else if (nombre.length < 2 || nombre.length > 25) {
			return alert('El nombre debe tener entre 2 y 25 caracteres');
		} else if (apellido.length < 2 || apellido.length > 25) {
			return alert('El apellido debe tener entre 2 y 25 caracteres');
		} else if (!emailRegex.test(mail)) {
			return alert('Por favor ingrese un email valido');
		} else if (password.length < 8) {
			return alert('La contraseña debe tener al menos 8 caracteres');
		} else if (password !== confirmPassword) {
			return alert('Las contraseñas no coinciden');
		}

		if (!aceptaTerminos) {
			return alert('Debes aceptar los términos y condiciones.');
		}

		registroComplete(nombre, apellido, mail, password);
	};

	return (
		<div className="contenedor-registro">
			<Carousel activeIndex={index} onSelect={handleSelect} className="carrousel">
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="src\assets\img-registro\chef-taking-pizza-out-woodburning-oven-old-cafe-city-center-small-local-business.jpg"
						alt="First slide"
					/>
					<Carousel.Caption className="caption-right"></Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="src\assets\img-registro\chef-working-together-professional-kitchen.jpg"
						alt="Second slide"
					/>
					<Carousel.Caption className="caption-right"></Carousel.Caption>
				</Carousel.Item>
				{/* Agrega más elementos Carousel.Item según sea necesario */}
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="src\assets\img-registro\group-friends-eating-restaurant.jpg"
						alt="Third slide"
					/>
					<Carousel.Caption className="caption-right"></Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="src\assets\img-registro\medium-shot-woman-working-luxury-restaurant.jpg"
						alt="Third slide"
					/>
					<Carousel.Caption className="caption-right"></Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="src\assets\img-registro\woman-eating-pasta-italian-restaurant.jpg"
						alt="Third slide"
					/>
					<Carousel.Caption className="caption-right"></Carousel.Caption>
				</Carousel.Item>
			</Carousel>
			<div className="cuadrado-blanco">
				<div className="info-contenedor">
					<div>
						<h1>Regístrate</h1>
						<p>
							¿Ya estás registrado?{' '}
							<a href="/login" className="iniciar-sesion">
								Iniciar Sesión
							</a>{' '}
							<img src="src/assets/img-registro/Vector.png" alt="Icono de Usuario" />
						</p>
					</div>
					<br />
					<Form onSubmit={handleSubmit}>
						<Form.Group className="mb-3" controlId="nombre">
							<Form.Label>Nombre</Form.Label>
							<Form.Control
								type="text"
								placeholder="Ejemplo: Juan Pablo"
								value={nombre}
								onChange={(e) => setNombre(e.target.value)}
							/>
						</Form.Group>

						<Form.Group className="mb-3" controlId="apellido">
							<Form.Label>Apellido</Form.Label>
							<Form.Control
								type="text"
								placeholder="Ejemplo: Pérez"
								value={apellido}
								onChange={(e) => setApellido(e.target.value)}
							/>
						</Form.Group>

						<Form.Group className="mb-3" controlId="email">
							<Form.Label>Correo Electrónico</Form.Label>
							<Form.Control
								type="email"
								placeholder="Ejemplo: usuario@example.com"
								value={mail}
								onChange={(e) => setMail(e.target.value)}
							/>
						</Form.Group>

						<Form.Group className="mb-3" controlId="password">
							<Form.Label>Contraseña</Form.Label>
							<Form.Control
								type="password"
								placeholder="Ejemplo: contraseña123"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</Form.Group>

						<Form.Group className="mb-3" controlId="confirmPassword">
							<Form.Label>Confirmar Contraseña</Form.Label>
							<Form.Control
								type="password"
								placeholder="Confirmar Contraseña"
								value={confirmPassword}
								onChange={(e) => setConfirmPassword(e.target.value)}
							/>
						</Form.Group>

						<Form.Group className="mb-3" controlId="aceptaTerminos">
							<Form.Check
								type="checkbox"
								label="Estoy de acuerdo con los términos y condiciones"
								checked={aceptaTerminos}
								onChange={(e) => setAceptaTerminos(e.target.checked)}
							/>
						</Form.Group>

						<Button className="custom-btn" type="submit">
							Registrarse
						</Button>
					</Form>
				</div>
				<hr />
			</div>
		</div>
	);
};
