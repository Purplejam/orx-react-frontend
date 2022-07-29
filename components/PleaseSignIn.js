import useUser from './User.js';
import SignIn from './SingIn';

export default function PleaseSignIn({children}) {
const me = useUser();
if(!me) return <SignIn/>

return children
}