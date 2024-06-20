import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types'; // Importa PropTypes
import '../css/modalreservas.css';
import { InputGroup } from 'react-bootstrap';

export const EditModal = ({ show, handleClose, reserva }) => {
	return (
		<Modal show={show} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>Detalles Reserva</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Form.Group className="mb-3">
						<Form.Label>Nombre</Form.Label>
						<Form.Control type="text" value={reserva.name} disabled />
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>Número de Teléfono</Form.Label>
						<Form.Control type="tel" value={reserva.phone || ''} disabled />
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>Email</Form.Label>
						<Form.Control type="email" value={reserva.email || ''} disabled />
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>Comensales</Form.Label>
						<Form.Control type="number" value={reserva.cant || ''} disabled />
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>Fecha y Hora</Form.Label>
						<Form.Control type="text" value={reserva.tiempo} disabled />
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>Comensales</Form.Label>
						<Form.Control type="number" value={reserva.cant || ''} disabled />
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>Comensales</Form.Label>
						<Form.Control type="number" value={reserva.cant || ''} disabled />
					</Form.Group>

					<InputGroup>
						<InputGroup className="ta-comentarios">Comentario</InputGroup>
						<Form.Control as="textarea" value={reserva.comment} disabled />
					</InputGroup>

					<Button type="submit" className="menu-item mt-4">
						Cerrar Detalles
					</Button>
				</Form>
			</Modal.Body>
		</Modal>
	);

};

EditModal.propTypes = {
	show: PropTypes.bool.isRequired,
	handleClose: PropTypes.func.isRequired,
	reserva: PropTypes.object.isRequired,
};
