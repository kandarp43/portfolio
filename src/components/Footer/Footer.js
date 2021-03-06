import React from 'react'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'

import { SocialIcons } from '../Header/HeaderStyles'
import {
	CompanyContainer,
	FooterWrapper,
	LinkColumn,
	LinkItem,
	LinkList,
	LinkTitle,
	Slogan,
	SloganAuther,
	SocialContainer,
	SocialIconsContainer,
} from './FooterStyles'

const Footer = () => {
	return (
		<FooterWrapper>
			<LinkList>
				<LinkColumn>
					<LinkTitle>Call</LinkTitle>
					<LinkItem href='tel:7778937211'>+91 7778937211</LinkItem>
				</LinkColumn>
				<LinkColumn>
					<LinkTitle>Email</LinkTitle>
					<LinkItem href='mailto:kandarpdangi@gmail.com'>
						kandarpdangi@gmail.com
					</LinkItem>
				</LinkColumn>
			</LinkList>
			<SocialIconsContainer>
				<CompanyContainer>
					<Slogan>
						Innovation comes from a special work called {" 'Practice' "}.<br />
						<SloganAuther> -kandarp</SloganAuther>
					</Slogan>
				</CompanyContainer>
				<SocialContainer>
					<SocialIcons href='https://github.com/kandarp43/'>
						<AiFillGithub size='3rem' />
					</SocialIcons>
					<SocialIcons href='https://www.linkedin.com/in/kandarp43/'>
						<AiFillLinkedin size='3rem' />
					</SocialIcons>
					<SocialIcons href='https://www.instagram.com/kandarp.js/'>
						<AiFillInstagram size='3rem' />
					</SocialIcons>
				</SocialContainer>
			</SocialIconsContainer>
		</FooterWrapper>
	)
}

export default Footer
