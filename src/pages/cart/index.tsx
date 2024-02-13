import CartHeader from "../../components/CartHeader";
import ShoppingCartItem from "../../components/ShoppingCartItem";

const Cart = () => {
  const cartItems = 1;
  return (
    <>
      <CartHeader itemCount={cartItems} />
      <ShoppingCartItem itemCount={cartItems} />
    </>
  );
};

export default Cart;
