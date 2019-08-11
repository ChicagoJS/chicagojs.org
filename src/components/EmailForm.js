import React from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import './EmailForm.css'

export default class EmailForm extends React.Component {
  state = {
    email: ''
  }

  _handleSubmit = e => {
    e.preventDefault() // prevent the page from refreshing
    const { email } = this.state
    addToMailchimp(email) // listFields are optional if you are only capturing the email address.
      .then(data => {
        if (data.result == 'error') {
          if (data.msg.includes('already subscribed')) {
            // mailchimp gives an annoying response in this case, so provide custom response
            alert('Already subscribed to the mailing list!')
          } else {
            alert(data.msg)
          }
        } else {
          alert('Successfully added to the mailing list!')
          this.setState({ email: '' }) // reset to empty string on successful register
        }
      })
  }

  render() {
    return (
      <form className="email-form" onSubmit={e => this._handleSubmit(e)}>
        <span className="list-inline-item mb-2"> Join our mailing list! </span>
        <div>
          <label>
            <input
              className="email-text-box"
              type="email"
              placeholder="Enter your email address"
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}
            />
          </label>
          <input type="submit" value="Submit" />
        </div>
      </form>
    )
  }
}
