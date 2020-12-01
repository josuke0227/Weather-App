import React from "react";
import LocationIndicator from "./locationIndicator";
import DateIndicator from "./dateIndicator";
import DegreeIndicator from "./degreeIndicator";
import MainButtons from "./mainButtons";
import WeatherIndicator from "./weatherIndicator";
import MainDisplay from "./mainDisplay";

import styled from "styled-components";
import InnerContainers from "../styled-components/innerContainers";

const MainContainer = styled(InnerContainers)`
  background-color: var(--bg-primary);
  flex-direction: column;
  text-align: center;
  padding: var(--ct-padding-top) 0rem var(--ct-padding-bottom);
  flex: 31.875vw;
`;

const MainWindow = () => {
  return (
    <MainContainer>
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
