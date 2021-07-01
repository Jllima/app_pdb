import React from 'react'
import {
  BottomTabBarProps,
  BottomTabBarOptions,
} from '@react-navigation/bottom-tabs'
import {Footer, FooterTab, Button, Icon, Text} from 'native-base'
import {HOME, MAKEOS, OS} from '@pdb/constants'

type Props = BottomTabBarProps<BottomTabBarOptions>

const TabBottomNavigation: React.FC<Props> = ({
  state,
  descriptors,
  navigation,
}: Props) => {
  const iconName = (title: string): string => {
    switch (title) {
      case HOME:
        return 'home'
      case MAKEOS:
        return 'document-text'
      case OS:
        return 'search'
      default:
        return 'settings'
    }
  }

  return (
    <Footer>
      <FooterTab>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key]
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name

          const isFocused = state.index === index

          const onPress = (): void => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            })

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name)
            }
          }

          const onLongPress = (): void => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            })
          }

          return (
            <Button
              active={isFocused}
              vertical
              onPress={onPress}
              onLongPress={onLongPress}
              key={index}>
              <Icon name={iconName(options.title as string)} />
              <Text>{label}</Text>
            </Button>
          )
        })}
      </FooterTab>
    </Footer>
  )
}

export default TabBottomNavigation
