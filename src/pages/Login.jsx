import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom"; // Importa Link desde react-router-dom

// import axios from 'axios';
import "../css/login.css"; // Asegúrate de tener un archivo CSS adecuado para estilos de login
import testApi from "../api/testApi";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginBackend = async (email, password) => {
    try {
      const resp = await testApi.post("/user/login", {
        mail: email,
        password,
      });
      console.log(resp.data.token);
      localStorage.setItem("token", resp.data.token);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Todos los campos deben estar completos.");
      return;
    }

    loginBackend(email, password);
  };

  return (
    <div className="contenedor-carrousel">
      <Carousel className="carrousel">
        <Carousel.Item>
          <img
            className="d-block w-100"

            src="src\assets\img-login\chef-taking-pizza-out-woodburning-oven-old-cafe-city-center-small-local-business.jpg"

            alt="First slide"
          />
          <Carousel.Caption className="caption-right"></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"

            src="src\assets\img-login\chef-working-together-professional-kitchen.jpg"

            alt="Second slide"
          />
          <Carousel.Caption className="caption-right"></Carousel.Caption>
        </Carousel.Item>
        {/* Agrega más elementos Carousel.Item según sea necesario */}
        <Carousel.Item>
          <img
            className="d-block w-100"

            src="src\assets\img-login\group-friends-eating-restaurant.jpg"

            alt="Third slide"
          />
          <Carousel.Caption className="caption-right">
            <p>...</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"

            src="src\assets\img-login\medium-shot-woman-working-luxury-restaurant.jpg"

            alt="Third slide"
          />
          <Carousel.Caption className="caption-right">
            <p>...</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"

            src="src\assets\img-login\woman-eating-pasta-italian-restaurant.jpg"

            alt="Third slide"
          />
          <Carousel.Caption className="caption-right">
            <p>...</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="cuadrado-blanco">
        <div className="info-contenedor">
          <div>
            <h1>Iniciar Sesión</h1>
            <p>
              ¿No tienes una cuenta?{" "}
              <Link to="/registro" className="registro">
                Regístrate
              </Link>
            </p>{" "}
            {/* Utiliza Link para redirigir a /registro */}
          </div>
          <br />
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Correo Electrónico</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ejemplo: usuario@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
              {/* Utiliza Link para redirigir a / */}
              <Button className="custom-btn" type="submit">
                Iniciar Sesión
              </Button>
          </Form>
        </div>
        <hr />
      </div>
    </div>
  );
};
