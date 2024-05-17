import React, { useState } from 'react';
import '../css/Adminpage.css';
import { UsersTable } from './UsersTable';
import { ContadorAdmin } from './ContadorAdmin';
import { SidebarAdmin } from './SidebarAdmin';
import { ReservasTable } from './ReservasTable';

export const AdminPage = () => {
	return (
		<>
			<section className="AdminPage">
				<SidebarAdmin />
				<div className='ContenedorAdmin'>
					<ContadorAdmin />
					<UsersTable />
					<ReservasTable />
				</div>
			</section>
		</>
	);
};
