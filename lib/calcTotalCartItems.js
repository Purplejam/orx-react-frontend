export default function calcTotalCartItems(cart) {
	let sum = 0;
	for (let i = 0; i < cart.length; i++) {
		if (!cart[i]) continue;
		sum += cart[i].quantity;
	}
	return sum;
}