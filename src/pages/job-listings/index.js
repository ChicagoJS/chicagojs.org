import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import './job-listings.css'

const JobPost = ({ position, company, datePosted, positionType, technologies, neighborhood, perks }) => {
  return (
    <div className={'Post-container'}>
      {/* add a prop for thisborder-left: solid 5px #000000; */}
      <div className={'Post-logo-container'}>
        <img
          className="Post-logo rounded-circle"
          src="data:image/jpeg;base64,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"
          alt="Logo for Company XYZ"
        />
      </div>
      <div className={'Post-info'}>
        <h1 className={'Post-title'}>{position}</h1>
        <div className={'Post-detailsContainer'}>
          <h2 className={'Post-job-title'}>{company}</h2>
          <h2 className={'Post-location'}>{neighborhood}</h2>
        </div>
        <div className={'Post-descriptionContainer'}>
          <p className={'Post-descriptionText'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat , justo at vulputate luctus,
            tellus sapien facilisis nulla, at feugiat nunc dui vel eros. Etiam sit amet ultricies dolor. Aenean semper
            aliquam orci id condimentum. Fusce mattis in velit at placerat.
          </p>
        </div>
      </div>
    </div>
  )
}

const JobListingsPage = ({ data }) => {
  let jobPosts = data.allJobListingsJson.edges
  console.log(jobPosts)
  return (
    <Layout
      title="Jobs"
      titleColor={'#ffffff'}
      background={
        'https://images.unsplash.com/photo-1521901581118-62fa7443883d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
      }>
      <div className={'Job-Contianer'}>
        {jobPosts.map(job => (
          <JobPost {...job.node} />
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query JobListingsQuery {
    allJobListingsJson {
      edges {
        node {
          id
          company
          neighborhood
          position
          datePosted
          position
        }
      }
    }
  }
`

export default JobListingsPage
