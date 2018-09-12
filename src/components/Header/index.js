import React from 'react'
import Link from 'gatsby-link'
import {
  Container,
} from 'bloomer'
import inner from '../../img/consensys-design-circle-inner.svg'
import middle from '../../img/consensys-design-circle-middle.svg'
import outer from '../../img/consensys-design-circle-outer.svg'
import './style.scss'

const AppHeader = () => (
  <Container>
    <aside id='consensys-circle-container'>
      <div id='circle-wrapper'>
        <img id='consensys-circle-inner-image' className='consensys-circle-image' src={inner} alt='Consensys Design Circle' />
        <img id='consensys-circle-middle-image' className='consensys-circle-image' src={middle} alt='Consensys Design Circle' />
        <img id='consensys-circle-outer-image' className='consensys-circle-image' src={outer} alt='Consensys Design Circle' />
      </div>
    </aside>
  </Container>
)

export default AppHeader
