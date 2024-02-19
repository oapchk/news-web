import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./Searchbar.scss";

const Searchbar = () => {
  const [searchVal, setSearchVal] = useState("");

  const handleInput = (e) => {
    setSearchVal(e.target.value);
  };

  // const handleClearBtn = () => {
  //   setSearchVal("");
  // };
  return (
    <div className="search__box">
      <FaSearch className="search__icon--search" />
      {/* <FaTimes className="search__icon--close" onClick={handleClearBtn} /> */}
      <label id="input-label"></label>
      <input
        onChange={handleInput}
        value={searchVal}
        type="text"
        name="product-search"
        id="product-search"
        placeholder="Search articles..."
      />
    </div>
  );
};

export default Searchbar;
