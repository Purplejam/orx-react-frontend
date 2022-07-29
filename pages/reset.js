import {useRouter} from 'next/router';
import ResetPassword from '../components/ResetPassword';
import RequestReset from '../components/RequestReset';

export default function ResetPasswordPage() {
  const router = useRouter();
  const token = router?.query.token;

  if(!token) {
    return (
      <div>
        <p>Sorry, there is no password reset token. Please, submit the reset form below:</p>
        <RequestReset/>
      </div>
      )
  }

  return (
    <div>
      <p>Reset your password:</p>
      <ResetPassword token={token}/>
    </div>
  	)
}
