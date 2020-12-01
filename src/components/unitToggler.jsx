import React from "react";
import styled from "styled-components";
import RoundButton from "../styled-components/roundButton";

const TogglerContainer = styled.div`
  text-align: end;
  margin-top: 1rem;
`;

const UnitToggler = () => {
  return (
    <TogglerContainer className="mb-1">
      <RoundButton>&#8451;</RoundButton>
      <RoundButton>&#8457;</RoundButton>
    </TogglerContainer>
  );
};

export default UnitToggler;
