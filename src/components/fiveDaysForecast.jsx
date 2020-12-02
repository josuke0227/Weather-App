import React from "react";
import styled from "styled-components";
import FlexContainer from "../styled-components/flexContainer";
import FlexItem from "../styled-components/flexItem";
import DateWrapper from "../styled-components/dateWrapper";
import ImageGenerator from "./imageGenerator";
import DateIndicator from "./dateIndicator";

const PanelWrapper = styled(FlexContainer)`
  background-color: var(--bg-primary);
  color: var(--tx-primary);
  text-align: center;
`;

const FiveDaysContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 8.32vw);
  grid-template-rows: 19.3vh;
  grid-column-gap: 1.625rem;
  padding-bottom: 2rem;
`;

const MinTempWrapper = styled(FlexItem)`
  color: var(--tx-secondary);
  text-align: start;
  padding-left: 0.5rem;
`;

const MaxTempWrapper = styled(FlexItem)`
  text-align: end;
  padding-right: 0.5rem;
`;

const FiveDaysForecast = ({ weather }) => {
  const sliced = weather.slice(1, weather.length);
  console.log(weather);

  return (
    <FiveDaysContainer>
      {sliced.map((weather, index) => (
        <PanelWrapper key={index} direction="column">
          <FlexItem style={{ paddingTop: "0.55vh" }}>
            {index === 0 ? (
              <DateWrapper fontSize="16px" fontWeight="500">
                Tomorrow
              </DateWrapper>
            ) : (
              <DateIndicator
                date={weather.applicable_date}
                fontSize="16px"
                fontWeight="500"
              />
            )}
          </FlexItem>
          <FlexItem>
            <ImageGenerator
              code={weather.weather_state_abbr}
              width="4vw"
              height="7vh"
            />
          </FlexItem>
          <FlexContainer xAlign style={{ flex: "1" }}>
            <MaxTempWrapper style={{ textAlign: "end", paddingRight: "1rem" }}>
              {Math.ceil(weather.max_temp)}&#8451;
            </MaxTempWrapper>
            <MinTempWrapper>
              {Math.ceil(weather.min_temp)}&#8451;
            </MinTempWrapper>
          </FlexContainer>
        </PanelWrapper>
      ))}
    </FiveDaysContainer>
  );
};

export default FiveDaysForecast;
