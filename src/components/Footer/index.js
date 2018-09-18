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
    <div id='footer-hr' style={{ borderTop: 'solid 1px #33383E' }}></div>
  </Container>

  <Container>
    <Columns className='is-mobile'  style={{ color: '#BBBEC2', paddingTop: '21px', paddingBottom: '14px' }}>
      <Column id="copyright" style={{ flexGrow: '2' }}>
        © 2018 Consensys, Inc. <Link to="privacy-policy" title="ConsenSys Privacy Policy">Privacy Policy</Link>
      </Column>
      <Column id="social-icons" style={{ textAlign: 'right' }} >
        <a href="https://twitter.com/ConsensysDesign" title='ConsenSys Product Design Circle on Twitter'>
            <Icon className='fa fa-twitter' />
        </a>
        <a href="https://www.instagram.com/consensysdesign/" title='ConsenSys Product Design Circle on Instagram'>
            <Icon className='fa fa-instagram' />
        </a>
      </Column>
    </Columns>
  </Container>
</Footer>
)

export default AppFooter
