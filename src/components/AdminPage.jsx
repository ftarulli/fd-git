import React from 'react';
import '../css/Adminpage.css';

export const AdminPage = () => {
	return (
		<>
			<div className="Sidebar">
				<div className="SidebarUser">
					<img src="" alt="" />
					<p>Admin</p>
				</div>
				<div className="sideBarControlls">
					<ul>
						<li className="OptionSidebar">Reservas</li>
						<li className="OptionSidebar">Usuarios</li>
					</ul>
					<ul>
						<li className="OptionUsers">Bloqueados</li>
						<li className="OptionUsers">Nuevos</li>
						<li className="OptionUsers">Todos</li>
					</ul>
				</div>
			</div>
		</>
	);
};
