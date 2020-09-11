import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: rgb(45, 52, 54);
  color: #dfe6e9;
  height: 35vh;
  overflow: scroll;
`;

const Items = styled.section`
  display: grid;
  grid-auto-flow: column;
  grid-auto-rows: 1fr;
  height: 100%;
  width: 100%;
  align-items: center;
`;

const Item = styled.dl`
  width: 180px;
  height: 100%;
  padding: 0 15px;
  display: grid;
  grid-template-rows: 1fr 2fr repeat(2, 1fr);
  align-items: center;
  justify-items: center;
  font-size: 18px;
  & > * {
    width: 100%;
    text-align: center;
  }
  dt {
    align-self: end;
  }
  dd:nth-of-type(3) {
    align-self: start;
  }
`;

const Separator = styled.div`
  width: 1px;
  height: 60%;
  background-color: rgba(223, 230, 233, 0.45);
`;

export default ({ hourly }) => {
  const iconURL = (id) => `http://openweathermap.org/img/wn/${id}@2x.png`;
  const getTime = (dt) => {
    const dtDate = new Date(dt * 1000);
    const dtTime = dtDate.toLocaleTimeString([], {
      hour12: true,
    });
    return `${
      dtTime.split(":")[0] === "0" ? "12" : dtTime.split(":")[0]
    } ${dtTime.slice(-2)}`;
  };
  return (
    <Wrapper>
      <Items>
        {hourly && (
          <>
            {hourly.slice(1, 25).map((hour, index) => (
              <React.Fragment key={index}>
                <Item>
                  <dt>{getTime(hour.dt)}</dt>
                  <dd>
                    <img
                      src={iconURL(hour.weather[0].icon)}
                      alt="weather icon"
                    />
                  </dd>
                  <dd>{hour.weather[0].main}</dd>
                  <dd>{Math.floor(hour.temp)}°c</dd>
                </Item>
                {index < 23 ? <Separator /> : null}
              </React.Fragment>
            ))}
          </>
        )}
      </Items>
    </Wrapper>
  );
};
