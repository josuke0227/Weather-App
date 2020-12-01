import React from "react";
import styled from "styled-components";
import FlexContainer from "../styled-components/flexContainer";
import UnitWrapper from "../styled-components/unitWrapper";
import DegreeWrapper from "../styled-components/degreeWrapper";

const DegreeWindow = styled(FlexContainer)`
  margin: auto;
  display: flex;
  flex-direction: row;
  flex: 25.95vh;
`;

const DegreeIndicator = () => {
  return (
    <DegreeWindow>
      <DegreeWrapper>
        15<UnitWrapper>&#8451;</UnitWrapper>
      </DegreeWrapper>
    </DegreeWindow>
  );
};

export default DegreeIndicator;
