import React from 'react'
import Link from 'gatsby-link'
import { Container, Title, Box } from 'bloomer'
import AppEmail from '../components/Email'


const IndexPage = () => (
  <Container hasTextAlign="centered">
    <Title isSize="1">Gatsby + Bulma & Bloomer</Title>
    <Title isSize="3">
      Easy <strong>vertical centering</strong> in <strong>fullscreen</strong>
    </Title>
    <Title isSize="4">Include any content you want, it's always centered</Title>

    <AppEmail></AppEmail>

  </Container>
)

export default IndexPage
