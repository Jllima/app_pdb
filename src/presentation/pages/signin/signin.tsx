import React from 'react'
import {Container, Input, Button, ButtonText, Logo} from './styles'
// import AuthContext from '@pdb/presentation/contexts/auth'
import {Authentication} from '@pdb/domain/usecases/auth/authentication'
import {imgLogo} from '@pdb/presentation/assets'

type Props = {
  authentication: Authentication
}

const SignIn: React.FC<Props> = ({authentication}: Props) => {
  // const {signed} = useContext(AuthContext)

  const handleSignIn = async (): Promise<void> => {
    try {
      const response = await authentication.auth({
        identity: 'user_1',
        password: '123abc',
      })
      console.log(response.auth_token)
    } catch (error: any) {
      const messageError: string = error.message
      console.log(`Error Auth: ${messageError}`)
    }
  }

  return (
    <Container>
      <Logo source={imgLogo} resizeMode="contain" />
      <Input
        placeholder="Matrícula"
        autoCorrect={false}
        autoCapitalize="none"
      />
      <Input
        placeholder="Senha"
        autoCorrect={false}
        autoCapitalize="none"
        secureTextEntry
      />
      <Button onPress={handleSignIn}>
        <ButtonText>Entrar</ButtonText>
      </Button>
    </Container>
  )
}

export default SignIn
