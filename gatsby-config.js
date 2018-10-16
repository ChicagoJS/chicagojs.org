'use strict'

module.exports = {
  siteMetadata: {
    title: 'ChicagoJS'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images'
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: []
      }
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint:
          'https://chicagojsconf.us16.list-manage.com/subscribe/post?u=55c1be8b418eb495e19ef9e2e&amp;id=52a92821ce'
      }
    },
    'gatsby-plugin-netlify' // make sure to keep it last in the array
  ]
}
