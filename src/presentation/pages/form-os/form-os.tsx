/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect, useContext} from 'react'
import {Alert, Platform, ScrollView} from 'react-native'
import {
  Select,
  SubmitButton,
  Input,
  HeaderStack,
  UploadPhoto,
  TextAreaInput,
} from '@pdb/presentation/components'
import {RemoteCreateOs, RemoteGetProblemsAndVehicles} from '@pdb/data/usecases'
import {ProblemModel} from '@pdb/domain/models/problem-model'
import {VehicleModel} from '@pdb/domain/models/vehicle-model'
import {Container, TextName, TextTime} from './styles'
import {AuthContext, UploadContext} from '@pdb/presentation/contexts'
import {dateCurrent} from '@pdb/services'

import {useNavigation} from '@react-navigation/native'

type Props = {
  remoteCreateOs: RemoteCreateOs
  remoteGetProblemsAndVehicles: RemoteGetProblemsAndVehicles
}

type StateData = {
  problemOptions: ProblemModel[]
  vehicleOptions: VehicleModel[]
}

const FormOS: React.FC<Props> = ({
  remoteCreateOs,
  remoteGetProblemsAndVehicles,
}: Props) => {
  const navigation = useNavigation()
  const {photoImage} = useContext(UploadContext)
  const {user} = useContext(AuthContext)

  const [state, setState] = useState<StateData>({
    problemOptions: [],
    vehicleOptions: [],
  })

  const [formData, setFormData] = useState({
    'data[km]': '',
    'data[problem_id]': '',
    'data[vehicle_id]': '',
    'data[status_id]': '1',
    'data[description]': '1',
    isLoading: false,
    errorMessage: '',
    enableButton: true,
  })

  const loadOptions = async (): Promise<void> => {
    try {
      const response = await remoteGetProblemsAndVehicles.get()
      const {problems, vehicles} = response
      setState({...state, problemOptions: problems, vehicleOptions: vehicles})
    } catch (error: any) {
      Alert.alert(error.message)
    }
  }

  const createFormData = (body: any = {}): FormData => {
    const data = new FormData()
    data.append('data[km]', formData['data[km]'])
    data.append('data[problem_id]', formData['data[problem_id]'])
    data.append('data[vehicle_id]', formData['data[vehicle_id]'])
    data.append('data[status_id]', formData['data[status_id]'])
    if (formData['data[description]']) {
      data.append('data[description]', formData['data[description]'])
    }

    if (photoImage) {
      data.append('data[image]', {
        name: photoImage.fileName,
        type: photoImage.type,
        uri:
          Platform.OS === 'ios'
            ? photoImage.uri.replace('file://', '')
            : photoImage.uri,
      })

      Object.keys(body).forEach(key => {
        data.append(key, body[key])
      })
    }

    return data
  }

  useEffect(() => {
    loadOptions()
  }, [])

  const handleSubmit = async (): Promise<void> => {
    setFormData({...formData, isLoading: true, enableButton: false})

    try {
      const response = await remoteCreateOs.create(createFormData())
      navigation.navigate('ShowOs', {orderIdParams: response.data.id})
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

  const onChangeValueVehicle = (id: string): void =>
    setFormData({...formData, 'data[vehicle_id]': id})
  const onChangeValueProblem = (id: string): void =>
    setFormData({...formData, 'data[problem_id]': id})

  return (
    <>
      <HeaderStack title="Formulário Os" />
      <Container>
        <ScrollView>
          <TextName>Motorista: {user.employee_name}</TextName>
          <TextTime>{dateCurrent}</TextTime>
          <Input
            keyboardType="numeric"
            placeholder="KM"
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={text => setFormData({...formData, 'data[km]': text})}
          />
          <Select
            options={state.vehicleOptions}
            txt="Informe o número do veículo"
            onChangeValue={onChangeValueVehicle}
          />
          <Select
            options={state.problemOptions}
            txt="Informe o problema"
            onChangeValue={onChangeValueProblem}
          />
          {user.occupation === 'manager' && (
            <TextAreaInput
              placeholder="Descrição"
              autoCorrect={false}
              onChangeText={text =>
                setFormData({...formData, 'data[description]': text})
              }
            />
          )}
          <UploadPhoto />
          <SubmitButton
            onPress={handleSubmit}
            loading={formData.isLoading}
            enabled={formData.enableButton}
            iconName="save-outline">
            Salvar
          </SubmitButton>
        </ScrollView>
      </Container>
    </>
  )
}

export default FormOS
