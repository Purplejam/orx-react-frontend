import {useState, createContext, useContext} from 'react';

const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;


//LocalProvider "wrapper"
function CartStateProvider({children}) {
	const [cartOpen, setCartOpen] = useState(false);

	function cartToggle() {
		setCartOpen(!cartOpen);
	}

	function openCart() {
		setCartOpen(true);
	}

	function closeCart() {
		setCartOpen(false);
	}

	return(
		<LocalStateProvider value={{cartOpen, cartToggle, openCart, closeCart}}>{children}</LocalStateProvider>
		)
}

//useCart hook
function useCart() {
	const all = useContext(LocalStateContext);
	return all;
}


export {CartStateProvider, useCart};