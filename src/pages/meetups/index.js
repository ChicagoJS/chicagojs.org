import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash.get'
import Layout from '../../components/Layout'
import './meetup.css'

const MeetupLink = ({ name, description, urlname }) => (
  <div className="col-sm-6 meetup">
    <div className="card mb-4">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <a href={`https://www.meetup.com/${urlname}`} className="card-link">
          Learn More
        </a>
      </div>
    </div>
  </div>
)

const MeetupsPage = props => {
  const meetups = get(props, 'data.allLocalMeetupsJson.edges', [])
  console.log(meetups)
  console.log(props)
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

export const query = graphql`
  query LocalMeetupsQuery {
    allLocalMeetupsJson {
      edges {
        node {
          name
          description
          urlname
        }
      }
    }
  }
`

export default MeetupsPage
