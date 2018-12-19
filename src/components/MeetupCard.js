import React from 'react'
import PropType from 'prop-types'
import './MeetupCard.css'
import fetchJsonp from 'fetch-jsonp'

class MeetupCard extends React.Component {
  _isMounted = false

  state = {
    totalMembers: 0
  }

  componentDidMount() {
    this._isMounted = true

    fetchJsonp(`https://api.meetup.com/${this.props.urlname}`)
      .then(response => response.json())
      .then(json => {
        if (this._isMounted && json.data) {
          this.setState({
            totalMembers: json.data.members
          })
        }
      })
      .catch(e => {
        console.log('parsing failed', e)
      })
  }

  componentWillUnmount() {
    this._isMounted = false
  }

  render() {
    const { name, description, urlname, category } = this.props

    return (
      <div className="col-sm-6 meetup">
        <div className="card mb-4">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{description}</p>
            <a href={`https://www.meetup.com/${urlname}`} className="card-link">
              Learn More
            </a>
            <div className={`category ${category}`}>{category}</div>
            {this.state.totalMembers !== 0 && (
              <div className="members">
                Total Members: <span className="memberCount">{this.state.totalMembers}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

MeetupCard.propTypes = {
  name: PropType.string.isRequired,
  description: PropType.string.isRequired,
  urlname: PropType.string.isRequired,
  category: PropType.string.isRequired
}

export default MeetupCard
