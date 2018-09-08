import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import 'font-awesome/css/font-awesome.css'
import './all.sass'
import config from '../meta/config'

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
} from 'bloomer'
import AppHeader from '../components/Header'
import AppFooter from '../components/Footer'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <title>{config.siteTitle}</title>

      {/* General tags */}
      <meta name='description' content={config.siteDescription} />
      <meta name='image' content={config.cover} />

      {/* Schema.org tags */}
      <script type='application/ld+json'>
        {JSON.stringify(config.schemaOrgJSONLD)}
      </script>

      {/* OpenGraph tags */}
      <meta property='og:url' content={config.siteUrl} />
      <meta property='og:type' content='website' />
      <meta property='og:title' content={config.siteTitle} />
      <meta property='og:description' content={config.siteDescription} />
      <meta property='og:image' content={config.image} />

      {/* Twitter Card tags */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta
        name='twitter:creator'
        content={config.userTwitter ? config.userTwitter : ''}
      />
      <meta name='twitter:title' content={config.siteTitle} />
      <meta name='twitter:description' content={config.siteDescription} />
      <meta name='twitter:image' content={config.siteImage} />
    </Helmet>

    <Hero isFullHeight isColor="primary">
      <HeroHeader>
        <AppHeader />
      </HeroHeader>

      <HeroBody>{children()}</HeroBody>

      <HeroFooter>
        <Container>
          <Tabs hasTextAlign='center'>
            <TabList>
              <Tab>
                <TabLink>website.com</TabLink>
              </Tab>
            </TabList>
          </Tabs>
        </Container>
      </HeroFooter>
    </Hero>
    <AppFooter />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
