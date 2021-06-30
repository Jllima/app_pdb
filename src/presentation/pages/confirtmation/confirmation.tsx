import React, {useState, useContext} from 'react'
import {Text, Alert} from 'react-native'
import {Container, Logo} from './styles'
import {imgLogo} from '@pdb/presentation/assets'
import {SubmitButton, Input} from '@pdb/presentation/components'
import {RemoteConfirmation} from '@pdb/data/usecases'
import {useNavigation} from '@react-navigation/native'
import {AuthContext} from '@pdb/presentation/contexts'

type Props = {
  remoteConfirm: RemoteConfirmation
}

const Confirmation: React.FC<Props> = ({remoteConfirm}: Props) => {
  const navigation = useNavigation()
  const {updateStateAccount} = useContext(AuthContext)
  const [state, setState] = useState({
    password: '',
    passwordConfirmation: '',
    isLoading: false,
  })

  const handleConfirm = async (): Promise<void> => {
    const {password, passwordConfirmation} = state
    setState({...state, isLoading: true})
    try {
      const response = await remoteConfirm.confirm({
        data: {
          password,
          password_confirmation: passwordConfirmation,
        },
      })
      setState({...state, isLoading: false})
      updateStateAccount(response.data)
      navigation.navigate('ConfirmOrMenu')
    } catch (error) {
      setState({...state, isLoading: false})
      console.log(error.getErrors())
    }
  }

  return (
    <Container>
      <Logo source={imgLogo} resizeMode="contain" />
      <Text>Redefinir Senha</Text>
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
        loading={state.isLoading}
        iconName="save"
        onPress={handleConfirm}>
        Salvar
      </SubmitButton>
    </Container>
  )
}

export default Confirmation
