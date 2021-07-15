import React, {memo} from 'react'
import {Header, Left, Body, Right, Title, Button, Icon} from 'native-base'
import {useNavigation} from '@react-navigation/native'

type Props = {
  title: string
}

const HeaderStack: React.FC<Props> = ({title}: Props) => {
  const navigation = useNavigation()

  return (
    <Header>
      <Left>
        <Button transparent onPress={navigation.goBack}>
          <Icon name="arrow-back" />
        </Button>
      </Left>
      <Body>
        <Title>{title}</Title>
      </Body>
      <Right />
    </Header>
  )
}

export default memo(HeaderStack)
