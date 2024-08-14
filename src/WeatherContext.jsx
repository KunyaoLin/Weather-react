import { createContext, useContext, useEffect, useReducer } from "react";
const initialState = {
  celsius: true,
  searchValue: "",
  loading: false,
  farenheit: false,
  weather: {},
};

const weatherKey = process.env.REACT_APP_weatherKey;
const WeatherContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "tempType":
      return { ...state, celsius: !state.celsius, farenheit: !state.farenheit };
    case "search":
      return { ...state, searchValue: action.payload };
    case "loadingStatus":
      return { ...state, loading: action.payload };

    case "weatherInfo":
      return {
        ...state,
        weather: action.payload,
      };
    default:
      return state;
  }
}
function WeatherProvider({ children }) {
  const [{ celsius, searchValue, loading, weather, farenheit }, dispatch] =
    useReducer(reducer, initialState);
  useEffect(() => {
    if (!searchValue) return;
    let isCancelled = false;
    dispatch({ type: "loadingStatus", payload: true });
    dispatch({ type: "weatherInfo", payload: {} });
    async function getlocation(searchValue) {
      try {
        console.log(searchValue);
        const response = await fetch(
          `https://api.weatherapi.com/v1/forecast.json?key=${weatherKey}&q=${searchValue}&days=3&aqi=yes&alerts=no`
        );
        console.log(response);
        if (!response.ok) {
          throw new Error("Getlocation error");
        }
        const weatherData = await response.json();
        console.log(weatherData);
        if (!isCancelled && weatherData) {
          dispatch({ type: "weatherInfo", payload: weatherData });

          console.log(weatherData);
        }
      } catch (error) {
        console.error(error.message);
      } finally {
        if (!isCancelled) {
          dispatch({ type: "loadingStatus", payload: false });
        }
      }
    }
    getlocation(searchValue);
    return () => {
      isCancelled = true;
    };
  }, [searchValue]);
  function handleTempType() {
    dispatch({ type: "tempType" });
  }
  function handleSearch(field) {
    console.log(field);
    dispatch({ type: "search", payload: field });
  }

  return (
    <WeatherContext.Provider
      value={{
        celsius,
        handleTempType,
        handleSearch,
        loading,
        farenheit,
        weather,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}
function useWeather() {
  const context = useContext(WeatherContext);
  if (context === undefined)
    throw new Error("WeatherContext was used outside the WeatherProvider");
  return context;
}
export { WeatherProvider, useWeather };
