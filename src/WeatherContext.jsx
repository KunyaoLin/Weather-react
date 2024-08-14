import { createContext, useContext, useEffect, useReducer } from "react";
const initialState = {
  celsius: true,
  farenheit: false,
  searchValue: "",
  loading: false,
  location: [],
  weather: [],
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
    case "locationInfo":
      return {
        ...state,
        location: action.payload,
      };
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
  const [
    { farenheit, celsius, searchValue, loading, location, weather },
    dispatch,
  ] = useReducer(reducer, initialState);
  useEffect(() => {
    if (!searchValue) return;
    let isCancelled = false;
    dispatch({ type: "loadingStatus", payload: true });
    dispatch({ type: "weatherInfo", payload: [] });
    async function getlocation(searchValue) {
      try {
        const response = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=${weatherKey}&q=${searchValue}&aqi=yes`
        );
        console.log(response);
        if (!response.ok) {
          throw new Error("Getlocation error");
        }
        // const locationData = await responeLocation.json();
        if (!isCancelled && response.length > 0) {
          console.log(response);
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
    console.log(celsius, farenheit);
  }
  function handleSearch(field) {
    console.log(field);
    dispatch({ type: "search", payload: field });
  }

  return (
    <WeatherContext.Provider
      value={{
        celsius,
        farenheit,
        handleTempType,
        handleSearch,
        loading,
        location,
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
