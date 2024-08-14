import { useWeather } from "../WeatherContext";

function WeatherCard() {
  const { location } = useWeather();

  return (
    <div className="w-96 h-72">
      {location.length !== 0 ? (
        <div>
          {" "}
          <div>City Name:{location[0].display_name.split(",").slice(0, 1)}</div>
          <div>Temp:</div>
          <div>Feel like</div>
          <div> Temp range:</div>
          <div>Condition </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default WeatherCard;
