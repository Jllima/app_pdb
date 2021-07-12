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

const MakeOs: React.FC = () => {
  return (
    <>
      <Header>
        <Body>
          <Title>FAZER OS</Title>
        </Body>
      </Header>
      <Container>
        <MakeOsMenuButton path={imgCarroceria} buttonText="Carroceria" />
        <MakeOsMenuButton path={imgEletrica} buttonText="Elétrica" />
        <MakeOsMenuButton path={imgMotor} buttonText="Motor" />
        <MakeOsMenuButton path={imgSuspensao} buttonText="Suspensão" />
      </Container>
    </>
  )
}

export default MakeOs
