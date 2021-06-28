import React from 'react'
import {createSignIn} from '@pdb/main/factories'
import {Menu} from '@pdb/presentation/pages'

import {createStackNavigator} from '@react-navigation/stack'

const AuthStack = createStackNavigator()

const AuthRoutes: React.FC = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      name="SignIn"
      component={createSignIn}
      options={{headerShown: false}}
    />
    <AuthStack.Screen name="Menu" component={Menu} />
  </AuthStack.Navigator>
)

export default AuthRoutes
