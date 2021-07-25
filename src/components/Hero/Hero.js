import React from 'react'

import {
  Section,
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
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <p>I'm Kandarp Dangi</p>
          <p style={{ fontSize: '40px' }}>Fullstack web developer</p>
        </SectionTitle>
        <SectionText>
          The purpose of JavaScript Mastery is to help aspiring and established
          developers to take their development skills to the next level and
          build awesome apps.
        </SectionText>
      </LeftSection>
    </Section>
  </>
)

export default Hero
