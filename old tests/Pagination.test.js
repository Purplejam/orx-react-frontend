import {render, screen} from '@testing-library/react';
import {MockedProvider} from '@apollo/react-testing';
import Pagination from '../components/Pagination';
import {makePaginationMocksFor} from '../lib/testUtils';


describe('<Pagination/>', () => {

	it('display a loading message', () => {
		const {container, debug} = render(
			<MockedProvider mocks={makePaginationMocksFor(1)}>
				<Pagination/>
			</MockedProvider>);
		debug();
		expect(container).toHaveTextContent('loading...');
	})

	it('display some amount of pages', async () => {
		const {container, debug} = render(
			<MockedProvider mocks={makePaginationMocksFor(18)}>
				<Pagination page={1}/>
			</MockedProvider>);
		await screen.findByTestId('pagination');
		expect(container).toHaveTextContent('Page 1 of 5');

		const pageCountSpan = screen.getByTestId('pageCount');
		screen.debug(pageCountSpan);
		expect(pageCountSpan).toHaveTextContent('5');
	})

	it('disable prev on first page', async () => {
		const {container, debug} = render(
			<MockedProvider mocks={makePaginationMocksFor(8)}>
				<Pagination page={1}/>
			</MockedProvider>);	
		await screen.findByTestId('pagination');
		const prevButton = screen.getByText('Prev');
		const nextButton = screen.getByText('Next');

		expect(prevButton).toHaveAttribute('aria-disabled', 'true');
		expect(nextButton).toHaveAttribute('aria-disabled', 'false');
	})
	it('disable next on last page', async () => {
		const {container, debug} = render(
			<MockedProvider mocks={makePaginationMocksFor(8)}>
				<Pagination page={2}/>
			</MockedProvider>);	
		await screen.findByTestId('pagination');
		const prevButton = screen.getByText('Prev');
		const nextButton = screen.getByText('Next');

		expect(prevButton).toHaveAttribute('aria-disabled', 'false');
		expect(nextButton).toHaveAttribute('aria-disabled', 'true');
	})
	it('enable all buttons on middle pages', async () => {
		const {container, debug} = render(
			<MockedProvider mocks={makePaginationMocksFor(18)}>
				<Pagination page={3}/>
			</MockedProvider>);	
		await screen.findByTestId('pagination');
		const prevButton = screen.getByText('Prev');
		const nextButton = screen.getByText('Next');

		expect(prevButton).toHaveAttribute('aria-disabled', 'false');
		expect(nextButton).toHaveAttribute('aria-disabled', 'false');
	})
})