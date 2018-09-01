import React from 'react'
import uuid from 'uuid/v4'

import PianoScale from './PianoScale'
import PianoBrand from './PianoBrand'
import PianoTracks from './PianoTracks'
import PianoKeys from './PianoKeys'

import './Piano.css'

export default class Piano extends React.Component {
  state = {
    isRecording: false,
    record: {
      starts_at: 0,
      sounds: {}
    },
    tracks: []
  }

  componentDidUpdate() {
    console.log(this.state)
  }

  onStart = data => {
    if (this.state.isRecording) {
      this.setState({
        record: {
          ...this.state.record,
          sounds: {
            ...this.state.record.sounds,
            [data.id]: {
              id: data.id,
              note: data.note,
              octave: data.octave,
              starts_at: data.time,
              finish_at: undefined
            }
          }
        }
      })
    }
  }

  onStop = data => {
    if (this.state.isRecording) {
      this.setState({
        record: {
          ...this.state.record,
          sounds: {
            ...this.state.record.sounds,
            [data.id]: {
              id: data.id,
              note: data.note,
              octave: data.octave,
              starts_at: this.state.record.sounds[data.id].starts_at,
              finish_at: data.time
            }
          }
        }
      })
    }
  }

  onToggleRecording = () => {
    const isRecording = this.state.isRecording === false
    if (isRecording) {
      this.setState({
        isRecording,
        record: {
          starts_at: new Date().getTime(),
          sounds: {}
        }
      })
    } else {
      const name = window.prompt('Specify track name')
      this.setState({
        isRecording: false,
        record: {
          starts_at: 0,
          sounds: {}
        },
        tracks: this.state.tracks.concat([
          {
            id: uuid(),
            name,
            sounds: this.state.record.sounds,
            starts_at: this.state.record.starts_at,
            finish_at: new Date().getTime()
          }
        ])
      })
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="piano">
          <label className="piano__recorder">
            <input
              className="piano__recorder__input"
              type="radio"
              onClick={this.onToggleRecording}
              checked={this.state.isRecording}
            />
            Record
          </label>
          <PianoBrand />
          <PianoScale>
            <PianoKeys onStart={this.onStart} onStop={this.onStop} />
          </PianoScale>
        </div>
        <PianoTracks tracks={this.state.tracks} />
      </React.Fragment>
    )
  }
}
