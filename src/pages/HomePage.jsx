import React, { useLayoutEffect } from "react";
import "../css/home.css";
import principal from "../assets/img_home/principal.png";
import grupo from "../assets/img_home/grupo.png";
import Hamburger from "../assets/img_home/Iconos/Hamburger.png";
import Cookie from "../assets/img_home/Iconos/Cookie.png";
import Wine from "../assets/img_home/Iconos/Wine.png";
import chefs from "../assets/img_home/Iconos/chefs.png";
import combo from "../assets/img_home/Iconos/combo.png";
import utensilios from "../assets/img_home/Iconos/utensilios.png";
import pizzaPorcion from "../assets/img_home/Iconos/pizzaPorcion.png";
import chef1 from "../assets/img_home/chef1.png";
import chef2 from "../assets/img_home/chef2.png";
import chef3 from "../assets/img_home/chef3.png";
import chef4 from "../assets/img_home/chef4.png";
import testimonios1 from "../assets/img_home/testimonios1.png";
import testimonios2 from "../assets/img_home/testimonios2.png";
import testimonios3 from "../assets/img_home/testimonios3.png";

const HomePage = () => {
  useLayoutEffect(() => {
    document.body.style.backgroundColor = "black";
  });
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

      <div className="container-fluid container-elegirnos">
        <div className="row container-filas-elegirnos">
          {/*Columna grupo de imágenes*/}
          <div className="col-10 col-md-5">
            <div className="imagen-grupo-elegirnos">
              <img src={grupo} alt="" />
            </div>
          </div>
          {/*Columna texto e iconos*/}
          <div className="col-10  col-md-5">
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
              <div className="iconos-texto-elegirnos">
                <div className="iconos-elegirnos">
                  <img src={Hamburger} alt="" />
                </div>

                <div>
                  <span>Fast food</span>
                </div>
              </div>

              <div className="iconos-texto-elegirnos">
                <div className="iconos-elegirnos">
                  <img src={Cookie} alt="" />
                </div>

                <div>
                  <span>Almuerzo</span>
                </div>
              </div>

              <div className="iconos-texto-elegirnos">
                <div className="iconos-elegirnos">
                  <img src={Wine} alt="" />
                </div>

                <div>
                  <span>Cena</span>
                </div>
              </div>
            </div>

            <div className="container">
              <div className="cajita-experiencia">
                <span className="numero-experiencia">30+</span>
                <div className="experiencia-texto">
                  <span>Años de</span>
                  <br />
                  <span className="experiencia-destacado">Experiencia</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Sección info */}

      <div className="container-info"></div>

      <div className="container container-iconos-info">
        <div className="row filas-iconos-info">
          <div className="col columnas-iconos-info">
            <div>
              <img src={chefs} alt="" className="imagen-info" />
            </div>
            <div>
              <span className="texto-info">Chefs profesionales</span>
            </div>
            <div>
              <span className="texto-info-destacado">20</span>
            </div>
          </div>
          <div className="col columnas-iconos-info">
            <div>
              <img src={combo} alt="" className="imagen-info" />
            </div>
            <div>
              <span className="texto-info">Platos de comida</span>
            </div>
            <div>
              <span className="texto-info-destacado">150</span>
            </div>
          </div>
          <div className="col columnas-iconos-info">
            <div>
              <img src={utensilios} alt="" className="imagen-info" />
            </div>
            <div>
              <span className="texto-info">Años de experiencia</span>
            </div>
            <div>
              <span className="texto-info-destacado">30+</span>
            </div>
          </div>
          <div className="col columnas-iconos-info">
            <div>
              <img src={pizzaPorcion} alt="" className="imagen-info" />
            </div>
            <div>
              <span className="texto-info">Clientes felices</span>
            </div>
            <div>
              <span className="texto-info-destacado">550</span>
            </div>
          </div>
        </div>
      </div>

      {/*Sección Chefs */}

      <div className="container-chefs-fondo"></div>

      <div className="container-chefs">
        <div className="texto-chefs">
          <p className="texto_uno">Chefs</p>
          <p className="texto_dos-chefs">
            <span className="destacado-chefs">Conoce</span> a nuestros Chefs
          </p>
        </div>
        <div className="container-chefs-detalle">
          <div className="row">
            <div className="col columnas-chefs">
              <div>
                <img src={chef1} alt="" className="imagen-chefs" />
              </div>
            </div>
            <div className="col columnas-chefs">
              <div>
                <img src={chef2} alt="" className="imagen-chefs" />
              </div>
            </div>
            <div className="col columnas-chefs">
              <div>
                <img src={chef3} alt="" className="imagen-chefs" />
              </div>
            </div>
            <div className="col columnas-chefs">
              <div>
                <img src={chef4} alt="" className="imagen-chefs" />
              </div>
            </div>
          </div>
        </div>

        <div className="container-boton-chefs">
          <button className="btn btn-outline-primary boton-chefs">
            Ver mas
          </button>
        </div>
      </div>

      {/*Sección Testimonios Clientes */}

      <div className="container-testimonios"></div>

      <div className="container-carrousel-testimonios">
        <div className="row fila-carousel-testimonios">
          <div className="col-10 offset-1 col-md-6 offset-md-0">
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="card card-testimonios">
                    <img
                      src={testimonios1}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <i
                        className="fa fa-quote-right icono-quote"
                        aria-hidden="true"
                      ></i>
                      <p className="card-text">
                        ¡Simplemente asombroso! Desde el primer bocado hasta el
                        último, cada plato fue una explosión de sabor que
                        deleitó mis sentidos. El personal fue muy acogedor y
                        conocedor, creando una atmósfera cálida y acogedora.
                        Definitivamente, este restaurante se ha convertido en mi
                        lugar favorito.
                      </p>

                      <div className="iconos-testimonios">
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star-o" aria-hidden="true"></i>
                      </div>

                      <div>
                        <span className="nombre-testimonios">
                          Maximiliano Cruz
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="card card-testimonios">
                    <img
                      src={testimonios2}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <i
                        className="fa fa-quote-right icono-quote"
                        aria-hidden="true"
                      ></i>
                      <p className="card-text">
                        ¡Una experiencia gastronómica única! Cada plato fue una
                        obra maestra de sabores exquisitos y presentación
                        impecable. El ambiente elegante y el servicio atento
                        hicieron que nuestra velada fuera verdaderamente
                        inolvidable. Sin duda, volveremos para explorar más
                        deliciosas creaciones culinarias.
                      </p>

                      <div className="iconos-testimonios">
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star-o" aria-hidden="true"></i>
                      </div>

                      <div>
                        <span className="nombre-testimonios">
                          Valentina Reyes
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="card card-testimonios">
                    <img
                      src={testimonios3}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <i
                        className="fa fa-quote-right icono-quote"
                        aria-hidden="true"
                      ></i>
                      <p className="card-text">
                        ¡Una experiencia gastronómica extraordinaria! Cada
                        detalle, desde la presentación de los platos hasta la
                        atención al cliente, reflejaba un compromiso con la
                        excelencia. La diversidad de sabores y la creatividad en
                        cada plato me dejaron impresionado.
                      </p>

                      <div className="iconos-testimonios">
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star-o" aria-hidden="true"></i>
                      </div>

                      <div>
                        <span className="nombre-testimonios">
                          Esteban Sanchez
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/*Sección Banner */}

      <div className="container-banner"></div>

      <div className="container container-texto-banner">
        <div className="row h-100">
          <div className="col-10 offset-1 col-md-6 offset-md-6 align-self-end columna-texto-banner">
            <span className="texto_uno">Reservas online </span>
            <p className="parrafo-uno-banner">
              <span className="texto_destacado">¡Reserva </span>Ahora y
              Garantiza tu Lugar en Nuestro Festín Gastronómico!
            </p>
            <p className="parrafo-dos-banner">
              Con nuestra conveniente plataforma de reservas en línea, puedes
              planificar tu próxima comida con facilidad y tranquilidad ¡No
              esperes más, reserva tu lugar hoy y déjanos deleitarte con nuestro
              menú exquisito!
            </p>

            <div>
              <button className="btn btn-outline-primary">
                Reservar Online
              </button>
            </div>
          </div>
        </div>
      </div>

      {/*Sección Nuestros platos */}

      <div className="container">
        <div className="row">
          <div className="col">
            <div>
              <span>Nuestros platos</span>
            </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
