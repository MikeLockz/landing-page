import React from 'react'
import Link from 'gatsby-link'
import { Container, Tabs, TabList, Tab, TabLink } from 'bloomer'
import circle from '../../img/consensys-design-circle.svg'
import './style.css'

const AppHeader = () => (
  <Container>
    <Tabs hasTextAlign='centered'>
      <TabList>
        <img id='consensys-circle' src={circle} alt='Consensys Design Circle' />
      </TabList>
    </Tabs>
  </Container>
)

export default AppHeader
