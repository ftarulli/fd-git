import React, { useState } from 'react';
import '../css/Adminpage.css';
import { ContadorAdmin } from './ContadorAdmin';
import { SidebarAdmin } from './SidebarAdmin';
import { ReservasTable } from './ReservasTable';
import { UsersTable } from './UsersTable';

export const AdminPage = () => {
	const [activeTable, setActiveTable] = useState('reservas');

	return (
		<>
			<section className="AdminPage">
				<SidebarAdmin setActiveTable={setActiveTable} />
				<div className="ContenedorAdmin">
					<ContadorAdmin />
					{activeTable === 'usuarios' && <UsersTable />}
					{activeTable === 'reservas' && <ReservasTable />}
				</div>
			</section>
		</>
	);
};
