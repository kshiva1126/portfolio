import React, { FC } from "react";
import {
  Container as Vessel,
  Header,
  Icon,
  Divider,
  Button
} from "semantic-ui-react";

import BusinessWorks from "./Business";
import SelfAccessWorks from "./SelfAccess";
import Container from "./style";

const Works: FC = () => {
  return (
    <Container>
      <Vessel id="works">
        <Header as="h2" icon textAlign="center">
          <Icon name="file alternate" circular />
          <Header.Content>Works</Header.Content>
        </Header>
        <div className="intro">
          <p>日々の学習の中で学んだことを共有するために書いています。</p>
          <Button
            as="a"
            href="https://qiita.com/kshiva1126"
            target="_blank"
            color="green"
            content="Qiita"
          />
        </div>

        <Divider hidden />
        <BusinessWorks />
        <SelfAccessWorks />
        <Divider hidden />
      </Vessel>
    </Container>
  );
};

export default Works;
