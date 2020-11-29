import React from "react";
import styled from "styled-components";
import FlexItem from "../styled-components/flexItem";
import UnitWrapper from "../styled-components/unitWrapper";

const WeatherWindow = styled(FlexItem)`
  padding-top: 2.3%;
`;

const WeatherText = styled(UnitWrapper)`
  font-size: 36px;
  font-weight: 600;
`;

const WeatherIndicator = () => {
  return (
    <WeatherWindow flex="7.595vh">
      <WeatherText>Shower</WeatherText>
    </WeatherWindow>
  );
};

export default WeatherIndicator;
