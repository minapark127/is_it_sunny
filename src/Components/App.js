import React from "react";
import Router from "./Router";
import GlobalStyles from "./GlobalStyles";
import Home from "../Routes/Home";
import useWeather from "./useWeather";
import Error from "./Error";

function App() {
  const { loading, weather, error } = useWeather();
  return (
    <div className="App">
      <>
        {!loading && weather && Object.keys(weather).length > 0 ? (
          <>
            <Home />
            <Router />
            <GlobalStyles />
          </>
        ) : null}
        {error && <Error />}
      </>
    </div>
  );
}

export default App;
