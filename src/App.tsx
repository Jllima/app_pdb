import 'react-native-gesture-handler'
import React from 'react'
import Routes from './routes/index'
import {NavigationContainer} from '@react-navigation/native'
import AuthContext from './presentation/contexts/auth'

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <AuthContext.Provider value={{signed: false}}>
        <Routes />
      </AuthContext.Provider>
    </NavigationContainer>
  )
}

export default App
