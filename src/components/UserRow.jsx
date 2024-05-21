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
		<td>...{user._id.slice(19, 24)}</td>
		<td id="UserTable">{user.username}</td>
		<td>{user.phone}</td>
		<td>{user.mail}</td>
		<td>
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
							Editar
						</Button>
					</div>
				)}
			</div>
		</td>
	</tr>
);
