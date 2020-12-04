import React from "react";
import LocationIndicator from "./locationIndicator";
import DateIndicator from "./dateIndicator";
import DegreeIndicator from "./degreeIndicator";
import MainButtons from "./mainButtons";
import WeatherIndicator from "./weatherIndicator";
import MainDisplay from "./mainDisplay";

import styled from "styled-components";
import InnerContainers from "../styled-components/innerContainers";
import SearchWindow from "./searchWindow";

const MainContainer = styled(InnerContainers)`
  background-color: var(--bg-primary);
  flex-direction: column;
  text-align: center;
  padding: ${(props) =>
    props.isOpened
      ? "1.9vh 2vw;"
      : "var(--ct-padding-top) 0rem var(--ct-padding-bottom);"} 
  flex: 31.875vw;
`;

const MainWindow = ({
  query,
  weather,
  currentLocation,
  searchResult,
  currentUnit,
  isOpened,
  onOpenButonClick,
  onInputChange,
  onSearchButtonClick,
  onGpsButtonClick,
  onCityNameClick,
  onCloseButtonClick,
  onChoiceClick,
  choices,
}) => {
  return (
    <MainContainer isOpened={isOpened}>
      {isOpened === true ? (
        <SearchWindow
          query={query}
          onCityNameClick={onCityNameClick}
          onInputChange={onInputChange}
          onCloseButtonClick={onCloseButtonClick}
          onSearchButtonClick={onSearchButtonClick}
          searchResult={searchResult}
          choices={choices}
          onChoiceClick={onChoiceClick}
        />
      ) : (
        <React.Fragment>
          <MainButtons
            onOpenButonClick={onOpenButonClick}
            onGpsButtonClick={onGpsButtonClick}
          />
          <MainDisplay code={weather.weather_state_abbr} />
          <WeatherIndicator weatherState={weather.weather_state_name} />
          <DegreeIndicator currentTemp={weather.the_temp} unit={currentUnit} />
          <DateIndicator
            date={weather.applicable_date}
            fontSize="18px"
            fontWeight="500"
            text="Today ・"
          />
          <LocationIndicator location={currentLocation.title} />
        </React.Fragment>
      )}
    </MainContainer>
  );
};

export default MainWindow;
