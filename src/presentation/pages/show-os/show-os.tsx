/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react'
import {Image, Alert} from 'react-native'
import {HeaderApp, Spinner} from '@pdb/presentation/components'
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
import {OrderDataModel} from '@pdb/domain/models/order-model'
import {RemoteGetOrder} from '@pdb/data/usecases'

type Props = {
  getOrder: RemoteGetOrder
}

const ShowOS: React.FC<Props> = ({getOrder}: Props) => {
  const [isLoading, setIsLoading] = useState(true)
  const [order, setOrder] = useState<OrderDataModel>({} as OrderDataModel)

  const loadOs = async (): Promise<void> => {
    try {
      const response = await getOrder.get()
      setOrder(response)
      setIsLoading(false)
    } catch (error: any) {
      Alert.alert(error.message)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    loadOs()
  }, [])

  return (
    <>
      <HeaderApp title="Visualizar OS" />
      <Container style={Styles.container}>
        <Content>
          <Card>
            {isLoading ? (
              <>
                <CardItem cardBody>
                  <Spinner />
                </CardItem>
              </>
            ) : (
              <>
                <CardItem>
                  <Left>
                    <Thumbnail source={imgLogo} />
                    <Body>
                      <Text>OS: {order.data.reference}</Text>
                      <Text note>Motorista: Edson</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image
                    source={{uri: order.meta.links.image_url}}
                    style={Styles.imageTitle}
                  />
                </CardItem>
                <CardItem>
                  <Left>
                    <Body>
                      <Text>Veículo: {order.data.car_number}</Text>
                      <Text>Categoria: {order.data.category_name}</Text>
                      <Text>Problema: {order.data.problem}</Text>
                    </Body>
                  </Left>
                </CardItem>
              </>
            )}
          </Card>
        </Content>
      </Container>
    </>
  )
}

export default ShowOS
