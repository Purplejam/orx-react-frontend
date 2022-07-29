import Link from 'next/link';
import styled from 'styled-components';
import Nav from './Nav.js';
import Cart from './Cart.js';
import Search from './Search.js';


const Logo = styled.h1`
	font-size: 4rem;
	margin-left: 2rem;
	position: relative;
	z-index: 2;
	transform: skew(-7deg);
	background-color: red;
	a {
		text-decoration: none;
		color: white
	}
`;

const HeaderStyles = styled.header`
	.bar {
		border-bottom: 10px solid var(--black, black);
		display: grid;
		grid-template-columns: auto 1fr;
		justify-content: space-between;
		align-items: stretch;
	}

	.sub-bar {
		display: grid;
		grid-template-columns: 1fr auto ;
		border-bottom: 1px solid var(--black, black);
	}
`;

export default function Header() {
	return (
		<HeaderStyles>
			<div className='bar'>
					<Logo>
						<Link href='/products/1'>
							Sick Fits
						</Link>
					</Logo>
					<Nav/>
			</div>
			<div className='sub-bar'>
				<Search/>
			</div>
			<Cart/>
		</HeaderStyles>)
}