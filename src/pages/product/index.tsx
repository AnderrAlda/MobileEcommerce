import LogoHeader from "../../components/LogoHeader";
import "./product.css";

const Product = () => {
  const cartItems = 1;
  return (
    <>
      <LogoHeader itemCount={cartItems} />
      <div className="headerWrapper">
        <p className="productPrice">USD 350</p>
        <p className="productName">Rogue Echo Dog Sled</p>
      </div>
      <img
        src="src/assets/RogueSliceSled.png"
        alt="RogueSliceSled"
        className="productImage"
      />
      <div className="addCartButtonWrapper">
        <button className="addCartButton">Add to Cart</button>
      </div>
    </>
  );
};

export default Product;
