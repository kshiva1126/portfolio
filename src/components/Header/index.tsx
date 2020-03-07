import React, { FC } from "react";
import { Divider } from "semantic-ui-react";
import MediaQuery from "react-responsive";
import styled from "@emotion/styled";

import PCHeading from "./PC";
import MobileHeading from "./Mobile";

const Sticky = styled.div`
  position: sticky;
  width: 100%;
  top: 0;
  bottom: auto;
  z-index: 1;
`;

const Heading: FC = () => {
  return (
    <Sticky>
      <MediaQuery query="(max-width: 799px)">
        <MobileHeading />
      </MediaQuery>
      <MediaQuery query="(min-width: 800px)">
        <PCHeading />
      </MediaQuery>
      <Divider hidden />
    </Sticky>
  );
};

export default Heading;
