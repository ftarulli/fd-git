import React from 'react';
import '../css/Adminpage.css';

export const AdminPage = () => {
	return (
		<>
			<div className="Sidebar">
				<div className="SidebarUser">
					<img
						src="https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
						alt="Admin"
					/>
					<p>Admin</p>
				</div>
				<div className="sideBarControlls">
					<div>
						<p className="OptionSidebar">Reservas</p>
						<p className="OptionSidebar">
							Usuarios
							<i className="fa-solid fa-angle-up"></i>
						</p>
					</div>
					<div>
						<p className="OptionUsers">Bloqueados</p>
						<p className="OptionUsers">Nuevos</p>
						<p className="OptionUsers">Todos</p>
					</div>
				</div>
			</div>
		</>
	);
};
