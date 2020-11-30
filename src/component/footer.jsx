import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  text-align: center;
`;

const FooterText = styled.div`
  display: inline;
  color: var(--tx-tirtary);
  font-size: 14px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>Josuke0227 @ DevChallenges.io</FooterText>
    </FooterContainer>
  );
};

export default Footer;
