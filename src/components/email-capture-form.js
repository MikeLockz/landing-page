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
            <Column isSize='1/3'>
              <Content>
                <p style={{ color: '#BBBEC2' }}>Sign up below to be the first to access our learnings and resources.</p>
              </Content>

              <MailchimpForm />
            </Column>
          </Columns>
      </Container>
      </Section>
    )
  }
}

export default EmailCaptureForm
