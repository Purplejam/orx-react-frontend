import UpdateProduct from '../components/UpdateProduct';
import {useRouter} from 'next/router';

export default function UpdateProductPage() {
		const router = useRouter();
		const id = router.query.id;

  return <div>
  	<UpdateProduct id={id}/>
  </div>
}
