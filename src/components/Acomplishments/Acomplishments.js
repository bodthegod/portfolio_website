import React from "react";

import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxHeader, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
  { header: "Passed", text: "Diploma in Full-Stack Development" },
  { header: "Learned", text: "Software Engineering Methodologies" },
  { header: "Landed", text: "Dream Front-End Role" },
  { header: "Progressing", text: "Front-End Frameworks and Technologies" },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Why I Love Coding...</SectionTitle>
    <br />
    <SectionText>
      "Success in coding is not about being the best, it's about being
      consistent. It's about showing up day after day, even when the code
      doesn't work and the bugs seem impossible to fix. It's about never giving
      up"
    </SectionText>
    <br />
    <SectionText>
      I have always had a passion for designing things, this being drawing,
      creating digital designs in school, and even mockup websites in college.
      Until I found coding, I could never express this creativity that has
      lurked within me and the more tools and technologies I discover, the more
      creativity I can express.
    </SectionText>
    <br />
    <SectionText>
      Coding truly is something that I am passionate about, and it has taken
      until studying it to truly understand myself as a human. This may sound
      strange, but it is honest and the coding community as a whole is great to
      be a part of.
    </SectionText>
    <br />
    <SectionText>
      Whoever may be reading this, I do truly appreciate you listening to my
      story, and I hope you feel the same passion I do!
    </SectionText>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxHeader>{card.header}</BoxHeader>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
