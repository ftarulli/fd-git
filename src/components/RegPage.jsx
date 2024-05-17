import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import apiTest from '../api/api';
import Swal from 'sweetalert2';
import DateTimePicker from 'react-datetime';

export const RegPage = () => {
	const [name, setName] = useState('');
	const [time, setTime] = useState('');
	const [cant, setCant] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();

		if (name === '') {
			return console.log('Error');
		}

		registrarReserva(name, time, cant);
	};

	const registrarReserva = async (name, time, cant) => {
		try {
			const resp = await apiTest.post('/auth/saveReservas', {
				name,
				time,
				cant,
			});

			if (resp.status === 201) {
				Swal.fire({
					position: 'top-end',
					icon: 'success',
					title: 'Registro de mesa exitoso',
					showConfirmButton: false,
					timer: 1500,
				});
			}

			console.log(resp);
		} catch (error) {}
	};

	return (
		<>
			<Form onSubmit={handleSubmit} className="w-50 p-5" ccontrolid="name">
				<Form.Group className="mb-3">
					<Form.Label>Nombre</Form.Label>
					<Form.Control type="text" onChange={(e) => setName(e.target.value)} />
				</Form.Group>

				<Form.Group className="mt-2" controlid="time">
					<Form.Label>Seleccionar Fecha y Hora</Form.Label>
					{/* <Form.Control
						type="date"
						placeholder="Confirmar Fecha"
						onChange={(e) => setTime(e.target.value)}
					/> */}
					<DateTimePicker onChange={(e) => setTime(e ? e.toISOString() : '')} />
				</Form.Group>
				<Form.Group className="mt-2" controlid="cant">
					<Form.Label>Cantidad de Personas</Form.Label>
					<Form.Control
						type="number"
						placeholder="Cantidad de Personas"
						onChange={(e) => setCant(e.target.value)}
					/>
				</Form.Group>

				<Button className="mt-5 w-100 p-2" variant="primary" type="submit">
					Registrar Reserva
				</Button>
			</Form>
		</>
	);
};
