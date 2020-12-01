import React from "react";
import WindowDirectionIndicator from "./windowDirectionIndicator";
import PercentageBar from "./percentageBar";

const HighlightPanels = () => {
  return (
    <React.Fragment>
      <div className="panel-wrapper">
        <div className="title-wrapper" flex="1.85vh">
          Wind Status
        </div>
        <div className="panel-display">
          <div className="panel-degree-wrapper">7</div>
          <div className="panel-unit-wrapper">mph</div>
        </div>
        <WindowDirectionIndicator />
      </div>
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
      </div>
    </React.Fragment>
  );
};

export default HighlightPanels;
