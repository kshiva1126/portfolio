import React, { FC } from "react";
import { Icon } from "semantic-ui-react";
import styled from "@emotion/styled";

const FooterStyle = styled.div`
  * {
    border: 0;
    margin: 0;
    padding: 0;
  }

  .footer {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #aeb2e8;
    height: 80px;
    color: white;
    font-size: 14px;
  }
`;

const Footer: FC = () => {
  return (
    <FooterStyle>
      <div className="footer">
        Copyright <Icon name="copyright outline" />
        kshiva1126 2019-2020
      </div>
    </FooterStyle>
  );
};

export default Footer;
