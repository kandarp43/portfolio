import React from 'react'

import {
  Section,
  SectionHeroTitle,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents'
import Button from '../../styles/GlobalComponents/Button'
import { LeftSection } from './HeroStyles'

const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello
          <br />
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          I'm Kandarp Dangi
          <SectionHeroTitle>Fullstack web developer</SectionHeroTitle>
        </SectionTitle>
        <SectionText>
          I can say that i am the best javaScript Developer that you have ever
          met
        </SectionText>
      </LeftSection>
    </Section>
  </>
)

export default Hero
