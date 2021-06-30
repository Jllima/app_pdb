import React from 'react'
import {TouchableOpacityProps} from 'react-native'
import {Button, Icon, Text} from './styles'

interface ButtonProps extends TouchableOpacityProps {
  iconName: string
  iconText: string
}

const MenuButton: React.FC<ButtonProps> = ({iconName, iconText, ...props}) => {
  return (
    <>
      <Button {...props}>
        <Icon name={iconName} size={80} color="#FFFFFF" />
      </Button>
      <Text>{iconText}</Text>
    </>
  )
}

export default MenuButton
