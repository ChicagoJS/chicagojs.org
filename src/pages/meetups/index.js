import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash.get'
import Layout from '../../components/Layout'
import MeetupCard from '../../components/MeetupCard'

const MeetupsPage = props => {
  const meetups = get(props, 'data.allLocalMeetupsJson.edges', [])
  return (
    <Layout title="Local Meetups">
      <div className="container">
        <div className="row">
          {meetups.map(m => (
            <MeetupCard key={m.node.name.replace(/\s/g, '')} {...m.node} />
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
          category
        }
      }
    }
  }
`

export default MeetupsPage
