import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";

const SuccessMessage = () => (
  <Section>
    <SectionTitle>Thank you!</SectionTitle>
    <SectionText>Your message has been sent successfully.</SectionText>
  </Section>
);

export default SuccessMessage;
