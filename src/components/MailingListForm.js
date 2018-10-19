import React from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'

class MailingListForm extends React.Component {
  state = {
    email: '',
    firstName: '',
    lastName: '',
    mailChimpResult: null
  }

  _handleSubmit = async event => {
    event.preventDefault()

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
        <h3>Sign up to our mailing list!</h3>
        {/* E-mail */}
        <label>
          Email:
          <input
            type="email"
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

export default MailingListForm
