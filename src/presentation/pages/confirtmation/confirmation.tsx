import React, {useState, useContext} from 'react'
import {Alert, StatusBar} from 'react-native'
import {Container, Logo, Title} from './styles'
import {imgLogo} from '@pdb/presentation/assets'
import {SubmitButton, Input} from '@pdb/presentation/components'
import {RemoteConfirmation} from '@pdb/data/usecases'
import {AuthContext} from '@pdb/presentation/contexts'
import {GetMessageError} from '@pdb/domain/errors'
import {ErrorsModel} from '@pdb/data/models'

type Props = {
  remoteConfirm: RemoteConfirmation
}

const Confirmation: React.FC<Props> = ({remoteConfirm}: Props) => {
  const {updateStateAccount} = useContext(AuthContext)
  const [state, setState] = useState({
    password: '',
    passwordConfirmation: '',
    isLoading: false,
    enableButton: true,
  })

  const handleConfirm = async (): Promise<void> => {
    const {password, passwordConfirmation} = state
    setState({...state, isLoading: true, enableButton: false})
    try {
      const response = await remoteConfirm.confirm({
        data: {
          password,
          password_confirmation: passwordConfirmation,
        },
      })
      setState({...state, isLoading: false})
      await updateStateAccount(response.data)
    } catch (error) {
      const errorObject = error as GetMessageError
      setState({...state, isLoading: false, enableButton: true})
      const errors: ErrorsModel[] = errorObject.getErrors() as ErrorsModel[]
      Alert.alert(errors.map(err => err.detail).join('\n'))
    }
  }

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#FFFFFF" />
      <Logo source={imgLogo} resizeMode="contain" />
      <Title>Redefinir Senha</Title>
      <Input
        placeholder="Nova senha"
        autoCorrect={false}
        autoCapitalize="none"
        secureTextEntry
        onChangeText={text => setState({...state, password: text})}
      />
      <Input
        placeholder="Confirmação da nova senha"
        autoCorrect={false}
        autoCapitalize="none"
        secureTextEntry
        onChangeText={text => setState({...state, passwordConfirmation: text})}
      />
      <SubmitButton
        onPress={handleConfirm}
        loading={state.isLoading}
        enabled={state.enableButton}
        iconName="save-outline">
        Salvar
      </SubmitButton>
    </Container>
  )
}

export default Confirmation
