import React from "react";
import styled from "styled-components";

export default ({ currentWeather }) => {
  const iconID = currentWeather.weather[0].icon;
  const iconURL = `http://openweathermap.org/img/wn/${iconID}@2x.png`;
  const getTime = (time) => {
    switch (time) {
      case "sunrise":
        const sunriseTime = new Date(currentWeather.sunrise * 1000);
        const sunrise = sunriseTime.toLocaleTimeString([], {
          timeStyle: "short",
        });
        return sunrise;
        break;
      case "sunset":
        const sunsetTime = new Date(currentWeather.sunset * 1000);
        const sunset = sunsetTime.toLocaleTimeString([], {
          timeStyle: "short",
        });
        return sunset;
        break;

      default:
        break;
    }
  };
  return (
    <div>
      {currentWeather && (
        <>
          <section>
            <dl>
              <dt>Today</dt>
              <dd>
                <img src={iconURL} alt="current weather icon" />
              </dd>
              <dd>{currentWeather.weather[0].description}</dd>
            </dl>
            <dl>
              <dt>Current</dt>
              <dd>{Math.floor(currentWeather.temp)}°c</dd>
              <dt>Feels like</dt>
              <dd>{Math.floor(currentWeather.feels_like)}°c</dd>
            </dl>
          </section>
          <div>
            <dl>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-droplet"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                strokeWidth="1"
                stroke="#2c3e50"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M12 3l5 5a7 7 0 1 1 -10 0l5 -5" />
              </svg>
              <dt>Humidity</dt>
              <dd>{Math.floor(currentWeather.humidity)}%</dd>
            </dl>
            <dl>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-brightness-up"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                strokeWidth="1"
                stroke="#2c3e50"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <circle cx="12" cy="12" r="3" />
                <line x1="12" y1="5" x2="12" y2="3" />
                <line x1="17" y1="7" x2="18.4" y2="5.6" />
                <line x1="19" y1="12" x2="21" y2="12" />
                <line x1="17" y1="17" x2="18.4" y2="18.4" />
                <line x1="12" y1="19" x2="12" y2="21" />
                <line x1="7" y1="17" x2="5.6" y2="18.4" />
                <line x1="6" y1="12" x2="4" y2="12" />
                <line x1="7" y1="7" x2="5.6" y2="5.6" />
              </svg>
              <dt>UV Index</dt>
              <dd>{Math.floor(currentWeather.uvi)}</dd>
            </dl>
            <dl>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-sunset"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                strokeWidth="1"
                stroke="#2c3e50"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M3 17h1m16 0h1M5.6 10.6l.7.7m12.1-.7l-.7.7M8 17a4 4 0 0 1 8 0" />
                <line x1="3" y1="21" x2="21" y2="21" />
                <path d="M12 9v-6l3 3m-6 0l3 -3" />
              </svg>
              <dt>Sunrise</dt>
              <dd>{getTime("sunrise")}</dd>
            </dl>
            <dl>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-sunshine"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                strokeWidth="1"
                stroke="#2c3e50"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M3 17h1m16 0h1M5.6 10.6l.7.7m12.1-.7l-.7.7M8 17a4 4 0 0 1 8 0" />
                <line x1="3" y1="21" x2="21" y2="21" />
                <path d="M12 3v6l3 -3m-6 0l3 3" />
              </svg>
              <dt>Sunset</dt>
              <dd>{getTime("sunset")}</dd>
            </dl>
          </div>
        </>
      )}
    </div>
  );
};
