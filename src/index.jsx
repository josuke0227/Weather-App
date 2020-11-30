import React from "react";
import ReactDOM from "react-dom";
import MainWindow from "./component/mainWindow";
import SubWindow from "./component/subWindow";
import styled from "styled-components";
import "./index.css";

const StyledMain = styled.main`
  display: flex;
  flex-direction: row;
`;

const App = () => {
  return (
    <StyledMain>
      <MainWindow />
      <SubWindow />
    </StyledMain>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
