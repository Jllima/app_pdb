import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Menu} from '@pdb/presentation/pages'
import {Header, Content, Text, View} from 'native-base'
import {TabBottomNavigation} from '@pdb/presentation/components'
import {HOME, MAKEOS, OS, SETTINGS} from '@pdb/constants'
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
      <Tab.Screen name="Menu" component={Menu} options={{title: HOME}} />
      <Tab.Screen name="MakeOs" component={MakeOs} options={{title: MAKEOS}} />
      <Tab.Screen name="SearchOs" component={SearchOs} options={{title: OS}} />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{title: SETTINGS}}
      />
    </Tab.Navigator>
  )
}

export default AppRoutes
