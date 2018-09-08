import React from 'react'
import Link from 'gatsby-link'
import { Container, Title, Box } from 'bloomer'
import EmailCaptureForm from '../components/email-capture-form'

const IndexPage = () => (
  <Container hasTextAlign="centered">

    <Title isSize="1">ConsenSys Design</Title>
    <Title isSize="3"><em>Launching October 2018</em></Title>

    <EmailCaptureForm />

  </Container>
)

export default IndexPage
