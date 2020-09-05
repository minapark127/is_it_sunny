import React from "react";
import Router from "./Router";
import GlobalStyles from "./GlobalStyles";
import Home from "../Routes/Home";
import useWeather from "./useWeather";

function App() {
  const { loading } = useWeather();
  return (
    <div className="App">
      <>
        {!loading ? (
          <>
            <Home />
            <Router />
            <GlobalStyles />
          </>
        ) : (
          "loading"
        )}
      </>
    </div>
  );
}

export default App;
