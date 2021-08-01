import Theme from '../src/styles/theme'
import Head from 'next/head'
export default function App({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <Head>
          <title>kandarp dangi</title>
          <meta
            name='google-site-verification'
            content='xnTHKAVXj1JFc8zJaxliVC0zV1Zr_0E8WxO_S1DUR8k'
          />
          <meta
            name='viewport'
            content='initial-scale=1.0, width=device-width'
          />
          <meta author='kandarp dangi' />
          <meta
            name='keywords'
            content='kandarp dangi,kandarpdangi.in, web developer portfolio, portfolio, kandarp dangi portfolio,kandarpdangi, react with kandarp '
          />
          <meta
            name='description'
            content=" Hii, I'm Kandarp Dangi and I am a Fullstack web developer"
          />
        </Head>
        <Component {...pageProps} />
      </Theme>
    </>
  )
}
