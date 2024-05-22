import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import '../css/registro.css';

export const Registro = () => {
  const navigate = useNavigate();

  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [aceptaTerminos, setAceptaTerminos] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Logging field values
    console.log("Nombre:", nombre);
    console.log("Apellido:", apellido);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
    console.log("Acepta Términos:", aceptaTerminos);

    if (
      !nombre.trim() ||
      !apellido.trim() ||
      !email.trim() ||
      !password.trim()
    ) {
      alert("Todos los campos deben estar completos.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden.");
      return;
    }

    if (!aceptaTerminos) {
      alert("Debes aceptar los términos y condiciones.");
      return;
    }

    // Redirigir a login si todos los campos están completos
    navigate("/login");

    try {
      const response = await axios.post("http://localhost:9099/user/register", {
        nombre: nombre.trim(),
        apellido: apellido.trim(),
        email: email.trim(),
        password: password.trim(),
      });

      console.log("Respuesta del servidor:", response.data);
      alert("Registro Correcto");

      // Limpiar campos después del registro exitoso
      setNombre("");
      setApellido("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setAceptaTerminos(false);

      // Redirigir al login
      navigate("/login");
    } catch (error) {
      console.log("Error en el registro:", error.response);
      const errorMsg =
        error.response.data.msg || "Error en el registro. Intenta nuevamente.";
      alert(errorMsg);
    }
  };

  return (
    <div className="contenedor-registro">
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        className="carrousel"
      >
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
              ¿Ya estás registrado?{" "}
              <a href="/login" className="iniciar-sesion">
                Iniciar Sesión
              </a>{" "}
              <img
                src="src/assets/img-registro/Vector.png"
                alt="Icono de Usuario"
              />
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
