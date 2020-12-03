import React from "react";
import styled from "styled-components";
import RoundButton from "../styled-components/roundButton";

const TogglerContainer = styled.div`
  text-align: end;
  margin-top: 1rem;
`;

const UnitToggler = ({ onUnitButtonClick, unit }) => {
  const selected = {
    backgroundColor: "var(--tx-primary)",
    color: "#110e3c",
  };

  return (
    <TogglerContainer className="mb-1">
      <RoundButton
        onClick={onUnitButtonClick}
        id="celsius"
        style={unit.match("celsius") ? selected : null}
      >
        &#8451;
      </RoundButton>
      <RoundButton
        onClick={onUnitButtonClick}
        id="fahrenheit"
        style={unit.match("fahrenheit") ? selected : null}
        margin="0.75rem"
      >
        &#8457;
      </RoundButton>
    </TogglerContainer>
  );
};

export default UnitToggler;
