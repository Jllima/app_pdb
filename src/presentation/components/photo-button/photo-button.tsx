import React from 'react'
import {RectButtonProperties} from 'react-native-gesture-handler'
import {PhotoButtonContainer, ButtonText, IconButtom} from './styles'

interface ButtonProps extends RectButtonProperties {
  children: string
  loading?: boolean
  iconName: string
}

const PhotoButton: React.FC<ButtonProps> = ({
  iconName,
  loading,
  children,
  ...rest
}) => {
  return (
    <PhotoButtonContainer {...rest}>
      <ButtonText>{children}</ButtonText>
      <IconButtom name={iconName} />
    </PhotoButtonContainer>
  )
}

export default PhotoButton
