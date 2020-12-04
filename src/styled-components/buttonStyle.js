import styled from "styled-components";

const ButtonStyle = styled.button`
  display: inline;
  border: none;
  color: var(--tx-primary);
  background-color: var(--bg-btn-secondary);
  text-align: center;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  :focus {
    outline: none;
  }
`;

export default ButtonStyle;
