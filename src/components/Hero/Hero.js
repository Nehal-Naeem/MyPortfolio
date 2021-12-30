import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
      CS & Business @ UBC | Software Developer @ Campus Lightbox <br />
      Passionate about using technology to create efficency and value for individauls and businesses.
      Looking for new graduate opportunities for this fall.
      </SectionText>
      <Button onClick={() => window.location = '/Resume_NehalNaeem.pdf'}>Resume</Button>
    </LeftSection>
  </Section>
);

export default Hero;