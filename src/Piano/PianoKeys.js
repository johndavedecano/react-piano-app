import React from 'react'
import PianoKey from './PianoKey'

export default class extends React.Component {
  render() {
    const { onStop, onStart } = this.props

    return (
      <React.Fragment>
        <PianoKey
          onStart={onStart}
          onStop={onStop}
          note="C"
          octave={2}
          isHalfStep
        />
        <PianoKey
          onStart={onStart}
          onStop={onStop}
          note="Db"
          octave={2}
          isFlat
        />
        <PianoKey onStart={onStart} onStop={onStop} note="D" octave={2} />
        <PianoKey
          onStart={onStart}
          onStop={onStop}
          note="Eb"
          octave={2}
          isFlat
        />
        <PianoKey onStart={onStart} onStop={onStop} note="E" octave={2} />
        <PianoKey
          onStart={onStart}
          onStop={onStop}
          note="F"
          octave={2}
          isHalfStep
        />
        <PianoKey
          onStart={onStart}
          onStop={onStop}
          note="Gb"
          octave={2}
          isFlat
        />
        <PianoKey onStart={onStart} onStop={onStop} note="G" octave={2} />
        <PianoKey
          onStart={onStart}
          onStop={onStop}
          note="Ab"
          octave={2}
          isFlat
        />
        <PianoKey onStart={onStart} onStop={onStop} note="A" octave={2} />
        <PianoKey
          onStart={onStart}
          onStop={onStop}
          note="Bb"
          octave={2}
          isFlat
        />
        <PianoKey onStart={onStart} onStop={onStop} note="B" octave={2} />
        <PianoKey
          onStart={onStart}
          onStop={onStop}
          note="C"
          octave={3}
          isHalfStep
        />

        <PianoKey
          onStart={onStart}
          onStop={onStop}
          note="Db"
          octave={3}
          isFlat
        />
        <PianoKey onStart={onStart} onStop={onStop} note="D" octave={3} />
        <PianoKey
          onStart={onStart}
          onStop={onStop}
          note="Eb"
          octave={3}
          isFlat
        />
        <PianoKey onStart={onStart} onStop={onStop} note="E" octave={3} />
        <PianoKey
          onStart={onStart}
          onStop={onStop}
          note="F"
          octave={3}
          isHalfStep
        />
        <PianoKey
          onStart={onStart}
          onStop={onStop}
          note="Gb"
          octave={3}
          isFlat
        />
        <PianoKey onStart={onStart} onStop={onStop} note="G" octave={3} />
        <PianoKey
          onStart={onStart}
          onStop={onStop}
          note="Ab"
          octave={3}
          isFlat
        />
        <PianoKey onStart={onStart} onStop={onStop} note="A" octave={3} />
        <PianoKey
          onStart={onStart}
          onStop={onStop}
          note="Bb"
          octave={3}
          isFlat
        />
        <PianoKey onStart={onStart} onStop={onStop} note="B" octave={3} />
        <PianoKey
          onStart={onStart}
          onStop={onStop}
          note="C"
          octave={4}
          isHalfStep
        />

        <PianoKey
          onStart={onStart}
          onStop={onStop}
          note="Db"
          octave={4}
          isFlat
        />
        <PianoKey onStart={onStart} onStop={onStop} note="D" octave={4} />
        <PianoKey
          onStart={onStart}
          onStop={onStop}
          note="Eb"
          octave={4}
          isFlat
        />
        <PianoKey onStart={onStart} onStop={onStop} note="E" octave={4} />
        <PianoKey
          onStart={onStart}
          onStop={onStop}
          note="F"
          octave={4}
          isHalfStep
        />
        <PianoKey
          onStart={onStart}
          onStop={onStop}
          note="Gb"
          octave={4}
          isFlat
        />
        <PianoKey onStart={onStart} onStop={onStop} note="G" octave={4} />
        <PianoKey
          onStart={onStart}
          onStop={onStop}
          note="Ab"
          octave={4}
          isFlat
        />
        <PianoKey onStart={onStart} onStop={onStop} note="A" octave={4} />
        <PianoKey
          onStart={onStart}
          onStop={onStop}
          note="Bb"
          octave={4}
          isFlat
        />
        <PianoKey onStart={onStart} onStop={onStop} note="B" octave={4} />

        <PianoKey
          onStart={onStart}
          onStop={onStop}
          isHalfStep
          note="C"
          octave={5}
        />
      </React.Fragment>
    )
  }
}
