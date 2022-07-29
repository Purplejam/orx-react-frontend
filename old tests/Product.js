import {render, screen} from '@testing-library/react';
import Product from '../components/Product';
import {fakeItem} from '../lib/testUtils';
import {MockedProvider} from '@apollo/react-testing';

const product = fakeItem();

describe('<Product/>', () => {
	it('renders out the price and title', () => {
		const {container, debug} = render(
			<MockedProvider>
				<Product product={product}/>
			</MockedProvider>);

		//const text = screen.getByAltText('dogs are best');
		//expect(text).toBeInTheDocument();

		//const button = screen.getByTitle('submit');
		//expect(button).toBeInTheDocument();
		//const link = container.querySelector('a');
		//expect(link).toHaveAttribute('href', '/product/abc123');

	});

	it('Renders and matches a snapshot', () => {
		const {container, debug} = render(
			<MockedProvider>
				<Product product={product}/>
			</MockedProvider>);

		//expect(container).toMatchSnapshot();

	})
})