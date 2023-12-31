import React, { useState } from "react";

const Search = (props) => {
  const { listOfRestaurants, setListOfRestaurants, resData } = props;
  
  const [searchText, setSearchText] = useState("");
  
  const handleSearchText = (e) => {
    if(e.target.value === ""){
        setListOfRestaurants(resData);
    }
    setSearchText(e.target.value);
  };


  const handleSearch = () => {
    const filteredRestaurants = listOfRestaurants.filter((res) => {
      return res.info.name.toLowerCase().includes(searchText.toLowerCase());
    });
    setListOfRestaurants(filteredRestaurants);
  };

  return (
    <div className="search-container">
      <form>
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={handleSearchText}
        />
        <button type="button" className="search-btn" onClick={handleSearch}>
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
