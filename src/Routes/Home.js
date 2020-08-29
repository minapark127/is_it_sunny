import React from "react";
import Outline from "../Components/Outline";
import useWeather from "../Components/useWeather";

function Home() {
  const { loading, weather, error } = useWeather();

  return (
    <>
      <Outline>
        <h1>Home!!</h1>
      </Outline>
    </>
  );
}

export default Home;
