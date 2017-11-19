//@flow
import React from 'react'
import { Provider } from 'react-redux'
import Orientation from 'react-native-orientation'

import Root from 'balyabyaca/app/containers/Root'
import store from 'balyabyaca/app/Store'

export default class App extends React.Component<{}> {
  componentDidMount() {
    Orientation.lockToPortrait()
  }

  render() {
    return <Provider store={store}>
      <Root />
    </Provider>
  }
}
