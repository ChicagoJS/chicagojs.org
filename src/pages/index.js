import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import JobListings, {query} from "./jobListings"

export default class IndexPage extends React.Component {
  render() {
    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          textAlign: 'center',
          marginTop: 40
        }}>
        <h1>ChicagoJS Community</h1>
        <span>Coming Soon</span>
        <JobListings data={query}/>
      </div>
    )
  }
}
