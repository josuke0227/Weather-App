import React from "react";
import styled from "styled-components";
import Icon from "./common/icon";
import RoundButton from "../styled-components/roundButton";

const DirectionWrapper = styled.span`
  margin-left: 0.18rem;
  color: var(--tx-primary);
  font-size: 14px;
`;

const CompusWrapper = styled(RoundButton)`
  width: 4vh;
  height: 4vh;
  margin-right: 0.18rem;
  padding: 8px;
`;

const WindowDirectionIndicator = ({ direction }) => {
  const windDir = {
    N: "0",
    NNE: "22.5",
    NE: "45",
    ENE: "67.5",
    E: "90",
    ESE: "112.5",
    SE: "135",
    SSE: "157.5",
    S: "180",
    SSW: "202.5",
    SW: "225",
    WSW: "247.5",
    W: "270",
    WNW: "292.5",
    NW: "315",
    NNW: "337.5",
  };

  const deg = windDir[direction];

  return (
    <div className="direction-container">
      <CompusWrapper>
        <Icon name="navigation" size="md-18" deg={deg} />
      </CompusWrapper>
      <DirectionWrapper>{direction}</DirectionWrapper>
    </div>
  );
};

export default WindowDirectionIndicator;
