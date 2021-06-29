import React from 'react'
import {createSignIn} from '@pdb/main/factories'
import {ConfirmOrMenu} from '@pdb/presentation/pages'

import {createStackNavigator} from '@react-navigation/stack'

const AuthStack = createStackNavigator()

const AuthRoutes: React.FC = () => (
  <AuthStack.Navigator initialRouteName="SignIn">
    <AuthStack.Screen
      name="SignIn"
      component={createSignIn}
      options={{headerShown: false}}
    />
    <AuthStack.Screen
      name="ConfirmOrMenu"
      component={ConfirmOrMenu}
      options={{headerShown: false}}
    />
  </AuthStack.Navigator>
)

export default AuthRoutes
