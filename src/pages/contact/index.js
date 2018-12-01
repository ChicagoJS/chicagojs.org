import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash.get'
import Layout from '../../components/Layout'

export default class ContactPage extends React.Component {
  render() {
    return (
      <Layout title="Contact Us">
        <div className="container">
          <p className="lead">
            Contact us at <a href="mailto:info@chicagojs.org">info@chicagojs.org</a>
          </p>
        </div>
      </Layout>
    )
  }
}
