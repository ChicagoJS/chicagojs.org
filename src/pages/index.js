import React from 'react'
import Layout from '../components/Layout'
import './IndexPage.css'
import { checkPropTypes } from 'prop-types'
import jscamplogo from '../images/jscamplogo.svg'
import PropTypes from 'prop-types'

const LANGUAGES = ['GatsbyJS', 'GraphQL', 'React', 'Emotion.sh', 'Node', 'ExpressJs']

const HomePage = () => {
  return (
    <div className="jumbotron jumbotron-fluid index-page-body">
      {/* <div className="container">
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
      </div> */}
      <JSCampBanner />
    </div>
  )
}

const BannerAdImage = ({ imageURL }) => <img src={imageURL} width="400" />

const BannerAdHeadline = ({ text, linkToTickets }) => (
  <p>
    {text} <br />
    Get your tickets <a href={linkToTickets}>here!</a>
  </p>
)

const JSCampBanner = () => {
  return (
    <div className="jscampcontainer">
      <BannerAdImage imageURL={jscamplogo} />
      <div className="headline">
        <BannerAdHeadline
          text="JSCamp 2019 is happening September 14, 2019!"
          linkToTickets="https://ti.to/chicagojs/chicago-js-camp-2019"
        />
      </div>
    </div>
  )
}

const IndexPage = () => (
  <Layout hidePageHeader>
    <HomePage />
  </Layout>
)

BannerAdImage.propTypes = {
  imageURL: PropTypes.string
}

BannerAdHeadline.propTypes = {
  text: PropTypes.string,
  linkToTickets: PropTypes.string
}

export default IndexPage
