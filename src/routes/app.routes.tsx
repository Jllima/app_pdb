import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {TabBottomNavigation} from '@pdb/presentation/components'
import {Menu, Account} from '@pdb/presentation/pages'
import {HOME, OS, SETTINGS, MAKEOS} from '@pdb/constants'
import MakeOsRoutes from './make-os.routes'
import {CreateFollowOsPage} from '@pdb/main/factories'

const Tab = createBottomTabNavigator()

const AppRoutes: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName="Menu"
      tabBar={props => <TabBottomNavigation {...props} />}>
      <Tab.Screen name="Menu" component={Menu} options={{title: HOME}} />
      <Tab.Screen
        name="MakeOsRoutes"
        component={MakeOsRoutes}
        options={{unmountOnBlur: true, title: MAKEOS}}
      />
      <Tab.Screen
        name="SearchOs"
        component={CreateFollowOsPage}
        options={{unmountOnBlur: true, title: OS}}
      />
      <Tab.Screen
        name="Settings"
        component={Account}
        options={{title: SETTINGS}}
      />
    </Tab.Navigator>
  )
}

export default AppRoutes
