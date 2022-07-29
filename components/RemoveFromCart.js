import {useMutation} from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';

const REMOVE_CARTITEM = gql`
	mutation REMOVE_CARTITEM($id: ID!) {
		deleteCartItem(id: $id) {
			id
		}
	}
	`

const RemoveButton = styled.button`
	font-size: 3rem;
	background: none;
	border: 0;
	&:hover {
		color: var(--red);
		cursor: pointer;
	}
`

function update(cache, payload) {
		cache.evict(cache.identify(payload.data.deleteCartItem));
	}

export default function RemoveFromCart({id}) {
	const [removeCartItem, {loading}] = useMutation(REMOVE_CARTITEM, {
		variables: {
			id
		},
		update,
	})
	return(
		<RemoveButton onClick={removeCartItem} disabled={loading} type="button" title="Remove item from cart">&times;</RemoveButton>
		)
}