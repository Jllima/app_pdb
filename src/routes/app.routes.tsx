import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Menu, Account} from '@pdb/presentation/pages'
import {TabBottomNavigation} from '@pdb/presentation/components'
import {HOME, SETTINGS} from '@pdb/constants'

const Tab = createBottomTabNavigator()

const AppRoutes: React.FC = () => {
  return (
    <Tab.Navigator tabBar={props => <TabBottomNavigation {...props} />}>
      <Tab.Screen name="Menu" component={Menu} options={{title: HOME}} />
      <Tab.Screen
        name="Settings"
        component={Account}
        options={{title: SETTINGS}}
      />
    </Tab.Navigator>
  )
}

export default AppRoutes
