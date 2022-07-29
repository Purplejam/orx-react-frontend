import Form from './styles/Form.js';
import useForm from '../lib/useForm.js';
import {useMutation} from '@apollo/client';
import gql from 'graphql-tag';
import DisplayError from './ErrorMessage';

export const SIGN_UP = gql`
	mutation SIGN_UP($name: String!, $email: String!, $password: String!) {
		createUser(data: {
			name: $name,
			email: $email,
			password: $password
		}) {
			name
			email
		}
	}
`

export default function SignUp() {
	const{inputs, handleChange, clearInputs} = useForm({
		name: '',
		email: '',
		password: ''
	})

	const [signupMutation, {data, loading, error}] = useMutation(SIGN_UP, {
		variables: {
			email: inputs.email,
			password: inputs.password,
			name: inputs.name
		}
	})

	async function onSubmitHandler(e) {
		e.preventDefault();
		let res = await signupMutation().catch(console.error);
		clearInputs();
	}

	return(
		<Form method="POST" onSubmit={onSubmitHandler}>
			<DisplayError error={error}/>
			<fieldset>
				<h2>Sign up</h2>
				{data?.createUser 
					? <p>Success! User with email {data.createUser.email} Now, go ahead and sign in!</p>
					: null}
				<label htmlFor="name">Name</label>
				<input type="text" name="name" id="name" value={inputs.name} 
					onChange={handleChange} placeholder="Enter your name" />

				<label htmlFor="email">Email</label>
				<input type="text" name="email" id="email" value={inputs.email} 
					onChange={handleChange} placeholder="Enter your email" autoComplete="email"/>

				<label htmlFor="password">Password</label>
				<input type="password" name="password" id="password" 
					value={inputs.password} onChange={handleChange} placeholder="Enter your password"/>

					<button type="submit">Submit</button>
			</fieldset>
		</Form>
		)
}

