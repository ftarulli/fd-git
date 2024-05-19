import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import '../css/UsersTable.css';

export const UsersTable = () => {
	const [visibleMenu, setVisibleMenu] = useState(null);

	const toggleMenu = (userId) => {
		setVisibleMenu(visibleMenu === userId ? null : userId);
	};

	const handleClickOutside = (e) => {
		if (visibleMenu !== null && !e.target.closest('.menu-container')) {
			setVisibleMenu(null);
		}
	};

	useEffect(() => {
		document.addEventListener('click', handleClickOutside);
		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	}, [visibleMenu]);
	//Modal para editar
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const [user, setUser] = useState('');
	const [phone, setPhone] = useState('');
	const [email, setEmail] = useState('');

	//Pruebas para la tabla (Borrar) falta traer los datos de la base de datos
	const users = [
		{
			id: '123',
			username: 'Pablo',
			phone: '123456789',
			email: 'pablo@gmail.com',
		},
		{
			id: '1234',
			username: 'Pablo1',
			phone: '12345678910',
			email: 'pablo1@gmail.com',
		},
	];

	return (
		<>
			<Table bordered hover className="Tabla_Usuarios">
				<thead>
					<tr>
						<th className="Tabla_Id">Id</th>
						<th className="Tabla_User">Usuario</th>
						<th className="Tabla_Cel">Numero de telefono</th>
						<th className="Tabla_Email">Email</th>
						<th className="Tabla_Botons">
							<i className="fa-solid fa-ellipsis-vertical"></i>
						</th>
					</tr>
				</thead>
				<tbody>
					{users.map((user) => (
						<tr key={user.id}>
							<td>{user.id}</td>
							<td id="UserTable">{user.username}</td>
							<td>{user.phone}</td>
							<td>{user.email}</td>
							<td>
								<div className="menu-container">
									<button className="menu-btn" onClick={() => toggleMenu(user.id)}>
										<i className="fa-solid fa-ellipsis-vertical"></i>
									</button>
									{visibleMenu === user.id && (
										<div className="menu">
											<Button className="menu-item my-1">Eliminar</Button>
											<Button className="menu-item my-1" onClick={handleShow}>
												Editar
											</Button>
										</div>
									)}
								</div>
							</td>
						</tr>
					))}
				</tbody>
			</Table>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Editar Usuario</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form.Group className="mb-3">
						<Form.Label>Usuario</Form.Label>
						<Form.Control type="text" onChange={(e) => setUser(e.target.value)} />
					</Form.Group>

					<Form.Group className="mb-3">
						<Form.Label>Numero de Telefono</Form.Label>
						<Form.Control type="number" onChange={(e) => setPhone(e.target.value)} />
					</Form.Group>

					<Form.Group className="mb-3">
						<Form.Label>Email </Form.Label>
						<Form.Control type="email" onChange={(e) => setEmail(e.target.value)} />
					</Form.Group>

					<Button type="submit" className="menu-item mt-4">
						Confirmar cambios
					</Button>
				</Modal.Body>
			</Modal>
		</>
	);
};
