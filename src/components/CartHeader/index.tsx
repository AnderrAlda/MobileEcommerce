/** At the top we will have all required imports */
import { IoIosArrowBack } from "react-icons/io";
import "./cartHeader.css";
import { Link } from "react-router-dom"; // Import Link from React Router
import { FaTrashAlt } from "react-icons/fa";

interface HeaderProps {
  itemCount: number;
}

const CartHeader: React.FC<HeaderProps> = ({ itemCount }) => {
  return (
    <div className="wrapper">
      <Link to="/" className="cartContainer">
        <IoIosArrowBack className="arrowBack" />{" "}
      </Link>

      <h3>Shopping Cart</h3>
      {/* Wrap PiShoppingCartSimpleFill inside Link */}
      <Link to="/cart" className="cartContainer">
        <FaTrashAlt className="ShopCart" />
      </Link>
    </div>
  );
};

export default CartHeader;
