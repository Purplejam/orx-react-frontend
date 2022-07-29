import SingleProduct from '../../components/SingleProduct';
import { useRouter } from 'next/router';

export default function SingleProductPage() {

	const router = useRouter();
	const id = router.query.id;

  return <SingleProduct id={id}/>
}

