import React from 'react';
import { DiReact, DiDatabase, DiPython } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider/>
    <br/>
    <SectionTitle>Tech Stack</SectionTitle>
    <SectionText>I've worked with mutliple technologies with web development. I studied a Diploma in
       Full-Stack Software Development and I enjoy creating Front-End applications!</SectionText>
       <List>
        <ListItem>
          <DiReact size="3rem"/>
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>
              Experience With <br />
              React.js
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiPython size="3rem"/>
          <ListContainer>
            <ListTitle>Back-End</ListTitle>
            <ListParagraph>
              Experience With <br />
              Python and Databases
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiDatabase size="3rem"/>
          <ListContainer>
            <ListTitle>Full-Stack</ListTitle>
            <ListParagraph>
              Experience With <br />
              API Integration
            </ListParagraph>
          </ListContainer>
        </ListItem>
       </List>
  </Section>
);

export default Technologies;
