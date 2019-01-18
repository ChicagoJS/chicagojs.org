const path = require('path')
// const jobData = require('./src/data/jobListings.json')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const mdTemplate = path.resolve(`src/templates/mdTemplate.js`)
  // const jobTemplate = path.resolve(`src/templates/job-post/jobTemplate.js`)

  graphql(`
    {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___title] }, limit: 1000) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: mdTemplate,
        context: {}
      })
    })
  })

  // jobData.forEach(({ postID }) => {
  //   const path = `job-post/?postId=${postID}`

  //   createPage({
  //     path,
  //     component: jobTemplate,

  //     context: {
  //       postID
  //     }
  //   })
  // })
}
