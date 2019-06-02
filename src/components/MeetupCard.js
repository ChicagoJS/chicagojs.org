import React from 'react'
import PropType from 'prop-types'
import fetchJsonp from 'fetch-jsonp'
import { format } from 'date-fns'
import './MeetupCard.css'

class MeetupCard extends React.Component {
  _isMounted = false

  state = {
    totalMembers: 0,
    upcomingEvent: {}
  }

  componentDidMount() {
    this._isMounted = true

    //fetches total members of group & saves to state
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

    //fetches upcoming event of group & saves to state
    fetchJsonp(`https://api.meetup.com/${this.props.urlname}/events?page=1`)
      .then(response => response.json())
      .then(json => {
        if (this._isMounted && json.data.length) {
          this.setState({
            upcomingEvent: json.data[0]
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
    const { upcomingEvent } = this.state

    return (
      <div className="col-sm-6 meetup">
        <div className="card mb-4">
          <div className="card-body">
            <h5>
              <span>{name}</span>
              <span className={`badge badge-pill ${category}`}>{category}</span>
            </h5>
            <p className="card-text">{description}</p>

            {this.state.totalMembers !== 0 && (
              <span className="badge badge-light">
                Total Members: <span className="memberCount">{this.state.totalMembers}</span>
              </span>
            )}
            <div className="card bg-light mw-100 upcoming">
              <div className="card-header">Upcoming Event</div>
              <div className="card-body">
                {upcomingEvent.name ? (
                  <div>
                    <h6 className="card-title">{upcomingEvent.name}</h6>
                    <p className="card-text">
                      <strong>Date: </strong>
                      {format(new Date(upcomingEvent.time), 'MMM DD, YYYY h:mm a')}
                    </p>
                    <a href={upcomingEvent.link} target="_blank" className="btn btn-outline-secondary rsvp">
                      RSVP Event
                    </a>
                  </div>
                ) : (
                  <p className="card-text">None Scheduled</p>
                )}
              </div>
            </div>
            <a href={`https://www.meetup.com/${urlname}`} target="_blank" className="btn btn-outline-primary join">
              Join Group
            </a>
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
