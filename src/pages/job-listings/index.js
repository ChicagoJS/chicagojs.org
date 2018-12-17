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
      {/* add a prop for thisborder-left: solid 5px #000000; */}
      <div className={'Post-logo-container'}>
        <img className="Post-logo rounded-circle" src={`${logoUrl}`} alt={`Logo for ${company} `} />
      </div>
      <div className={'Post-info'}>
        <h1 className={'Post-title'}>{position}</h1>
        <div className={'Post-detailsContainer'}>
          <h2 className={'Post-job-title'}>{company}</h2>
          <h2 className={'Post-location'}>{neighborhood}</h2>
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
  console.log(jobPosts)
  return (
    <Layout
      title="Jobs"
      titleColor={'#ffffff'}
      background={
        'https://images.unsplash.com/photo-1521901581118-62fa7443883d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
      }>
      <div className={'row'}>
        <div className={'col text-center'}>
          <h1>center</h1>
          <div className={'col-4 mx-auto'}>
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
