import React, {useState, useContext} from 'react'
import {Alert, StatusBar} from 'react-native'
import {Container, Logo, ContainerResetPwd} from './styles'
import {Authentication} from '@pdb/domain/usecases/auth/authentication'
import {imgLogo} from '@pdb/presentation/assets'
import {AuthContext} from '@pdb/presentation/contexts'
import {useNavigation} from '@react-navigation/native'
import {Input, SubmitButton} from '@pdb/presentation/components'
import {Button, Text} from 'native-base'

type Props = {
  authentication: Authentication
}

const SignIn: React.FC<Props> = ({authentication}: Props) => {
  const navigation = useNavigation()
  const {saveAccount} = useContext(AuthContext)

  const [state, setState] = useState({
    username: '',
    password: '',
    isLoading: false,
    errorMessage: '',
    enableButton: true,
  })

  const handleSignIn = async (): Promise<void> => {
    const {username, password} = state
    setState({...state, isLoading: true, enableButton: false})
    try {
      const response = await authentication.auth({
        username: username,
        password: password,
      })
      await saveAccount(response.auth_token)
      navigation.navigate('ConfirmOrMenu')
    } catch (error: any) {
      const messageError: string = error.message
      setState({
        ...state,
        isLoading: false,
        errorMessage: messageError,
        enableButton: true,
      })
      Alert.alert(messageError)
    }
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const resetPwdDialog = () =>
    Alert.alert(
      'Aviso!',
      'Entre em contato com o setor de RH da sua empresa para solicitar o reset de senha.',
      [{text: 'OK'}],
      {
        cancelable: true,
      },
    )

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#FFFFFF" />
      <Logo source={imgLogo} resizeMode="contain" />
      <Input
        placeholder="Matrícula"
        autoCorrect={false}
        autoCapitalize="none"
        onChangeText={text => setState({...state, username: text})}
      />
      <Input
        placeholder="Senha"
        autoCorrect={false}
        autoCapitalize="none"
        secureTextEntry
        onChangeText={text => setState({...state, password: text})}
      />
      <SubmitButton
        onPress={handleSignIn}
        loading={state.isLoading}
        enabled={state.enableButton}
        iconName="log-in-outline">
        Entrar
      </SubmitButton>
      <ContainerResetPwd>
        <Button transparent onPress={resetPwdDialog}>
          <Text>Esqueceu a senha?</Text>
        </Button>
      </ContainerResetPwd>
    </Container>
  )
}

export default SignIn
