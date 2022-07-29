import {useMutation} from '@apollo/client';
import gql from 'graphql-tag';
import DisplayError from './ErrorMessage';
import {CURRENT_USER} from './User';

const SIGN_OUT = gql`
	mutation SIGN_OUT{
		endSession
	}
`


export default function SignOut() {
	const[signOut, {error, loading}] = useMutation(SIGN_OUT, {
		refetchQueries: [
		{query: CURRENT_USER}
		]
	});

	return(
		<a onClick={signOut}>Sign Out</a>
		)
}