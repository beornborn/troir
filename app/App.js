//@flow
import React from 'react'
import { Provider } from 'react-redux'
import Orientation from 'react-native-orientation'

import Game from 'troir/app/containers/game/Game'
import store from 'troir/app/Store'

export default class App extends React.Component<{}> {
  componentDidMount() {
    Orientation.lockToPortrait()
  }

  render() {
    return <Provider store={store}>
      <Game />
    </Provider>
  }
}
