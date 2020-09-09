import React from "react";
import useWeather from "../Components/useWeather";
import Outline from "../Components/Outline";
import CurrentWeather from "../Components/CurrentWeather";

function Current() {
  const { loading, weather, error } = useWeather();
  return (
    <>
      {!loading && weather && Object.keys(weather).length > 0 ? (
        <Outline>
          <CurrentWeather currentWeather={weather.current} />
        </Outline>
      ) : null}
    </>
  );
}

export default Current;
