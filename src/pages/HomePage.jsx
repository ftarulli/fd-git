import { useLayoutEffect } from "react";
import "../css/home.css";
import { Link } from "react-router-dom";
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
import hamburguesa from "../assets/img_home/hamburguesa.png";
import pizza from "../assets/img_home/pizza.png";
import tacos from "../assets/img_home/tacos.png";

const HomePage = () => {
  useLayoutEffect(() => {
    document.body.style.backgroundColor = "black";
  });
  return (
    <div className="container-general_home">
      {/*Sección principal */}
      {/* Container Imagen fondo principal */}
      <div className="container-imagen-principal_home"></div>
      {/* Container principal */}
      <div className="container-fluid container-principal_home">
        <div className="row container-columnas_home">
          {/* Columna íconos principal */}
          <div className="col-10 col-md-2 container-iconos-principal_home ">
            <div className="linea-vertical-principal_home my-3"></div>
            <div className="iconos-redes-principal_home">
              <Link
                to="https://www.facebook.com"
                className="link_home"
                target="_blank"
              >
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </Link>

              <Link
                to="https://www.twitter.com"
                className="link_home"
                target="_blank"
              >
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </Link>

              <Link
                to="https://www.pinterest.com"
                className="link_home"
                target="_blank"
              >
                <i className="fa fa-pinterest-p" aria-hidden="true"></i>
              </Link>
            </div>
            <div className="linea-vertical-principal_home my-3"></div>
          </div>
          {/* Columna texto principal */}
          <div className="col-10 col-md-6 container-texto-principal_home">
            <h1 className="texto_uno_home">¡Es rápido y divertido!</h1>
            <p className="parrafo_uno_home">
              <span className="texto_destacado_home">Rápido y delicioso</span>{" "}
              <br /> la calidad en cada <br /> plato, sin esperas.
            </p>

            <p className="parrafo_dos_home">
              ¡Reserva tu mesa hoy mismo y prepárate para una experiencia
              gourmet inolvidable! Desde platos exquisitos hasta un servicio
              excepcional, te garantizamos una velada que estimulará todos tus
              sentidos. ¡Haz tu reserva ahora y déjanos sorprenderte con lo
              mejor de nuestra cocina!
            </p>

            <Link to="/reservas">
              <button className="btn btn-warning boton-reserva_home">
                Reservar
              </button>
            </Link>
          </div>
          {/* Columna imagen principal */}
          <div className="col-10 offset-1 col-md-4 offset-md-0 container-imagen-plato_home">
            <img
              src={principal}
              alt=""
              className="imagen-principal-plato_home"
            />
          </div>
        </div>
      </div>
      {/*Sección elegirnos */}
      <div className="container-fluid container-elegirnos_home">
        <div className="row container-filas-elegirnos_home">
          {/* Columna grupo de imágenes */}
          <div className="col-11 col-md-5">
            <div className="imagen-grupo-elegirnos_home">
              <img src={grupo} alt="" />
            </div>
          </div>
          {/* Columna texto e iconos */}
          <div className="col-10 col-md-5">
            <div>
              <p className="texto_uno_home">¿Por qué elegirnos?</p>
              <p className="parrafo_uno-elegirnos_home">
                <span className="texto_destacado_home">Sabor </span>{" "}
                extraordinario y experiencia.
              </p>

              <p className="parrafo_dos_home">
                Sumérgete en una experiencia culinaria sin igual, donde cada
                bocado es una obra maestra de sabores extraordinarios y cada
                visita es un viaje inolvidable a través de la excelencia
                gastronómica. Descubre nuestro compromiso con la calidad y la
                pasión por la cocina en cada plato que servimos. Bienvenido a un
                mundo donde el sabor y la experiencia se fusionan para crear
                momentos inolvidables.
              </p>
            </div>

            <div className="container-iconos-elegirnos_home">
              <div className="iconos-texto-elegirnos_home">
                <div className="iconos-elegirnos_home">
                  <img src={Hamburger} alt="" />
                </div>

                <div>
                  <span>Fast food</span>
                </div>
              </div>

              <div className="iconos-texto-elegirnos_home">
                <div className="iconos-elegirnos_home">
                  <img src={Cookie} alt="" />
                </div>

                <div>
                  <span>Almuerzo</span>
                </div>
              </div>

              <div className="iconos-texto-elegirnos_home">
                <div className="iconos-elegirnos_home">
                  <img src={Wine} alt="" />
                </div>

                <div>
                  <span>Cena</span>
                </div>
              </div>
            </div>

            <div className="container">
              <div className="cajita-experiencia_home">
                <span className="numero-experiencia_home">30+</span>
                <div className="experiencia-texto_home">
                  <span>Años de</span>
                  <br />
                  <span className="experiencia-destacado_home">
                    Experiencia
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Sección info */}
      <div className="container-info_home"></div>
      <div className="container container-iconos-info_home">
        <div className="row filas-iconos-info">
          <div className="col-10 offset-1 col-md-3 offset-md-0 columnas-iconos-info_home">
            <div>
              <img src={chefs} alt="" className="imagen-info_home" />
            </div>
            <div>
              <span className="texto-info_home">Chefs profesionales</span>
            </div>
            <div>
              <span className="texto-info-destacado_home">20</span>
            </div>
          </div>
          <div className="col-10 offset-1  col-md-3 offset-md-0 columnas-iconos-info_home">
            <div>
              <img src={combo} alt="" className="imagen-info_home" />
            </div>
            <div>
              <span className="texto-info_home">Platos de comida</span>
            </div>
            <div>
              <span className="texto-info-destacado_home">150</span>
            </div>
          </div>
          <div className="col-10 offset-1  col-md-3 offset-md-0 columnas-iconos-info_home">
            <div>
              <img src={utensilios} alt="" className="imagen-info_home" />
            </div>
            <div>
              <span className="texto-info_home">Años de experiencia</span>
            </div>
            <div>
              <span className="texto-info-destacado_home">30+</span>
            </div>
          </div>
          <div className="col-10 offset-1  col-md-3 offset-md-0 columnas-iconos-info_home">
            <div>
              <img src={pizzaPorcion} alt="" className="imagen-info_home" />
            </div>
            <div>
              <span className="texto-info_home">Clientes felices</span>
            </div>
            <div>
              <span className="texto-info-destacado_home">550</span>
            </div>
          </div>
        </div>
      </div>
      {/*Sección Chefs */}
      <div className="container-chefs-fondo_home"></div>

      <div className="container-chefs_home">
        <div className="texto-chefs_home">
          <h3 className="texto_uno_home">Chefs</h3>
          <p className="texto_dos-chefs_home">
            <span className="destacado-chefs_home">Conoce</span> a nuestros
            Chefs
          </p>
        </div>
        <div className="container-chefs-detalle_home">
          <div className="row columnas-chefs_home">
            <div className="col-10 offset-1 col-md-3 offset-md-0 columnas-chefs_home">
              <div>
                <img src={chef1} alt="" className="imagen-chefs_home" />
              </div>
            </div>
            <div className="col-10 offset-1 col-md-3 offset-md-0 columnas-chefs_home">
              <div>
                <img src={chef2} alt="" className="imagen-chefs_home" />
              </div>
            </div>
            <div className="col-10 offset-1 col-md-3 offset-md-0 columnas-chefs_home">
              <div>
                <img src={chef3} alt="" className="imagen-chefs_home" />
              </div>
            </div>
            <div className="col-10 offset-1 col-md-3 offset-md-0 columnas-chefs_home">
              <div>
                <img src={chef4} alt="" className="imagen-chefs_home" />
              </div>
            </div>
          </div>
        </div>

        <div className="container-boton-chefs_home">
          <Link to="/error404">
            <button className="btn btn-outline-warning boton-chefs_home">
              Ver más
            </button>
          </Link>
        </div>
      </div>
      {/*Sección Testimonios Clientes */}

      <div className="container-testimonios_home"></div>

      <div className="container-carrousel-testimonios_home">
        <div className="row fila-carousel-testimonios_home">
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

                      <div className="iconos-testimonios_home">
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star-o" aria-hidden="true"></i>
                      </div>

                      <div>
                        <span className="nombre-testimonios_home">
                          Maximiliano Cruz
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="card card-testimonios_home">
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

                      <div className="iconos-testimonios_home">
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star-o" aria-hidden="true"></i>
                      </div>

                      <div>
                        <span className="nombre-testimonios_home">
                          Valentina Reyes
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="card card-testimonios_home">
                    <img
                      src={testimonios3}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <i
                        className="fa fa-quote-right icono-quote_home"
                        aria-hidden="true"
                      ></i>
                      <p className="card-text">
                        ¡Una experiencia gastronómica extraordinaria! Cada
                        detalle, desde la presentación de los platos hasta la
                        atención al cliente, reflejaba un compromiso con la
                        excelencia. La diversidad de sabores y la creatividad en
                        cada plato me dejaron impresionado.
                      </p>

                      <div className="iconos-testimonios_home">
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star-o" aria-hidden="true"></i>
                      </div>

                      <div>
                        <span className="nombre-testimonios_home">
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
      <div className="container-banner_home"></div>

      <div className="container container-texto-banner_home">
        <div className="row h-100">
          <div className="col-10 offset-1 col-md-6 offset-md-6 align-self-end columna-texto-banner_home">
            <span className="texto_uno_home">Reservas online </span>
            <p className="parrafo-uno-banne_home">
              <span className="texto_destacado_home">¡Reserva </span>Ahora y
              Garantiza tu Lugar en Nuestro Festín Gastronómico!
            </p>
            <p className="parrafo-dos-banner_home">
              Con nuestra conveniente plataforma de reservas en línea, puedes
              planificar tu próxima comida con facilidad y tranquilidad ¡No
              esperes más, reserva tu lugar hoy y déjanos deleitarte con nuestro
              menú exquisito!
            </p>

            <div className="btn-reservas_home">
              <button className="btn btn-outline-warning ">
                Reservar Online
              </button>
            </div>
          </div>
        </div>
      </div>
      {/*Sección Nuestros platos */}
      <div className="container-platos_home">
        <div className="row fila-card-texto_home">
          <div className="col">
            <div>
              <h6 className="titulo-platos_home">Nuestros platos</h6>
              <p className="parrafo-platos_home">
                <span className="texto-destacado-platos_home">Nuestros</span>{" "}
                platos estrellas
              </p>
            </div>
          </div>
        </div>

        <div className="row fila-card-platos_home ">
          <div className="col-10 offset-1 col-md-6 offset-md-0 col-lg-3 offset-lg-0 mb-3 ">
            <div className="card card-platos_home">
              <div className="img-platos_home">
                <img src={hamburguesa} className="card-img-top " alt="..." />
              </div>

              <div className="card-body card-body-platos_home">
                <span className="texto-uno-platos_home">
                  Nuestra hamburgesa estrella
                </span>
                <h5 className="card-title">Fuego Infernal Burger</h5>
                <p>
                  Hamburguesa con carne a la parrilla argentina, queso
                  provolone, chimichurri, cebollas caramelizadas y ají.
                </p>
              </div>
            </div>
          </div>

          <div className="col-10 offset-1 col-md-6 offset-md-0 col-lg-3 offset-lg-0 mb-3 ">
            <div className="card card-platos_home">
              <div className="img-platos_home">
                <img src={pizza} className="card-img-top " alt="..." />
              </div>
              <div className="card-body card-body-platos_home">
                <span className="texto-uno-platos_home">
                  Nuestra pizza más pedida
                </span>
                <h5 className="card-title">Volcán de Queso Pizza</h5>
                <p>
                  Pizza con salsa de tomate, mozzarella, jamón cocido, tomate,
                  aceitunas y orégano, horneada en horno de piedra.
                </p>
              </div>
            </div>
          </div>

          <div className="col-10 offset-1 col-md-6 offset-md-0 col-lg-3 offset-lg-0 mb-3 ">
            <div className="card card-platos_home">
              <div className="img-platos_home">
                <img src={tacos} className="card-img-top " alt="..." />
              </div>
              <div className="card-body card-body-platos_home">
                <span className="texto-uno-platos_home">
                  El favorito de platos internacionales
                </span>
                <h5 className="card-title">Tornado de Sabor Tacos</h5>
                <p>
                  Tacos de carne asada marinada en chimichurri, con cebolla
                  morada, cilantro y salsa de tomate, en tortillas de maíz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
