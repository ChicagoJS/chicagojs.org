import React from 'react'
import PropType from 'prop-types'

const MeetupCard = ({ name, description, urlname, category }) => (
  <div className="col-sm-6 meetup">
    <div className="card mb-4">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <a href={`https://www.meetup.com/${urlname}`} className="card-link">
          Learn More
        </a>
      </div>
    </div>
  </div>
)

MeetupCard.propTypes = {
  name: PropType.string.isRequired,
  description: PropType.string.isRequired,
  urlname: PropType.string.isRequired,
  category: PropType.string.isRequired
}

export default MeetupCard
