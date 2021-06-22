import 'react-native-gesture-handler'
import React from 'react'
import Routes from './routes/index'
import {NavigationContainer} from '@react-navigation/native'

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  )
}

export default App
