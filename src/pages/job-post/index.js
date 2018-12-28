import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import './job-post.css'

const JobPostPage = ({ data }) => {
  let postID = window.location.search.split('=')
  console.log(data)
  console.log(postID[1])
  return (
    <Layout
      title={`Platform Engineer @ Draftbit `}
      titleColor={'#ffffff'}
      background={
        'https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
      }>
      <div className="container my-4">
        <div className="blog-post-content">
          <h1>Test</h1>
          <h2>Location</h2>
          <p>Description</p>
        </div>
      </div>
    </Layout>
  )
}

// export const query = graphql`
//   query JobListingsQuery {
//     allJobListingsJson {
//       edges {
//         node {
//           postID
//           company
//           neighborhood
//           position
//           datePosted
//           technologies
//           description
//           logoUrl
//         }
//       }
//     }
//   }
// `

export default JobPostPage
