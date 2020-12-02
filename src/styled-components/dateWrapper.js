import styled from "styled-components";
import UnitWrapper from "../styled-components/unitWrapper";

const DateWrapper = styled(UnitWrapper)`
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  color: var(--tx-tirtary);
`;

export default DateWrapper;
