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
import {useNavigation} from '@react-navigation/native'
import {OrderListModel} from '@pdb/domain/models/order-model'

interface ButtonProps extends TouchableOpacityProps {
  os: OrderListModel
}

const FollowOsTabContent: React.FC<ButtonProps> = ({os, ...props}) => {
  const navigation = useNavigation()

  return (
    <>
      <Container
        {...props}
        onPress={() => navigation.navigate('ShowOs', {orderIdParams: os.id})}>
        <ImageContent>
          <Image source={choseImgCategory(os.category_id)} />
        </ImageContent>
        <InfoArea>
          <OsNumber>{os.reference}</OsNumber>
          <Description>Data: {os.created_at}</Description>
        </InfoArea>
        <StatusArea statusId={os.status_id}>
          <Status>{os.status}</Status>
        </StatusArea>
      </Container>
    </>
  )
}

export default FollowOsTabContent
