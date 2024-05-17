import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import '../css/ReservasTable.css';
export const ReservasTable = () => {
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

	const reservas = [
		{
			id: 12345,
			username: 'Pablo',
			phone: 123746879,
			email: 'pablo@gmail.com',
			comensales: 4,
			fecha: '12/12/12',
			hora: '19:00',
		},
		{
			id: 123456,
			username: 'Pablo1',
			phone: 123746879123,
			email: 'pablo12@gmail.com',
			comensales: 8,
			fecha: '11/12/12',
			hora: '19:00',
		},
	];
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
					{reservas.map((reservas) => (
						<tr key={reservas.id}>
							<td>{reservas.id}</td>
							<td id="UserTableReservas">{reservas.username}</td>
							<td>{reservas.phone}</td>
							<td>{reservas.email}</td>
							<td>{reservas.comensales}</td>
							<td>{reservas.fecha}</td>
							<td>{reservas.hora}</td>
							<td>
								<div className="menu-container">
									<button
										className="menu-btn"
										onClick={() => toggleMenu(reservas.id)}
									>
										<i className="fa-solid fa-ellipsis-vertical"></i>
									</button>
									{visibleMenu === reservas.id && (
										<div className="menu">
											<button className="menu-item">Eliminar</button>
											<button className="menu-item">Editar</button>
										</div>
									)}
								</div>
							</td>
						</tr>
					))}
				</tbody>
			</Table>
		</>
	);
};
