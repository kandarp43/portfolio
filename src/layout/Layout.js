import React from 'react'

import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Container } from './LayoutStyles'
import Head from 'next/head'
export const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>kandarp dangi</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta
          name='keywords'
          content='kandarp dangi, web developer portfolio, portfolio, kandarp, react with kandarp '
        />
        <meta
          name='description'
          content=" Hii, I'm Kandarp Dangi and I am a Fullstack web developer"
        />
      </Head>
      <Container>
        <Header />
        <main>{children}</main>
        <Footer />
      </Container>
    </>
  )
}
