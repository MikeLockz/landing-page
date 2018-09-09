import React from 'react'
import {
  Footer,
  Container,
  Columns,
  Column,
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
      <Columns>
        <Column>
          <Navbar className='is-fixed-bottom' style={{ margin: '0', backgroundColor: 'inherit' }}>
            <Container style={{ borderTop: 'solid 1px #BBBEC2' }}>
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
            </Container>
          </Navbar>
        </Column>
      </Columns>
    </Container>
  </Footer>
)

export default AppFooter
