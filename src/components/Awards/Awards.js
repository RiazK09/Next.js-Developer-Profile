import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AwardsStyles';

const data = [
  { year: 2012, text: 'Aggregate Award (Second position in the Grade).'},
  { year: 2013, text: 'Obtained Four (4) Distinctions in Matric).', },
  { year: 2016, text: 'Property Studies (Certificate of Merit).', },
  { year: 2017, text: 'Post Graduate Honours Merit Award.', }
];

const Acomplishments = () => (
  <Section>
    <SectionDivider />
    <br />
    <SectionTitle>Awards</SectionTitle>
    <Boxes>
      {data.map((card, index) =>(
        <Box key={index}>
          <BoxNum>{card.year}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
