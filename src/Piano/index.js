import React from 'react'

import Piano from './Piano'
import { PianoProvider } from './PianoContext'

export default () => {
  return (
    <PianoProvider>
      <Piano />
    </PianoProvider>
  )
}
