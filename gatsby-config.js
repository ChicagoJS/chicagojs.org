'use strict'

module.exports = {
  siteMetadata: {
    title: 'ChicagoJS'
  },
  plugins: [
    {
      resolve: 'gatsby-source-airtable',
      options: {
        apiKey: 'keyR9VE3dbkxbTw1f',
        baseId: 'appeHKtu4YMHmwLg2',
        tables: [
          {
            baseId: `appeHKtu4YMHmwLg2`,
            tableName: `Test`
          }
        ]
      }
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
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
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`
      }
    },
    'gatsby-plugin-netlify' // make sure to keep it last in the array
  ]
}
