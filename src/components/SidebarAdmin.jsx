import React, { useState } from 'react';
import '../css/SidebarAdmin.css';

export const SidebarAdmin = ({ setActiveTable }) => {
	const [clickeado, setClickeado] = useState(false);

	const ShowOptions = () => {
		setClickeado(!clickeado);
	};

	return (
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
					<p className="OptionSidebar" onClick={() => setActiveTable('reservas')}>
						Reservas
					</p>
					<p className="OptionSidebar" onClick={ShowOptions}>
						Usuarios
						<i className="fa-solid fa-angle-up"></i>
					</p>
				</div>
				<div className={clickeado ? 'Options clickeado' : 'Options'}>
					<p className="OptionUsers">Bloqueados</p>
					<p className="OptionUsers">Nuevos</p>
					<p className="OptionUsers" onClick={() => setActiveTable('usuarios')}>
						Todos
					</p>
				</div>
			</div>
		</div>
	);
};
