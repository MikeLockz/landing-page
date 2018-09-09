import React from 'react'
import Link from 'gatsby-link'
import {
  Container,
} from 'bloomer'
import circle from '../../img/consensys-design-circle.svg'
import './style.css'

const AppHeader = () => (
  <Container>
    <img id='consensys-circle' src={circle} alt='Consensys Design Circle' />
  </Container>
)

export default AppHeader
