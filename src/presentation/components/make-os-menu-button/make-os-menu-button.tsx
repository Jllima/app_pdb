import React from 'react'
import {TouchableOpacityProps, ImageURISource} from 'react-native'
import {Button, Text, Container, Image} from './styles'

interface ButtonProps extends TouchableOpacityProps {
  path: ImageURISource
  buttonText: string
}

const MenuButton: React.FC<ButtonProps> = ({path, buttonText, ...props}) => {
  return (
    <>
      <Container>
        <Button {...props}>
          <Image source={path} />
        </Button>
        <Text>{buttonText}</Text>
      </Container>
    </>
  )
}

export default MenuButton
