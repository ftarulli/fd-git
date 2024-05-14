import React from "react";
import "../css/home.css";

const HomePage = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col d-flex">
            <hr />
            <hr />
          </div>
          <div className="col">
            <div>
              <h3>Es rápido y divertido!</h3>

              <h2>Rápido y delicioso la calidad en cada plato, sin esperas</h2>

              <p>
                ¡Reserva tu mesa hoy mismo y prepárate para una experiencia
                gourmet inolvidable! Desde platos exquisitos hasta un servicio
                excepcional, te garantizamos una velada que estimulará todos tus
                sentidos. ¡Haz tu reserva ahora y déjanos sorprenderte con lo
                mejor de nuestra cocina!
              </p>
            </div>
          </div>
          <div className="col">
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
