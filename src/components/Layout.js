import React from 'react'
import Helmet from 'react-helmet'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="ChicagoJS" />
    <div>{children}</div>
  </div>
)

export default TemplateWrapper
