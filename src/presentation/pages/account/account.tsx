import React, {useContext} from 'react'
import {Header, Body, Title} from 'native-base'
import {Container, ButtonText, IconNb} from './styles'
import {AuthContext} from '@pdb/presentation/contexts'

const Account: React.FC = () => {
  const {signOut} = useContext(AuthContext)

  return (
    <>
      <Header>
        <Body>
          <Title>MINHA CONTA</Title>
        </Body>
      </Header>
      <Container onPress={signOut}>
        <ButtonText>Sair</ButtonText>
        <IconNb name="log-out-outline" />
      </Container>
    </>
  )
}

export default Account
