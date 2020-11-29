import React from "react";
import styled from "styled-components";
import FlexItem from "../styled-components/flexItem";
import UnitWrapper from "../styled-components/unitWrapper";

const DateWindow = styled(FlexItem)`
  padding-top: 5.68%;
`;

const DateWrapper = styled(UnitWrapper)`
  font-size: 18px;
  font-weight: 500;
  color: var(--tx-tirtary);
`;

const DateIndicator = () => {
  return (
    <DateWindow flex="8.83vh">
      <DateWrapper>Today ・ Sat, 28, Nov</DateWrapper>
    </DateWindow>
  );
};

export default DateIndicator;
