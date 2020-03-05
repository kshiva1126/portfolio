import React, { FC } from "react";
import { Container, List, Header, Icon, Divider } from "semantic-ui-react";

import { AboutSet } from "./aboutData";

const About: FC = () => {
  return (
    <>
      <Container id="about">
        <Header as="h2" icon textAlign="center">
          <Icon name="user" circular />
          <Header.Content>About</Header.Content>
        </Header>
        <List as="ol" size="large">
          {AboutSet.map(a => (
            <List.Item as="li" value="*" key={a.id}>
              {a.title} ： {a.description}
            </List.Item>
          ))}
        </List>
      </Container>
      <Divider hidden />
    </>
  );
};

export default About;
