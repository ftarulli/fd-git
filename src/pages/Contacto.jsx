import "../css/contacto.css";
import { useLayoutEffect } from "react";
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
      </div>
    </div>
  );
};
export default Contacto;
