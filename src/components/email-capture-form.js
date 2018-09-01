import React from 'react'
import MailchimpForm from './mailchimp-form'
import { Columns, Column, Box } from 'bloomer'

class EmailCaptureForm extends React.Component {
  render() {
    const { signupMessage, confirmMessage } = this.props

    return (
      <Columns isCentered>
        <Column isSize="1/3">
          <Box>
            <MailchimpForm />
          </Box>
        </Column>
      </Columns>
    )
  }
}

export default EmailCaptureForm
