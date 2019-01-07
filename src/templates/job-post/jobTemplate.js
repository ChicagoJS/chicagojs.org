import React from 'react'
import Layout from '../../components/Layout'
import { graphql, Link } from 'gatsby'
import { renderTechIconCorrectUrl } from '../../utils/index'
import './job-post.css'

const JobPostPage = ({ data }) => {
  let jobData = data.allJobListingsJson.edges[0].node
  return (
    <Layout
      title={`${jobData.position} @ ${jobData.company} `}
      titleColor={'#ffffff'}
      background={
        'https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
      }>
      <div className="container my-4">
        <div className="blog-post-content">
          <h2>Position: {jobData.position}</h2>
          <h2>Location: {jobData.neighborhood}</h2>
          <ul className="list-unstyled list-inline">
            <h4>Tech:</h4>
            {jobData.technologies.map(tech => (
              <img
                width="20"
                height="20"
                className="rounded mr-3"
                src={renderTechIconCorrectUrl(tech)}
                alt={`Logo for ${tech}`}
              />
            ))}
          </ul>
          <ul className="list-unstyled list-inline">
            <h4>Benefits:</h4>
            {jobData.benefits.map(benefits => (
              <span>{benefits}, </span>
            ))}
          </ul>
          <p>{jobData.description}</p>
          <a target="_blank" className="btn btn-primary" href={`${jobData.applyUrl}`}>
            Apply!
          </a>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query JobPostQuery($postID: String) {
    allJobListingsJson(filter: { postID: { eq: $postID } }) {
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
          applyUrl
          benefits
        }
      }
    }
  }
`

export default JobPostPage
