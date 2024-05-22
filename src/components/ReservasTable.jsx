import React, { useEffect, useState, useCallback } from 'react';
import Table from 'react-bootstrap/Table';
import '../css/ReservasTable.css';
import apiTest from '../api/api';
import { EditModal } from './EditReservasModal';
import { TableRow } from './ReservasRow';

export const ReservasTable = () => {
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
			await apiTest.delete(`/deleteReservas/${_id}`);
			listReservas();
		} catch (error) {
			console.error('Error al eliminar la reserva:', error);
		}
	};

	return (
		<>
			<Table bordered hover className="Tabla_Reservas">
				<thead>
					<tr>
						<th className="TablaRes_Id">Id</th>
						<th className="TablaRes_User">Usuario</th>
						<th className="TablaRes_Cel">Numero de telefono</th>
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
