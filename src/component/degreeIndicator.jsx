import React from "react";
import styled from "styled-components";
import UnitWrapper from "../styled-components/unitWrapper";
import DegreeWrapper from "../styled-components/degreeWrapper";

const DegreeWindow = styled.div`
  margin: auto;
  display: flex;
  flex-direction: row;
`;

const DegreeIndicator = () => {
  return (
    <DegreeWindow flex="25.95vh">
      <DegreeWrapper>
        15<UnitWrapper>&#8451;</UnitWrapper>
      </DegreeWrapper>
    </DegreeWindow>
  );
};

export default DegreeIndicator;
