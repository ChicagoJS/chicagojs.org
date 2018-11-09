import React from 'react'
import { graphql } from 'gatsby'

export default class JobListingsPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Company:</h1>
        <pre>{JSON.stringify(this.props.data)}</pre>
      </div>
    )
  }
}

export const query = graphql`
  query JobListingsQuery {
    allJobListingsJson {
      edges {
        node {
          id
          neighborhood
          position
          datePosted
          positionType
        }
      }
    }
  }
`
