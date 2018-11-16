import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout title="Code of Conduct">
      <div className="container my-4">
        <h1 className="text-center mb-2">{frontmatter.title}</h1>
        <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`
