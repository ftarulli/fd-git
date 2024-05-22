import React, { useState } from 'react';
import Swal from 'sweetalert2';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../css/reservas.css';
import DatePicker from 'react-datepicker';

export const Reservas = () => {
	const [name, setName] = useState('');
	const [date, setDate] = useState('');
	const [time, setTime] = useState('');
	const [cant, setCant] = useState('');
	const [phone, setPhone] = useState('');
	const [email, setEmail] = useState('');
	const [comment, setComment] = useState('');

	const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

	const isValidEmail = emailRegex.test(email);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (name === '' || time === '' || cant === '') {
			return console.log('Campos Obligatorios');
		} else if (!isValidEmail) {
			console.log('No es un email valido');
		}

		registrarReserva(name, time, cant, phone, email, comment);
	};

	const cargarReservasDB = async () => {
		try {
			const resp = await apiTest.get('/reg/sendReservas');
		} catch (error) {}
	};

	const registrarReserva = async (name, time, cant, phone, email, comment) => {
		try {
			const resp = await apiTest.post('/auth/saveReservas', {
				name,
				time,
				cant,
				phone,
				email,
				comment,
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
			<div className="img-reservas">
				<div className="div-str">
					<strong className="str">Reserva </strong>
					<strong>tu mesa</strong>
				</div>
				<Form onSubmit={handleSubmit} className="from-fst" ccontrolid="name">
					<Form.Group className="mb-3">
						<Form.Label className="fromLabel">Nombre y Apellido *</Form.Label>
						<Form.Control
							type="text"
							placeholder="Ej: Silvina Perez"
							onChange={(e) => setName(e.target.value)}
						/>
					</Form.Group>

					<Form.Group className="mt-2" controlId="email">
						<Form.Label className="fromLabel">Correo electronico *</Form.Label>
						<Form.Control
							type="email"
							placeholder="nombre@gmail.com"
							onChange={(e) => setEmail(e.target.value)}
						/>
					</Form.Group>

					<Form.Group className="mt-2" controlId="phone">
						<Form.Label className="fromLabel">Numero de telefono</Form.Label>
						<Form.Control
							type="tel"
							placeholder="+54 __ __ ___ ___ ___"
							onChange={(e) => setPhone(e.target.value)}
						/>
					</Form.Group>

					<Form.Group className="mt-2" controlid="time">
						<Form.Label className="fromLabel">Fecha de la reserva *</Form.Label>
						<DatePicker selected={date} onChange={(e) => setDate(e.target.value)} />
					</Form.Group>

					<Form.Group className="mt-2" controlid="time">
						<Form.Label className="fromLabel">Hora de la reserva *</Form.Label>
						<DatePicker selected={date} onChange={(e) => setDate(e.target.value)} />
					</Form.Group>

					<Form.Group className="mt-2" controlid="cant">
						<Form.Label className="fromLabel">Numero de comensales *</Form.Label>
						<Form.Control
							type="number"
							placeholder="Ej: 10"
							onChange={(e) => setCant(e.target.value)}
						/>
					</Form.Group>

					<Form.Group className="mt-2" controlId="comment">
						<Form.Label className="fromLabel">Informacion Adicional</Form.Label>
						<Form.Control
							className="fromGroup"
							type="text"
							placeholder="Escriba Aqui."
							onChange={(e) => setComment(e.target.value)}
						/>
					</Form.Group>

					<Button className="mt-5 w-100 p-2" variant="primary" type="submit">
						Registrar Reserva
					</Button>
				</Form>
			</div>
		</>
	);
};
