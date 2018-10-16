import React from 'react'
import Helmet from 'react-helmet'
import MailingListForm from './MailingListForm'

import './all.sass'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Home | ChicagoJS" />
    <div>{children}</div>
    <div>
      <MailingListForm />
    </div>
  </div>
)

export default TemplateWrapper
