import React, { Component } from "react";
import Icon from "./common/icon";
import areas from "./constants/areas";
import LoaderIndicator from "./common/LoaderIndicator";
import SearchIcon from "../img/icon/search-icon.svg";

import styled from "styled-components";
import FlexContainer from "../styled-components/flexContainer";

const CloseButtonWrapper = styled.div`
  text-align: end;
  cursor: pointer;
`;

const StyledInput = styled.input`
  background: url(${(props) => props.icon}) no-repeat;
  background-position: left;
  background-position-x: 5%;
  padding: 0 2.5rem;
  height: 4.9vh;
  width: 20.88vw;
  border: 1px solid var(--tx-primary);
  color: var(--tx-primary);
  :focus {
    outline: none;
  }
`;

const ChoicesPanelStyle = styled.div`
  display: ${(props) => (props.query && props.choices ? "block" : "none")};
  text-align: left;
  color: var(--tx-primary);
  margin: 1rem auto;
  border: 1px solid var(--tx-primary);
  padding: 0 1rem 1rem 1rem;
  overflow-y: scroll;
  width: 20.88vw;
`;

const ChoiceStyle = styled(FlexContainer)`
  width: fit-content;
  cursor: pointer;
  font-size: 16px;
  margin-top: 1rem;
  :hover {
    border-bottom: 1px solid var(--tx-primary);
  }
`;

class SearchWindow extends Component {
  renderChoices = (choices) => {
    if (choices.length === 0)
      return (
        <div style={{ color: "var(--tx-secondary)", marginTop: "1rem" }}>
          No city found
        </div>
      );

    return choices.map((choice) => (
      <ChoiceStyle yAlign onClick={() => this.props.onCityNameClick(choice)}>
        <span>{choice.title}</span>
        <div>
          <Icon name="chevron_right" color="var(--tx-secondary)" size="18px" />
        </div>
      </ChoiceStyle>
    ));
  };

  render() {
    const { query, onInputChange, onCloseButtonClick, choices } = this.props;
    return (
      <React.Fragment>
        <CloseButtonWrapper>
          <Icon
            name="close"
            color="var(--tx-primary)"
            size="24px"
            clickEvent={onCloseButtonClick}
          />
        </CloseButtonWrapper>
        <form onSubmit={(e) => e.preventDefault()}>
          <StyledInput
            value={query}
            type="text"
            placeholder="Search Location"
            icon={SearchIcon}
            onChange={onInputChange}
            required
          />
        </form>
        <ChoicesPanelStyle query={query} choices={choices}>
          <LoaderIndicator
            position="relative"
            area={areas.search}
            name="ThreeDots"
          />
          {choices ? this.renderChoices(choices) : null}
        </ChoicesPanelStyle>
      </React.Fragment>
    );
  }
}

export default SearchWindow;
