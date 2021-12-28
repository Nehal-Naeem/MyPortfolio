import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { LinkContainer, Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="technologies">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      Primarily worked with web development technologies like Node.js, React, MongoDB. Some exposure to SQL, C++
      and Java through coursework.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <LinkContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js 
          </ListParagraph>
        </LinkContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <LinkContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node and Databases 
          </ListParagraph>
        </LinkContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
