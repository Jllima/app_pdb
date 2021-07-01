import React from 'react'
import {TouchableOpacityProps} from 'react-native'
import {Button, IconTab, Text} from './styles'

interface ButtonProps extends TouchableOpacityProps {
  iconName: string
  iconText: string
}

const MenuButton: React.FC<ButtonProps> = ({iconName, iconText, ...props}) => {
  return (
    <>
      <Button {...props}>
        <IconTab name={iconName} />
      </Button>
      <Text>{iconText}</Text>
    </>
  )
}

export default MenuButton
