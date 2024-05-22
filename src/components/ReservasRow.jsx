import React from 'react';
import { Menu } from './ReservasMenu';

export const TableRow = ({ reserva, visibleMenu, toggleMenu, onEdit, onDelete }) => {
	const isVisible = visibleMenu === reserva._id;
	return (
		<tr>
			<td>{reserva._id}</td>
			<td id="UserTableReservas">{reserva.username}</td>
			<td>{reserva.phone}</td>
			<td>{reserva.email}</td>
			<td>{reserva.comensales}</td>
			<td>{reserva.fecha}</td>
			<td>{reserva.hora}</td>
			<td>
				<div className="menu-container">
					<button className="menu-btn" onClick={() => toggleMenu(reserva._id)}>
						<i className="fa-solid fa-ellipsis-vertical"></i>
					</button>
					<Menu
						isVisible={isVisible}
						toggleMenu={() => toggleMenu(reserva.id)}
						onEdit={() => onEdit(reserva)}
						onDelete={() => onDelete(reserva.id)}
					/>
				</div>
			</td>
		</tr>
	);
};
