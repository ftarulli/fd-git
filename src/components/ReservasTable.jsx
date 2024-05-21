import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import '../css/ReservasTable.css';
import apiTest from '../api/api';

export const ReservasTable = () => {
	//Tres puntos
	const [visibleMenu, setVisibleMenu] = useState(null);

	const toggleMenu = (reservasId) => {
		setVisibleMenu(visibleMenu === reservasId ? null : reservasId);
	};

	const handleClickOutside = (e) => {
		if (visibleMenu !== null && !e.target.closest('.menu-container')) {
			setVisibleMenu(null);
		}
	};

	useEffect(() => {
		document.addEventListener('click', handleClickOutside);
		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	}, [visibleMenu]);

	//Modal para editar
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);

	//Peticion get para traer las reservas

	const [cargarReservas, setCargarReservas] = useState([]);

	const listReservas = async () => {
		try {
			const resp = await apiTest.get('/admin/sendReservas');

			setCargarReservas(resp.data.listReservas);
		} catch (error) {}
	};

	useEffect(() => {
		listReservas();
	}, []);

	//Editar Reserva

	const [reservaEditarSeleccionado, setReservaEditarSeleccionado] = useState({});

	const editarReserva = (reserva) => {
		setShow(true);
		setReservaEditarSeleccionado(reserva);
	};

	const handleChangeEditar = (propiedad, valor) => {
		setReservaEditarSeleccionado({
			...reservaEditarSeleccionado,
			[propiedad]: valor,
		});
	};

	const handleSubmitEditar = (e) => {
		e.preventDefault();

		//Validaciones

		editarReservaDB(productoEditarSeleccionado);
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
			console.log(error);
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
						<tr key={reserva.id}>
							<td>{reserva.id}</td>
							<td id="UserTableReservas">{reserva.username}</td>
							<td>{reserva.phone}</td>
							<td>{reserva.email}</td>
							<td>{reserva.comensales}</td>
							<td>{reserva.fecha}</td>
							<td>{reserva.hora}</td>
							<td>
								<div className="menu-container">
									<button
										className="menu-btn"
										onClick={() => toggleMenu(reserva.id)}
									>
										<i className="fa-solid fa-ellipsis-vertical"></i>
									</button>
									{visibleMenu === reserva.id && (
										<div className="menu">
											<Button className="menu-item my-1">Eliminar</Button>
											<Button
												className="menu-item my-1"
												onClick={() => editarReserva(reserva)}
											>
												Editar
											</Button>
										</div>
									)}
								</div>
							</td>
						</tr>
					))}
				</tbody>
			</Table>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Editar Usuario</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form.Group className="mb-3">
						<Form.Label>Usuario</Form.Label>
						<Form.Control
							type="text"
							// value={productoEditarSeleccionado.user}
							onChange={(e) => handleChangeEditar('user', e.target.value)}
						/>
					</Form.Group>

					<Form.Group className="mb-3">
						<Form.Label>Numero de Telefono</Form.Label>
						<Form.Control
							type="number"
							// value={productoEditarSeleccionado.phone}
							onChange={(e) => handleChangeEditar('phone', e.target.value)}
						/>
					</Form.Group>

					<Form.Group className="mb-3">
						<Form.Label>Email </Form.Label>
						<Form.Control
							type="email"
							// value={productoEditarSeleccionado.email}
							onChange={(e) => handleChangeEditar('email', e.target.value)}
						/>
					</Form.Group>

					<Form.Group className="mb-3">
						<Form.Label>Comensales</Form.Label>
						<Form.Control
							type="number"
							// value={productoEditarSeleccionado.comensales}
							onChange={(e) => handleChangeEditar('comensales', e.target.value)}
						/>
					</Form.Group>

					<Form.Group className="mb-3">
						<Form.Label>Fecha</Form.Label>
						<Form.Control
							type="text"
							// value={productoEditarSeleccionado.fecha}
							onChange={(e) => handleChangeEditar('fecha', e.target.value)}
						/>
					</Form.Group>

					<Form.Group className="mb-3">
						<Form.Label>Hora</Form.Label>
						<Form.Control
							type="text"
							// value={productoEditarSeleccionado.hora}
							onChange={(e) => handleChangeEditar('hora', e.target.value)}
						/>
					</Form.Group>

					<Button
						type="submit"
						className="menu-item mt-4"
						onClick={handleSubmitEditar}
					>
						Confirmar cambios
					</Button>
				</Modal.Body>
			</Modal>
		</>
	);
};
