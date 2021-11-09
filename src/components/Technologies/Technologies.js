import React from 'react'
import {
	DiAngularSimple,
	DiDotnet,
	DiNodejs,
	DiReact,
	DiZend,
} from 'react-icons/di'
import {
	Section,
	SectionDivider,
	SectionText,
	SectionTitle,
} from '../../styles/GlobalComponents'
import {
	List,
	ListContainer,
	ListItem,
	ListParagraph,
	ListTitle,
} from './TechnologiesStyles'

const Technologies = () => (
	<Section id='tech'>
		<SectionDivider divider />
		<SectionTitle>Technologies</SectionTitle>
		<SectionText>
			{/* eslint-disable-next-line react/no-unescaped-entities */}
			I've worked with a range of technologies in the web development world.
			From Front-end To Back-end.
		</SectionText>
		<List>
			<ListItem>
				<picture>
					<DiReact color='#0d81f4' size='5rem' />
					<DiAngularSimple
						color='#e13831'
						style={{ paddingLeft: '4px' }}
						size='5rem'
					/>
				</picture>
				<ListContainer>
					<ListTitle titleType='frontend'>Front-End</ListTitle>
					<ListParagraph>
						Experiece with <br />
						React.js and Angular
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<picture>
					<DiNodejs color='#54ff58' size='5rem' />
				</picture>
				<ListContainer>
					<ListTitle titleType='backend'>Back-End</ListTitle>
					<ListParagraph>
						Experience with <br />
						Node Js
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<picture>
					<DiZend color='#93f' size='5rem' />
				</picture>
				<ListContainer>
					<ListTitle titleType='uiux'>UI/UX</ListTitle>
					<ListParagraph>
						Experience with <br />
						tools like Figma and adobe XD
					</ListParagraph>
				</ListContainer>
			</ListItem>
		</List>
		<SectionDivider colorAlt />
	</Section>
)

export default Technologies
