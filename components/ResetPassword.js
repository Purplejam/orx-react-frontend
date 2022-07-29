import Form from './styles/Form.js';
import useForm from '../lib/useForm.js';
import {useMutation} from '@apollo/client';
import gql from 'graphql-tag';
import DisplayError from './ErrorMessage';

const RESET_MUTATION = gql`
mutation RESET_MUTATION($email: String!, $password: String!, $token: String!){
  redeemUserPasswordResetToken(email: $email, password: $password, token: $token) {
    code
    message
  }
}
`


export default function ResetPassword({token}) {
	const{inputs, handleChange, clearInputs} = useForm({
		email: '',
		password: ''
	})
	const [redeemUserPasswordResetToken, {data, loading, error}] = useMutation(RESET_MUTATION, {
		variables: {
			email: inputs.email,
			password: inputs.password,
			token
		}
	})


	async function onSubmitHandler(e) {
		e.preventDefault();
		const res = await redeemUserPasswordResetToken().catch(console.error);
		console.log({data, loading, error});
		clearInputs();
	}

	const errorMessage = data?.redeemUserPasswordResetToken?.message
	? data.redeemUserPasswordResetToken
	: undefined;


	return(
		<Form method="POST" onSubmit={onSubmitHandler}>
			<DisplayError error={errorMessage || error}/>
			<fieldset>
				{data?.redeemUserPasswordResetToken === null && (
					<p>Success! Your password has been changed!</p>
					)}
				<input type="text" name="email" value={inputs.email} 
					onChange={handleChange} placeholder="Enter your email" />

				<input type="password" name="password" value={inputs.password} 
					onChange={handleChange} placeholder="Enter your new password" />

					<button type="submit">Submit a new paswword</button>
			</fieldset>
		</Form>
		)
}

