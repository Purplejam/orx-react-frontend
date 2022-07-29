import {useMutation} from '@apollo/client';
import {CURRENT_USER} from './User';
import gql from 'graphql-tag';

const ADD_TO_CART = gql`
	mutation ADD_TO_CART($productId: ID!) {
		addToCart(productId: $productId) {
			id
		}
	}
	`

export default function AddToCart({id}) {
	const[addToCart, {loading}] = useMutation(ADD_TO_CART, {
		variables: {
			productId: id
		},
		refetchQueries: [
		{query: CURRENT_USER}
		]
	})
	return (
		<button disabled={loading} type="button" onClick={addToCart}>Add{loading && 'ing'} to cart 🛒</button>
		)
}