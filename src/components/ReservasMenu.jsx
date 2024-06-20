import React from 'react';
import Button from 'react-bootstrap/Button';

export const Menu = ({ isVisible, toggleMenu, onEdit, onDelete }) => {
	if (!isVisible) return null;

	return (
		<div className="menu">
			<Button className="menu-item my-1" onClick={onDelete}>
				Eliminar
			</Button>
			<Button className="menu-item my-1" onClick={onEdit}>
				Detalles
			</Button>
		</div>
	);
};
