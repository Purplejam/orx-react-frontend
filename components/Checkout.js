import styled from 'styled-components';
import {loadStripe} from '@stripe/stripe-js';
import {Elements, CardElement, useElements, useStripe} from '@stripe/react-stripe-js';
import SickButton from '../components/styles/SickButton.js';
import NProgress from 'nprogress';
import {useState} from 'react';
import gql from 'graphql-tag';
import {useMutation} from '@apollo/client';
import { useRouter } from 'next/router';
import {useCart} from '../lib/CartState.js';
import {CURRENT_USER} from '../components/User.js';

const CheckoutFormStyles = styled.form`
	box-shadow: 0 1px 2px 2px rgba(0, 0, 0, 0.04);
	border: 1px solid rgba(0,0,0,0.06);
	border-radius: 5px;
	padding: 1rem;
	display: grid;
	grid-gap: 1rem; 
`

const CREATE_ORDER_MUTATION = gql`
	mutation CREATE_ORDER_MUTATION($token: String!) {
		checkOut(token: $token) {
			id
			charge
			total
			items {
				id
				name
			}
		}
	}
	`

const stripeLib = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);


export function CheckoutForm() {

const router = useRouter();
const stripe = useStripe();
const [error, setError] = useState();
const [loading, setLoading] = useState(false);
const elements = useElements();
const[checkOut, {error: graphQLError}] = useMutation(CREATE_ORDER_MUTATION, {
	refetchQueries: [{query: CURRENT_USER}]
})
const {closeCart} = useCart();
async function handleSubmit(e) {

	//1. Stop the form from submitting and turn the loader on
	e.preventDefault();
	console.log('We gotta do  some work!');
	
 //2. Start the page transition
 NProgress.start();
 setLoading(true);

	//3. Create the payment method via stripe (token backs here if successful)
	const {error, paymentMethod} = await stripe.createPaymentMethod({
		type: 'card',
		card: elements.getElement(CardElement)
	});
	console.log(paymentMethod);

	//4. Handle any errors from stripe 
	if(error) {
		NProgress.done();
		setLoading(false);
		setError(error);
		return;
	}
	//5. Send the token from step 3 to our keystone server via custom mutation
	const order = await checkOut({
		variables: {
			token: paymentMethod.id
		}
	})

	console.log(`Finished with the order`);
	console.log(order);
	//6. Change the page to view the order
	router.push({
		pathname: '/order',
		query: {id: order.data.checkOut.id}
	})
	//7. Closed the cart
	closeCart();

	//8. Turn the loader off
	NProgress.done();
 setLoading(false);
}
	return (
			<CheckoutFormStyles onSubmit={handleSubmit}>
				{error && <p style={{fontSize: 12}}>{error.message}</p>}
				{graphQLError && <p style={{fontSize: 12}}>{graphQLError.message}</p>}
				<CardElement/>
				<SickButton>Check Out Now</SickButton>
			</CheckoutFormStyles>
		)
}

export default function Checkout() {
return(
	<Elements stripe={stripeLib}>
		<CheckoutForm/>
	</Elements>
	)
}
