import React from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'

export default class MailingListForm extends React.Component {
  state = {
    email: '',
    firstName: '',
    lastName: '',
    mailChimpResult: null,
  }

  _handleSubmit = async event => {
    event.preventDefault()

    // TODO: Validate inputs
    // TODO: Make only email required
    const { email, firstName, lastName } = this.state
    const listFields = { firstName, lastName }

    const result = await addToMailchimp(email, listFields)

    // Saved to state if we want to show success / error message.
    this.setState({ mailChimpResult: result })
  }

  render() {
    const { email, firstName, lastName } = this.state
    return (
      <form onSubmit={this._handleSubmit}>
        {/* E-mail */}
        <label>
          Email:
          <input
            type="text"
            name="email"
            id="mailchimp-email"
            placeholder="Your email address"
            value={email}
            onChange={event => this.setState({ email: event.target.value })}
          />
        </label>
        {/* First Name */}
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            id="mailchimp-firstName"
            placeholder="Your First Name"
            value={firstName}
            onChange={event => this.setState({ firstName: event.target.value })}
          />
        </label>
        {/* Last Name */}
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            id="mailchimp-lastName"
            placeholder="Your Last Name"
            value={lastName}
            onChange={event => this.setState({ lastName: event.target.value })}
          />
        </label>
        {/* Submit */}
        <input type="submit" value="Submit" />
      </form>
    )
  }
}
