import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

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
							<i class="fa-solid fa-ellipsis-vertical"></i>
						</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Id</td>
						<td id='UserTable'>Usuario</td>
						<td>Numero de telefono</td>
						<td>Email</td>
						<td>
							<div className="menu-container">
								<button className="menu-btn" onClick={() => toggleMenu(user.id)}>
									<i class="fa-solid fa-ellipsis-vertical"></i>
								</button>
								{visibleMenu && (
									<div className="menu">
										<button className="menu-item">Eliminar</button>
										<button className="menu-item">Editar</button>
									</div>
								)}
							</div>
						</td>
					</tr>
				</tbody>
			</Table>
		</>
	);
};
