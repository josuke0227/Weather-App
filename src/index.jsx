import React from "react";
import ReactDOM from "react-dom";
import FlexItem from "./styled-components/flexItem";
import styled from "styled-components";

import "./index.css";
import MainWindow from "./component/mainWindow";

const StyledMain = styled.main`
  display: flex;
  flex-direction: row;
`;

const SubContainer = styled(FlexItem)`
  background-color: var(--bg-seconday);
  padding: var(--ct-padding-top) 9.625rem var(--ct-padding-bottom) 7.6875rem;
  height: 100vh;
`;

const App = () => {
  return (
    <StyledMain>
      <MainWindow />
      <SubContainer flex="68.125vw">
        <h1>sub-window</h1>
      </SubContainer>
    </StyledMain>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
