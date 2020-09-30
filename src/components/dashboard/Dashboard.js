import React from 'react';
import './Dashboard.css';

export default function Dashboard({ userName, isValid }) {
	return (
		<div>
			<div className='container'>
				{isValid ? (
					<div className='dashboard'>Hello {userName}!!</div>
				) : (
					<div className='dashboard'>Hello Guest!</div>
				)}
			</div>
		</div>
	);
}
