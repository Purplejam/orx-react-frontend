import {render, screen} from '@testing-library/react';
import {MockedProvider} from '@apollo/react-testing';
import Nav from '../components/Nav';
import {fakeUser, fakeCartItem} from '../lib/testUtils';
import {CURRENT_USER} from '../components/User';
import {CartStateProvider} from '../lib/CartState';


//make some micks for being logged out/in and logged in with cart items

const noSignedInMocks = [
	{
		request: {query: CURRENT_USER},
		result: {data: {authenticatedItem: null}},
	}
]

const signedInMocks = [
	{
		request: {query: CURRENT_USER},
		result: {data: {authenticatedItem: fakeUser()}},		
	}
]

const signedInMocksWithCart = [
	{
		request: {query: CURRENT_USER},
		result: {data: {authenticatedItem: fakeUser({
			cart: [fakeCartItem()]
		})}},		
	}
]

describe('<Nav/>', () => {
	it('Renders and minimal nav when signed out', () => {
		const {container, debug} = render(
				<CartStateProvider>
					<MockedProvider mocks={noSignedInMocks}>
						<Nav/>
					</MockedProvider>
				</CartStateProvider>
			);
		expect(container).toHaveTextContent('Sign In');
		const link = screen.getByText('Sign In');
		expect(link).toHaveAttribute('href', '/signin');

		const productsLink = screen.getByText('Products');
		expect(productsLink).toHaveAttribute('href', '/products/1');
	})

	it('Renders a full nav when signed in', async () => {
		const {container, debug} = render(
				<CartStateProvider>
					<MockedProvider mocks={signedInMocks}>
						<Nav/>
					</MockedProvider>
				</CartStateProvider>
			);
		await screen.findByText('Account');

		const sellLink = screen.getByText('Sell');
		expect(sellLink).toHaveAttribute('href', '/sell');
		expect(container).toMatchSnapshot();
		expect(container).toHaveTextContent('My Cart');
		expect(container).toHaveTextContent('Sign Out');
	})

	it('Renders the amount of items in the cart', async () => {
		const {container, debug} = render(
				<CartStateProvider>
					<MockedProvider mocks={signedInMocksWithCart}>
						<Nav/>
					</MockedProvider>
				</CartStateProvider>
			);
		await screen.findByText('Account');
		expect(container).toHaveTextContent('3');
		//...or
		expect(screen.getByText('3')).toBeInTheDocument();
	})
})