import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export const EditModal = ({
	show,
	handleClose,
	reserva,
	handleChange,
	handleSubmit,
}) => {
	return (
		<Modal show={show} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>Editar Usuario</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form onSubmit={handleSubmit}>
					<Form.Group className="mb-3">
						<Form.Label>Usuario</Form.Label>
						<Form.Control
							type="text"
							value={reserva.user || ''}
							onChange={(e) => handleChange('user', e.target.value)}
							disabled
						/>
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>Numero de Telefono</Form.Label>
						<Form.Control
							type="number"
							value={reserva.phone || ''}
							onChange={(e) => handleChange('phone', e.target.value)}
							disabled
						/>
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>Email</Form.Label>
						<Form.Control
							type="email"
							value={reserva.email || ''}
							onChange={(e) => handleChange('email', e.target.value)}
							disabled
						/>
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>Comensales</Form.Label>
						<Form.Control
							type="number"
							value={reserva.comensales || ''}
							onChange={(e) => handleChange('comensales', e.target.value)}
						/>
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>Fecha</Form.Label>
						<Form.Control
							type="text"
							value={reserva.fecha || ''}
							onChange={(e) => handleChange('fecha', e.target.value)}
						/>
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>Hora</Form.Label>
						<Form.Control
							type="text"
							value={reserva.hora || ''}
							onChange={(e) => handleChange('hora', e.target.value)}
						/>
					</Form.Group>
					<Button type="submit" className="menu-item mt-4">
						Confirmar cambios
					</Button>
				</Form>
			</Modal.Body>
		</Modal>
	);
};
