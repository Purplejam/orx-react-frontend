import Form from './styles/Form.js';
import useForm from '../lib/useForm.js';
import {useMutation} from '@apollo/client';
import gql from 'graphql-tag';
import DisplayError from './ErrorMessage';
import {CURRENT_USER} from './User';

const USER_AUTHENTICATION = gql`
	mutation USER_AUTHENTICATION($email: String!, $password: String!){
		authenticateUserWithPassword(email: $email, password: $password) {
			... on UserAuthenticationWithPasswordSuccess{
				sessionToken
				item {
					id
					name
					email
				}
			}
			... on UserAuthenticationWithPasswordFailure{
				message
				code
			}
		}
	}
`

export default function SingIn() {
	const{inputs, handleChange, clearInputs} = useForm({
		email: '',
		password: ''
	})

	const [signinMutation, {data, loading}] = useMutation(USER_AUTHENTICATION, {
		variables: {
			email: inputs.email,
			password: inputs.password
		},
		refetchQueries: [{ query: CURRENT_USER }],
	})



	async function onSubmitHandler(e) {
		e.preventDefault();
		let res = await signinMutation();
		clearInputs();
	}

 const error =
 data?.authenticateUserWithPassword.__typename ===
 'UserAuthenticationWithPasswordFailure'
 ? data?.authenticateUserWithPassword
 : undefined;

	return(
		<Form method="POST" onSubmit={onSubmitHandler}>
			<DisplayError error={error}/>
			<fieldset>
				<h2>Sign in</h2>
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

