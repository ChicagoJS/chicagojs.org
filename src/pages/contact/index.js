import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash.get'
import Layout from '../../components/Layout'

export default class ContactPage extends React.Component {
  render() {
    return (
      <Layout>
        <iframe
          className="airtable-embed airtable-dynamic-height"
          src="https://airtable.com/embed/shrDNN4xSjPF1L8nN?backgroundColor=red"
          frameborder="0"
          onmousewheel=""
          width="100%"
          style={{ background: 'transparent', height: '90vh' }}
        />
        {/* <div className="container">
          <p className="lead">
            Contact us at <a href="mailto:info@chicagojs.org">info@chicagojs.org</a>
          </p>
        </div> */}
      </Layout>
    )
  }
}
