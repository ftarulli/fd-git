import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export const EditUserModal = ({
	show,
	handleClose,
	user,
	handleChangeEditUser,
	handleSubmitEditarUser,
}) => (
	<Modal show={show} onHide={handleClose}>
		<Modal.Header closeButton>
			<Modal.Title>Editar Usuario</Modal.Title>
		</Modal.Header>
		<Modal.Body>
			<Form onSubmit={handleSubmitEditarUser}>
				<Form.Group className="mb-3">
					<Form.Label>Id</Form.Label>
					<Form.Control
						type="text"
						value={user._id}
						onChange={(e) => handleChangeEditUser('_id', e.target.value)}
						disabled
					/>
				</Form.Group>

				<Form.Group className="mb-3">
					<Form.Label>Usuario</Form.Label>
					<Form.Control
						type="text"
						value={user.user}
						onChange={(e) => handleChangeEditUser('user', e.target.value)}
					/>
				</Form.Group>

				<Form.Group className="mb-3">
					<Form.Label>Numero de Telefono</Form.Label>
					<Form.Control
						type="number"
						value={user.phone}
						onChange={(e) => handleChangeEditUser('phone', e.target.value)}
					/>
				</Form.Group>

				<Form.Group className="mb-3">
					<Form.Label>Email</Form.Label>
					<Form.Control
						type="email"
						value={user.mail}
						onChange={(e) => handleChangeEditUser('mail', e.target.value)}
					/>
				</Form.Group>

				<Button type="submit" className="menu-item mt-4">
					Confirmar cambios
				</Button>
			</Form>
		</Modal.Body>
	</Modal>
);
