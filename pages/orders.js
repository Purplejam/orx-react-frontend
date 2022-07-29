import { useRouter } from 'next/router';
import {useQuery} from '@apollo/client';
import gql from 'graphql-tag';
import {DisplayError} from '../components/ErrorMessage';
import OrderItemStyles from '../components/styles/OrderItemStyles';
import Head from 'next/head';
import formatMoney from '../lib/formatMoney';
import Link from 'next/link';
import styled from 'styled-components';
import calcTotalCartItems from '../lib/calcTotalCartItems';
import PleaseSignIn from '../components/PleaseSignIn';

const ALL_ORDERS_QUERY = gql`
 query {
  allOrders {
    total
    charge
    id
    items {
      name
      description
      price
      quantity
      photo {
        image {
          publicUrlTransformed
        }
      }
    }
  }
}
`

const OrderUl = styled.ul`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	grid-gap: 4rem;
` 


export default function OrderPage() {
	const {data, loading, error} = useQuery(ALL_ORDERS_QUERY);
	if(loading) return <div>Loading...</div>
	
	const orders = data?.allOrders;
	console.log(orders);

	return(
		<PleaseSignIn>
			<div>
					<Head>
						<title>
							Your Orders
						</title>
					</Head>
					<h2 style={{textAlign: "center"}}>You have {orders.length} orders!</h2>
					<OrderUl>
						{orders.map(order => {
							return <OrderItemStyles id={order.id}>
								<Link href={`/order?id=${order.id}`}>						
									<a>
									<div className="order-meta">
										<p>
											{calcTotalCartItems(order.items)} item
											{(order.items.length === 1 && order.items[0].quantity === 1) ? '' : 's'}
										</p>
										<p>
											{order.items.length} product
											{order.items.length === 1 ? '' : 's'}
										</p>
										<p>{formatMoney(order.total)}</p>
									</div>
									<div className="images">
										{order.items.map(item => {
											return <img 
												src={item.photo?.image.publicUrlTransformed} 
												key={`image-${item.id}`} 
												alt={item.name}/>
											})}
									</div>
									</a>
								</Link>
							</OrderItemStyles>
							})}
					</OrderUl>
				</div>
			</PleaseSignIn>
		)
}

