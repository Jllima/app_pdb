import React from 'react'
import {MakeOsMenuButton} from '@pdb/presentation/components'
import {Container} from './styles'
import {
  imgCarroceria,
  imgEletrica,
  imgMotor,
  imgSuspensao,
} from '@pdb/presentation/assets'
import {Header, Body, Title} from 'native-base'
import {useNavigation} from '@react-navigation/native'

const MakeOs: React.FC = () => {
  const navigation = useNavigation()

  const navigateToForm = (id: string): void =>
    navigation.navigate('FormOs', {categoryId: id})

  return (
    <>
      <Header>
        <Body>
          <Title>Solicitação OS</Title>
        </Body>
      </Header>
      <Container>
        <MakeOsMenuButton
          path={imgCarroceria}
          buttonText="Carroceria"
          onPress={() => navigateToForm('3')}
        />
        <MakeOsMenuButton
          path={imgEletrica}
          buttonText="Elétrica"
          onPress={() => navigateToForm('2')}
        />
        <MakeOsMenuButton
          path={imgMotor}
          buttonText="Motor"
          onPress={() => navigateToForm('1')}
        />
        <MakeOsMenuButton
          path={imgSuspensao}
          buttonText="Suspensão"
          onPress={() => navigateToForm('4')}
        />
      </Container>
    </>
  )
}

export default MakeOs
