import React from "react";
import MainWindow from "./components/mainWindow";
import SubWindow from "./components/subWindow";
import styled from "styled-components";

const Container = styled.main`
  display: flex;
  overflow: hidden;
`;

const App = () => {
  return (
    <Container>
      <MainWindow />
      <SubWindow />
    </Container>
  );
};

export default App;
