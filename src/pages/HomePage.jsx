import React from "react";
import "../css/home.css";
import principal from "../assets/img_home/principal.png";

const HomePage = () => {
  return (
    <div className="container-general">
      {/* Container Imagen fondo principal */}
      <div className="container-imagen-principal"></div>
      {/* Container principal */}
      <div className="container-fluid container-principal">
        <div className="row container-columnas">
          {/* Columna íconos principal */}
          <div className="col-2 container-iconos-principal">
            <div className="linea-vertical-principal my-3"></div>
            <div className="iconos-redes-principal">
              <i className="fa fa-facebook" aria-hidden="true"></i>
              <i className="fa fa-twitter" aria-hidden="true"></i>
              <i className="fa fa-pinterest-p" aria-hidden="true"></i>
            </div>
            <div className="linea-vertical-principal my-3"></div>
          </div>

          {/* Columna texto principal */}
          <div className="col-10 offset-1 col-md-5 offset-md-0 container-texto-principal">
            <p className="texto_uno">¡Es rápido y divertido!</p>
            <p className="parrafo_uno">
              <span className="texto_destacado">Rápido y delicioso</span> <br />{" "}
              la calidad en cada <br /> plato, sin esperas.
            </p>

            <p className="parrafo_dos">
              ¡Reserva tu mesa hoy mismo y prepárate para una experiencia
              gourmet inolvidable! Desde platos exquisitos hasta un servicio
              excepcional, te garantizamos una velada que estimulará todos tus
              sentidos. ¡Haz tu reserva ahora y déjanos sorprenderte con lo
              mejor de nuestra cocina!
            </p>

            <button className="btn btn-primary boton-reserva">Reservar</button>
          </div>

          {/* Columna imagen principal */}
          <div className="col-10 offset-1 col-md-5 offset-md-0 container-imagen-plato">
            <img src={principal} alt="" className="imagen-principal-plato" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
