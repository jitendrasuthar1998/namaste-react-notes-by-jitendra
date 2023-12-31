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
    <div className="">
      <form>
        <input
          type="text"
          className="border-2 rounded-md"
          placeholder="Search"
          value={searchText}
          onChange={handleSearchText}
        />
        <button type="button" className="border-2 rounded-md px-2" onClick={handleSearch}>
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
