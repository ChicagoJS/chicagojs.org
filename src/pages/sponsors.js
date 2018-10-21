import React from 'react'
import { Helmet } from "react-helmet"
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'

export default class sponsors extends React.Component {
  render() {
    return (
      <div className="page-container">
        <Helmet>
            <title>Sponsors</title>
            <meta name="description" content="Sponsors for ChicagoJS" />
	          <meta name="keywords" content="Sponosors, ChicagoJS, Javascript,Js" />
            <meta name="author" content="Sebastian Kurpiel" />
            {/* Bootstrap style sheet */}
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></link>    
        </Helmet>
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <div class="row justify-content-center">
                    <h1 class="heading">Sponsors</h1>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
