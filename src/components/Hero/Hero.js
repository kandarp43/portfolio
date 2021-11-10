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
					<SectionHeroTitle>MERN Stack Web Developer</SectionHeroTitle>
				</SectionTitle>
				<SectionText>
					Hii,
					<br /> I am Proficient Javascript Developer for Frontend and Backend
					Technologies,
					<br /> I have good Experiece to work with React and Angular like
					Frontend Technologies and NodeJs as Backend Technology.
				</SectionText>
			</LeftSection>
		</Section>
	</>
)

export default Hero
