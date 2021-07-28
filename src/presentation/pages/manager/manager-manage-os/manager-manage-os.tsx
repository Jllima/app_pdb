/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect, useRef} from 'react'
import {
  HeaderStack,
  Spinner,
  StatusOs,
  Select,
  TextAreaInput,
  SubmitButton,
} from '@pdb/presentation/components'
import {TextAreaHandles} from '@pdb/presentation/components/text-area-input/text-area-input'
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
  const textAreaEl = useRef<TextAreaHandles>(null)

  const [formData, setFormData] = useState({
    'data[status_id]': 0,
    'data[solution_id]': 0,
    'data[description]': '',
    'data[car_mecanic_id]': 0,
    statusIsRunning: false,
    statusIsFinish: false,
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
      textAreaEl.current?.notRequiredField()
      setFormData({...formData, statusIsRunning: true})
    } else if (formData['data[status_id]'] === 4) {
      textAreaEl.current?.requiredField()
      setFormData({...formData, statusIsFinish: true})
    } else {
      textAreaEl.current?.requiredField()
      setFormData({
        ...formData,
        statusIsRunning: false,
        statusIsFinish: false,
        'data[car_mecanic_id]': 0,
        'data[solution_id]': 0,
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
    if (
      formData['data[status_id]'] === 4 &&
      formData['data[solution_id]'] === 0
    ) {
      Alert.alert('Informe a solução!')
      return
    }

    if (
      (formData['data[status_id]'] === 3 &&
        formData['data[description]'] === '') ||
      (formData['data[status_id]'] === 4 &&
        formData['data[description]'] === '')
    ) {
      Alert.alert('Campo descrição é obrigatório!')
      return
    }

    if (
      formData['data[status_id]'] === 2 &&
      formData['data[car_mecanic_id]'] === 0
    ) {
      Alert.alert('Informe o mecânico!')
      return
    }

    setFormData({...formData, isLoading: true, enableButton: false})

    try {
      const data = createFormData()
      await managerOrder.manage(data)
      navigation.navigate('ManagerShowOs', {orderIdParams: order.data.id})
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

  const onChangeValueSolution = (id: number): void => {
    setFormData({...formData, 'data[solution_id]': id})
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
                {formData.statusIsFinish && (
                  <Select
                    options={lists.solutions}
                    txt="Informe a Solução"
                    onChangeValue={onChangeValueSolution}
                  />
                )}
                <TextAreaInput
                  ref={textAreaEl}
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
                <CardItem>
                  <Left />
                </CardItem>
              </>
            )}
          </Card>
        </Content>
      </Container>
    </>
  )
}

export default ManagerManageOS
