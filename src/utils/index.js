const cloudinaryUrl = require('cloudinary-microurl')

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
