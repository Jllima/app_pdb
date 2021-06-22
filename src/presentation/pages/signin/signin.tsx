import React, {useContext} from 'react'
import {View, Button} from 'react-native'
import Styles from './styles'
import AuthContext from '@pdb/presentation/contexts/auth'

const SignIn: React.FC = () => {
  const {signed} = useContext(AuthContext)

  console.log(signed)

  const handleSignIn = (): Object => {
    return {
      token: 'jdsjjlkjj948324809',
    }
  }

  return (
    <View style={Styles.container}>
      <Button title="Entrar" onPress={handleSignIn} />
    </View>
  )
}

export default SignIn
