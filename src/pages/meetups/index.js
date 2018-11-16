import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash.get'
import Layout from '../../components/Layout'

const MeetupLink = ({ name, description, meetupUrl }) => (
  <div className="col-sm-6">
    <div className="card mb-2" style={{ minHeight: 188 }}>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <a href={meetupUrl} className="card-link">
          Learn More
        </a>
      </div>
    </div>
  </div>
)

export default class MeetupsPage extends React.Component {
  render() {
    const meetups = get(this.props, 'data.allLocalMeetupsJson.edges', [])
    return (
      <Layout title="Local Meetups">
        <div className="container">
          <div className="row">
            {meetups.map(m => (
              <MeetupLink {...m.node} />
            ))}
          </div>
        </div>
      </Layout>
    )
  }
}

export const query = graphql`
  query LocalMeetupsQuery {
    allLocalMeetupsJson {
      edges {
        node {
          name
          description
          meetupUrl
        }
      }
    }
  }
`
