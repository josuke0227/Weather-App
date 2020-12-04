import React, { Component } from "react";
import Icon from "./common/icon";
import SearchIcon from "../img/icon/search-icon.svg";

import styled from "styled-components";
import SquareButton from "../styled-components/squareButton";
import FlexContainer from "../styled-components/flexContainer";
import FlexItem from "../styled-components/flexItem";

const CloseButtonWrapper = styled.div`
  text-align: end;
  cursor: pointer;
`;

const SearchBarContainer = styled(FlexContainer)`
  margin-top: 4.4vh;
`;

const FormWrapper = styled(FlexItem)`
  text-align: end;
`;

const StyledInput = styled.input`
  background: url(${(props) => props.icon}) no-repeat;
  background-position: left;
  background-position-x: 5%;
  padding: 0 2.5rem;
  height: 4.9vh;
  width: 100%;
  border: 1px solid var(--tx-primary);
  color: var(--tx-primary);
  :focus {
    outline: none;
  }
`;

const SearchButtonWrapper = styled(FlexItem)`
  text-align: start;
  flex: 0;
  padding-left: 1vw;
`;

const SearchButton = styled(SquareButton)`
  background: #3c47e9;
`;

const ResultPanel = styled(FlexContainer)`
  font-size: 16px;
  height: 7.25vh;
  width: 27.8vw;
  padding: 1rem;
  margin-bottom: 1rem;
  cursor: "pointer";
  &:hover {
    border: 1px solid var(--tx-secondary);
  }
`;

class SearchWindow extends Component {
  renderResult = (resultData) => {
    if (resultData.length < 1) return <div>No avaliable city found...</div>;
    else {
      return resultData.map((location) => (
        <ResultPanel
          xAlign
          onClick={() => this.props.onCityNameClick(location)}
        >
          <FlexItem>
            <div>{location.title}</div>
          </FlexItem>
          <FlexItem style={{ textAlign: "end" }}>
            <Icon name="chevron_right" color="var(--tx-secondary)" />
          </FlexItem>
        </ResultPanel>
      ));
    }
  };

  render() {
    const {
      query,
      searchResult,
      onInputChange,
      onCloseButtonClick,
      onSearchButtonClick,
    } = this.props;
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
        <SearchBarContainer xAlign>
          <FormWrapper>
            <form onSubmit={(e) => e.preventDefault()}>
              <StyledInput
                value={query}
                type="text"
                placeholder="Search Location"
                icon={SearchIcon}
                onChange={onInputChange}
              />
            </form>
          </FormWrapper>
          <SearchButtonWrapper flex="0">
            <SearchButton onClick={onSearchButtonClick}>Search</SearchButton>
          </SearchButtonWrapper>
        </SearchBarContainer>
        <div
          style={{
            overflowY: "scroll",
            marginTop: "1rem",
            color: "var(--tx-primary)",
            textAlign: "start",
          }}
        >
          {Array.isArray(searchResult) ? this.renderResult(searchResult) : null}
        </div>
      </React.Fragment>
    );
  }
}

export default SearchWindow;
