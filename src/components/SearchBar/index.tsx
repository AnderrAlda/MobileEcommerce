/** At the top we will have all required imports */
import "./searchBar.css";
import { CiSearch } from "react-icons/ci";

/** Important: Remember the component will always have to start with a capital letter */
const SearchBar = () => {
  return (
    <>
      <div className="search-container">
        <div className="search-wrapper">
          <CiSearch className="search-icon" />
          <input type="text" placeholder="Search dumbell" />
        </div>
      </div>
    </>
  );
};

export default SearchBar;
