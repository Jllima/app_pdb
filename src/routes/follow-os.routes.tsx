import React, {useContext} from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {
  CreateFollowOsPage,
  CreateManageFollowOsPage,
  CreateShowOSPage,
  CreateManagerEditOrderPage,
} from '@pdb/main/factories'
import {AuthContext} from '@pdb/presentation/contexts'

const FollowOsStack = createStackNavigator()

const FollowOsRoutes: React.FC = () => {
  const {user} = useContext(AuthContext)

  return (
    <FollowOsStack.Navigator initialRouteName="FollowOs">
      <FollowOsStack.Screen
        name="FollowOs"
        component={
          user.occupation === 'manager'
            ? CreateManageFollowOsPage
            : CreateFollowOsPage
        }
        options={{headerShown: false}}
      />
      <FollowOsStack.Screen
        name="ShowOs"
        component={CreateShowOSPage}
        options={{headerShown: false}}
      />
      <FollowOsStack.Screen
        name="ManageOS"
        component={CreateManagerEditOrderPage}
        options={{headerShown: false}}
      />
    </FollowOsStack.Navigator>
  )
}

export default FollowOsRoutes
