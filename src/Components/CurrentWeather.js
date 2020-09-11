import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: rgb(45, 52, 54);
  color: #dfe6e9;
  width: 100%;
  height: 35vh;
  padding: 30px;
  display: grid;
  grid-template-columns: 0.8fr 1.5fr;
`;
const Current = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 10px;
  dl:first-of-type {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    dt {
      text-transform: capitalize;
      font-size: 22px;
    }
    dd {
      width: 60%;
      img {
        width: 100%;
      }
    }
  }
  dl:nth-of-type(2) {
    height: 100%;
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    align-items: center;
    div {
      line-height: 2;
      dt {
        width: 80%;
        font-size: 14px;
        text-transform: uppercase;
        opacity: 0.8;
        margin-bottom: 10px;
        border-bottom: 1px solid rgba(223, 230, 233, 0.8);
      }
      dd {
        font-size: 30px;
      }
    }
  }
`;

const Items = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

const Item = styled.dl`
  display: grid;
  grid-template-rows: 2.5fr repeat(3, 1fr);
  align-items: center;
  justify-items: center;
  svg {
    stroke: #dfe6e9;
    width: 40%;
    height: 40%;
    align-self: end;
  }
  dt {
    font-size: 16px;
    text-transform: uppercase;
    opacity: 0.8;
  }
  dd {
    font-size: 25px;
  }
`;

export default ({ currentWeather }) => {
  const iconID = currentWeather.weather[0].icon;
  const iconURL = `http://openweathermap.org/img/wn/${iconID}@2x.png`;
  const getTime = (time) => {
    switch (time) {
      case "sunrise":
        const sunriseTime = new Date(currentWeather.sunrise * 1000);
        const sunrise = sunriseTime.toLocaleTimeString([], {
          hour12: true,
        });
        return `${
          sunrise.split(":")[0] === "0" ? "12" : sunrise.split(":")[0]
        }:${sunrise.split(":")[1]} ${sunrise.slice(-2)}`;
        break;
      case "sunset":
        const sunsetTime = new Date(currentWeather.sunset * 1000);
        const sunset = sunsetTime.toLocaleTimeString([], {
          hour12: true,
        });
        return `${sunset.split(":")[0] === "0" ? "12" : sunset.split(":")[0]}:${
          sunset.split(":")[1]
        } ${sunset.slice(-2)}`;
        break;

      default:
        break;
    }
  };
  return (
    <Wrapper>
      {currentWeather && (
        <>
          <Current>
            <dl>
              <dd>
                <img src={iconURL} alt="current weather icon" />
              </dd>
              <dt>{currentWeather.weather[0].description}</dt>
            </dl>
            <dl>
              <div>
                <dt>Current</dt>
                <dd>{Math.floor(currentWeather.temp)}°c</dd>
              </div>
              <div>
                <dt>Feels like</dt>
                <dd>{Math.floor(currentWeather.feels_like)}°c</dd>
              </div>
            </dl>
          </Current>
          <Items>
            <Item>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-droplet"
                viewBox="0 0 24 24"
                strokeWidth="1"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M12 3l5 5a7 7 0 1 1 -10 0l5 -5" />
              </svg>
              <dt>Humidity</dt>
              <span>―</span>
              <dd>{Math.floor(currentWeather.humidity)}%</dd>
            </Item>
            <Item>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-brightness-up"
                viewBox="0 0 24 24"
                strokeWidth="1"
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
              <span>―</span>
              <dd>{Math.floor(currentWeather.uvi)}</dd>
            </Item>
            <Item>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-sunset"
                viewBox="0 0 24 24"
                strokeWidth="1"
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
              <span>―</span>
              <dd>{getTime("sunrise")}</dd>
            </Item>
            <Item>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-sunshine"
                viewBox="0 0 24 24"
                strokeWidth="1"
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
              <span>―</span>
              <dd>{getTime("sunset")}</dd>
            </Item>
          </Items>
        </>
      )}
    </Wrapper>
  );
};
