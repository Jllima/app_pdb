import React from 'react'
import {View, Button} from 'react-native'
import Styles from './styles'
// import AuthContext from '@pdb/presentation/contexts/auth'
import {Authentication} from '@pdb/domain/usecases/auth/authentication'

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
    <View style={Styles.container}>
      <Button title="Entrar" onPress={handleSignIn} />
    </View>
  )
}

export default SignIn
