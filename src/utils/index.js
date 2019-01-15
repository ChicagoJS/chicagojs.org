const cloudinaryUrl = require('cloudinary-microurl')
const urlRegex = require('url-regex')

export const getCloudinaryImage = (name, options) => {
  return cloudinaryUrl(name, {
    secure: true,
    cloud_name: 'chicagojs',
    gravity: 'center',
    fetch_format: 'auto',
    flags: 'progressive',
    quality: 80,
    ...options
  })
}

export const isValidUrl = url => {
  return urlRegex().test(url)
}

export const renderTechIconCorrectUrl = tech => {
  let lowerCase = tech.toLowerCase()
  let parsedTech = ''
  switch (lowerCase) {
    case 'react.js':
      parsedTech = 'react'
      break
    case 'react native':
      parsedTech = 'react'
      break
    case 'node.js':
      parsedTech = 'node-dot-js'
      break
    default:
      parsedTech = lowerCase
      break
  }
  return `https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${parsedTech}.svg`
}
