import React, { useState } from "react";
import { useWeather } from "../WeatherContext";
import CheckBox from "./CheckBox";

const SearchBar = () => {
  const [value, setValue] = useState("");
  const { handleSearch } = useWeather();
  function handleOnSubmit(e) {
    e.preventDefault();
    if (!value) {
      alert("Please enter a search term");
    }
    console.log(value);
    handleSearch(value);
    setValue("");
  }

  return (
    <div className="flex justify-center items-center space-x-4">
      <form onSubmit={handleOnSubmit}>
        <input
          onChange={(e) => setValue(e.target.value)}
          value={value}
          className="w-48 h-8 px-4 transition-transform duration-300 ease-in-out transform hover:scale-110 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search..."
        />
      </form>
      <CheckBox handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default SearchBar;
