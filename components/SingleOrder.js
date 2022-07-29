import { useRouter } from 'next/router';
import {useQuery} from '@apollo/client';
import gql from 'graphql-tag';
import {DisplayError} from './ErrorMessage';
import OrderStyles from './styles/OrderStyles';
import Head from 'next/head';
import formatMoney from '../lib/formatMoney';

 const SINGLE_ORDER_QUERY = gql`
 query SINGLE_ORDER_QUERY($id: ID!){
  Order(where: {id: $id}) {
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


export default function SingleOrder(props) {
	const router = useRouter();
	const id = router.query.id;
	const {data, loading, error} = useQuery(SINGLE_ORDER_QUERY, {
		variables: {
			id: id
		}
	})

	if(loading) return <div>Loading...</div>
	if(error) return <DisplayError error={error}/>
	const order = data.Order;
	console.log(order);
	return (
		<OrderStyles>
			<Head>
				<title>New Order | {order.id}</title>
			</Head>
			<p>
				<span>Order ID:</span>
				<span>{order.id}</span>
			</p>
			<p>
				<span>Charge:</span>
				<span>{order.charge}</span>
			</p>
			<p>
				<span>Order total:</span>
				<span>{formatMoney(order.total)}</span>
			</p>
			<p>
				<span>Total items:</span>
				<span>{order.items.length}</span>
			</p>

			<div className="items">
				{order.items.map(item => {
					return (<div key={item.id} className="order-item">
											<img src={item.photo.image.publicUrlTransformed}/>
											<div className="item-details">
												<h2>{item.name}</h2>
												<p>Qty: {item.quantity}</p>
												<p>Each: {formatMoney(item.price)}</p>
												<p>Subtotal: {formatMoney(item.price * item.quantity)}</p>
												<p>{item.description}</p>
											</div>
										</div>)
					})}
			</div>
		</OrderStyles>
	)
}
