import React from "react";
import useWeather from "../Components/useWeather";
import Landing from "../Components/Landing";
import Error from "../Components/Error";

function Home() {
  const { loading, weather, error } = useWeather();
  return (
    <>
      {!loading && weather && Object.keys(weather).length > 0 ? (
        <Landing
          timezone={weather.timezone}
          weatherId={weather.current.weather[0].main}
          temp={weather.current.temp}
        ></Landing>
      ) : null}
      {error && <Error />}
    </>
  );
}

export default Home;
