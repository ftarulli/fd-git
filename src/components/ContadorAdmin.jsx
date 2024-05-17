import React from 'react';
import '../css/ContadorAdmin.css';

export const ContadorAdmin = () => {
	return (
		<>
			<div className="Panel">
				<div className="ControlNumbers mt-3">
					<div className="bloquesdatos">
						<h2>15</h2>
						<h3>Reservas</h3>
					</div>
					<div className="bloquesdatos">
						<h2>15</h2>
						<h3>Usuarios</h3>
					</div>
					<div className="bloquesdatos">
						<h2>15</h2>
						<h3>Usuarios Bloqueados</h3>
					</div>
				</div>
			</div>
		</>
	);
};
