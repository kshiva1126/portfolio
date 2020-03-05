import React, { FC } from "react";
import { Icon } from "semantic-ui-react";
import Container from "./style";

const PCHeading: FC = () => {
  return (
    <Container>
      <nav>
        <div className="inner flex">
          <div className="logo">
            <a href="#">kshiva1126's portfolio</a>
          </div>
          <div className="menu">
            <ul className="flex">
              <li>
                <a href="#about">
                  <Icon name="user outline" />
                  About
                </a>
              </li>
              <li>
                <a href="#skill">
                  <Icon name="lightbulb outline" />
                  Skill
                </a>
              </li>
              <li>
                <a href="#works">
                  <Icon name="file alternate outline" />
                  Works
                </a>
              </li>
              <li>
                <a href="#contact">
                  <Icon name="envelope outline" />
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Container>
  );
};

export default PCHeading;
