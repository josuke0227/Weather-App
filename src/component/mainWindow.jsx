import React from "react";
import LocationIndicator from "./locationIndicator";
import DateIndicator from "./dateIndicator";
import DegreeIndicator from "./degreeIndicator";
import MainButtons from "./mainButtons";
import WeatherIndicator from "./weatherIndicator";

import styled from "styled-components";
import FlexItem from "../styled-components/flexItem";
import MainDisplay from "./mainDisplay";

const MainContainer = styled(FlexItem)`
  overflow: hidden;
  background-color: var(--bg-primary);
  text-align: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: var(--ct-padding-top) 0rem var(--ct-padding-bottom);
`;

const MainWindow = () => {
  return (
    <MainContainer flex="31.875vw" yAlign>
      <MainButtons />
      <MainDisplay />
      <WeatherIndicator />
      <DegreeIndicator />
      <DateIndicator />
      <LocationIndicator />
    </MainContainer>
  );
};

export default MainWindow;
