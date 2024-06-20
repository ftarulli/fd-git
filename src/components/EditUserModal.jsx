import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export const EditUserModal = ({
	show,
	handleClose,
	user,
	handleSubmitEditarUser,
}) => (
	<Modal show={show} onHide={handleClose}>
		<Modal.Header closeButton>
			<Modal.Title>Detalles del Usuario</Modal.Title>
		</Modal.Header>
		<Modal.Body>
			<Form onSubmit={handleSubmitEditarUser}>
				<Form.Group className="mb-3">
					<Form.Label>Id</Form.Label>
					<Form.Control type="text" value={user._id} disabled />
				</Form.Group>

				<Form.Group className="mb-3">
					<Form.Label>Nombre</Form.Label>
					<Form.Control type="text" value={user.nombre} disabled />
				</Form.Group>

				<Form.Group className="mb-3">
					<Form.Label>Apellido</Form.Label>
					<Form.Control type="text" value={user.apellido} disabled />
				</Form.Group>

				<Form.Group className="mb-3">
					<Form.Label>Email</Form.Label>
					<Form.Control type="email" value={user.mail} disabled />
				</Form.Group>

				<Form.Group className="mb-3">
					<Form.Label>Rol</Form.Label>
					<Form.Control
						type="text"
						value={user.isAdmin ? 'Administrador' : 'Usuario'}
						disabled
					/>
				</Form.Group>

				<Button type="submit" className="menu-item mt-4" onClick={handleClose}>
					Cerrar Detalles
				</Button>
			</Form>
		</Modal.Body>
	</Modal>
);
