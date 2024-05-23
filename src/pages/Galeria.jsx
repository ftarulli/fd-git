import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/galeria.css";
import { useLayoutEffect } from "react";

export const Galeria = () => {
  useLayoutEffect(() => {
    document.body.style.backgroundColor = "black";
  });
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Mostrar 4 imágenes a la vez en la versión web
    slidesToScroll: 4, // Desplazar 4 imágenes a la vez en la versión web
    arrows: true,

    responsive: [
      {
        breakpoint: 768, // Dispositivos móviles
        settings: {
          slidesToShow: 1, // Mostrar solo 1 imagen a la vez en dispositivos móviles
          slidesToScroll: 1, // Desplazar solo 1 imagen a la vez en dispositivos móviles
        },
      },
    ],
  };

  return (
    <div>
      <div className="content-wrapper">
        <h2 className="subtitle">Galeria de Imágenes</h2>
        <h1 className="title">
          <span className="orange-text">Nuestros</span> increíbles platos
        </h1>
      </div>
      <div className="slider-container-wrapper">
        <div
          className="slider-container"
          style={{ width: "1349px", height: "328px", margin: "0 auto" }}
        >
          <Slider {...settings}>
            <div>
              <img
                src="src/assets/img-galeria/unsplash_-lHZUkiWM74 (9).png"
                alt="Imagen 1"
              />
            </div>
            <div>
              <img
                src="src/assets/img-galeria/unsplash_-lHZUkiWM74 (1).png"
                alt="Imagen 2"
              />
            </div>
            <div>
              <img
                src="src/assets/img-galeria/unsplash_-lHZUkiWM74 (2).png"
                alt="Imagen 3"
              />
            </div>
            <div>
              <img
                src="src/assets/img-galeria/unsplash_-lHZUkiWM74 (3).png"
                alt="Imagen 4"
              />
            </div>
            <div>
              <img
                src="src/assets/img-galeria/unsplash_-lHZUkiWM74 (4).png"
                alt="Imagen 5"
              />
            </div>
            <div>
              <img
                src="src/assets/img-galeria/unsplash_-lHZUkiWM74 (5).png"
                alt="Imagen 6"
              />
            </div>
            <div>
              <img
                src="src/assets/img-galeria/unsplash_-lHZUkiWM74 (6).png"
                alt="Imagen 7"
              />
            </div>
            <div>
              <img
                src="src/assets/img-galeria/unsplash_-lHZUkiWM74 (7).png"
                alt="Imagen 8"
              />
            </div>
            <div>
              <img
                src="src/assets/img-galeria/unsplash_-lHZUkiWM74 (8).png"
                alt="Imagen 9"
              />
            </div>
            <div>
              <img
                src="src/assets/img-galeria/unsplash_-lHZUkiWM74 (9).png"
                alt="Imagen 10"
              />
            </div>
            <div>
              <img
                src="src/assets/img-galeria/unsplash_-lHZUkiWM74.png"
                alt="Imagen 11"
              />
            </div>
            {/* Agrega más imágenes según sea necesario */}
          </Slider>
        </div>
      </div>
    </div>
  );
};
