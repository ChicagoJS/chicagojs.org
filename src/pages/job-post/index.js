import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import './job-post.css'

const JobPostPage = ({ data }) => {
  return (
    <Layout
      title="Jobs"
      titleColor={'#ffffff'}
      background={
        'https://images.unsplash.com/photo-1527427337751-fdca2f128ce5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
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

export default JobPostPage
