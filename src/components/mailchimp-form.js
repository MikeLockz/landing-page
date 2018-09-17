import React from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import {
  Columns,
  Column,
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

  _handleEmailChange({ value }) {
    this.setState({
      email: value,
      status: 'validating',
    })
    console.log('email: ', value)
  }

  _handleSubmit = e => {
    e.preventDefault()

    console.log('submitting email ' + this.state.email + ' to mailchip')
    this.setState({
      status: 'submitting',
    })

    addToMailchimp(this.state.email)
      .then(data => {
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
      })
  }

  render() {
    const status = this.state.status
    const msg = this.state.msg

    return (
      <form onSubmit={e => this._handleSubmit(e)}>
      <Columns>
        <Column isSize={{ mobile: 12, tablet: 9, desktop: 8 }}>
          <Field>
            <Control style={{ display: 'flex', flexGrow: '1' }}>
              <Input
                onChange={({ target }) => this._handleEmailChange(target)}
                type='email'
                placeholder='name@example.com'
                name='email'
                id='email'
                style={{ minWidth: '350px' }}
              />
            </Control>
          </Field>
        </Column>

        <Column isSize={{ mobile: 12, tablet: 3, desktop: 2 }}>
          <Field>
            <Control>
              <Button isColor='dark' type='submit' className='is-flex-mobile' style={{  }}>
                Join the List
              </Button>
            </Control>
          </Field>
        </Column>
      </Columns>

      <Columns>
        <Column>
          <p className={` ${this.state.status} `}>{msg}</p>
        </Column>
      </Columns>
      </form>
    )
  }
}
