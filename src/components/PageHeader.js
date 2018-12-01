import React from 'react'
import './PageHeader.css'
import PropType from 'prop-types'
import { isValidUrl } from '../utils'

const PageHeader = ({ background, title, titleColor }) => {
  const generateBackground = background => ({
    background: isValidUrl(background) ? `url(${background})` : background
  })

  return (
    <div className="jumbotron jumbotron-fluid PageHeaderBackground" style={generateBackground(background)}>
      <div className="container">
        <div className="text-center">
          <h1 className="PageHeader" style={{ color: titleColor }}>
            {title}
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
