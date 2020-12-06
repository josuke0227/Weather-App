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
          <div className="title-wrapper">{content.title}</div>
          <div className="panel-display">
            <div className="panel-degree-wrapper">{content.index}</div>
            <div className="panel-unit-wrapper">{content.unit}</div>
          </div>
          {content.gadget}
        </PanelWrapper>
      ))}
    </React.Fragment>
  );
};

export default HighlightPanels;
