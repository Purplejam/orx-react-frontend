import Form from './styles/Form.js';
import useForm from '../lib/useForm.js';
import {useMutation} from '@apollo/client';
import gql from 'graphql-tag';
import DisplayError from './ErrorMessage';

const REQUEST_RESET_MUTATION = gql`
mutation REQUEST_RESET_MUTATION($email: String!){
  sendUserPasswordResetLink(email: $email) {
    code
    message
  }
}
`


export default function RequestReset() {
	const{inputs, handleChange, clearInputs} = useForm({
		email: ''
	})
	const [sendUserPasswordResetLink, {data, loading, error}] = useMutation(REQUEST_RESET_MUTATION, {
		variables: {
			email: inputs.email
		}
	})


	async function onSubmitHandler(e) {
		e.preventDefault();
		let res = await sendUserPasswordResetLink().catch((error) => console.log(error));
		clearInputs();
	}


	return(
		<Form method="POST" onSubmit={onSubmitHandler}>
			<DisplayError error={error}/>
			<fieldset>
				<h2>Reset password</h2>
				{data?.sendUserPasswordResetLink && (
					<p>Success! Check your email for a link!</p>
					)}
				<input type="text" name="email" value={inputs.email} 
					onChange={handleChange} placeholder="Enter your email" />

					<button type="submit">Request Reset</button>
			</fieldset>
		</Form>
		)
}

