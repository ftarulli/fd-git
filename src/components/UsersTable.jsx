import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
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

	//Pruebas para la tabla (Borrar)
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
							<td>{user.username}</td>
							<td>{user.phone}</td>
							<td>{user.email}</td>
							<td>
								<div className="menu-container">
									<button className="menu-btn" onClick={() => toggleMenu(user.id)}>
										<i className="fa-solid fa-ellipsis-vertical"></i>
									</button>
									{visibleMenu === user.id && (
										<div className="menu">
											<button className="menu-item">Eliminar</button>
											<button className="menu-item">Editar</button>
										</div>
									)}
								</div>
							</td>
						</tr>
					))}
				</tbody>
			</Table>
		</>
	);
};
