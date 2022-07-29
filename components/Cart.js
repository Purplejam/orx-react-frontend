import styled from 'styled-components';
import CartStyles from './styles/CartStyles';
import Supreme from './styles/Supreme';
import useUser from './User';
import formatFunction from '../lib/formatMoney';
import calcTotalPrice from '../lib/calcTotalPrice';
import {useCart} from '../lib/CartState';
import CloseButton from './styles/CloseButton';
import RemoveFromCart from './RemoveFromCart';
import Checkout from './Checkout';


const CartItemStyles = styled.li`
  padding: 1rem 0;
  border-bottom: 1px solid var(--lightGrey);
  display: grid;
  grid-template-columns: auto 1fr auto;
  img {
    margin-right: 1rem;
  }
  h3,
  p {
    margin: 0;
  }
`;

export function CartItem({cartItem}) {
if(!cartItem.product) return null;
	return(
			<CartItemStyles>
				<img width="100" src={cartItem.product.photo.image.publicUrlTransformed} alt=""/>
				<div>
					<p>
						{formatFunction(cartItem.product.price * cartItem.quantity)} –
						<em>{cartItem.quantity} &times; {formatFunction(cartItem.product.price)} each</em>
					</p>
				</div>
				<RemoveFromCart id={cartItem.id}/>
			</CartItemStyles>
		)
}


export default function Cart() {
	const user = useUser();
	if (!user) return null;
	const {cartOpen, closeCart} = useCart();
	return(
		<CartStyles open={cartOpen}>
			<header>
				<Supreme>
					{user.name}'s cart
				</Supreme>
				<CloseButton type="button" onClick={closeCart}>&times;</CloseButton>
			</header>
			<ul>
				{user.cart.map((cartItem) => <CartItem key={cartItem.id} cartItem={cartItem}/>)}
			</ul>
			<footer>
				<p>{formatFunction(calcTotalPrice(user.cart))}</p>
				<Checkout/>
			</footer>
		</CartStyles>
		)
}