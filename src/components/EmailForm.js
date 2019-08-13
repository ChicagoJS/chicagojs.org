import React from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import './EmailForm.css'

export default class EmailForm extends React.Component {
  state = {
    email: ''
  }

  _handleSubmit = e => {
    e.preventDefault()
    const { email } = this.state
    addToMailchimp(email).then(data => {
      if (data.result == 'error') {
        if (data.msg.includes('already subscribed')) {
          alert('Already subscribed to the mailing list!')
        } else {
          alert(data.msg)
        }
      } else {
        alert('Successfully added to the mailing list!')
        this.setState({ email: '' })
      }
    })
  }

  render() {
    return (
      <form className="email-form" onSubmit={e => this._handleSubmit(e)}>
        <span className="list-inline-item mb-2"> Join our mailing list! </span>
        <div>
          <label className="email-form-input">
            <input
              className="form-control"
              type="email"
              placeholder="Enter your email address"
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}
            />
          </label>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    )
  }
}
