/** At the top we will have all required imports */
import { IoIosArrowBack } from "react-icons/io";
import "./header.css";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { Link } from "react-router-dom"; // Import Link from React Router
import { useContext } from "react";
import { DataContext } from "../../contexts/dataContext";

interface LogoHeaderProps {}

const Header: React.FC<LogoHeaderProps> = () => {
  const { contextData } = useContext(DataContext);

  return (
    <div className="wrapperHeader">
      <Link to="/" className="cartContainer">
        <IoIosArrowBack className="arrowBack" />{" "}
      </Link>
      <Link to="/cart" className="cartContainer">
        <PiShoppingCartSimpleFill className="ShopCart" />
        {contextData > 0 && <div className="cartCount">{contextData}</div>}
      </Link>
    </div>
  );
};

export default Header;
