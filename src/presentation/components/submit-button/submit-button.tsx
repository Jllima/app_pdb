import React from 'react'
import {ActivityIndicator} from 'react-native'
import {Container, ButtonText, Icon} from './styles'
import {RectButtonProperties} from 'react-native-gesture-handler'

interface ButtonProps extends RectButtonProperties {
  children: string
  loading: boolean
  iconName: string
}

const SubmitButton: React.FC<ButtonProps> = ({
  iconName,
  loading,
  children,
  ...rest
}) => {
  return (
    <Container {...rest}>
      {loading ? (
        <ActivityIndicator color="#FFFFFF" />
      ) : (
        <>
          <ButtonText>{children}</ButtonText>
          <Icon name={iconName} size={20} color="#FFFFFF" />
        </>
      )}
    </Container>
  )
}

export default SubmitButton
