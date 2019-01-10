import React from 'react'
import PropType from 'prop-types'
import fetchJsonp from 'fetch-jsonp'
import './MeetupCard.css'

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
            <h5>
              <span>{name}</span>
              <span className={`badge badge-pill ${category}`}>{category}</span>
            </h5>
            <p className="card-text">{description}</p>
            <a href={`https://www.meetup.com/${urlname}`} target="_blank" className="btn btn-outline-primary">
              Learn More
            </a>
            {this.state.totalMembers !== 0 && (
              <span className="badge badge-light">
                Total Members: <span className="memberCount">{this.state.totalMembers}</span>
              </span>
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
