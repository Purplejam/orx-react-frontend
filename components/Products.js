import {useQuery} from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Product from './Product';
import {perPage} from '../config.js';

export const ALL_PRODUCTS_QUERY = gql`
query ALL_PRODUCTS_QUERY($skip: Int = 0, $first: Int){
  allProducts(skip: $skip, first: $first) {
		name
  id
  description
  status
  price
  photo {
    id
    image {
      publicUrlTransformed
    }
  	}
  }
}	
`

const ProductsListStyle = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 60px;
`

export default function Products({page}) {
	const {data, error, loading} = useQuery(ALL_PRODUCTS_QUERY, {
		variables: {
			first: perPage,
			skip: page * perPage - perPage
		}
	});
	if (loading) return <p>Loading...</p>
		if (error) return <p>Error: {error.message}</p>

	return(
		<div>
			<ProductsListStyle>
				{data.allProducts.map(product => (
					<Product product={product} key={product.id}/>
					))}
			</ProductsListStyle>
		</div>
		)
} 