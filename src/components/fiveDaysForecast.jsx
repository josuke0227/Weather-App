import React, { Component } from "react";
import fahrenheitConverter from "../util/fahrenheitConverter";
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

class FiveDaysForecast extends Component {
  renderTemp = (unit, minTemp, maxTemp) => {
    if (unit.match("celsius")) {
      return (
        <React.Fragment>
          <MaxTempWrapper style={{ textAlign: "end", paddingRight: "1rem" }}>
            {Math.ceil(maxTemp)}&#8451;
          </MaxTempWrapper>
          <MinTempWrapper>{Math.ceil(minTemp)}&#8451;</MinTempWrapper>
        </React.Fragment>
      );
    }

    return (
      <React.Fragment>
        <MaxTempWrapper style={{ textAlign: "end", paddingRight: "1rem" }}>
          {Math.ceil(fahrenheitConverter(maxTemp))}&#8457;
        </MaxTempWrapper>
        <MinTempWrapper>
          {Math.ceil(fahrenheitConverter(minTemp))}&#8457;
        </MinTempWrapper>
      </React.Fragment>
    );
  };

  render() {
    const sliced = this.props.weather.slice(1, this.props.weather.length);

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
              {this.renderTemp(
                this.props.unit,
                weather.max_temp,
                weather.min_temp
              )}
            </FlexContainer>
          </PanelWrapper>
        ))}
      </FiveDaysContainer>
    );
  }
}

export default FiveDaysForecast;
