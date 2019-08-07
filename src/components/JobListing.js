import React from 'react'
import PropType from 'prop-types'
import fetchJsonp from 'fetch-jsonp'
import './JobListing.css'

class JobListing extends React.Component {
  _isMounted = false

  state = {} // no state right now?

  componentDidMount() {
    this._isMounted = true

    //fetch the job data using GraphQL here? -> Ask Peter where we'll be getting the data
  }

  componentWillUnmount() {
    this._isMounted = false
  }

  render() {
    const { name } = this.props
    return (
      <li className="media ">
        <b>Testing Job Listing Component {this.props.name}</b>
      </li>
    )
  }
}

// JobListing.propTypes = {

// }

export default JobListing
