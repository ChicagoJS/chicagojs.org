import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import './job-listings.css'

const JobPost = ({
  position,
  company,
  logoUrl,
  description,
  datePosted,
  positionType,
  technologies,
  neighborhood,
  perks
}) => {
  return (
    <div className={'Post-container'}>
      <div className={'Post-logo-container'}>
        <img className="Post-logo rounded-circle" src={`${logoUrl}`} alt={`Logo for ${company} `} />
      </div>
      <div className={'Post-info'}>
        <div className={'Post-info-header'}>
          <div className={'Post-info-left'}>
            <h1 className={'Post-title'}>{position}</h1>
            <div className={'Post-sub-info'}>
              <h2 className={'Post-job-title'}>{company}</h2>
              <h2 className={'Post-location'}>{neighborhood}</h2>
            </div>
          </div>
          <div className={'Post-info-right'}>
            <h1 style={{ fontSize: '1em' }}>{datePosted}</h1>
          </div>
        </div>
        <div className={'Post-descriptionContainer'}>
          <p className={'Post-descriptionText'}>{description}</p>
        </div>
      </div>
    </div>
  )
}

const JobListingsPage = ({ data }) => {
  let jobPosts = data.allJobListingsJson.edges
  return (
    <Layout
      title="Jobs"
      titleColor={'#ffffff'}
      background={
        'https://images.unsplash.com/photo-1521901581118-62fa7443883d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
      }>
      <div className={'container Job-Contianer'}>
        <div className={'row'}>
          <div className={'col-md-10 col-sm-2 mx-auto Job-Contianer-title'}>
            <h1>Jobs in Chicago</h1>
          </div>
        </div>
        <div className={'row'}>
          <div className={'col-md-10 col-sm-2 mx-auto'}>
            {jobPosts.map(job => (
              <JobPost {...job.node} />
            ))}
          </div>
        </div>
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
          description
          logoUrl
        }
      }
    }
  }
`

export default JobListingsPage
