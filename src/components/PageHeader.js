import React from 'react'
import './PageHeader.css'
import PropType from 'prop-types'
import { isValidUrl } from '../utils'

const PageHeader = props => {
  const generateBackground = background => ({
    background: isValidUrl(background) ? `url(${background})` : background
  })

  return (
    <div className="jumbotron jumbotron-fluid jumbotron" style={generateBackground(props.background)}>
      <div className="container">
        <div className="row justify-content-center">
          <h1 className="heading" style={{ color: props.titleColor }}>
            {props.title}
            {console.log(generateBackground(props.background))}
          </h1>
        </div>
      </div>
    </div>
  )
}

PageHeader.propTypes = {
  background: PropType.string,
  titleColor: PropType.string,
  title: PropType.string.isRequired
}

PageHeader.defaultProps = {
  background: '#ffffff',
  titleColor: '#000000',
  title: 'Default Title'
}
export default PageHeader
