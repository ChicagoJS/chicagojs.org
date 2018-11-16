import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash.get'
import Layout from '../../components/Layout'

export default class JobDetailsPage extends React.Component {
  render() {
    // Doesn't include data field
    console.log(this.props)
    return <Layout title="Job Details" />
  }
}

// Returns GraphQL Error Unknown field `allJobDetailsJson` on type `Query`
export const query = graphql`
  query JobDetailsQuery {
    allJobDetailsJson {
      edges {
        node {
          company
          companySite
          position
          datePosted
          location
          positionType
          summary
          responsibilities
          qualifications
          applicationLink
        }
      }
    }
  }
`
