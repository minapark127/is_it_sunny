import React from "react";
import Outline from "../Components/Outline";
import useWeather from "../Components/useWeather";

function Home() {
  const { loading, weather, error } = useWeather();
  console.log(loading, weather);
  return (
    <>
      {loading ? (
        "loading..."
      ) : weather && Object.keys(weather).length === 0 ? (
        "loading..."
      ) : (
        <>
          {weather && Object.keys(weather).length > 0 && (
            <Outline weather={weather}>
              <h1>Home!!</h1>
            </Outline>
          )}
        </>
      )}
    </>
  );
}

export default Home;
