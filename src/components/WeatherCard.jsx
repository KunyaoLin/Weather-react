import { useWeather } from "../WeatherContext";

function WeatherCard() {
  const { weather, celsius } = useWeather();
  const tempLogo = celsius ? "°C" : "°F";
  const curTemp_c = weather.current?.temp_c;
  const curTemp_f = weather.current?.temp_f;
  const feelLikeTemp_c = weather.current?.feelslike_c;
  const feelLikeTemp_f = weather.current?.feelslike_f;
  const minTemp_c = weather.forecast?.forecastday[0].day.mintemp_c;
  const maxTemp_c = weather.forecast?.forecastday[0].day.maxtemp_c;
  const minTemp_f = weather.forecast?.forecastday[0].day.mintemp_f;
  const maxTemp_f = weather.forecast?.forecastday[0].day.maxtemp_f;
  const imgIcon = weather.current?.condition.icon;
  const imgAlt = weather.current?.condition.text;
  return (
    <div className="w-96 h-72 font-lato">
      {Object.keys(weather).length > 0 ? (
        <div className="flex flex-col space-y-2">
          {" "}
          <div className="flex flex-row space-x-2 items-center">
            <span>City Name:</span>
            <span className="font-semibold text-xl">
              {weather.location.name}, {weather.location.country}
            </span>
          </div>
          <div>
            <div className="flex items-center space-x-4">
              <span>Current Temp:</span>{" "}
              <span className="font-semibold text-xl">
                {celsius ? curTemp_c : curTemp_f} {tempLogo}
              </span>
            </div>
            <div className="space-x-4 flex flex-row items-center ">
              <p>Feel like: </p>
              <span className="font-semibold text-xl">
                {celsius ? feelLikeTemp_c : feelLikeTemp_f} {tempLogo}
              </span>
            </div>
            <div className="flex flex-row items-center space-x-4">
              <div className="flex flex-row items-center space-x-2">
                <p>Low:</p>
                <span className="font-semibold text-xl">
                  {celsius ? minTemp_c : minTemp_f} {tempLogo}
                </span>
              </div>
              <div className="flex flex-row items-center space-x-2">
                <p>High:</p>
                <span className="font-semibold text-xl">
                  {celsius ? maxTemp_c : maxTemp_f} {tempLogo}
                </span>
              </div>
            </div>
          </div>
          <div className="space-x-4 items-center flex flex-row">
            <p>Condition:</p>
            <span className="font-semibold text-xl">
              {weather.forecast.forecastday[0].day.condition.text}
            </span>
            <img src={imgIcon} alt={imgAlt}></img>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default WeatherCard;
