import React from 'react';
import Button from 'react-bootstrap/Button';
import apiTest from '../api/api';

export const UserMenu = ({ user, editarUser }) => {
	const deleteUser = async (_id) => {
		try {
			const resp = await apiTest.delete(`/admin/deleteUsers/${_id}`);
			console.log(resp);
		} catch (error) {
			console.log(error);
		}
	};

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
