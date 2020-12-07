import React from "react";
import WindowDirectionIndicator from "./windowDirectionIndicator";
import PercentageBar from "./percentageBar";
import styled from "styled-components";

const PanelWrapper = styled.div`
  background-color: var(--bg-primary);
  color: var(--tx-primary);
  text-align: center;

  @media (max-width: 600px) {
    margin-bottom: 0.5rem;
  }
`;

const PanelUnitWrapper = styled.div`
  font-size: 36px;
  font-weight: 500;
  align-self: flex-end;
`;

const PanelDisplay = styled.div`
  display: flex;
  flex: 7.34vh;
  justify-content: center;
  padding-bottom: 1.28rem;
`;

const PanelDigreeWrapper = styled.div`
  color: var(--tx-primary);
  font-size: 70px;
  font-weight: 700;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  padding-top: 1.53rem;
  font-size: 16px;
`;

const HighlightPanels = ({ weather }) => {
  const panelContents = [
    {
      title: "Wind Status",
      index: Math.round(weather.wind_speed),
      unit: "mph",
      gadget: (
        <WindowDirectionIndicator direction={weather.wind_direction_compass} />
      ),
    },
    {
      title: "Humidity",
      index: Math.round(weather.humidity),
      unit: "%",
      gadget: <PercentageBar percentage={weather.humidity} />,
    },
    {
      title: "Visibility",
      index: Math.round(weather.visibility),
      unit: "miles",
      gadget: null,
    },
    {
      title: "Air Pressure",
      index: Math.round(weather.air_pressure),
      unit: "mb",
      gadget: null,
    },
  ];

  return (
    <React.Fragment>
      {panelContents.map((content, index) => (
        <PanelWrapper key={index}>
          <TitleWrapper>{content.title}</TitleWrapper>
          <PanelDisplay>
            <PanelDigreeWrapper>{content.index}</PanelDigreeWrapper>
            <PanelUnitWrapper>{content.unit}</PanelUnitWrapper>
          </PanelDisplay>
          {content.gadget}
        </PanelWrapper>
      ))}
    </React.Fragment>
  );
};

export default HighlightPanels;
