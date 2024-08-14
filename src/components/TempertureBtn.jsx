import { useWeather } from "../WeatherContext";

function TempertureBtn() {
  const { celsius, farenheit, handleTempType } = useWeather();
  return (
    <div className="flex flex-row justify-center items-center space-x-4 mt-4">
      <div className="flex justify-center items-center space-x-1">
        <input
          type="radio"
          value="celsius"
          checked={celsius}
          className="form-radio h-5 w-5 transition-transform duration-300 ease-in-out transform"
          onChange={handleTempType}
        />
        <label>Celsius</label>
      </div>
      <div className="flex justify-center items-center space-x-1">
        <input
          type="radio"
          checked={farenheit}
          value="farenheit"
          className="form-radio h-5 w-5 transition-transform duration-300 ease-in-out transform"
          onChange={handleTempType}
        />
        <label>Farenheit</label>
      </div>
    </div>
  );
}

export default TempertureBtn;
