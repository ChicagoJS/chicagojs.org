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
