import Header from "../../components/Header";
import ShoppingCartItem from "../../components/ShoppingCartItem";

const Cart = () => {
  const cartItems = 1;
  return (
    <>
      <Header itemCount={cartItems} />
      <ShoppingCartItem itemCount={cartItems} />
    </>
  );
};

export default Cart;
