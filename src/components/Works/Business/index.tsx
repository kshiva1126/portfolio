import React, { FC } from "react";
import { Header, Segment, Card, Modal, Icon } from "semantic-ui-react";

import { BusinessSet, BusinessData } from "./BusinessData";

const Period = (period: string) => {
  return (
    <>
      <Icon name="calendar outline" />
      {period}
    </>
  );
};

const BusinessCard = (props: BusinessData) => {
  return <Card fluid header={props.title} meta={Period(props.period)} />;
};

const BusinessModal = (props: BusinessData) => {
  return (
    <Modal basic key={props.id} trigger={BusinessCard(props)}>
      <Modal.Header>{props.title}</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <div className="table">
            <dl>
              <dt>担当業務</dt>
              <dd>{props.charge}</dd>
              <dt>コメント</dt>
              <dd>{props.comment}</dd>
              <dt>期間</dt>
              <dd>{props.period}</dd>
              <dt>言語・FW</dt>
              <dd>{props.lang}</dd>
              <dt>DB</dt>
              <dd>{props.db}</dd>
              <dt>サーバ</dt>
              <dd>{props.server}</dd>
              <dt>ツール</dt>
              <dd>{props.tools}</dd>
            </dl>
          </div>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

const BusinessWorks: FC = () => {
  return (
    <>
      <Header as="h3" textAlign="center">
        <Header.Content>企業開発</Header.Content>
      </Header>
      <Segment size="small">
        <Card.Group>{BusinessSet.map(b => BusinessModal(b))}</Card.Group>
      </Segment>
    </>
  );
};

export default BusinessWorks;
