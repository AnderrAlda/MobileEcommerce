/** At the top we will have all required imports */
import { IoIosArrowBack } from "react-icons/io";
import "./header.css";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { Link } from "react-router-dom"; // Import Link from React Router

interface LogoHeaderProps {
  itemCount: number;
}

const Header: React.FC<LogoHeaderProps> = ({ itemCount }) => {
  return (
    <div className="wrapperHeader">
      <Link to="/" className="cartContainer">
        <IoIosArrowBack className="arrowBack" />{" "}
      </Link>
      <Link to="/cart" className="cartContainer">
        <PiShoppingCartSimpleFill className="ShopCart" />
        {itemCount > 0 && <div className="cartCount">{itemCount}</div>}
      </Link>
    </div>
  );
};

export default Header;
