import React from 'react';
import Button from 'react-bootstrap/Button';
import { UserMenu } from './UserMenu';

export const UserRow = ({ user, visibleMenu, toggleMenu, editarUser }) => (
	<tr>
		<td>{user._id.slice(0, 8)}</td>
		<td id="UserTable">{user.username}</td>
		<td>{user.phone}</td>
		<td>{user.mail}</td>
		<td>
			<div className="menu-container">
				<button className="menu-btn" onClick={() => toggleMenu(user._id)}>
					<i className="fa-solid fa-ellipsis-vertical"></i>
				</button>
				{visibleMenu === user._id && (
					<UserMenu user={user} editarUser={editarUser} />
				)}
			</div>
		</td>
	</tr>
);
