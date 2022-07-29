import SignIn from '../components/SingIn';
import SignUp from '../components/SignUp';
import styled from 'styled-components';
import RequestReset from '../components/RequestReset';

const SignPageStyled = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	grid-gap: 2rem; 
`


export default function SignInPage() {
  return (
  	<SignPageStyled>
  		<SignIn/>
  		<SignUp/>
  		<RequestReset/>
  	</SignPageStyled>
  	)
}
