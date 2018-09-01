import React from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import {
  Field,
  FieldLabel,
  FieldBody,
  Label,
  Control,
  Input,
  Button,
} from 'bloomer'

export default class AppEmail extends React.Component {
  constructor() {
    super()
    this.state = {
      email: '',
      status: '',
      msg: '',
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
      status: 'validating',
    })
    console.log('email: ', value)
  }

  // Note that you need to send an email & optionally, listFields
  // these values can be pulled from React state, form fields,
  // or wherever.  (Personally, I recommend storing in state).
  //
  _handleSubmit = e => {
    e.preventDefault()

    console.log('submitting email ' + this.state.email + ' to mailchip')
    this.setState({
      status: 'submitting',
    })

    addToMailchimp(this.state.email)
      .then(data => {
        // I recommend setting data to React state
        // but you can do whatever you want (including ignoring this `then()` altogether)
        console.log('received: ')
        console.dir(data)

        if (data.result === 'success')
          this.setState({
            msg: 'Thanks! Talk to you soon!',
          })
        else if (data.result === 'error')
          this.setState({
            msg: 'Sorry there was a problem. ' + data.msg,
          })

        this.setState({
          status: 'submitted',
        })
      })
      .catch(() => {
        // unnecessary because Mailchimp only ever
        // returns a 200 status code
        // see below for how to handle errors
      })
  }

  render() {
    const status = this.state.status
    const msg = this.state.msg

    return (
      <div>
        <form onSubmit={e => this._handleSubmit(e)}>
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
                  Sign Up
                </Button>
              </Control>
            </FieldBody>
          </Field>
        </form>

        <p className={` ${this.state.status} `}>{msg}</p>
      </div>
    )
  }
}
