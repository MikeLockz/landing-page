import React from 'react'
import Link from 'gatsby-link'
import EmailCaptureForm from '../components/email-capture-form'
import AppHeader from '../components/Header'
import AppFooter from '../components/Footer'
import {
  Hero,
  HeroHeader,
  HeroBody,
  HeroFooter,
  Section,
  Container,
  Columns,
  Column,
  Content,
  Title,
  Subtitle,
} from 'bloomer'

const IndexPage = () => (
  <div>
    <Hero isColor="primary">
      <HeroHeader>
        <AppHeader />
      </HeroHeader>

      <HeroBody>
        <Section style={{ padding: '5rem 0' }}>
          <Container hasTextAlign='left'>
            <Columns >
              <Column>
                <Content>
                  <Title isSize='1' style={{ color: '#393E43' }}>ConsenSys</Title>
                  <Subtitle isSize='1'> Design</Subtitle>

                  <p style={{ color: '#407969' }}>We’re a group of product designers, design thinking facilitators, design researchers, and strategists in a remote, flat organization on a highly ambiguous and complex technological front line.</p>
                </Content>
              </Column>
            </Columns>
          </Container>
        </Section>
      </HeroBody>
    </Hero>

    <EmailCaptureForm />

    <AppFooter />
  </div>
)

export default IndexPage
