import { useEffect, useState } from "react";
import "../css/ContadorAdmin.css";
import apiTest from "../api/testApi";

export const ContadorAdmin = () => {
  const [cargarReservasContador, setCargarReservasContador] = useState([]);
  const [cargarUsersContador, setCargarUsersContador] = useState([]);

  const listReservas = async () => {
    try {
      const resp = await apiTest.get("/admin/sendReservas");

      setCargarReservasContador(resp.data.listReservas);
    } catch (error) {
      console.log(error);
    }
  };

  const listaUsersBack = async () => {
    try {
      const resp = await apiTest.get("/admin/sendUsers");

      setCargarUsersContador(resp.data.listUsers);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    listReservas();
    listaUsersBack();
  }, []);

  return (
    <>
      <div className="Panel">
        <div className="ControlNumbers mt-3">
          <div className="bloquesdatos">
            <h2>{cargarReservasContador.length}</h2>
            <h3>Reservas</h3>
          </div>
          <div className="bloquesdatos">
            <h2>{cargarUsersContador.length}</h2>
            <h3>Usuarios</h3>
          </div>
        </div>
      </div>
    </>
  );
};
