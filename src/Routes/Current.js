import React from "react";
import useWeather from "../Components/useWeather";
import Outline from "../Components/Outline";
import CurrentWeather from "../Components/CurrentWeather";

function Current() {
  const { loading, weather, error } = useWeather();
  return (
    <>
      <Outline>
        {!loading && weather && Object.keys(weather).length > 0 ? (
          <CurrentWeather currentWeather={weather.current} />
        ) : null}
      </Outline>
    </>
  );
}

export default Current;
