import React from "react";
import useWeather from "../Components/useWeather";
import Outline from "../Components/Outline";
import DailyWeather from "../Components/DailyWeather";

function Current() {
  const { loading, weather, error } = useWeather();
  return (
    <>
      <Outline>
        {!loading && weather && Object.keys(weather).length > 0 ? (
          <DailyWeather daily={weather.daily} />
        ) : null}
      </Outline>
    </>
  );
}

export default Current;
