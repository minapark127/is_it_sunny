import React, { useState, useEffect } from "react";
import styled from "styled-components";
import useDate from "./useDate";

const Wrapper = styled.div``;
const Date = styled.section``;
const Location = styled.section``;

export default ({ timezone }) => {
  const { time, date } = useDate();
  const country = timezone.split("/")[0];
  const city = timezone.split("/")[1];

  return (
    <Wrapper>
      {timezone && time && date && (
        <>
          <Date>
            <ul>
              <li>{time}</li>
              <li>
                {date.weekday}, {date.day} {date.month}
              </li>
            </ul>
          </Date>
          <Location>
            <ul>
              <li>{city}</li>
              <li>{country}</li>
            </ul>
          </Location>
          <h1>Landing</h1>
        </>
      )}
    </Wrapper>
  );
};
