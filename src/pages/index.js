import React from 'react'
import { Link } from 'gatsby'

export default class IndexPage extends React.Component {
  render() {
    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          textAlign: 'center',
          marginTop: 40
        }}>
        <h1>ChicagoJS.org</h1>
        <h2>Currently under active development!</h2>
        <a href="https://github.com/chicagojs/chicagojs.org">ChicagoJS on Github</a>
        <br />
        <p>If you want to learn any of these technologies, please check out our issues page on Github!</p>
        <ul>
          <li>GatsbyJS</li>
          <li>GraphQL</li>
          <li>React</li>
          <li>Emotion.sh</li>
          <li>Node</li>
          <li>ExpressJS</li>
        </ul>
        <br />
        <Link to="/code-of-conduct">Code of Conduct</Link>
      </div>
    )
  }
}
