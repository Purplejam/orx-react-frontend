import {useQuery} from '@apollo/client';
import gql from 'graphql-tag';
import DisplayError from './ErrorMessage.js';
import Head from 'next/head';
import styled from 'styled-components';


//get single product qraphql query
export const GET_PRODUCT_BY_ID = gql`
	query GET_PRODUCT_BY_ID($id: ID!) {
  Product(where: {id: $id})
  {
    id
    name
    description
    status
    price
    photo {
      image {
        publicUrlTransformed
      }
      altText
    }
  }
}
`

//styled component
const SingleProductStyle = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  max-width: var(--maxWidth);
  justify-content: center;
  align-items: top;
  gap: 2rem;
  img {
    width: 100%;
    object-fit: contain;
  }
`


export default function SingleProduct({id}) {

	const {data, error, loading} = useQuery(GET_PRODUCT_BY_ID, {
		variables: {id}
	});
	const product = data?.Product;
	if (loading) return <div>loading...</div>
	if (error) return <DisplayError error={error}/>

	return(
		<SingleProductStyle data-testid="singleProduct">
			<Head>
				<title>Sick Fits | {product.name}</title>
			</Head>
			<img src={product.photo.image.publicUrlTransformed} alt={product.photo.image.altText}/>
			<div className="details">
				<h2>{product.name}</h2>
				<p>{product.description}</p>
			</div>
		</SingleProductStyle>
		)
}

