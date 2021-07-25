import Link from 'next/link'
import React from 'react'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'

import { Container, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles'

const Header = () => (
  <Container>
    <Div2>
      <li>
        <Link href='/' passHref>
          <NavLink>
            <span>Portfolio</span>
          </NavLink>
        </Link>
      </li>
      <li>
        <Link href='#projects' passHref>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#tech' passHref>
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <NavLink>
          <Link href='#about' passHref>
            <NavLink>About</NavLink>
          </Link>
        </NavLink>
      </li>
    </Div2>
    <Div3>
      <SocialIcons target='_blank' href='https://github.com/kandarp43/'>
        <AiFillGithub size='3rem' />
      </SocialIcons>
      <SocialIcons
        target='_blank'
        href='https://www.linkedin.com/in/kandarp43/'
      >
        <AiFillLinkedin size='3rem' />
      </SocialIcons>
      <SocialIcons target='_blank' href='https://www.instagram.com/kandarp.js/'>
        <AiFillInstagram size='3rem' />
      </SocialIcons>
    </Div3>
  </Container>
)

export default Header
