import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Menu} from '@pdb/presentation/pages'
import {Header, Content, Text, View} from 'native-base'
import {TabBottomNavigation} from '@pdb/presentation/components'

const Tab = createBottomTabNavigator()

const Settings: React.FC = () => {
  return (
    <React.Fragment>
      <Header />
      <Content>
        <View>
          <Text>Conta</Text>
        </View>
      </Content>
    </React.Fragment>
  )
}
const MakeOs: React.FC = () => {
  return (
    <React.Fragment>
      <Header />
      <Content>
        <View>
          <Text>Fazer OS</Text>
        </View>
      </Content>
    </React.Fragment>
  )
}
const SearchOs: React.FC = () => {
  return (
    <React.Fragment>
      <Header />
      <Content>
        <View>
          <Text>Acompanhar OS</Text>
        </View>
      </Content>
    </React.Fragment>
  )
}

const AppRoutes: React.FC = () => {
  return (
    <Tab.Navigator tabBar={props => <TabBottomNavigation {...props} />}>
      <Tab.Screen
        name="Menu"
        component={Menu}
        options={{title: 'Início', icon: 'home'}}
      />
      <Tab.Screen
        name="MakeOs"
        component={MakeOs}
        options={{title: 'Fazer OS', icon: 'document-text'}}
      />
      <Tab.Screen
        name="SearchOs"
        component={SearchOs}
        options={{title: 'OS', icon: 'search'}}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{title: 'conta', icon: 'settings'}}
      />
    </Tab.Navigator>
  )
}

export default AppRoutes
