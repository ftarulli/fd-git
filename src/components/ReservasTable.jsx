import { useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types'; // Importa PropTypes
import Table from 'react-bootstrap/Table';
import '../css/ReservasTable.css';
import apiTest from '../api/testApi';
import { EditModal } from './EditReservasModal';
import { TableRow } from './ReservasRow';

export const ReservasTable = ({ sidebarOpen }) => {
    const [visibleMenu, setVisibleMenu] = useState(null);
    const [show, setShow] = useState(false);
    const [cargarReservas, setCargarReservas] = useState([]);
    const [reservaEditarSeleccionado, setReservaEditarSeleccionado] = useState({});

    const toggleMenu = useCallback((reservasId) => {
        setVisibleMenu((prevVisibleMenu) =>
            prevVisibleMenu === reservasId ? null : reservasId
        );
    }, []);

    const handleClickOutside = useCallback(
        (e) => {
            if (visibleMenu !== null && !e.target.closest('.menu-container')) {
                setVisibleMenu(null);
            }
        },
        [visibleMenu]
    );

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [handleClickOutside]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true); // Agregamos esta función para abrir el modal

    const listReservas = useCallback(async () => {
        try {
            const resp = await apiTest.get('/admin/sendReservas');
            setCargarReservas(resp.data.listReservas);
        } catch (error) {
            console.error('Error al obtener las reservas:', error);
        }
    }, []);

    useEffect(() => {
        listReservas();
    }, [listReservas]);

    const editarReserva = (reserva) => {
        setShow(true);
        setReservaEditarSeleccionado(reserva);
    };

    const handleChangeEditar = (propiedad, valor) => {
        setReservaEditarSeleccionado((prev) => ({
            ...prev,
            [propiedad]: valor,
        }));
    };

    const handleSubmitEditar = async (e) => {
        e.preventDefault();
        await editarReservaDB(reservaEditarSeleccionado);
        setShow(false);
    };

    const editarReservaDB = async ({
        _id,
        user,
        phone,
        email,
        comensales,
        fecha,
        hora,
    }) => {
        try {
            const resp = await apiTest.put('/admin/editReservas', {
                _id,
                user,
                phone,
                email,
                comensales,
                fecha,
                hora,
            });
            setCargarReservas(resp.data.listReservas);
        } catch (error) {
            console.error('Error al actualizar la reserva:', error);
        }
    };

    const deleteReservas = async (_id) => {
        try {
            await apiTest.delete(`/admin/deleteReservas/${_id}`);
            listReservas();
        } catch (error) {
            console.error('Error al eliminar la reserva:', error);
        }
    };

    return (
        <>
            <div className={`Tbl_Container ${sidebarOpen ? 'shifted' : ''}`}>
                <div className="Tbl_Header">
                    <h2>Reservas</h2>
                    <button onClick={handleShow}>Agregar Reserva</button> {/* Agregamos onClick para abrir el modal */}
                </div>
                <Table bordered hover className="Tabla_Reservas">
                    <thead>
                        <tr>
                            <th className="TablaRes_Id">ID</th>
                            <th className="TablaRes_User">Usuario</th>
                            <th className="TablaRes_Cel">Número de teléfono</th>
                            <th className="TablaRes_Email">Email</th>
                            <th className="TablaRes_Comensales">Comensales</th>
                            <th className="TablaRes_Fecha">Fecha</th>
                            <th className="TablaRes_Hora">Hora</th>
                            <th className="TablaRes_Botons">
                                <i className="fa-solid fa-ellipsis-vertical"></i>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {cargarReservas.map((reserva) => (
                            <TableRow
                                key={reserva._id}
                                reserva={reserva}
                                visibleMenu={visibleMenu}
                                toggleMenu={toggleMenu}
                                onEdit={editarReserva}
                                onDelete={deleteReservas}
                            />
                        ))}
                    </tbody>
                </Table>
            </div>
            <EditModal
                show={show}
                handleClose={handleClose}
                reserva={reservaEditarSeleccionado}
                handleChange={handleChangeEditar}
                handleSubmit={handleSubmitEditar}
            />
        </>
    );
};

// Definir validación de tipo para la propiedad sidebarOpen
ReservasTable.propTypes = {
    sidebarOpen: PropTypes.bool.isRequired,
};
