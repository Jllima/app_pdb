import React from 'react'
import {Image} from 'react-native'
import {HeaderApp} from '@pdb/presentation/components'
import {
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Container,
} from 'native-base'
import {imgLogo} from '@pdb/presentation/assets'
import {Styles} from './styles'

const ShowOS: React.FC = () => {
  return (
    <>
      <HeaderApp title="Visualizar OS" />
      <Container style={Styles.container}>
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={imgLogo} />
                <Body>
                  <Text>OS: P1234</Text>
                  <Text note>Motorista: Edson</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={imgLogo} style={Styles.imageTitle} />
            </CardItem>
            <CardItem>
              <Left>
                <Body>
                  <Text>Veículo: 123</Text>
                  <Text>Categoria: Carroceria</Text>
                  <Text>Problema: Batida</Text>
                </Body>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
    </>
  )
}

export default ShowOS
