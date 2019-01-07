import React from 'react'
import Layout from '../../components/Layout'
import { graphql } from 'gatsby'
import './job-post.css'

const JobPostPage = ({ data }) => {
  console.log(data)
  return (
    <Layout
      title={`Platform Engineer @ Draftbit `}
      titleColor={'#ffffff'}
      background={
        'https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
      }>
      <div className="container my-4">
        <div className="blog-post-content">
          <h1>{data.node.postID}</h1>
          <h2>Location</h2>
          <p>Description</p>
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
        }
      }
    }
  }
`

export default JobPostPage
