import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import ReactHowler from 'react-howler'
import uuid from 'uuid/v4'
import { PianoConsumer } from './PianoContext'

export default class extends React.Component {
  static propTypes = {
    note: PropTypes.string,
    onStart: PropTypes.func,
    onStop: PropTypes.func,
    isFlat: PropTypes.bool,
    isHalfStep: PropTypes.bool,
    octave: PropTypes.any
  }

  static defaultProps = {
    note: 'A',
    onStart: () => {},
    onStop: () => {},
    isFlat: false,
    isHalfStep: false,
    octave: 1
  }

  state = {
    id: '',
    isPlaying: false
  }

  get note() {
    return `${this.props.note}${this.props.octave}`
  }

  get file() {
    return `/sounds/${this.note}.mp3`
  }

  // allow playing outside
  play = () => this.setState({ isPlaying: true })

  // alow stopping outside
  stop = () => this.setState({ isPlaying: false })

  onStart = () => {
    const id = uuid()
    this.setState(
      {
        isPlaying: true,
        id
      },
      () => {
        this.props.onStart({
          id,
          event: 'start',
          note: this.props.note,
          octave: this.props.octave,
          time: new Date().getTime()
        })
      }
    )
  }

  onStop = () => {
    this.setState(
      {
        isPlaying: false
      },
      () => {
        this.props.onStop({
          id: this.state.id,
          event: 'stop',
          note: this.note,
          octave: this.props.octave,
          time: new Date().getTime()
        })
      }
    )
  }

  render() {
    const { isFlat, isHalfStep } = this.props
    return (
      <li
        onMouseDown={this.onStart}
        onMouseUp={this.onStop}
        onTouchStart={this.onStart}
        onTouchEnd={this.onStop}
        className={cx({
          flat: isFlat,
          half: isHalfStep
        })}
      >
        {this.note}
        <PianoConsumer>
          {({ settings }) => {
            return (
              <ReactHowler
                volume={settings.volume}
                src={[this.file]}
                playing={this.state.isPlaying}
              />
            )
          }}
        </PianoConsumer>
      </li>
    )
  }
}
