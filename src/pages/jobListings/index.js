import React from 'react'
import { Link, graphql } from 'gatsby'

export default class JobListings extends React.Component {
    render() {
        this.props.data;
        console.log(JSON.stringify(this.props));
        return(
            <div>
                <h1>Company:</h1>
            </div>
        );
    }
}

export const query = graphql`
  query ConfigQuery {
    allJobListingsJson {
      edges {
        node {
          company
        }
      }
    }
  }
`