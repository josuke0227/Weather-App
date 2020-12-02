import React from "react";
import styled from "styled-components";
import FlexItem from "../styled-components/flexItem";
import DateWrapper from "../styled-components/dateWrapper";

const DateIndicator = ({ text, date, fontSize, fontWeight }) => {
  const dateArr = new Date(date).toString().split(" ");
  const dateToday = dateArr[0];
  const month = dateArr[1];
  const day = new Date(date).getDate();

  return (
    <FlexItem flex="8.83vh">
      <DateWrapper fontSize={fontSize} fontWeight={fontWeight}>
        {text}
        {`${dateToday}, ${day} ${month}`}
      </DateWrapper>
    </FlexItem>
  );
};

export default DateIndicator;
