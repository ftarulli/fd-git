

import '../css/sobrenosotros.css';

export const SobreNosotros = () => {
  return (
    <div className="contenedor">
      

      {/* Banner */}
      <div className="row">
        <div className="col-12">
          <div className="banner">
            <img src="img\Sobre nosotros.png" alt="Banner" className="banner-img" />
          </div>
        </div>
      </div>

      {/* Contenedor de todas las secciones */}
      <div className="secciones">
        {/* Sección 1: Texto e Imagen */}
        <div className="row align-items-center">
          {/* Texto */}
          <div className="col-10 col-md-6 align-self-center">
            <div className="texto">
              <div className="seccion1">
                <h3 className="seccion1-title">Sobre nosotros</h3>
                <h1 className="seccion1-subtitle">
  <span style={{ color: 'orange' }}>Bienvenidos</span> a Rincón Gourmet
</h1>

                <p className="seccion1-paragraph">En Rincón Gourmet, nos apasiona la gastronomía desde 1995. Nuestro restaurante nació del amor por la buena comida y el deseo de crear un espacio donde los comensales puedan disfrutar de experiencias culinarias únicas y memorables. Desde entonces, nos hemos dedicado a ofrecer mucho más que simplemente comida; nos esforzamos por brindar una experiencia gastronómica completa que deleite los sentidos y alimente el alma.</p>
              </div>
            </div>
          </div>
          {/* Imagen */}
          <div className="col-10 col-md-6 align-self-center">
            <div className="imagen">
              <img src="img\Group 1000002274.png" alt="Imagen" className="imagen" />
            </div>
          </div>
        </div>

        {/* Sección 2: Texto e Imagen */}
        <div className="row align-items-center">
          {/* Texto */}
          <div className="col-10 col-md-6 order-md-1 align-self-center">
            <div className="texto">
              <div className="seccion2">
                <h1 className="seccion2-subtitle">
  <span style={{ color: 'orange' }}>Nuestra</span> Visión</h1>
                <p className="seccion2-paragraph">En Rincón Gourmet, nuestra visión es convertirnos en el referente gastronómico de excelencia, reconocido por la calidad de nuestros platillos, la innovación en nuestras propuestas culinarias y el servicio excepcional que ofrecemos a nuestros clientes. Buscamos trascender las expectativas de quienes nos eligen, creando experiencias que perduren en su memoria y los inviten a volver una y otra vez.</p>
              </div>
            </div>
          </div>
          {/* Imagen */}
          <div className="col-10 col-md-6 order-md-0 align-self-center">
            <div className="imagen">
              <img src="img\Group 1000002276.png" alt="Imagen" className="imagen" />
            </div>
          </div>
        </div>

        {/* Sección 3: Texto e Imagen */}
        <div className="row align-items-center">
          {/* Texto */}
          <div className="col-10 col-md-6 align-self-center">
            <div className="texto">
              <div className="seccion3">
                <h1 className="seccion3-subtitle">
  <span style={{ color: 'orange' }}>Nuestra</span> Misión</h1>
                <p className="seccion3-paragraph">Nuestra misión en Rincón Gourmet es proporcionar a nuestros comensales momentos de deleite y satisfacción a través de una gastronomía exquisita, cuidadosamente elaborada con ingredientes frescos y de calidad, y presentada de manera única y elegante. Nos esforzamos por crear un ambiente acogedor donde cada cliente se sienta especial y disfrute de una experiencia culinaria memorable que estimule todos sus sentidos.</p>
              </div>
            </div>
          </div>
          {/* Imagen */}
          <div className="col-10 col-md-6 align-self-center">
            <div className="imagen">
              <img src="img\Group 1000002277.png" alt="Imagen" className="imagen" />
            </div>
          </div>
        </div>

        {/* Sección 4: Texto e Imagen */}
        <div className="row align-items-center">
          {/* Texto */}
          <div className="col-10 col-md-6 order-md-1 align-self-center">
            <div className="texto">
              <div className="seccion4">
                <h1 className="seccion4-subtitle">  <span style={{ color: 'orange' }}>Nuestros</span> Valores</h1>
                <p className="seccion4-paragraph">En Rincón Gourmet, nos regimos por valores que reflejan nuestra pasión por la excelencia, la integridad en nuestro trabajo y el compromiso con la satisfacción de nuestros clientes. Valoramos la calidad en cada detalle, la creatividad en nuestras propuestas y la honestidad en nuestras relaciones con proveedores y clientes. Nos comprometemos a mantener un ambiente de trabajo colaborativo, donde cada miembro de nuestro equipo se sienta valorado y motivado para dar lo mejor de sí mismo en cada servicio que ofrecemos.</p>
              </div>
            </div>
          </div>
          {/* Imagen */}
          <div className="col-10 col-md-6 order-md-0 align-self-center">
            <div className="imagen">
              <img src="img\Group 1000002278.png" alt="Imagen" className="imagen" />
            </div>
          </div>
        </div>
      </div>

      {/* Final */}
      <div className="final">
        <h1 className="titulo-final">Unite a nosotros</h1>
        <h4 className="texto-final">Te invitamos a unirte a nosotros en nuestro viaje culinario y descubrir todo lo que Rincón Gourmet tiene para ofrecer. Desde una comida casual entre amigos hasta una celebración especial, estamos aquí para hacer que cada visita sea inolvidable. Ven a descubrir el sabor de la excelencia en Rincón Gourmet, donde la buena comida y la hospitalidad excepcional se encuentran en cada plato.</h4>
      </div>

    
    </div>
  );
}




