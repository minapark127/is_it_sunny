import React from "react";
import styled from "styled-components";
import useDate from "./useDate";

const Thunderstorm = `https://images.pexels.com/photos/3637060/pexels-photo-3637060.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500`;
const Drizzle = `https://images.pexels.com/photos/913807/pexels-photo-913807.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500`;
const Rain = `https://images.pexels.com/photos/459451/pexels-photo-459451.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500`;
const Snow = `https://images.pexels.com/photos/4620/snow-landscape-trees-winter.jpg?auto=compress&cs=tinysrgb&fit=crop&h=500`;
const Mist = `https://images.pexels.com/photos/4086307/pexels-photo-4086307.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`;
const Clear = `https://images.pexels.com/photos/1627835/pexels-photo-1627835.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500`;
const Clouds = `https://images.pexels.com/photos/928/sky-clouds-cloudy-blue.jpg?auto=compress&cs=tinysrgb&fit=crop&h=500`;

const Wrapper = styled.div`
  height: 65vh;
  width: 100vw;
  background-color: white;
`;

const BackgroundImg = styled.div`
  height: 65vh;
  width: 100vw;
  position: absolute;
  top: 0%;
  left: 0%;
  background-image: url(${(props) =>
    props.bg === "Thunderstorm"
      ? Thunderstorm
      : props.bg === "Drizzle"
      ? Drizzle
      : props.bg === "Rain"
      ? Rain
      : props.bg === "Snow"
      ? Snow
      : props.bg === "Clear"
      ? Clear
      : props.bg === "Clouds"
      ? Clouds
      : Mist});
  background-position: center;
  background-size: cover;
  opacity: 0.5;
`;

const Container = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
  position: relative;
  padding: 50px 30px;
  display: flex;
  justify-content: space-between;
  section:nth-of-type(2) {
    text-align: right;
  }
`;
const Info = styled.section`
  li:nth-of-type(1) {
    margin-bottom: 10px;
    font-size: 40px;
  }
  li:nth-of-type(2) {
    font-size: 25px;
  }
`;
const Current = styled.section`
  position: absolute;
  bottom: 90px;
  font-size: 30px;
  ul {
    display: flex;
    align-items: baseline;
    li {
      margin-right: 10px;
    }
    li:nth-of-type(1) {
      font-size: 35px;
    }
  }
`;

export default ({ timezone, weatherId, temp }) => {
  const { time, date } = useDate();
  const country = timezone.split("/")[0];
  const city = timezone.split("/")[1];

  return (
    <Wrapper>
      {timezone && time && date && weatherId && temp && (
        <>
          <BackgroundImg bg={weatherId} />
          <Container>
            <Info>
              <ul>
                <li>
                  {time.current} {time.apm}
                </li>
                <li>
                  {date.weekday}, {date.day} {date.month}
                </li>
              </ul>
            </Info>
            <Info>
              <ul>
                <li>{city}</li>
                <li>{country}</li>
              </ul>
            </Info>
            <Current>
              <ul>
                <li>{weatherId},</li>
                <li>{Math.floor(temp)}°c</li>
              </ul>
            </Current>
          </Container>
        </>
      )}
    </Wrapper>
  );
};
