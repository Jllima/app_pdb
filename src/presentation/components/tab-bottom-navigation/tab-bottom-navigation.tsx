import React from 'react'
import {
  BottomTabBarProps,
  BottomTabBarOptions,
} from '@react-navigation/bottom-tabs'
import {Footer, FooterTab, Button, Icon, Text} from 'native-base'

type Props = BottomTabBarProps<BottomTabBarOptions>

const TabBottomNavigation: React.FC<Props> = ({
  state,
  descriptors,
  navigation,
}: Props) => {
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
              <Icon name={options.icon} />
              <Text>{label}</Text>
            </Button>
          )
        })}
      </FooterTab>
    </Footer>
  )
}

export default TabBottomNavigation
