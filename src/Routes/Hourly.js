import React from "react";
import useWeather from "../Components/useWeather";
import Outline from "../Components/Outline";
import HourlyWeather from "../Components/HourlyWeather";

function Current() {
  const { loading, weather, error } = useWeather();
  return (
    <>
      <Outline>
        {!loading && weather && Object.keys(weather).length > 0 ? (
          <HourlyWeather hourly={weather.hourly} />
        ) : null}
      </Outline>
    </>
  );
}

export default Current;
