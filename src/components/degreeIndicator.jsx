import React from "react";
import styled from "styled-components";
import fahrenheitConverter from "../util/fahrenheitConverter";
import FlexContainer from "../styled-components/flexContainer";
import UnitWrapper from "../styled-components/unitWrapper";
import DegreeWrapper from "../styled-components/degreeWrapper";

const DegreeWindow = styled(FlexContainer)`
  margin: auto;
  flex: 25.95vh;
`;

const DegreeIndicator = ({ currentTemp, unit }) => {
  if (unit.match("celsius")) {
    return (
      <DegreeWindow>
        <DegreeWrapper>
          {Math.round(currentTemp)}
          <UnitWrapper>&#8451;</UnitWrapper>
        </DegreeWrapper>
      </DegreeWindow>
    );
  }
  return (
    <DegreeWindow>
      <DegreeWrapper>
        {Math.round(fahrenheitConverter(currentTemp))}
        <UnitWrapper>&#8457;</UnitWrapper>
      </DegreeWrapper>
    </DegreeWindow>
  );
};

export default DegreeIndicator;
