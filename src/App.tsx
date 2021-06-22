import 'react-native-gesture-handler'
import React from 'react'
import Routes from './routes/index'
import {NavigationContainer} from '@react-navigation/native'
import {AuthProvider} from './presentation/contexts/auth'

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  )
}

export default App
