/** At the top we will have all required imports */
import "./logoHeader.css";
import { PiShoppingCartSimpleFill } from "react-icons/pi";

interface LogoHeaderProps {
  itemCount: number;
}

const LogoHeader: React.FC<LogoHeaderProps> = ({ itemCount }) => {
  return (
    <div className="wrapper">
      <img src="src/assets/logo.png" alt="logo image" className="img" />
      <div className="cartContainer">
        <PiShoppingCartSimpleFill className="ShopCart" />
        {itemCount > 0 && <div className="cartCount">{itemCount}</div>}
      </div>
    </div>
  );
};

export default LogoHeader;
