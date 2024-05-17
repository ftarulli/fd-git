import React, { useState } from 'react';
import '../css/Adminpage.css';
import { UsersTable } from './UsersTable';
import { ContadorAdmin } from './ContadorAdmin';
import { SidebarAdmin } from './SidebarAdmin';

export const AdminPage = () => {
	return (
		<>
			<section className="AdminPage">
				<SidebarAdmin />
				<div>
					<ContadorAdmin />
					<UsersTable />
				</div>
			</section>
		</>
	);
};
