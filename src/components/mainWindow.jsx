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

const MainWindow = ({ weather, currentLocation }) => {
  return (
    <MainContainer>
      <MainButtons />
      <MainDisplay code={weather.weather_state_abbr} />
      <WeatherIndicator weatherState={weather.weather_state_name} />
      <DegreeIndicator currentTemp={weather.the_temp} />

      <DateIndicator
        date={weather.applicable_date}
        fontSize="18px"
        fontWeight="500"
        text="Today ・"
      />
      <LocationIndicator location={currentLocation.title} />
    </MainContainer>
  );
};

export default MainWindow;
