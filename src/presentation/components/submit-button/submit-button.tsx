import React from 'react'
import {ActivityIndicator} from 'react-native'
import {Container, ButtonText, IconButtom} from './styles'
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
        <ActivityIndicator color="#FFFFFF" size={25} />
      ) : (
        <>
          <ButtonText>{children}</ButtonText>
          <IconButtom name={iconName} />
        </>
      )}
    </Container>
  )
}

export default SubmitButton
