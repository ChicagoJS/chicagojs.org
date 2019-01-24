import React from 'react'
import './PageHeader.css'
import PropType from 'prop-types'
import { isValidUrl } from '../utils'

const PageHeader = ({ background, title, titleColor, gradient }) => {
  const generateBackground = background => ({
    background: isValidUrl(background)
      ? `linear-gradient(to right bottom, ${gradient[0]}, ${gradient[1]}), url(${background})`
      : background
  })

  if (!title) {
    return null
  } else {
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
}

PageHeader.propTypes = {
  background: PropType.string,
  titleColor: PropType.string,
  title: PropType.string,
  gradient: PropType.array
}

PageHeader.defaultProps = {
  background: '#ffffff',
  titleColor: '#000000',
  gradient: ['rgba(0,0,0,.4)', 'rgba(0,0,0,.4)']
}
export default PageHeader
