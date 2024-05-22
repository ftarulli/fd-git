import React, { useEffect, useState, useCallback } from 'react';
import Table from 'react-bootstrap/Table';
import apiTest from '../api/api';
import { UserRow } from './UserRow';
import { EditUserModal } from './EditUserModal';
import '../css/UsersTable.css';

export const UsersTable = () => {
	const [visibleMenu, setVisibleMenu] = useState(null);
	const [show, setShow] = useState(false);
	const [cargarUsers, setCargarUsers] = useState([]);
	const [userEditarSeleccionado, setUserEditarSeleccionado] = useState({});

	const toggleMenu = useCallback((userId) => {
		setVisibleMenu((prevVisibleMenu) =>
			prevVisibleMenu === userId ? null : userId
		);
	}, []);

	const handleClickOutside = useCallback(
		(e) => {
			if (visibleMenu !== null && !e.target.closest('.menu-container')) {
				setVisibleMenu(null);
			}
		},
		[visibleMenu]
	);

	useEffect(() => {
		document.addEventListener('click', handleClickOutside);
		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	}, [handleClickOutside]);

	const handleClose = () => setShow(false);

	const listaUsersBack = async () => {
		try {
			const resp = await apiTest.get('/admin/sendUsers');
			setCargarUsers(resp.data.listUsers);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		listaUsersBack();
	}, []);

	const editarUser = (user) => {
		setShow(true);
		setUserEditarSeleccionado(user);
	};

	const handleChangeEditUser = (propiedad, valor) => {
		setUserEditarSeleccionado((prevUser) => ({
			...prevUser,
			[propiedad]: valor,
		}));
	};

	const handleSubmitEditarUser = (e) => {
		e.preventDefault();

		//Validaciones

		editarUserDB(userEditarSeleccionado);
	};

	const editarUserDB = async ({ _id, username, phone, mail }) => {
		try {
			await apiTest.put('./admin/editUsers', {
				_id,
				username,
				phone,
				mail,
			});
			listaUsersBack();
			setShow(false);
		} catch (error) {
			console.log(error);
		}
	};

	const deleteUser = async (_id) => {
		try {
			await apiTest.delete(`/admin/deleteUsers/${_id}`);
			listaUsersBack();
		} catch (error) {
			console.log(error);
		}
	};

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
					{cargarUsers.map((user) => (
						<UserRow
							key={user._id}
							user={user}
							visibleMenu={visibleMenu}
							toggleMenu={toggleMenu}
							editarUser={editarUser}
							deleteUser={deleteUser}
						/>
					))}
				</tbody>
			</Table>
			<EditUserModal
				show={show}
				handleClose={handleClose}
				user={userEditarSeleccionado}
				handleChangeEditUser={handleChangeEditUser}
				handleSubmitEditarUser={handleSubmitEditarUser}
			/>
		</>
	);
};
