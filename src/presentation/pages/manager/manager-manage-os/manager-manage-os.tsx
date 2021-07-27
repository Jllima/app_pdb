/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react'
import {
  HeaderStack,
  Spinner,
  StatusOs,
  Select,
  TextAreaInput,
  SubmitButton,
} from '@pdb/presentation/components'
import {Image, Alert} from 'react-native'
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
import {
  RemoteEditOrder,
  RemoteGetOrder,
  RemoteManageOs,
} from '@pdb/data/usecases'
import {OrderDataModel} from '@pdb/domain/models/order-model'
import {ListToEditOrderModel} from '@pdb/domain/models/list-to-edit-order-model'
import {useNavigation} from '@react-navigation/native'

type Props = {
  editOrder: RemoteEditOrder
  managerOrder: RemoteManageOs
  getOrder: RemoteGetOrder
}

const ManagerManageOS: React.FC<Props> = ({
  editOrder,
  managerOrder,
  getOrder,
}: Props) => {
  const navigation = useNavigation()
  const [isLoading, setIsLoading] = useState(true)
  const [order, setOrder] = useState<OrderDataModel>({} as OrderDataModel)
  const [lists, setLists] = useState<ListToEditOrderModel>(
    {} as ListToEditOrderModel,
  )

  const [formData, setFormData] = useState({
    'data[status_id]': 0,
    'data[solution_id]': 0,
    'data[description]': '',
    'data[car_mecanic_id]': 0,
    statusIsRunning: false,
    isLoading: false,
    errorMessage: '',
    enableButton: true,
  })

  const loadOs = async (): Promise<void> => {
    try {
      const contentList = await editOrder.edit()
      setLists(contentList)
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

  useEffect(() => {
    if (formData['data[status_id]'] === 2) {
      setFormData({...formData, statusIsRunning: true})
    } else {
      setFormData({
        ...formData,
        statusIsRunning: false,
        'data[car_mecanic_id]': 0,
      })
    }
  }, [formData['data[status_id]']])

  const createFormData = (): FormData => {
    const data = new FormData()
    data.append('data[status_id]', formData['data[status_id]'])
    data.append('data[status_id]', formData['data[status_id]'])
    if (formData['data[description]']) {
      data.append('data[description]', formData['data[description]'])
    }
    if (formData['data[solution_id]'] !== 0) {
      data.append('data[solution_id]', formData['data[solution_id]'])
    }
    if (formData['data[car_mecanic_id]'] !== 0) {
      data.append('data[car_mecanic_id]', formData['data[car_mecanic_id]'])
    }

    return data
  }

  const handleSubmit = async (): Promise<void> => {
    setFormData({...formData, isLoading: true, enableButton: false})

    try {
      const data = createFormData()
      await managerOrder.manage(data)
      navigation.navigate('ShowOs', {orderIdParams: order.data.id})
    } catch (error: any) {
      const messageError: string = error.message
      setFormData({
        ...formData,
        isLoading: false,
        errorMessage: messageError,
        enableButton: true,
      })
      Alert.alert(messageError)
    }
  }

  const onChangeValueStatus = (id: number): void => {
    setFormData({...formData, 'data[status_id]': id})
  }

  const onChangeValueMecanic = (id: number): void => {
    setFormData({...formData, 'data[car_mecanic_id]': id})
  }

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
                    </Body>
                  </Left>
                </CardItem>
                <CardItem>
                  <StatusOs
                    statusId={order.data.status.id}
                    statusName={order.data.status.name}
                  />
                </CardItem>
                <Select
                  options={lists.statuses}
                  txt="Informe o novo Status"
                  onChangeValue={onChangeValueStatus}
                />
                {formData.statusIsRunning && (
                  <Select
                    options={lists.mecanics}
                    txt="Informe o Mecãnico"
                    onChangeValue={onChangeValueMecanic}
                  />
                )}
                <TextAreaInput
                  placeholder="Descrição"
                  autoCorrect={false}
                  onChangeText={text =>
                    setFormData({...formData, 'data[description]': text})
                  }
                />
                <SubmitButton
                  onPress={handleSubmit}
                  loading={formData.isLoading}
                  enabled={formData.enableButton}
                  iconName="save-outline">
                  Editar
                </SubmitButton>
              </>
            )}
          </Card>
        </Content>
      </Container>
    </>
  )
}

export default ManagerManageOS
