import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: rgb(45, 52, 54);
  color: #dfe6e9;
  height: 35vh;
  padding: 30px 50px;
`;

const Items = styled.section`
  display: grid;
  grid-auto-column: 50px;
  width: 100%;
  height: 100%;
  overflow: scroll;
  justify-items: center;
`;

const Item = styled.dl`
  width: 95%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr) repeat(3, 0.5fr);
  font-size: 18px;
  align-items: center;
  dt {
    font-size: 20px;
  }
  dd {
    text-align: center;
  }
  img {
    height: 50px;
  }
`;
const Separator = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgba(223, 230, 233, 0.45);
`;

export default ({ daily }) => {
  const iconURL = (id) => `http://openweathermap.org/img/wn/${id}@2x.png`;
  const getDay = (dt) => {
    const date = new Date(dt * 1000);
    const day = date.toLocaleDateString([], { weekday: "long" });
    return day;
  };

  return (
    <Wrapper>
      <Items>
        {daily && (
          <>
            {daily.map((day, index) => (
              <>
                <Item key={index}>
                  <dt>{getDay(day.dt)}</dt>
                  <dd>
                    <img
                      src={iconURL(day.weather[0].icon)}
                      alt="weather icon"
                    />
                  </dd>
                  <dd>{day.weather[0].main}</dd>
                  <dd>{Math.floor(day.temp.max)}°c</dd>
                  <dd>{Math.floor(day.temp.min)}°c</dd>
                </Item>
                {index < 7 ? <Separator /> : null}
              </>
            ))}
          </>
        )}
      </Items>
    </Wrapper>
  );
};
