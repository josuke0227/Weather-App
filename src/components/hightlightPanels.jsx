import React from "react";
import WindowDirectionIndicator from "./windowDirectionIndicator";
import PercentageBar from "./percentageBar";

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
        <div key={index} className="panel-wrapper">
          <div className="title-wrapper" flex="1.85vh">
            {content.title}
          </div>
          <div className="panel-display">
            <div className="panel-degree-wrapper">{content.index}</div>
            <div className="panel-unit-wrapper">{content.unit}</div>
          </div>
          {content.gadget}
        </div>
      ))}
      {/* 
      <div className="panel-wrapper">
        <div className="title-wrapper" flex="1.85vh">
          Wind Status
        </div>
        <div className="panel-display">
          <div className="panel-degree-wrapper">7</div>
          <div className="panel-unit-wrapper">mph</div>
        </div>
        <PercentageBar />
      </div>
      <div className="panel-wrapper">
        <div className="title-wrapper" flex="1.85vh">
          Wind Status
        </div>
        <div className="panel-display">
          <div className="panel-degree-wrapper">7</div>
          <div className="panel-unit-wrapper">mph</div>
        </div>
      </div>
      <div className="panel-wrapper">
        <div className="title-wrapper" flex="1.85vh">
          Wind Status
        </div>
        <div className="panel-display">
          <div className="panel-degree-wrapper">7</div>
          <div className="panel-unit-wrapper">mph</div>
        </div>
      </div> */}
    </React.Fragment>
  );
};

export default HighlightPanels;
