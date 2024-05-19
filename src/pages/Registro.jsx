import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../css/registro.css'; // Asegúrate de tener un archivo CSS para los estilos específicos de tu página de login

export const Registro = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="contenedor">
      <Carousel activeIndex={index} onSelect={handleSelect} className="carrousel">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="img/cheerful-friends-having-fun-while-talking-waiter-cafe.jpg"
            alt="First slide"
          />
          <Carousel.Caption className="caption-right">
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="img/sunrise-1014712 5.png"
            alt="Second slide"
          />
          <Carousel.Caption className="caption-right">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        {/* Agrega más elementos Carousel.Item según sea necesario */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="img/sunrise-1014712 6.png"
            alt="Third slide"
          />
          <Carousel.Caption className="caption-right">
            <p>...</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="img/sunrise-1014712 7.png"
            alt="Third slide"
          />
          <Carousel.Caption className="caption-right">
            <p>...</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="img/sunrise-1014712 8.png"
            alt="Third slide"
          />
          <Carousel.Caption className="caption-right">
            <p>...</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="cuadrado-blanco">
        <div className="info-contenedor">
          <div > 
            <h1>Registrate</h1>
            <p>¿Ya estás registrado? <a href="#" className="iniciar-sesion">Iniciar Sesión</a> <img src="img\Vector.png" alt="Icono de Usuario" /></p>
          </div>
        </div>

        <hr />
        <form>
          <div className="registro-inputs">
            <div className="input-wrapper">
              <span className="input-label">Nombre</span>
              <input
                type="text"
                name="nombre"
                placeholder="Ejemplo: Juan"
                required
              />
            </div>
            <div className="input-wrapper">
              <span className="input-label">Apellido</span>
              <input
                type="text"
                name="apellido"
                placeholder="Ejemplo: Pérez"
                required
              />
            </div>
          </div>
          <br />

          <div className="registro-inputs">
            <div className="input-wrapper">
              <span className="input-label">Correo Electrónico</span>
              <input
                type="email"
                name="email"
                placeholder="Ejemplo: usuario@example.com"
                required
              />
            </div>
          </div>
          <br />
          <hr className="registro-divider" />
          <br />
          <div className="registro-inputs">
            <div className="input-wrapper">
              <span className="input-label">Contraseña</span>
              <input
                type="password"
                name="password"
                placeholder="Ejemplo: contraseña123"
                required
              />
            </div>

            <div className="input-wrapper">
              <span className="input-label">Confirmar Contraseña</span>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirmar Contraseña"
                required
              />
            </div>
          </div>
          <br />
          <hr className="registro-divider" />

          <div className="registro-terms">
            <div className="registro-checkbox">
              <input type="checkbox" name="aceptaTerminos" required />
              <label htmlFor="aceptaTerminos">Estoy de acuerdo con los términos y condiciones</label>
            </div>
            <button type="submit" className="registrarse">Registrarse</button>
          </div>
        </form>
      </div>
    </div>
  );
};
