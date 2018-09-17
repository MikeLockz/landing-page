  import React from 'react'
import Link from 'gatsby-link'
import {
  Footer,
  Container,
  Columns,
  Column,
  Content,
  Icon,
} from 'bloomer'
import '../../css/font-awesome.min.css'

const AppFooter = () => (
  <Footer id='footer' style={{ backgroundColor: 'inherit' }}>
    <Container>
      <Columns>
        <Column>
          <Container style={{ borderTop: 'solid 1px #33383E', color: '#BBBEC2', paddingTop: '21px', paddingBottom: '14px' }}>
            <Content>
              <Columns>
                <Column>
                  © 2018 Consensys, Inc. | <Link to="privacy-policy" title="ConsenSys Privacy Policy">Privacy Policy</Link>
                </Column>
                <Column style={{ textAlign: 'right' }}>
                  <a href="https://twitter.com/ConsensysDesign" title='ConsenSys Product Design Circle on Twitter'>
                      <Icon className='fa fa-twitter' />
                  </a>
                  <a href="https://www.instagram.com/consensysdesign/" title='ConsenSys Product Design Circle on Instagram'>
                      <Icon className='fa fa-instagram' />
                  </a>
                </Column>
              </Columns>
            </Content>
          </Container>
        </Column>
      </Columns>
    </Container>
  </Footer>
)

export default AppFooter
