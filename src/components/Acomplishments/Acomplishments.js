import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 7, text: 
    'Countries I\'ve lived in. (Pakistan, Nepal, Sudan, Jordan, Wales, United States and Canada)'},
  { number: 4, text: 'Languages I know (English, Urdu, Arabic and French)', },
  { number: 3, text: 'Github Projects', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Fun Facts</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
