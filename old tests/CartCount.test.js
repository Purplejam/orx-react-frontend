import {render, screen} from '@testing-library/react';
import wait from 'waait';
import CartCount from '../components/CartCount';

describe('<CartCount/>', () => {
	it('Renders', () => {
		render(<CartCount count={10}/>)
	})

	it('Matches the snapshot', () => {
		const {container} = render(<CartCount count={11}/>);
		expect(container).toMatchSnapshot();
	})

	it('updates via props', async () => {
		const {container, rerender} = render(<CartCount count={11}/>);
		expect(container).toHaveTextContent('11');

		//update props
		rerender(<CartCount count={12}/>);
		//wait
		await wait(400);
		expect(container).toHaveTextContent('12');
		expect(container).toMatchSnapshot();
	})
})