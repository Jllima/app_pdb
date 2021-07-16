import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {MakeOs} from '@pdb/presentation/pages'
import {CreateFormOsPage, CreateShowOSPage} from '@pdb/main/factories'

const MakeOsStack = createStackNavigator()

const MakeOsRoutes: React.FC = () => {
  return (
    <MakeOsStack.Navigator initialRouteName="MakeOs">
      <MakeOsStack.Screen
        name="MakeOs"
        component={MakeOs}
        options={{headerShown: false}}
      />
      <MakeOsStack.Screen
        name="FormOs"
        component={CreateFormOsPage}
        options={{headerShown: false}}
      />
      <MakeOsStack.Screen
        name="ShowOs"
        component={CreateShowOSPage}
        options={{headerShown: false}}
      />
    </MakeOsStack.Navigator>
  )
}

export default MakeOsRoutes
