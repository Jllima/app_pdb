import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {MakeOs, FormOs} from '@pdb/presentation/pages'

const MakeOsStack = createStackNavigator()

const MakeOsRoutes: React.FC = () => {
  return (
    <MakeOsStack.Navigator initialRouteName="MakeOs">
      <MakeOsStack.Screen
        name="MakeOs"
        component={MakeOs}
        options={{headerShown: false}}
      />
      <MakeOsStack.Screen name="FormOs" component={FormOs} />
    </MakeOsStack.Navigator>
  )
}

export default MakeOsRoutes
