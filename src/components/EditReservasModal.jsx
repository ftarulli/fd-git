
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types'; // Importa PropTypes
import '../css/modalreservas.css';

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
				<Modal.Title>Editar Reserva</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form onSubmit={handleSubmit}>
					<Form.Group className="mb-3">
						<Form.Label>Usuario</Form.Label>
						<Form.Control
							type="text"
							value={reserva.user || ''}
							onChange={(e) => handleChange('user', e.target.value)}
						/>
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>Número de Teléfono</Form.Label>
						<Form.Control
							type="tel"
							value={reserva.phone || ''}
							onChange={(e) => handleChange('phone', e.target.value)}
						/>
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>Email</Form.Label>
						<Form.Control
							type="email"
							value={reserva.email || ''}
							onChange={(e) => handleChange('email', e.target.value)}
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
							type="date"
							value={reserva.fecha || ''}
							onChange={(e) => handleChange('fecha', e.target.value)}
						/>
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>Hora</Form.Label>
						<Form.Control
							type="time"
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

// Validación de tipo para la propiedad 'show'
EditModal.propTypes = {
    show: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    reserva: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
};
