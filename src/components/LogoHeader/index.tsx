/** At the top we will have all required imports */
import "./logoHeader.css";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { Link } from "react-router-dom"; // Import Link from React Router
import { DataContext } from "../../contexts/dataContext";
import { useContext } from "react";
interface LogoHeaderProps {
  itemCount: number;
}

const LogoHeader: React.FC<LogoHeaderProps> = () => {
  const { contextData } = useContext(DataContext);

  return (
    <div className="wrapper">
      <img src="src/assets/logo.png" alt="logo image" className="img" />
      {/* Wrap PiShoppingCartSimpleFill inside Link */}
      <Link to="/cart" className="cartContainer">
        <PiShoppingCartSimpleFill className="ShopCart" />
        {contextData > 0 && <div className="cartCount">{contextData}</div>}
      </Link>
    </div>
  );
};

export default LogoHeader;
