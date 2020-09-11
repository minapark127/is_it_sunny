import React from "react";
import useWeather from "../Components/useWeather";
import Outline from "../Components/Outline";
import DailyWeather from "../Components/DailyWeather";
import Error from "../Components/Error";

function Current() {
  const { loading, weather, error } = useWeather();
  return (
    <>
      <Outline>
        {!loading && weather && Object.keys(weather).length > 0 ? (
          <DailyWeather daily={weather.daily} />
        ) : null}
        {error && <Error />}
      </Outline>
    </>
  );
}

export default Current;
