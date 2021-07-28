/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react'
import {Image, Alert} from 'react-native'
import {HeaderStack, Spinner, StatusOs} from '@pdb/presentation/components'
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
import {imgCamera, imgLogo} from '@pdb/presentation/assets'
import {Styles} from './styles'
import {OrderDataModel} from '@pdb/domain/models/order-model'
import {RemoteGetOrder} from '@pdb/data/usecases'
import {checkEmpty} from '@pdb/presentation/helpers'

type Props = {
  getOrder: RemoteGetOrder
}

const ManagerShowOS: React.FC<Props> = ({getOrder}: Props) => {
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
      <HeaderStack title="OS" />
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
                      <Text note>
                        Motorista: {order.data.owner.employee_name}
                      </Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image
                    source={
                      order.meta.links.image_url
                        ? {uri: order.meta.links.image_url}
                        : imgCamera
                    }
                    style={Styles.imageTitle}
                  />
                </CardItem>
                <CardItem>
                  <Left>
                    <Body>
                      <Text>Veículo: {order.data.vehicle.car_number}</Text>
                      <Text>Categoria: {order.data.problem.category.name}</Text>
                      <Text>Problema: {order.data.problem.description}</Text>
                      {order.data.solution?.description && (
                        <Text>
                          Mecãnico: {order.data.solution?.description}
                        </Text>
                      )}
                      <Text>
                        Descrição: {checkEmpty(order.data.description)}
                      </Text>
                      {order.data.car_mecanic?.name && (
                        <Text>Mecãnico: {order.data.car_mecanic?.name}</Text>
                      )}
                    </Body>
                  </Left>
                </CardItem>
                <CardItem>
                  <Left>
                    <Body>
                      <StatusOs
                        statusId={order.data.status.id}
                        statusName={order.data.status.name}
                      />
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

export default ManagerShowOS
