import React from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'

export default class MailingListForm extends React.Component {
  state = {
    email: '',
    mailChimpResult: null,
  }

  _handleSubmit = async event => {
    event.preventDefault()
    const { email } = this.state

    const result = await addToMailchimp(
      email
      // listFields: {}, Optional parameter for other info we want to pass along.
    )

    // Saved to state if we want to show success / error message.
    this.setState({ mailChimpResult: result })
  }

  render() {
    const { email } = this.state
    return (
      <form onSubmit={this._handleSubmit}>
        <label>
          Email:
          <input
            type="text"
            name="email"
            id="mailchimp-input"
            placeholder="Your email address"
            value={email}
            onChange={event => this.setState({ email: event.target.value })}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}
