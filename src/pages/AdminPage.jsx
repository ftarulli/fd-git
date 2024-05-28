import { useState } from 'react';
import '../css/Adminpage.css';
import { ContadorAdmin } from '../components/ContadorAdmin';
import { SidebarAdmin } from '../components/SidebarAdmin';
import { UsersTable } from '../components/UsersTable';
import { ReservasTable } from '../components/ReservasTable';

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
