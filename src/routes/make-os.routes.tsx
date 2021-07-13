import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {MakeOs} from '@pdb/presentation/pages'

const MakeOsStack = createStackNavigator()

const MakeOsRoutes: React.FC = () => {
  return (
    <MakeOsStack.Navigator>
      <MakeOsStack.Screen
        name="MakeOs"
        component={MakeOs}
        options={{headerShown: false}}
      />
    </MakeOsStack.Navigator>
  )
}

export default MakeOsRoutes
