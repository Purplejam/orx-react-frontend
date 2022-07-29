import gql from 'graphql-tag';
import {useMutation} from '@apollo/client';

const DELETE_PRODUCT_MUTATION = gql`
	mutation DELETE_PRODUCT_MUTATION($id: ID!) {
		deleteProduct(id: $id) {
			id
			name
		}
	}
`

function update(cache, result) {
	cache.evict(cache.identify(result.data.deleteProduct));
}

export default function DeleteProduct({id, children}) {
	const [deleteProduct, {loading, error}] = useMutation(DELETE_PRODUCT_MUTATION, {
		variables: {
			id: id
		},
		update: update
	})

	return(
					<button disabled={loading} type="button" onClick={() => {
						if(confirm('Are you sure you want to delete rhis item?')) {
							//use mutation to delete
							deleteProduct().catch((error) => alert(error.message));
						}
						}}>
						{children}
					</button>
		)
}