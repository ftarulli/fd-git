import '../css/SidebarAdmin.css';

export const SidebarAdmin = ({ setActiveTable }) => {
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
					<p className="OptionSidebar" onClick={() => setActiveTable('usuarios')}>
						Usuarios
					</p>
				</div>
			</div>
		</div>
	);
};
