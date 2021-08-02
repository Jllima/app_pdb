import React, {useContext} from 'react'
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
import {AuthContext} from '@pdb/presentation/contexts'

interface ButtonProps extends TouchableOpacityProps {
  os: OrderListModel
  routeName: string
  goBack?: boolean
}

const FollowOsTabContent: React.FC<ButtonProps> = ({
  os,
  routeName,
  goBack,
  ...props
}) => {
  const navigation = useNavigation()
  const {setGoBack} = useContext(AuthContext)

  const navigateToShow = (): void => {
    setGoBack(goBack ?? true)
    navigation.navigate(routeName, {
      orderIdParams: os.id,
      orderRefence: os.reference,
    })
  }

  return (
    <>
      <Container {...props} onPress={navigateToShow}>
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
