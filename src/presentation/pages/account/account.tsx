import React from 'react'
import {Header, Body, Title} from 'native-base'
import {Container, ButtonText, IconNb} from './styles'

const Account: React.FC = () => {
  return (
    <>
      <Header>
        <Body>
          <Title>MINHA CONTA</Title>
        </Body>
      </Header>
      <Container>
        <ButtonText>Sair</ButtonText>
        <IconNb name="log-out-outline" />
      </Container>
    </>
  )
}

export default Account
