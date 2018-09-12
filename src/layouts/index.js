import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
require('typeface-roboto')
import './all.sass'
import config from '../meta/config'
import siteImage from '../img/consensys-design.png'

import {
  Container,
  Hero,
  HeroHeader,
  HeroBody,
  HeroFooter,
  Tabs,
  TabList,
  Tab,
  TabLink,
  Title,
} from 'bloomer'

import EmailCaptureForm from '../components/email-capture-form'
import AppHeader from '../components/Header'
import AppFooter from '../components/Footer'

const TemplateWrapper = ({ children, location }) => (
  <div>
    <Helmet>
      <title>{config.siteTitle}</title>

      {/* General tags */}
      <meta name='description' content={config.siteDescription} />
      <meta name='image' content={siteImage} />

      {/* Schema.org tags */}
      <script type='application/ld+json'>
        {JSON.stringify(config.schemaOrgJSONLD)}
      </script>

      {/* OpenGraph tags */}
      <meta property='og:url' content={config.siteUrl} />
      <meta property='og:type' content='website' />
      <meta property='og:title' content={config.siteTitle} />
      <meta property='og:description' content={config.siteDescription} />
      <meta property='og:image' content={location.href + siteImage} />

      {/* Twitter Card tags */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta
        name='twitter:creator'
        content={config.userTwitter ? config.userTwitter : ''}
      />
      <meta name='twitter:title' content={config.siteTitle} />
      <meta name='twitter:description' content={config.siteDescription} />
      <meta name='twitter:image' content={siteImage} />
    </Helmet>

    <Hero isColor="primary">
      <HeroHeader>
        <AppHeader />
      </HeroHeader>

      <HeroBody>{children()}</HeroBody>

    </Hero>

    <EmailCaptureForm />

    <AppFooter />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
