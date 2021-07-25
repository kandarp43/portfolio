import React from 'react'
import Image from 'next/image'
import {
  Section,
  SectionDivider,
  SectionTitle,
} from '../../styles/GlobalComponents'
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles'

const Acomplishments = () => (
  <Section>
    <SectionTitle>Certificates</SectionTitle>
    <Boxes>
      <Image src='/reactjs.jpg' height='400' width='400' alt='' />
      <Image src='/angular.png' height='400' width='400' alt='' />
    </Boxes>
    <SectionDivider />
  </Section>
)

export default Acomplishments
