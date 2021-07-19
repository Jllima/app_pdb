import React from 'react'
import {TouchableOpacityProps} from 'react-native'
import {
  StatusArea,
  Description,
  Container,
  Image,
  Status,
  InfoArea,
  OsNumber,
  ImageContent,
} from './styles'
import {choseImgCategory} from '@pdb/presentation/helpers'

interface ButtonProps extends TouchableOpacityProps {
  categoryId: number
  statusId: number
  createdAt: string
  status: string
  osNumber: string
}

const FollowOsTabContent: React.FC<ButtonProps> = ({
  categoryId,
  createdAt,
  status,
  osNumber,
  statusId,
  ...props
}) => {
  return (
    <>
      <Container {...props}>
        <ImageContent>
          <Image source={choseImgCategory(categoryId)} />
        </ImageContent>
        <InfoArea>
          <OsNumber>{osNumber}</OsNumber>
          <Description>Data: {createdAt}</Description>
        </InfoArea>
        <StatusArea statusId={statusId}>
          <Status>{status}</Status>
        </StatusArea>
      </Container>
    </>
  )
}

export default FollowOsTabContent
