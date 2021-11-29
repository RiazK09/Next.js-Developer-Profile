import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
  SectionDivider,
} from "../../styles/GlobalComponents";
import { Block, Span } from "./BlockquoteStyles";

const Blockquote = () => (
  <Section>
    <SectionDivider />
    <br />
    <SectionTitle>Quotes</SectionTitle>
    <br />
    <SectionText>
      <Block>
        <p>
          Today I will do what others won't, so tomorrow I can accomplish what others can't.
          <Span>- Jerry Rice</Span>
        </p>
      </Block>
    </SectionText>
  </Section>
);

export default Blockquote;
