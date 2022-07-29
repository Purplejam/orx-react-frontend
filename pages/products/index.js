import Products from '../../components/Products';
import Pagination from '../../components/Pagination';
import { useRouter } from 'next/router';

export default function ProductsIndexPage() {
	const router = useRouter();
	const page = parseInt(router.query.page);

  return (
  	<div>
  				<Pagination page={page || 1}/>
      <Products page={page}/>
      <Pagination page={page || 1}/>
   </div>)
}
