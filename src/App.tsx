import 'react-native-gesture-handler'
import React from 'react'
import Routes from './routes/index'
import {NavigationContainer} from '@react-navigation/native'
import {AuthProvider} from './presentation/contexts/auth'
import {StyleProvider} from 'native-base'
import getTheme from '../native-base-theme/components'
import platform from '../native-base-theme/variables/platform'

const App: React.FC = () => {
  return (
    <StyleProvider style={getTheme(platform)}>
      <NavigationContainer>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </NavigationContainer>
    </StyleProvider>
  )
}

export default App
