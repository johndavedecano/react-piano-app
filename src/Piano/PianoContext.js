import React from 'react'

const PianoContext = React.createContext()

export class PianoProvider extends React.Component {
  state = {
    settings: {
      volume: 1
    }
  }

  updateSetting = (key, value) => {
    this.setState({
      settings: {
        ...this.state.settings,
        [key]: value
      }
    })
  }

  render() {
    return (
      <PianoContext.Provider
        value={{
          ...this.state,
          updateSetting: this.updateSetting
        }}
      >
        {this.props.children}
      </PianoContext.Provider>
    )
  }
}

export const PianoConsumer = PianoContext.Consumer
