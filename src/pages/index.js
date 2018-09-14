import React from 'react'
import Link from 'gatsby-link'
import {
  Section,
  Container,
  Columns,
  Column,
  Content,
  Title,
  Subtitle,
} from 'bloomer'

const IndexPage = () => (
  <Section style={{ padding: '5rem 0' }}>
    <Container hasTextAlign='left'>
      <Columns >
        <Column isSize="2/3">
          <Content>
            <Title isSize='1' style={{ color: '#393E43' }}>ConsenSys</Title>
            <Subtitle isSize='1'> Design</Subtitle>

            <p style={{ color: '#407969' }}>We’re a group of product designers, design thinking facilitators, design researchers, and strategists in a remote, flat organization on a highly ambiguous and complex technological front line.</p>
          </Content>
        </Column>
      </Columns>
    </Container>
  </Section>
)

export default IndexPage
