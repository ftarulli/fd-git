import React from 'react';
import Button from 'react-bootstrap/Button';

export const UserRow = ({
	user,
	visibleMenu,
	toggleMenu,
	editarUser,
	deleteUser,
}) => (
	<tr>
		<td data-label="Id">...{user._id.slice(19, 24)}</td>
		<td data-label="Nombre" id="UserTable">
			{user.nombre}
		</td>
		<td data-label="Email">{user.mail}</td>
		<td data-label="Acciones">
			<div className="menu-container">
				<button className="menu-btn" onClick={() => toggleMenu(user._id)}>
					<i className="fa-solid fa-ellipsis-vertical"></i>
				</button>
				{visibleMenu === user._id && (
					<div className="menu">
						<Button className="menu-item my-1" onClick={() => deleteUser(user._id)}>
							Eliminar
						</Button>
						<Button className="menu-item my-1" onClick={() => editarUser(user)}>
							Detalles
						</Button>
					</div>
				)}
			</div>
		</td>
	</tr>
);
