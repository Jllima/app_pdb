import React, {useState} from 'react'
import {Text, ActivityIndicator} from 'react-native'
import {Container, Input, Logo, Button, ButtonText, Icon} from './styles'
import {imgLogo} from '@pdb/presentation/assets'

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
      <Button>
        {state.isLoading ? (
          <ActivityIndicator color="#FFFFFF" />
        ) : (
          <>
            <ButtonText>Salvar</ButtonText>
            <Icon name="log-in" size={20} color="#FFFFFF" />
          </>
        )}
      </Button>
    </Container>
  )
}

export default Confirmation
