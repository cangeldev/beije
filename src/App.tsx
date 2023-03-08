import { View, Text } from 'react-native'
import React from 'react'
import { Container } from './container'
import { Provider } from 'react-redux'
import { store } from './features/store'
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...'])
LogBox.ignoreAllLogs();
export default function App() {
  return (
    <Provider store={store}>
      <Container />
    </Provider>
  )
}
