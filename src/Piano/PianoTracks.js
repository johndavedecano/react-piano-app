import React from 'react'

import PianoBrand from './PianoBrand'

export default class extends React.Component {
  static defaultProps = {
    tracks: []
  }

  render() {
    return (
      <div className="piano-tracks">
        <PianoBrand brand="Tracks" />
        <div className="piano-tracks__list">
          <ul className="piano-tracks__list__ul">
            {this.props.tracks.length === 0 && <li>No Tracks Yet</li>}
            {this.props.tracks.map(track => {
              return <li key={track.id}>{track.name}</li>
            })}
          </ul>
        </div>
      </div>
    )
  }
}
