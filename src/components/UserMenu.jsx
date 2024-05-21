import React from 'react';
import Button from 'react-bootstrap/Button';

export const UserMenu = ({ user, editarUser }) => {
	return (
		<div className="menu">
			<Button className="menu-item my-1" onClick={() => deleteUser(user._id)}>
				Eliminar
			</Button>
			<Button className="menu-item my-1" onClick={() => editarUser(user)}>
				Editar
			</Button>
		</div>
	);
};
