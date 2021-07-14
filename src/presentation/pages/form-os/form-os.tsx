/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react'
import {View, Alert} from 'react-native'
import {Select, SubmitButton} from '@pdb/presentation/components'
import {RemoteCreateOs, RemoteGetProblemsAndVehicles} from '@pdb/data/usecases'
import {ProblemModel} from '@pdb/domain/models/problem-model'
import {VehicleModel} from '@pdb/domain/models/vehicle-model'
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

  const [state, setState] = useState<StateData>({
    problemOptions: [],
    vehicleOptions: [],
  })

  const [formData, setFormData] = useState({
    'data[km]': 234,
    'data[problem_id]': '',
    'data[vehicle_id]': '',
    'data[status_id]': '1',
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

  useEffect(() => {
    loadOptions()
  }, [])

  const handleSubmit = async (): Promise<void> => {
    // setFormData({...formData, isLoading: true, enableButton: false})
    const bodyFormData = new FormData()
    bodyFormData.append('data[km]', formData['data[km]'])
    bodyFormData.append('data[problem_id]', formData['data[problem_id]'])
    bodyFormData.append('data[vehicle_id]', formData['data[vehicle_id]'])
    bodyFormData.append('data[status_id]', formData['data[status_id]'])
    try {
      const response = await remoteCreateOs.create(bodyFormData)
      navigation.navigate('ShowOs', {osId: response.data.id})
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
    <View>
      <Select
        options={state.vehicleOptions}
        txt="Selecione o número do carro"
        onChangeValue={onChangeValueVehicle}
      />
      <Select
        options={state.problemOptions}
        txt="Selecione o problema"
        onChangeValue={onChangeValueProblem}
      />
      <SubmitButton
        onPress={handleSubmit}
        loading={formData.isLoading}
        enabled={formData.enableButton}
        iconName="log-in-outline">
        Entrar
      </SubmitButton>
    </View>
  )
}

export default FormOS
