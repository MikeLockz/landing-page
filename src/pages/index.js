import React from 'react'
import Link from 'gatsby-link'
import { Container, Title, Box } from 'bloomer'
import AppEmail from '../components/Email'


const IndexPage = () => (
  <Container hasTextAlign="centered">
    <Title isSize="1">Landing Page</Title>
    <Title isSize="3"><em>Launching October 2018</em></Title>

    <AppEmail></AppEmail>

  </Container>
)

export default IndexPage
