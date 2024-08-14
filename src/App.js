import { useState } from "react";
import SearchBar from "./components/SearchBar";
import CheckBox from "./components/CheckBox";
import TempertureBtn from "./components/TempertureBtn";
import WeatherCard from "./components/WeatherCard";

function App() {
  return (
    <div className="flex justify-center items-center w-custom-max h-custom-max fixed">
      <div className="flex flex-col space-y-6 h-custom-80 w-custom-80 border justify-center items-center border-gray-200 mt-2">
        <div className="font-semibold flex justify-center flex-col items-center mt-2">
          <p className="text-xl text-gray-500"> Check the Weather Forcast</p>
        </div>

        <div className="flex flex-row justify-center items-center space-x-6">
          {" "}
          <SearchBar />
          <CheckBox />
        </div>
        <div>
          <TempertureBtn />
        </div>
        <WeatherCard />
      </div>
    </div>
  );
}

export default App;
