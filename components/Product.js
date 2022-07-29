import styled from 'styled-components';
import ItemStyles from './styles/ItemStyles'
import Title from './styles/Title';
import Link from 'next/link';
import PriceTag from './styles/PriceTag';
import formatFunction from '../lib/formatMoney';
import DeleteProduct from './DeleteProduct';
import AddToCart from './AddToCart';

export default function Product({product}) {
	return(
		<ItemStyles>
			<img src={product?.photo?.image?.publicUrlTransformed} alt={product?.photo?.altText}/>
			<Title>
				<Link href={`/product/${product.id}`}>{product.name}</Link>
			</Title>
			<PriceTag>{formatFunction(product.price)}</PriceTag>
			<p>{product.description}</p>
			<div className="buttonList">
				<Link href={{
					pathname: '/update',
					query: {id: product.id}
					}}>update ✏️</Link>
					<AddToCart id={product.id}/>
					<DeleteProduct id={product.id}>Delete Item</DeleteProduct>
			</div>
		</ItemStyles>
		)
}