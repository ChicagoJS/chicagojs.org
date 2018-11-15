import React from 'react'
import Helmet from 'react-helmet'

export default ({ children, title, className = '' }) => (
  <React.Fragment>
    <Helmet titleTemplate="%s | ChicagoJS" defaultTitle="ChicagoJS">
       <html lang="en" />
       <meta charSet="utf-8" />
       <meta name="viewport" content="initial-scale=1.0, width=device-width" />
       <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous" />
       <title>{title}</title>
    </Helmet>
    <div>{children}</div>
  </React.Fragment>
);
