import React from 'react'
import Head from 'next/head'

import logoIMG from '../assets/logo.ico'
import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>HomePage</title>
      </Head>

      <img src={logoIMG} alt="Logo" />
      <h1>Hello World</h1>
      <p>Test</p>
    </Container>
  )
}

export default Home
