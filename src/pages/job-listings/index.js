import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import Layout from '../../components/Layout'
import { renderTechIconCorrectUrl } from '../../utils/index'
import './job-listings.css'

const JobPost = ({ postID, position, company, logoUrl, description, datePosted, technologies, neighborhood }) => {
  let date = new Date(datePosted)
  let convertedDate = date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear()
  return (
    <li className="media mb-4 p-2">
      {!logoUrl ? (
        <div className="image-container ml-3" />
      ) : (
        <img width="80" height="80" className="rounded mr-3" src={logoUrl} alt={`Logo for ${company}`} />
      )}
      <div className="media-body">
        <div className="d-flex flex-row justify-content-between">
          <h5 className="mt-0 mb-1">{position}</h5>
          <span>{convertedDate}</span>
        </div>
        <div className="d-flex flex-row justify-content-between">
          <ul className="list-unstyled list-inline">
            <li className="list-inline-item font-weight-bold">
              <i className="fas fa-briefcase" /> {company}
            </li>
            <li className="list-inline-item font-weight-bold">
              <i className="fas fa-map-pin" /> {neighborhood}
            </li>
          </ul>
          <Link className="btn btn-secondary" to={`/job-post/${postID}`}>
            Learn More
          </Link>
        </div>
        <div>
          <ul className="list-unstyled list-inline-item">
            {technologies.map(tech => (
              <li className="list-inline-item">
                <img
                  width="20"
                  height="20"
                  className="rounded mr-2 d-inline-block"
                  src={renderTechIconCorrectUrl(tech)}
                  alt={`Logo for ${tech}`}
                />
              </li>
            ))}
          </ul>
        </div>
        {description}
      </div>
    </li>
  )
}

const JobListingsPage = ({ data }) => {
  let jobPosts = data.allJobListingsJson.edges
  return (
    <Layout
      title="Jobs in Chicago"
      titleColor={'#ffffff'}
      background={
        'https://images.unsplash.com/photo-1521901581118-62fa7443883d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
      }>
      <div className={'row'}>
        <div className={'col-md-10 col-sm-2 mx-auto'}>
          <ul className="list-unstyled">
            {jobPosts.map(job => (
              <JobPost {...job.node} />
            ))}
          </ul>
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
          postID
          company
          neighborhood
          position
          datePosted
          technologies
          description
          logoUrl
        }
      }
    }
  }
`

export default JobListingsPage
