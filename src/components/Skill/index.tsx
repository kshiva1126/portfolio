import React, { FC } from "react";
import {
  Container,
  Header,
  Icon,
  Tab,
  Segment,
  Divider,
  Progress,
  SemanticShorthandItem,
  TabPaneProps
} from "semantic-ui-react";
import styled from "@emotion/styled";

import { SkillSet, SkillData, Skills } from "./skillData";
import { SemanticICONS } from "semantic-ui-react/dist/commonjs/generic";

interface SkillListProps {
  title: string;
  icon: SemanticICONS;
  description?: string;
  skills: SkillData[];
}

const SkillProgress = (props: SkillData) => {
  return (
    <Progress key={props.id} progress="percent" percent={props.learningLevel}>
      {props.skill}
    </Progress>
  );
};

const SkillList = (props: SkillListProps) => {
  return {
    menuItem: {
      key: props.icon,
      icon: props.icon
    },
    render: () => (
      <Tab.Pane>
        <Segment>
          <Header as="h3" textAlign="center">
            <Icon name={props.icon} />
            {props.title}
          </Header>
          {props.description && (
            <Header as="h5" textAlign="center">
              {props.description}
            </Header>
          )}
          {props.skills.map(s => SkillProgress(s))}
          <Divider />
        </Segment>
      </Tab.Pane>
    )
  };
};

interface PanesProp {
  pane?: SemanticShorthandItem<TabPaneProps>;
  menuItem?: any;
  render?: (() => React.ReactNode) | undefined;
}

const Panes = () => {
  const Tabs: PanesProp[] = [];
  Object.keys(SkillSet).map(code => Tabs.push(SkillList(SkillSet[code])));

  return Tabs;
};

const TabExampleVerticalTabular = () => <Tab panes={Panes()} />;

const Skill: FC = () => {
  return (
    <>
      <Container id="skill">
        <Header as="h2" icon textAlign="center">
          <Icon name="lightbulb" circular />
          <Header.Content>Skill</Header.Content>
        </Header>
        <TabExampleVerticalTabular />
      </Container>
      <Divider hidden />
    </>
  );
};

export default Skill;
