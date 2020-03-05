import React, { FC } from "react";
import { Header, Segment, Card, Image, Icon } from "semantic-ui-react";

import { SelfAccessSet, SelfAccessData } from "./SelfAccessData";

const SelfAccessCard = (props: SelfAccessData) => {
  return (
    <Card key={props.id}>
      <Image
        src={props.image_path}
        href={props.url}
        target="_blank"
        rel="noopener noreferrer"
      />
      <Card.Content>
        <Card.Header>{props.title}</Card.Header>
        <Card.Description>{props.comment}</Card.Description>
      </Card.Content>
      {props.repo &&
        props.repo.map(r => (
          <Card.Content extra>
            <a href={r.url} target="_blank" rel="noopener noreferrer">
              <Icon name="github" />
              {r.name}
            </a>
          </Card.Content>
        ))}
    </Card>
  );
};

const SelfAccessWorks: FC = () => {
  return (
    <>
      <Header as="h3" textAlign="center">
        <Header.Content>個人開発</Header.Content>
      </Header>
      <Segment size="small">
        <Card.Group centered>
          {SelfAccessSet.map(s => SelfAccessCard(s))}
        </Card.Group>
      </Segment>
    </>
  );
};

export default SelfAccessWorks;
