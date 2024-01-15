import React from "react";
import { DiReact, DiDatabase, DiPython } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Tech Stack</SectionTitle>
    <SectionText>
      Throughout my Career, I have gained extensive knowledge and experience
      working with a variety of front-end and back-end technologies in the
      industry. In particular, I have enjoyed combining my passion for design
      with my technical skills by creating aesthetically pleasing designs and
      implementing them in my work and passion projects.{" "}
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience With <br />
            ReactJS, TypeScript
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiPython size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience With <br />
            Python, PHP, SQL Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiDatabase size="3rem" />
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
