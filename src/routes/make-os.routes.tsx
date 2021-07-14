import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {MakeOs, ShowOs} from '@pdb/presentation/pages'
import {CreateFormOsPage} from '@pdb/main/factories'

const MakeOsStack = createStackNavigator()

const MakeOsRoutes: React.FC = () => {
  return (
    <MakeOsStack.Navigator initialRouteName="MakeOs">
      <MakeOsStack.Screen
        name="MakeOs"
        component={MakeOs}
        options={{headerShown: false}}
      />
      <MakeOsStack.Screen name="FormOs" component={CreateFormOsPage} />
      <MakeOsStack.Screen name="ShowOs" component={ShowOs} />
    </MakeOsStack.Navigator>
  )
}

export default MakeOsRoutes
