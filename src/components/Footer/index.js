import React from 'react'
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
          <Container style={{ borderTop: 'solid 1px #BBBEC2', color: '#BBBEC2', paddingTop: '1rem' }}>
            <Content>
              <div className='is-pulled-left'>
                © 2018 Consensys, Inc.
              </div>

              <div className='is-pulled-right'>
                <a href="https://twitter.com/ConsensysDesign" title='ConsenSys Product Design Circle on Twitter'>
                    <Icon className='fa fa-twitter' style={{ color: '#BBBEC2' }} />
                </a>
                <a href="https://www.instagram.com/consensysdesign/" title='ConsenSys Product Design Circle on Instagram'>
                    <Icon className='fa fa-instagram' style={{ color: '#BBBEC2' }} />
                </a>
              </div>
            </Content>
          </Container>
        </Column>
      </Columns>
    </Container>
  </Footer>
)

export default AppFooter
