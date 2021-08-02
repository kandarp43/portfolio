import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'

import React from 'react'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'

import { Container, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles'
const Header = () => {
  const route = useRouter()

  const activeTab = (path) => {
    if (path === route.pathname) {
      return 'active-link'
    }
  }
  return (
    <Container>
      <Div2 mobileNav={false}>
        <li className={activeTab('')}>
          <Link href='/' passHref>
            <NavLink>
              <span>Portfolio</span>
            </NavLink>
          </Link>
        </li>
        <li className={activeTab('/#projects')}>
          <Link href='#projects' passHref>
            <NavLink>Projects</NavLink>
          </Link>
        </li>
        <li className={activeTab('/#tech')}>
          <Link href='#tech' passHref>
            <NavLink>Technologies</NavLink>
          </Link>
        </li>
        {/* <li>
        <NavLink>
          <Link href='#about' passHref>
            <NavLink>About</NavLink>
          </Link>
        </NavLink>
      </li> */}
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
        <SocialIcons
          target='_blank'
          href='https://www.instagram.com/kandarp.js/'
        >
          <AiFillInstagram size='3rem' />
        </SocialIcons>
      </Div3>
    </Container>
  )
}

export default Header
