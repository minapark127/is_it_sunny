import React from "react";
import useWeather from "../Components/useWeather";
import Landing from "../Components/Landing";

function Home() {
  const { loading, weather, error } = useWeather();
  return (
    <>
      {loading ? (
        "loading..."
      ) : weather && Object.keys(weather).length === 0 ? (
        "loading..."
      ) : (
        <>
          {weather && Object.keys(weather).length > 0 && (
            <Landing
              timezone={weather.timezone}
              weatherId={weather.current.weather[0].main}
              temp={weather.current.temp}
            ></Landing>
          )}
        </>
      )}
    </>
  );
}

export default Home;
