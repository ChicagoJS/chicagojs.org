import React from 'react'
import Layout from '../components/Layout'
import './IndexPage.css'

const LANGUAGES = ['GatsbyJS', 'GraphQL', 'React', 'Emotion.sh', 'Node', 'ExpressJs']

const IndexPage = () => (
  <Layout hidePageHeader>
    <div className="jumbotron jumbotron-fluid index-page-body">
      <div className="container">
        <h1 className="display-4">ChicagoJS</h1>
        <p className="lead">
          ChicagoJS is currently under development. If you'd like to help,{' '}
          <a href="https://github.com/chicagojs/chicagojs.org">open a PR!</a>
        </p>
        <p>If you want to learn any of these technologies, please check out our issues page on Github!</p>
        <ul>
          {LANGUAGES.map(l => (
            <li key={`lang-${l}`}>{l}</li>
          ))}
        </ul>
      </div>
    </div>
  </Layout>
)

export default IndexPage
