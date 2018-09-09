import React from 'react'
import { Footer, Container, Content, Columns, Column, Icon, Tabs, TabList, Tab, TabLink } from 'bloomer'
import FontAwesome from 'react-fontawesome'
import '../../css/font-awesome.min.css'

const AppFooter = () => (
  <Footer id='footer'>
    <Container>
      <p hasTextAlign='left'>
        © 2018 Consensys, Inc.
      </p>
      <p hasTextAlign='right'>
          <a href='https://twitter.com/ConsensysDesign' title='ConsenSys Product Design Circle on Twitter'><i className='fa fa-twitter' aria-hidden='true'></i></a> |
          <a href='https://www.instagram.com/consensysdesign/' title='ConsenSys Product Design Circle on Instagram'><i className='fa fa-instagram' aria-hidden='true'></i></a>
      </p>
    </Container>
  </Footer>
)

export default AppFooter
