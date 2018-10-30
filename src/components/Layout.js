import React from 'react'
import Helmet from 'react-helmet'
import MailingListForm from './MailingListForm'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="ChicagoJS" />
    <div>{children}</div>
    <div>
      <MailingListForm />
    </div>
  </div>
)

export default TemplateWrapper
