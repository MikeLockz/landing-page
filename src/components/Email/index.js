import React from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import { Columns, Column, Box, Field, FieldLabel, FieldBody, Label, Control, Input, Button } from 'bloomer'

export default class AppEmail extends React.Component {
  constructor() {
    super()
    this.state = {
      email: '',
    }
  }
  // Since `addToMailchimp` returns a promise, you
  // can handle the response in two different ways:
  _handleEmailChange({ value }) {
    /**
     * Validate User's input first
     */
    this.setState({
      email: value,
    })
    console.log('email: ', value )
  }

  // Note that you need to send an email & optionally, listFields
  // these values can be pulled from React state, form fields,
  // or wherever.  (Personally, I recommend storing in state).
  //
  _handleSubmit = e => {
    e.preventDefault
      console.log('submitting email ' + this.state.email + ' to mailchip')
      addToMailchimp(this.state.email)
      .then(data => {
        // I recommend setting data to React state
        // but you can do whatever you want (including ignoring this `then()` altogether)
        console.log('received: ')
        console.dir( data )
        this.state.submitted = true
      })
      .catch(() => {
        // unnecessary because Mailchimp only ever
        // returns a 200 status code
        // see below for how to handle errors
      })
  }

  render() {
    return (
      <Columns isCentered>
        <Column isSize='1/3'>
          <Box>
            <form onSubmit={({ target }) => this._handleSubmit( target )}>
              <Field isHorizontal>
                <FieldLabel isNormal>
                  <Label>Email</Label>
                </FieldLabel>
                <FieldBody>
                  <Control>
                    <Input
                      onChange={({ target }) => this._handleEmailChange(target)}
                      type="email"
                      placeholder="name@example.com"
                      name="email"
                      id="email"
                    />
                  </Control>

                  <Control>
                    <Button isColor="primary" type="submit">
                      Submit
                    </Button>
                  </Control>
                </FieldBody>
              </Field>
            </form>
          </Box>
        </Column>
      </Columns>
    )
  }
}
