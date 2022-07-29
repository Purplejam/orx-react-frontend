import Link from 'next/link';
import PaginationStyles from './styles/PaginationStyles';
import {useQuery} from '@apollo/client';
import gql from 'graphql-tag';
import Head from 'next/head';
import DisplayError from './ErrorMessage';
import {perPage} from '../config.js';

export const ALL_PRODUCTS_COUNT = gql `
	query ALL_PRODUCTS_COUNT {
	_allProductsMeta{
    count
  }
}
	
`



export default function Pagination({page}) {
	const {data, loading, error} = useQuery(ALL_PRODUCTS_COUNT);
	if (loading) return <div>loading...</div>;
	if (error) return <DisplayError error={error}/>;
	const count = data._allProductsMeta.count;
	const pageCount = Math.ceil(count / perPage);

	return(
		<PaginationStyles data-testid='pagination'>
			<Head>
				<title>Sick Fits | All products</title>
			</Head>
			<Link href={`/products/${page - 1}`}>
				<a aria-disabled={page <= 1}>Prev</a>
			</Link>
			<p>Page {page} of <span data-testid='pageCount'>{pageCount}</span></p>
			<p>{count} items Total</p>
			<Link href={`/products/${page + 1}`}>
				<a aria-disabled={page == pageCount}>Next</a>
			</Link>	
		</PaginationStyles>
		)
}
