import { FaSpinner } from "react-icons/fa6";
import { useWeather } from "../WeatherContext";
function CheckBox() {
  const { loading } = useWeather();
  return (
    <button
      //   onClick={handleGetlocation}
      className="flex rounded-xl h-8 w-16 bg-blue-300 hover:bg-blue-500 transition-transform ease-in-out duration-300 active:scale-90 justify-center items-center"
    >
      {loading ? <FaSpinner className="animate-spin" /> : "Check"}
    </button>
  );
}

export default CheckBox;
