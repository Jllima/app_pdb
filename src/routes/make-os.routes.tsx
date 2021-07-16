import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {MakeOs, ShowOs} from '@pdb/presentation/pages'
import {CreateFormOsPage} from '@pdb/main/factories'

const MakeOsStack = createStackNavigator()

const MakeOsRoutes: React.FC = () => {
  return (
    <MakeOsStack.Navigator initialRouteName="ShowOs">
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
        component={ShowOs}
        options={{headerShown: false}}
      />
    </MakeOsStack.Navigator>
  )
}

export default MakeOsRoutes
