import React, { useContext } from 'react';
import './Form.css';
import { UserContext } from '../../contexts/UserContext';
import { useHistory } from 'react-router-dom';

export default function SignInForm() {
	const history = useHistory();
	const { setUserEmail, setUserPassword, validate } = useContext(UserContext);

	return (
		<div className='text-center container'>
			<form action='/' className='form-auth'>
				<input
					type='password'
					id='inputPassword'
					className='form-control'
					placeholder='Password'
					onChange={(e) => setUserPassword(e.target.value)}
					required
				/>
				<button
					className='btn btn-lg btn-primary btn-block'
					type='submit'
					onClick={(e) => validate(e, history)}
				>
					Sign in
				</button>
			</form>
		</div>
	);
}
