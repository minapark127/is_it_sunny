import React from "react";
import Router from "./Router";
import GlobalStyles from "./GlobalStyles";
import Home from "../Routes/Home";
import useWeather from "./useWeather";

function App() {
  const { loading, weather } = useWeather();
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
      </>
    </div>
  );
}

export default App;
