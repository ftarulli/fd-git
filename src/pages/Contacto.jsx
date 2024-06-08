import "../css/contacto.css";
import { useLayoutEffect } from "react";
import { Link } from "react-router-dom";

export const Contacto = () => {
  useLayoutEffect(() => {
    document.body.style.backgroundColor = "black";
  });
  
  return (
    
    <div className="imagenFondo">
      <div className="fondoDiv1 bg-white w-50 text-center p-3 ">
        <h3 className="mt-3">Contactanos</h3>
        <p>+54-11-123-456-789</p>
        <p>info@rincongourmet.com</p>
        <p>Av. Principal 598 - Tucuman - Argentina</p>
        
        {/* Iconos de redes sociales */}
<div className="redes-sociales">
<Link to="/404" className="red-social">
  <img src="src\assets\imgContacto\Twitter.png" alt="Twitter" className="icono-social" />
</Link>
<Link to="/404" className="red-social">
  <img src="src\assets\imgContacto\Facebook.png" alt="Facebook" className="icono-social" />
</Link>
<Link to="/404" className="red-social">
  <img src="src\assets\imgContacto\Social.png" alt="Telegram" className="icono-social" />
</Link>
</div>

        
        
      </div>
    </div>
  );
};
