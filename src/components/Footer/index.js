import React from 'react'
import {
  Footer,
  Container,
  Navbar,
  NavbarMenu,
  NavbarStart,
  NavbarEnd,
  NavbarItem,
  Icon,
} from 'bloomer'
import '../../css/font-awesome.min.css'

const AppFooter = () => (
  <Footer id='footer' style={{ backgroundColor: 'inherit' }}>
    <Container>
      <Navbar style={{ borderTop: 'solid 1px #BBBEC2', margin: '0' }}>
        <NavbarMenu>
            <NavbarStart>
                <NavbarItem style={{ color: '#BBBEC2' }}>
                    © 2018 Consensys, Inc.
                </NavbarItem>
            </NavbarStart>
            <NavbarEnd>
                <NavbarItem href="https://twitter.com/ConsensysDesign" isHidden='touch' title='ConsenSys Product Design Circle on Twitter'>
                    <Icon className='fa fa-twitter' style={{ color: '#BBBEC2' }} />
                </NavbarItem>
                <NavbarItem href="https://www.instagram.com/consensysdesign/" isHidden='touch' title='ConsenSys Product Design Circle on Instagram'>
                    <Icon className='fa fa-instagram' style={{ color: '#BBBEC2' }} />
                </NavbarItem>
            </NavbarEnd>
        </NavbarMenu>
      </Navbar>



    </Container>
  </Footer>
)

export default AppFooter
