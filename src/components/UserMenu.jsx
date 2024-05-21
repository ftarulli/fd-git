import React from 'react';
import Button from 'react-bootstrap/Button';

export const UserMenu = ({ user, editarUser }) => (
	<div className="menu">
		<Button className="menu-item my-1">Eliminar</Button>
		<Button className="menu-item my-1" onClick={() => editarUser(user)}>
			Editar
		</Button>
	</div>
);
