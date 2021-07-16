import React from 'react'
import {ViewStyle, TouchableOpacityProps, ImageURISource} from 'react-native'

import {
  StatusArea,
  Description,
  Container,
  Image,
  Status,
  InfoArea,
  OsNumber,
} from './styles'

interface ButtonProps extends TouchableOpacityProps {
  path: ImageURISource
  description: string
  status: string
  osNumber: string
  viewStyle: ViewStyle
}

const FollowOsTabContent: React.FC<ButtonProps> = ({
  path,
  description,
  status,
  osNumber,
  viewStyle,
  ...props
}) => {
  return (
    <>
      <Container {...props}>
        <Image source={path} />
        <InfoArea>
          <OsNumber>{osNumber}</OsNumber>
          <Description>{description}</Description>
        </InfoArea>
        <StatusArea style={viewStyle}>
          <Status>{status}</Status>
        </StatusArea>
      </Container>
    </>
  )
}

export default FollowOsTabContent
