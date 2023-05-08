import React from 'react';

import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxHeader, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { header: 'Passed', text: 'Diploma in Full-Stack Development'},
  { header: 'Learned', text: 'Necessary Web Development skills'},
  { header: 'Discovered', text: 'Passion for Front End Development'},
  { header: 'Progressing', text: 'My knowledge in Modern Technologies'},
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Why I Love Coding</SectionTitle>
      <br />
      <SectionText>
      "Success in coding is not about being the best, it's about being consistent. It's about showing up day after day, even when the code doesn't work and the bugs seem impossible to fix. It's about never giving up"
      </SectionText>
      <br />
      <SectionText>
        Developing software has instilled values in me of determination and perseverance like I have never experienced before, and I love it.
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
