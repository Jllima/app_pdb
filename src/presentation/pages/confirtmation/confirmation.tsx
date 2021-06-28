import React, {useState} from 'react'
import {Text} from 'react-native'
import {Container, Logo} from './styles'
import {imgLogo} from '@pdb/presentation/assets'
import {SubmitButton, Input} from '@pdb/presentation/components'

const Confirmation: React.FC = () => {
  const [state, setState] = useState({
    password: '',
    passwordConfirmation: '',
    isLoading: false,
  })

  return (
    <Container>
      <Logo source={imgLogo} resizeMode="contain" />
      <Text>Redefinir Senha</Text>
      <Input
        placeholder="Nova senha"
        autoCorrect={false}
        autoCapitalize="none"
        onChangeText={text => setState({...state, password: text})}
      />
      <Input
        placeholder="Confirmação da nova senha"
        autoCorrect={false}
        autoCapitalize="none"
        secureTextEntry
        onChangeText={text => setState({...state, passwordConfirmation: text})}
      />
      <SubmitButton loading={false} iconName="save">
        Salvar
      </SubmitButton>
    </Container>
  )
}

export default Confirmation
