import { useState } from "react";
import LogoHeader from "../../components/LogoHeader";
import MenuContent from "../../components/MenuContent";
import SearchBar from "../../components/SearchBar";
import "./home.css";
const Home = () => {
  const [cartItems, setCartItems] = useState(5);
  return (
    <>
      <LogoHeader itemCount={cartItems} />
      <div className="wellcomeWrapper">
        <p className="wellcomeTextSmall">Hi, Ander</p>
        <p className="wellcomeTextBig">What are you looking for today?</p>
      </div>
      <SearchBar />
      <MenuContent />
    </>
  );
};

export default Home;
