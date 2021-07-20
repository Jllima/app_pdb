import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {CreateFollowOsPage, CreateShowOSPage} from '@pdb/main/factories'

const FollowOsStack = createStackNavigator()

const FollowOsRoutes: React.FC = () => {
  return (
    <FollowOsStack.Navigator initialRouteName="FollowOs">
      <FollowOsStack.Screen
        name="FollowOs"
        component={CreateFollowOsPage}
        options={{headerShown: false}}
      />
      <FollowOsStack.Screen
        name="ShowOs"
        component={CreateShowOSPage}
        options={{headerShown: false}}
      />
    </FollowOsStack.Navigator>
  )
}

export default FollowOsRoutes
