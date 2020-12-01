import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div``;

const FooterText = styled.div`
  display: inline;
  color: var(--tx-tirtary);
  font-size: 14px;
`;

const Footer = () => {
  return (
    <div className="footer-container mt-1">
      <FooterText>Josuke0227 @ DevChallenges.io</FooterText>
    </div>
  );
};

export default Footer;
