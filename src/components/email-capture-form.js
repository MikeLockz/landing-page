import React from 'react'
import MailchimpForm from './mailchimp-form'
import {
  Section,
  Container,
  Columns,
  Column,
  Content,
} from 'bloomer'

class EmailCaptureForm extends React.Component {
  render() {
    const { signupMessage, confirmMessage } = this.props

    return (
      <Section>
        <Container>
          <Columns>
            <Column isSize={{ mobile: 11, tablet: 6, desktop: 4 }}>
              <Content>
                <p style={{ color: '#BBBEC2' }}>Sign up below to be the first to access our learnings and resources.</p>
              </Content>
            </Column>
          </Columns>

          <MailchimpForm />

        </Container>
      </Section>
    )
  }
}

export default EmailCaptureForm
