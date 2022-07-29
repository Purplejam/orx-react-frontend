import {render, screen} from '@testing-library/react';
import {fakeItem} from '../lib/testUtils';
import {MockedProvider} from '@apollo/react-testing';
import SingleProduct, {GET_PRODUCT_BY_ID} from '../components/SingleProduct.js';

const product = fakeItem();

const mocks = [{
	request: {
		query: GET_PRODUCT_BY_ID,
		variables: {
			id: '1234'
		}
	},
	result: {
		data: {
			Product: product
		}
	}
}]


describe('<SingleProduct/>', () => {
	it('renders out the single product', async () => {
		const {container, debug} = render(
			<MockedProvider mocks={mocks}>
				<SingleProduct id="1234"/>
			</MockedProvider>);

		await screen.findByTestId('singleProduct');
  expect(container).toMatchSnapshot();
  debug();
	});
})