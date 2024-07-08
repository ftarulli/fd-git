import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import '../css/registro.css';
import testApi from '../api/testApi';

import image1 from '../assets/img-registro/chef-taking-pizza-out-woodburning-oven-old-cafe-city-center-small-local-business.jpg';
import image2 from '../assets/img-registro/chef-working-together-professional-kitchen.jpg';
import image3 from '../assets/img-registro/group-friends-eating-restaurant.jpg';
import image4 from '../assets/img-registro/medium-shot-woman-working-luxury-restaurant.jpg';
import image5 from '../assets/img-registro/woman-eating-pasta-italian-restaurant.jpg';
import icon from '../assets/img-registro/Vector.png';

export const Registro = () => {
    const navigate = useNavigate();
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        mail: '',
        password: '',
        confirmPassword: '',
        aceptaTerminos: false,
    });

    const registroComplete = async (nombre, apellido, mail, password) => {
        try {
            const response = await testApi.post('/user/register', {
                nombre: nombre.trim(),
                apellido: apellido.trim(),
                mail: mail.trim(),
                password: password.trim(),
            });

            alert('Registro Correcto');

            setFormData({
                nombre: '',
                apellido: '',
                mail: '',
                password: '',
                confirmPassword: '',
                aceptaTerminos: false,
            });

            navigate('/login');
        } catch (error) {
            const errorMsg =
                error.response.data.msg || 'Error en el registro. Intenta nuevamente.';
            return alert(errorMsg);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { nombre, apellido, mail, password, confirmPassword, aceptaTerminos } = formData;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const nameRegex = /^[a-zA-Z\s]*$/;

        if (!nombre || !apellido || !mail || !password || !confirmPassword) {
            return alert('Todos los campos son obligatorios');
        } else if (nombre.length < 2 || nombre.length > 25 || !nameRegex.test(nombre)) {
            return alert('El nombre debe tener entre 2 y 25 caracteres y solo puede contener letras');
        } else if (apellido.length < 2 || apellido.length > 25 || !nameRegex.test(apellido)) {
            return alert('El apellido debe tener entre 2 y 25 caracteres y solo puede contener letras');
        } else if (!emailRegex.test(mail)) {
            return alert('Por favor ingrese un email válido');
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

    const handleChange = (e) => {
        const { name, value, checked, type } = e.target;

        if (name === 'nombre' || name === 'apellido') {
            const nameRegex = /^[a-zA-Z\s]*$/;
            if (!nameRegex.test(value)) {
                return;
            }
        }

        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    return (
        <div className="contenedor-registro">
            <Carousel activeIndex={index} onSelect={handleSelect} className="carrousel">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image1}
                        alt="First slide"
                    />
                    <Carousel.Caption className="caption-right"></Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image2}
                        alt="Second slide"
                    />
                    <Carousel.Caption className="caption-right"></Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image3}
                        alt="Third slide"
                    />
                    <Carousel.Caption className="caption-right"></Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image4}
                        alt="Fourth slide"
                    />
                    <Carousel.Caption className="caption-right"></Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image5}
                        alt="Fifth slide"
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
                            <img src={icon} alt="Icono de Usuario" />
                        </p>
                    </div>
                    <br />
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="nombre">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ejemplo: Juan Pablo"
                                name="nombre"
                                value={formData.nombre}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="apellido">
                            <Form.Label>Apellido</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ejemplo: Pérez"
                                name="apellido"
                                value={formData.apellido}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Correo Electrónico</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Ejemplo: usuario@example.com"
                                name="mail"
                                value={formData.mail}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Ejemplo: contraseña123"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="confirmPassword">
                            <Form.Label>Confirmar Contraseña</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Confirmar Contraseña"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="aceptaTerminos">
                            <Form.Check
                                type="checkbox"
                                label="Estoy de acuerdo con los términos y condiciones"
                                name="aceptaTerminos"
                                checked={formData.aceptaTerminos}
                                onChange={handleChange}
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
