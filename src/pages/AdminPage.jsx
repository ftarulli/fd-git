import { useState } from 'react';
import '../css/Adminpage.css';
import { ContadorAdmin } from '../components/ContadorAdmin';
import { SidebarAdmin } from '../components/SidebarAdmin';
import { UsersTable } from '../components/UsersTable';
import { ReservasTable } from '../components/ReservasTable';

export const AdminPage = () => {
    const [activeTable, setActiveTable] = useState('reservas');
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <section className={`AdminPage ${sidebarOpen ? 'sidebarOpen' : ''}`}>
            <SidebarAdmin setActiveTable={setActiveTable} toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
            <div className="ContenedorAdmin">
                <ContadorAdmin />
                {activeTable === 'usuarios' && <UsersTable />}
                {activeTable === 'reservas' && <ReservasTable />}
            </div>
        </section>
    );
};
