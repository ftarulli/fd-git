import React from 'react';
import { Menu } from './ReservasMenu';

export const TableRow = ({ reserva, visibleMenu, toggleMenu, onEdit, onDelete }) => {
	const isVisible = visibleMenu === reserva._id;
	return (
		<tr>
			<td data-label="ID">...{reserva._id.slice(19, 24)}</td>
			<td data-label="Usuario" id="UserTableReservas">
				{reserva.name}
			</td>
			<td data-label="Numero de telefono">{reserva.phone}</td>
			<td data-label="Email">{reserva.email}</td>
			<td data-label="Comensales">{reserva.cant}</td>
			<td data-label="Fecha">{reserva.fecha}</td>
			<td data-label="Hora">{reserva.hora}</td>
			<td data-label="Acciones">
				<div className="menu-container">
					<button className="menu-btn" onClick={() => toggleMenu(reserva._id)}>
						<i className="fa-solid fa-ellipsis-vertical"></i>
					</button>
					<Menu
						isVisible={isVisible}
						toggleMenu={() => toggleMenu(reserva.id)}
						onEdit={() => onEdit(reserva)}
						onDelete={() => onDelete(reserva._id)}
					/>
				</div>
			</td>
		</tr>
	);
};
