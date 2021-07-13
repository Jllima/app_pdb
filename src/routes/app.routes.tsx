import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Menu, Account} from '@pdb/presentation/pages'
import {Header, Body, Title} from 'native-base'
import {TabBottomNavigation} from '@pdb/presentation/components'
import {HOME, OS, SETTINGS, MAKEOS} from '@pdb/constants'
import MakeOsRoutes from './make-os.routes'

const Tab = createBottomTabNavigator()

const SearchOs: React.FC = () => {
  return (
    <Header>
      <Body>
        <Title>ACOMPANHAR OS</Title>
      </Body>
    </Header>
  )
}

const AppRoutes: React.FC = () => {
  return (
    <Tab.Navigator tabBar={props => <TabBottomNavigation {...props} />}>
      <Tab.Screen name="Menu" component={Menu} options={{title: HOME}} />
      <Tab.Screen
        name="MakeOsRoutes"
        component={MakeOsRoutes}
        options={{title: MAKEOS}}
      />
      <Tab.Screen name="SearchOs" component={SearchOs} options={{title: OS}} />
      <Tab.Screen
        name="Settings"
        component={Account}
        options={{title: SETTINGS}}
      />
    </Tab.Navigator>
  )
}

export default AppRoutes
