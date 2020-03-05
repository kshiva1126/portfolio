import React, { FC } from "react";
import { Container, Header, Icon, Popup, Divider } from "semantic-ui-react";
import styled from "@emotion/styled";

const copy = require("clipboard-copy");

const IconStyle = styled.div`
  .icon {
    margin-right: 10px;
    margin-left: 10px;
  }

  .icon.mail {
    color: #4183c4;
  }
`;

const Contact: FC = () => {
  const CopyEmail = () => {
    copy("kshiva1126@gmail.com");
  };

  const Mail = (
    <Icon link name="mail outline" size="huge" circular onClick={CopyEmail} />
  );

  return (
    <>
      <Container id="contact">
        <Header as="h2" icon textAlign="center">
          <Icon name="envelope" circular />
          <Header.Content>Contact</Header.Content>
        </Header>
        <Container textAlign="center">
          <IconStyle>
            <a
              href="https://twitter.com/kshiva1126"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon link name="twitter" size="huge" circular />
            </a>
            <a
              href="https://github.com/kshiva1126"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon link name="github" size="huge" circular />
            </a>
            <Popup trigger={Mail} content="Copied!" on="click" />
          </IconStyle>
        </Container>
      </Container>
      <Divider hidden />
    </>
  );
};

export default Contact;
