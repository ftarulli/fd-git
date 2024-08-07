import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { Link, useNavigate } from "react-router-dom";
import "../css/login.css";
import testApi from "../api/testApi";
import img1 from "../assets/img-login/chef-taking-pizza-out-woodburning-oven-old-cafe-city-center-small-local-business.jpg";
import img2 from "../assets/img-login/chef-working-together-professional-kitchen.jpg";
import img3 from "../assets/img-login/group-friends-eating-restaurant.jpg";
import img4 from "../assets/img-login/medium-shot-woman-working-luxury-restaurant.jpg";
import img5 from "../assets/img-login/woman-eating-pasta-italian-restaurant.jpg";
import Swal from "sweetalert2";

export const Login = () => {
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const loginBackend = async (mail, password) => {
        try {
            const resp = await testApi.post('/user/login', {
                mail,
                password,
            });
            console.log(resp.data);
            localStorage.setItem('token', resp.data.token);
            navigate('/');
			window.location.reload();

        } catch (error) {
            console.log(error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Email o Contraseña incorrectos',
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!mail || !password) {
            return Swal.fire({
                icon: 'warning',
                title: 'Campos Incompletos',
                text: 'Todos los campos deben estar completos.',
            });
        } else if (password.length < 8) { // Fix comparison here
            return Swal.fire({
                icon: 'warning',
                title: 'Datos Incorrectos',
                text: 'Email o Contraseña invalidos',
            });
        } else if (!emailRegex.test(mail)) {
            return Swal.fire({
                icon: 'warning',
                title: 'Datos Incorrectos',
                text: 'Email o Contraseña invalidos',
            });
        }

        loginBackend(mail, password);
    };

    return (
        <div className="contenedor-carrousel">
            <Carousel className="carrousel">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                    />
                    <Carousel.Caption className="caption-right"></Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide"
                    />
                    <Carousel.Caption className="caption-right"></Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img3}
                        alt="Third slide"
                    />
                    <Carousel.Caption className="caption-right">
                        <p>...</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img4}
                        alt="Fourth slide"
                    />
                    <Carousel.Caption className="caption-right">
                        <p>...</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img5}
                        alt="Fifth slide"
                    />
                    <Carousel.Caption className="caption-right">
                        <p>...</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className="cuadrado-blanco">
                <div className="info-contenedor">
                    <div>
                        <h1 style={{ marginTop: '-50px', marginBottom: '50px' }}>
                            Iniciar Sesión
                        </h1>
                        <p>
                            ¿No tienes una cuenta?{' '}
                            <Link to="/registro" className="registro">
                                Regístrate
                            </Link>
                        </p>{' '}
                    </div>
                    <br />
                    <Form onSubmit={handleSubmit}>
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
                        <Button
                            style={{ marginTop: '30px', marginBottom: '50px' }}
                            className="custom-btn"
                            type="submit"
                        >
                            Iniciar Sesión
                        </Button>
                    </Form>
                </div>
                <hr />
            </div>
        </div>
    );
};
