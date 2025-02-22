import { FaSpinner } from "react-icons/fa6";
import { useWeather } from "../WeatherContext";
function CheckBox({ handleOnSubmit }) {
  const { loading } = useWeather();
  return (
    <button
      onClick={handleOnSubmit}
      className="flex rounded-xl h-8 w-16 bg-blue-300 hover:bg-blue-500 hover:scale-110 transition-transform ease-in-out duration-300 active:scale-90 justify-center items-center"
    >
      {loading ? <FaSpinner className="animate-spin" /> : "Check"}
    </button>
  );
}

export default CheckBox;
