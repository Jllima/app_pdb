/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react'
import {View, Alert} from 'react-native'
import {Select, SubmitButton} from '@pdb/presentation/components'
import {RemoteCreateOs, RemoteGetProblemsAndVehicles} from '@pdb/data/usecases'
import {ProblemModel} from '@pdb/domain/models/problem-model'
import {VehicleModel} from '@pdb/domain/models/vehicle-model'

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
  const [state, setState] = useState<StateData>({
    problemOptions: [],
    vehicleOptions: [],
  })

  const [formData, setFormData] = useState({
    'data[km]': 234,
    'data[problem_id]': 1,
    'data[vehicle_id]': 1,
    'data[status_id]': 1,
    isLoading: false,
    errorMessage: '',
    enableButton: true,
  })

  const loadOptions = async (): Promise<void> => {
    try {
      const response = await remoteGetProblemsAndVehicles.get()
      const {problems, vehicles} = response
      setState({...state, problemOptions: problems, vehicleOptions: vehicles})
      console.log(response)
    } catch (error: any) {
      Alert.alert(error.message)
    }
  }

  useEffect(() => {
    loadOptions()
  }, [])

  const onChangeValue = (id: string): void => {
    console.log(id)
  }

  const handleSubmit = async (): Promise<void> => {
    // setFormData({...formData, isLoading: true, enableButton: false})
    const bodyFormData = new FormData()
    bodyFormData.append('data[km]', formData['data[km]'])
    bodyFormData.append('data[problem_id]', formData['data[problem_id]'])
    bodyFormData.append('data[vehicle_id]', formData['data[vehicle_id]'])
    bodyFormData.append('data[status_id]', formData['data[status_id]'])

    try {
      const response = await remoteCreateOs.create(bodyFormData)
      console.log(response)
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

  return (
    <View>
      <Select
        options={state.vehicleOptions}
        txt="Selecione o número do carro"
        onChangeValue={onChangeValue}
      />
      <Select
        options={state.problemOptions}
        txt="Selecione o problema"
        onChangeValue={onChangeValue}
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
