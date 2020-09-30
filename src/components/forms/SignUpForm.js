import React, { useContext } from 'react';
import './Form.css';
import { UserContext } from '../../contexts/UserContext';
import { useHistory } from 'react-router-dom';

export default function SignUpForm() {
	const history = useHistory();
	const {
		saveValues,
		setName,
		setInputEmail,
		setPassword,
		setConfirmPassword,
	} = useContext(UserContext);

	return (
		<div className='text-center container'>
			<form className='form-auth' action='/'>
				<input
					type='email'
					id='inputEmail'
					className='form-control'
					placeholder='Email address'
					onChange={(e) => setInputEmail(e.target.value)}
					required
				/>
				<input
					type='password'
					id='inputPassword'
					className='form-control'
					placeholder='Password'
					onChange={(e) => setPassword(e.target.value)}
					required
				/>
				<input
					type='password'
					id='confirmPassword'
					className='form-control'
					placeholder='Confirm Password'
					onChange={(e) => setConfirmPassword(e.target.value)}
					required
				/>
				<button
					className='btn btn-lg btn-primary btn-block'
					type='submit'
					onClick={(e) => saveValues(e, history)}
				>
					Sign up
				</button>
			</form>
		</div>
	);
}
