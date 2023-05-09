import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";


const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hey there! <br /> I'm Joe Playdon.
      </SectionTitle>
      <SectionText>
        I'm a freshly qualified Junior Software Developer, looking for a position in a forward-thinking business that I can progress with and provide value.
      </SectionText>
      <br />
      <SectionText>
        Scroll down to read more!
      </SectionText>
    </LeftSection>
  </Section>
);

export default Hero;
