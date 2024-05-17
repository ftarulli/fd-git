import React from "react";
import "../css/home.css";
import principal from "../assets/img_home/principal.png";
import grupo from "../assets/img_home/grupo.png";
import Hamburger from "../assets/img_home/Iconos/Hamburger.png";
import Cookie from "../assets/img_home/Iconos/Cookie.png";
import Wine from "../assets/img_home/Iconos/Wine.png";

const HomePage = () => {
  return (
    <div className="container-general">
      {/*Sección principal */}
      {/* Container Imagen fondo principal */}
      <div className="container-imagen-principal"></div>
      {/* Container principal */}
      <div className="container-fluid container-principal">
        <div className="row container-columnas">
          {/* Columna íconos principal */}
          <div className="col-10 col-md-2 container-iconos-principal">
            <div className="linea-vertical-principal my-3"></div>
            <div className="iconos-redes-principal">
              <i className="fa fa-facebook" aria-hidden="true"></i>
              <i className="fa fa-twitter" aria-hidden="true"></i>
              <i className="fa fa-pinterest-p" aria-hidden="true"></i>
            </div>
            <div className="linea-vertical-principal my-3"></div>
          </div>

          {/* Columna texto principal */}
          <div className="col-10 col-md-6 container-texto-principal">
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

            <button className="btn btn-primary boton-reserva ">Reservar</button>
          </div>

          {/* Columna imagen principal */}
          <div className="col-10 offset-1 col-md-4 offset-md-0 container-imagen-plato">
            <img src={principal} alt="" className="imagen-principal-plato" />
          </div>
        </div>
      </div>

      {/*Sección elegirnos */}

      <div className="container-fluid container-elegirnos my-5">
        <div className="row container-filas-elegirnos">
          <div className="col-10 col-md-5">
            <div className="imagen-grupo-elegirnos">
              <img src={grupo} alt="" />
            </div>
          </div>

          <div className="col col-10 col-md-5">
            <div>
              <p className="texto_uno">¿Por qué elegirnos?</p>
              <p className="parrafo_uno-elegirnos">
                <span className="texto_destacado">Sabor </span> extraordinario y
                experiencia.
              </p>

              <p className="parrafo_dos">
                Sumérgete en una experiencia culinaria sin igual, donde cada
                bocado es una obra maestra de sabores extraordinarios y cada
                visita es un viaje inolvidable a través de la excelencia
                gastronómica. Descubre nuestro compromiso con la calidad y la
                pasión por la cocina en cada plato que servimos. Bienvenido a un
                mundo donde el sabor y la experiencia se fusionan para crear
                momentos inolvidables.
              </p>
            </div>

            <div className="container-iconos-elegirnos">
              <div>
                <img src={Hamburger} alt="" />
              </div>
              <div>
                <img src={Cookie} alt="" />
              </div>
              <div>
                <img src={Wine} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
