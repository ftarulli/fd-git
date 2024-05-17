import React, { useState } from 'react';
import '../css/Adminpage.css';
import { UsersTable } from './UsersTable';
import { ContadorAdmin } from './ContadorAdmin';

export const AdminPage = () => {
	const [clickeado, setClickeado] = useState(false);

	const ShowOptions = () => {
		setClickeado(!clickeado);
	};
	return (
		<>
			<div className="AdminPage">
				<div className="Sidebar">
					<div className="SidebarUser">
						<img
							src="https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
							alt="Admin"
						/>
						<p>Administrador</p>
					</div>
					<div className="sideBarControlls">
						<div>
							<p className="OptionSidebar">Reservas</p>
							<p className="OptionSidebar" onClick={ShowOptions}>
								Usuarios
								<i className="fa-solid fa-angle-up"></i>
							</p>
						</div>
						<div className={clickeado ? 'Options clickeado' : 'Options'}>
							<p className="OptionUsers">Bloqueados</p>
							<p className="OptionUsers">Nuevos</p>
							<p className="OptionUsers">Todos</p>
						</div>
					</div>
				</div>
				<div>
					<ContadorAdmin />
					<UsersTable />
				</div>
			</div>
		</>
	);
};
