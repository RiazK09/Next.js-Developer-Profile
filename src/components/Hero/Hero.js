import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection, Img } from "./HeroStyles";
import { userData } from "../../constants/constants";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <div>
        <Img src={userData.avatarUrl} alt="Profile Picture" />
      </div>
      <SectionTitle main center>
        Hello, I'm <br />
        Riaz Karolia
      </SectionTitle>
      <SectionText>
        Full Stack Web Developer. <br />
        Junior Project Manager.{" "}
      </SectionText>
      <Button onClick={() => (window.location = "/about")}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
